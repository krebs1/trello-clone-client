'use client'

import React, {useCallback, useEffect} from 'react';
import {BoardPage} from "@/src/pages/BoardPage";
import {
  BoardModifiedDocument,
  BoardModifiedSubscription,
  BoardModifiedSubscriptionVariables, useAggregateBoardByIdQuery,
  useFindBoardByIdQuery
} from '@/src/shared/graphql/generated/schema'
import {currentBoardVar} from "@/src/shared/lib/apollo-wrapper";

const Page = ({params}: { params: { slug: string } }) => {
  const {subscribeToMore, data: {aggregateBoardById} = {}} = useAggregateBoardByIdQuery({variables: {bid: params.slug}})
  useEffect(() => {
    aggregateBoardById ? currentBoardVar(aggregateBoardById!) : currentBoardVar(null)
  }, [aggregateBoardById]);

  const subscribeToBoardModified = useCallback(
    () => subscribeToMore<BoardModifiedSubscription, BoardModifiedSubscriptionVariables>({
      document: BoardModifiedDocument,
      variables: {id: params.slug},
      // @ts-ignore
      updateQuery: (prev, {subscriptionData}) => {
        if (!subscriptionData.data) {
          return prev
        }

        return subscriptionData.data.boardModified
      }
    }),
    [params, subscribeToMore]
  )

  subscribeToBoardModified()

  return (
    // @ts-ignore
    <BoardPage subscribeToBoardModified={params.slug ? subscribeToMore : null} data={aggregateBoardById}/>
  );
};

export default Page;