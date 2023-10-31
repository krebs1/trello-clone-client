'use client'

import React, {useCallback} from 'react';
import {BoardPage} from "@/src/pages/BoardPage";
import {
  BoardModifiedDocument,
  BoardModifiedSubscription,
  BoardModifiedSubscriptionVariables,
  useFindBoardByIdQuery
} from '@/src/shared/graphql/generated/schema'

const Page = ({params}: { params: { slug: string } }) => {
  const {
    subscribeToMore,
    data: {findBoardById} = {},
  } = useFindBoardByIdQuery({
    variables: {
      id: params.slug
    }
  })

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
    <BoardPage subscribeToBoardModified={params.slug ? subscribeToMore : null} data={findBoardById}/>
  );
};

export default Page;