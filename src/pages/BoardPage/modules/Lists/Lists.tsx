'use client'

import React, {FC, useCallback} from 'react';
import {
  FindBoardByIdQuery,
  useChangeCardOrderMutation,
  useMoveCardMutation
} from "@/src/shared/graphql/generated/schema";
import {List} from "@/src/pages/BoardPage/modules/List"
import {Box, CssBaseline} from '@mui/material';
import {CreateList} from '../CreateList';
import {DragDropContext, DropResult, ResponderProvided} from 'react-beautiful-dnd';

interface Props {
  lists: NonNullable<FindBoardByIdQuery['findBoardById']>['lists'],
  boardId: string,
}

const Lists: FC<Props> = ({lists, boardId}) => {
  const [changeOrder] = useChangeCardOrderMutation();
  const [moveCard] = useMoveCardMutation();

  const onDragEnd = useCallback(async (result: DropResult) => {
    if (!result.destination) return;

    if (result.destination.droppableId === result.source.droppableId) {
      if (result.destination.index === result.source.index) return;
      
      const listId = result.destination.droppableId.split(':')[1];
      await changeOrder({
        variables: {
          boardId: boardId,
          listId: listId,
          firstIndex: result.destination.index,
          secondIndex: result.source.index
        }
      })
      return;
    } else {
      const sourceListId = result.source.droppableId.split(':')[1];
      const sourceCardId = result.draggableId.split(':')[1];
      const destinationListId = result.destination.droppableId.split(':')[1];
      const destinationIndex = result.destination.index;

      await moveCard({
        variables:{
          boardId: boardId,
          sourceListId: sourceListId,
          sourceCardId: sourceCardId,
          destinationListId: destinationListId,
          destinationIndex: destinationIndex
        }
      })
      return;
    }
  }, [boardId, changeOrder, moveCard])

  return (
    <>
      <CssBaseline/>
      <Box
        className='tw-min-h-full tw-min-w-full tw-flex tw-flex-row tw-overflow-x-scroll tw-p-0 tw-m-0 tw-list-none tw-absolute tw-top-0 tw-right-0 tw-left-0 tw-bottom-0 tw-mt-3'
        component='ol'>
        <DragDropContext onDragEnd={onDragEnd}>
          {
            lists &&
            lists.map((list) => <List boardId={boardId} list={list} key={list._id}/>)
          }
        </DragDropContext>
        <CreateList boardId={boardId}/>
      </Box>
    </>
  );
};

export default Lists;