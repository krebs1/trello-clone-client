'use client'

import {Box, CircularProgress} from '@mui/material';
import React, {FC, useCallback, useEffect} from 'react';
import {Toolbar} from "@/src/pages/BoardPage/modules/Toolbar";
import {Lists} from '@/src/pages/BoardPage/modules/Lists';
import {
  BoardModifiedDocument,
  BoardModifiedSubscription,
  BoardModifiedSubscriptionVariables,
  useAggregateBoardByIdQuery
} from "@/src/shared/graphql/generated/schema";
import {currentBoardVar} from "@/src/shared/lib/apollo-wrapper";

interface Props {
  boardId: string
}

const BoardPage: FC<Props> = ({boardId}) => {
  const {
    subscribeToMore,
    data: {aggregateBoardById} = {},
    loading,
    error
  } = useAggregateBoardByIdQuery({variables: {bid: boardId}})

  useEffect(() => {
    aggregateBoardById ? currentBoardVar(aggregateBoardById!) : currentBoardVar(null)
  }, [aggregateBoardById]);

  const subscribeToBoardModified = useCallback(
    () => subscribeToMore<BoardModifiedSubscription, BoardModifiedSubscriptionVariables>({
      document: BoardModifiedDocument,
      variables: {id: boardId},
      // @ts-ignore
      updateQuery: (prev, {subscriptionData}) => {
        if (!subscriptionData.data) {
          return prev
        }

        return subscriptionData.data.boardModified
      }
    }),
    [boardId, subscribeToMore]
  )

  useEffect(() => {
    subscribeToBoardModified()
  }, []);

  return (
    <Box
      className='tw-min-h-full tw-min-w-full tw-bg-cover tw-flex tw-flex-col'
      sx={{
        //TODO : add .env
        backgroundImage: (aggregateBoardById) ? `url(http://localhost:7000/${aggregateBoardById.backgroundInfo.imagePath})` : 'none',
      }}
    >
      {
        loading &&
          <Box className='tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center'>
              <CircularProgress/>
          </Box>
      }
      {
        aggregateBoardById &&
          <>
              <Toolbar boardData={aggregateBoardById}/>
              <Box className='tw-h-4'/>
              <Lists lists={aggregateBoardById.lists} boardId={boardId}/>
          </>
      }
    </Box>
  );
};

export default BoardPage;