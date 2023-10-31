import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AddLabelToCardInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** Card id */
  cardId: Scalars['String']['input'];
  /** Label id */
  labelId: Scalars['String']['input'];
  /** List id */
  listId: Scalars['String']['input'];
};

export type AddMemberToBoardInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** User id */
  userId: Scalars['String']['input'];
};

/** Board entity */
export type Board = {
  __typename?: 'Board';
  /** Board id */
  _id: Scalars['String']['output'];
  /** Board background */
  background?: Maybe<Scalars['String']['output']>;
  /** Board labels */
  labels?: Maybe<Array<Label>>;
  /** Board lists */
  lists?: Maybe<Array<List>>;
  /** Board members */
  members?: Maybe<Array<Member>>;
  /** Board name */
  name: Scalars['String']['output'];
};

/** Card entity */
export type Card = {
  __typename?: 'Card';
  /** Card id */
  _id: Scalars['String']['output'];
  /** Card name */
  description?: Maybe<Scalars['String']['output']>;
  /** Card due date */
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Card labels */
  labels?: Maybe<Array<Scalars['String']['output']>>;
  /** Card name */
  name: Scalars['String']['output'];
  /** Card start date */
  startDate?: Maybe<Scalars['DateTime']['output']>;
};

export type ChangeCardOrderInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** First index */
  firstIndex: Scalars['Float']['input'];
  /** List id */
  listId: Scalars['String']['input'];
  /** Second index */
  secondIndex: Scalars['Float']['input'];
};

/** Color entity */
export type Color = {
  __typename?: 'Color';
  /** Color id */
  _id: Scalars['String']['output'];
  /** Color color code */
  color: Scalars['String']['output'];
  /** Color name */
  name: Scalars['String']['output'];
};

export type CreateBoardInput = {
  /** Board name */
  name: Scalars['String']['input'];
  /** User id */
  userId: Scalars['String']['input'];
};

export type CreateCardInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** List id */
  listId: Scalars['String']['input'];
  /** Card name */
  name: Scalars['String']['input'];
};

export type CreateLabelInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** Color id */
  colorId: Scalars['String']['input'];
  /** Label text */
  text?: InputMaybe<Scalars['String']['input']>;
};

export type CreateListInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** List name */
  name: Scalars['String']['input'];
};

export type DeleteCardInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** Card id */
  cardId: Scalars['String']['input'];
  /** List id */
  listId: Scalars['String']['input'];
};

export type DeleteLabelFromCardInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** Card id */
  cardId: Scalars['String']['input'];
  /** Label id */
  labelId: Scalars['String']['input'];
  /** List id */
  listId: Scalars['String']['input'];
};

export type DeleteLabelInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** Label id */
  labelId: Scalars['String']['input'];
};

export type DeleteListInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** List id */
  listId: Scalars['String']['input'];
};

export type DeleteMemberFromBoardInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** Member id */
  memberId: Scalars['String']['input'];
};

export type EditLabelInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** Color id */
  colorId: Scalars['String']['input'];
  /** Label id */
  labelId: Scalars['String']['input'];
  /** Label text */
  text?: InputMaybe<Scalars['String']['input']>;
};

/** Label entity */
export type Label = {
  __typename?: 'Label';
  /** Label id */
  _id: Scalars['String']['output'];
  /** Label color id */
  colorId: Scalars['String']['output'];
  /** Label text */
  text?: Maybe<Scalars['String']['output']>;
};

/** List entity */
export type List = {
  __typename?: 'List';
  /** List id */
  _id: Scalars['String']['output'];
  /** List cards array */
  cards?: Maybe<Array<Card>>;
  /** List name */
  name: Scalars['String']['output'];
};

/** Member entity */
export type Member = {
  __typename?: 'Member';
  /** User id */
  _id: Scalars['String']['output'];
  /** Member id */
  userId: Scalars['String']['output'];
};

export type MoveCardInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** Destination index */
  destinationIndex: Scalars['Float']['input'];
  /** Destination list id */
  destinationListId: Scalars['String']['input'];
  /** Source card id */
  sourceCardId: Scalars['String']['input'];
  /** Source list id */
  sourceListId: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addLabelToCard: Board;
  addMemberToBoard: Board;
  changeCardOrder: Board;
  createBoard: Board;
  createCard: Board;
  createLabel: Board;
  createList: Board;
  deleteBoard: Board;
  deleteCard: Board;
  deleteLabel: Board;
  deleteLabelFromCard: Board;
  deleteList: Board;
  deleteMemberFromBoard: Board;
  editLabel: Board;
  moveCard: Board;
  renameBoard: Board;
  renameCard: Board;
  renameList: Board;
};


export type MutationAddLabelToCardArgs = {
  addLabelToCardInput: AddLabelToCardInput;
};


export type MutationAddMemberToBoardArgs = {
  addMemberToBoardInput: AddMemberToBoardInput;
};


export type MutationChangeCardOrderArgs = {
  changeCardOrderInput: ChangeCardOrderInput;
};


export type MutationCreateBoardArgs = {
  createBoardInput: CreateBoardInput;
};


export type MutationCreateCardArgs = {
  createCardInput: CreateCardInput;
};


export type MutationCreateLabelArgs = {
  createLabelInput: CreateLabelInput;
};


export type MutationCreateListArgs = {
  createListInput: CreateListInput;
};


export type MutationDeleteBoardArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteCardArgs = {
  deleteCardInput: DeleteCardInput;
};


export type MutationDeleteLabelArgs = {
  deleteLabelInput: DeleteLabelInput;
};


export type MutationDeleteLabelFromCardArgs = {
  deleteLabelFromCardInput: DeleteLabelFromCardInput;
};


export type MutationDeleteListArgs = {
  deleteListInput: DeleteListInput;
};


export type MutationDeleteMemberFromBoardArgs = {
  deleteMemberFromBoardInput: DeleteMemberFromBoardInput;
};


export type MutationEditLabelArgs = {
  editLabelInput: EditLabelInput;
};


export type MutationMoveCardArgs = {
  moveCardInput: MoveCardInput;
};


export type MutationRenameBoardArgs = {
  renameBoardInput: RenameBoardInput;
};


export type MutationRenameCardArgs = {
  renameCardInput: RenameCardInput;
};


export type MutationRenameListArgs = {
  renameListInput: RenameListInput;
};

export type Query = {
  __typename?: 'Query';
  findAllBoards: Array<Board>;
  findAllColors: Array<Color>;
  findBoardById: Board;
  findBoardByUserId: Array<Board>;
  findBoardsByName: Array<Board>;
  findCardById: Board;
  findColorById: Color;
};


export type QueryFindBoardByIdArgs = {
  _id: Scalars['String']['input'];
};


export type QueryFindBoardByUserIdArgs = {
  _id: Scalars['String']['input'];
};


export type QueryFindBoardsByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryFindCardByIdArgs = {
  _id: Scalars['String']['input'];
};


export type QueryFindColorByIdArgs = {
  _id: Scalars['String']['input'];
};

export type RenameBoardInput = {
  /** Board id */
  _id: Scalars['String']['input'];
  /** Board name */
  name: Scalars['String']['input'];
};

export type RenameCardInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** Card id */
  cardId: Scalars['String']['input'];
  /** List id */
  listId: Scalars['String']['input'];
  /** Card name */
  name: Scalars['String']['input'];
};

export type RenameListInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** List id */
  listId: Scalars['String']['input'];
  /** List name */
  name: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  boardModified: Board;
};


export type SubscriptionBoardModifiedArgs = {
  boardId: Scalars['String']['input'];
};

export type CreateCardMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  listId: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type CreateCardMutation = { __typename?: 'Mutation', createCard: { __typename?: 'Board', _id: string, background?: string | null, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId: string, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, name: string, startDate?: any | null, labels?: Array<string> | null }> | null }> | null, members?: Array<{ __typename?: 'Member', userId: string }> | null } };

export type CreateListMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type CreateListMutation = { __typename?: 'Mutation', createList: { __typename?: 'Board', _id: string, background?: string | null, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId: string, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, name: string, startDate?: any | null }> | null }> | null, members?: Array<{ __typename?: 'Member', userId: string }> | null } };

export type RenameListMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  listId: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type RenameListMutation = { __typename?: 'Mutation', renameList: { __typename?: 'Board', _id: string, background?: string | null, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId: string, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, name: string, startDate?: any | null, labels?: Array<string> | null }> | null }> | null, members?: Array<{ __typename?: 'Member', userId: string, _id: string }> | null } };

export type FindBoardByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindBoardByIdQuery = { __typename?: 'Query', findBoardById: { __typename?: 'Board', _id: string, background?: string | null, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId: string, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, name: string, startDate?: any | null, labels?: Array<string> | null }> | null }> | null, members?: Array<{ __typename?: 'Member', userId: string }> | null } };

export type FindCardByIdQueryVariables = Exact<{
  _id: Scalars['String']['input'];
}>;


export type FindCardByIdQuery = { __typename?: 'Query', findCardById: { __typename?: 'Board', _id: string, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId: string, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, labels?: Array<string> | null, name: string, startDate?: any | null }> | null }> | null, members?: Array<{ __typename?: 'Member', _id: string, userId: string }> | null } };

export type MoveCardMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  destinationIndex: Scalars['Float']['input'];
  destinationListId: Scalars['String']['input'];
  sourceCardId: Scalars['String']['input'];
  sourceListId: Scalars['String']['input'];
}>;


export type MoveCardMutation = { __typename?: 'Mutation', moveCard: { __typename?: 'Board', _id: string, background?: string | null, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId: string, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, labels?: Array<string> | null, name: string, startDate?: any | null }> | null }> | null, members?: Array<{ __typename?: 'Member', _id: string, userId: string }> | null } };

export type BoardModifiedSubscriptionVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type BoardModifiedSubscription = { __typename?: 'Subscription', boardModified: { __typename?: 'Board', _id: string, background?: string | null, name: string, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, labels?: Array<string> | null, name: string, startDate?: any | null }> | null }> | null, labels?: Array<{ __typename?: 'Label', _id: string, colorId: string, text?: string | null }> | null, members?: Array<{ __typename?: 'Member', _id: string, userId: string }> | null } };

export type RenameCardMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  listId: Scalars['String']['input'];
  cardId: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type RenameCardMutation = { __typename?: 'Mutation', renameCard: { __typename?: 'Board', _id: string, background?: string | null, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId: string, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, name: string, startDate?: any | null, labels?: Array<string> | null }> | null }> | null, members?: Array<{ __typename?: 'Member', userId: string, _id: string }> | null } };

export type ChangeCardOrderMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  listId: Scalars['String']['input'];
  firstIndex: Scalars['Float']['input'];
  secondIndex: Scalars['Float']['input'];
}>;


export type ChangeCardOrderMutation = { __typename?: 'Mutation', changeCardOrder: { __typename?: 'Board', _id: string, background?: string | null, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId: string, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, labels?: Array<string> | null, name: string, startDate?: any | null }> | null }> | null, members?: Array<{ __typename?: 'Member', _id: string, userId: string }> | null } };


export const CreateCardDocument = gql`
    mutation CreateCard($boardId: String!, $listId: String!, $name: String!) {
  createCard(createCardInput: {boardId: $boardId, listId: $listId, name: $name}) {
    _id
    background
    name
    labels {
      _id
      colorId
      text
    }
    lists {
      _id
      name
      cards {
        _id
        description
        dueDate
        name
        startDate
        labels
      }
    }
    members {
      userId
    }
  }
}
    `;
export type CreateCardMutationFn = Apollo.MutationFunction<CreateCardMutation, CreateCardMutationVariables>;

/**
 * __useCreateCardMutation__
 *
 * To run a mutation, you first call `useCreateCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCardMutation, { data, loading, error }] = useCreateCardMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      listId: // value for 'listId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateCardMutation(baseOptions?: Apollo.MutationHookOptions<CreateCardMutation, CreateCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCardMutation, CreateCardMutationVariables>(CreateCardDocument, options);
      }
export type CreateCardMutationHookResult = ReturnType<typeof useCreateCardMutation>;
export type CreateCardMutationResult = Apollo.MutationResult<CreateCardMutation>;
export type CreateCardMutationOptions = Apollo.BaseMutationOptions<CreateCardMutation, CreateCardMutationVariables>;
export const CreateListDocument = gql`
    mutation CreateList($boardId: String!, $name: String!) {
  createList(createListInput: {boardId: $boardId, name: $name}) {
    _id
    background
    name
    labels {
      _id
      colorId
      text
    }
    lists {
      _id
      name
      cards {
        _id
        description
        dueDate
        name
        startDate
      }
    }
    members {
      userId
    }
  }
}
    `;
export type CreateListMutationFn = Apollo.MutationFunction<CreateListMutation, CreateListMutationVariables>;

/**
 * __useCreateListMutation__
 *
 * To run a mutation, you first call `useCreateListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createListMutation, { data, loading, error }] = useCreateListMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateListMutation(baseOptions?: Apollo.MutationHookOptions<CreateListMutation, CreateListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateListMutation, CreateListMutationVariables>(CreateListDocument, options);
      }
export type CreateListMutationHookResult = ReturnType<typeof useCreateListMutation>;
export type CreateListMutationResult = Apollo.MutationResult<CreateListMutation>;
export type CreateListMutationOptions = Apollo.BaseMutationOptions<CreateListMutation, CreateListMutationVariables>;
export const RenameListDocument = gql`
    mutation RenameList($boardId: String!, $listId: String!, $name: String!) {
  renameList(renameListInput: {listId: $listId, name: $name, boardId: $boardId}) {
    _id
    background
    name
    labels {
      _id
      colorId
      text
    }
    lists {
      _id
      name
      cards {
        _id
        description
        dueDate
        name
        startDate
        labels
      }
    }
    members {
      userId
      _id
    }
  }
}
    `;
export type RenameListMutationFn = Apollo.MutationFunction<RenameListMutation, RenameListMutationVariables>;

/**
 * __useRenameListMutation__
 *
 * To run a mutation, you first call `useRenameListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRenameListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [renameListMutation, { data, loading, error }] = useRenameListMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      listId: // value for 'listId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useRenameListMutation(baseOptions?: Apollo.MutationHookOptions<RenameListMutation, RenameListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RenameListMutation, RenameListMutationVariables>(RenameListDocument, options);
      }
export type RenameListMutationHookResult = ReturnType<typeof useRenameListMutation>;
export type RenameListMutationResult = Apollo.MutationResult<RenameListMutation>;
export type RenameListMutationOptions = Apollo.BaseMutationOptions<RenameListMutation, RenameListMutationVariables>;
export const FindBoardByIdDocument = gql`
    query FindBoardById($id: String!) {
  findBoardById(_id: $id) {
    _id
    background
    name
    labels {
      _id
      colorId
      text
    }
    lists {
      _id
      name
      cards {
        _id
        description
        dueDate
        name
        startDate
        labels
      }
    }
    members {
      userId
    }
  }
}
    `;

/**
 * __useFindBoardByIdQuery__
 *
 * To run a query within a React component, call `useFindBoardByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindBoardByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindBoardByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindBoardByIdQuery(baseOptions: Apollo.QueryHookOptions<FindBoardByIdQuery, FindBoardByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindBoardByIdQuery, FindBoardByIdQueryVariables>(FindBoardByIdDocument, options);
      }
export function useFindBoardByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindBoardByIdQuery, FindBoardByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindBoardByIdQuery, FindBoardByIdQueryVariables>(FindBoardByIdDocument, options);
        }
export type FindBoardByIdQueryHookResult = ReturnType<typeof useFindBoardByIdQuery>;
export type FindBoardByIdLazyQueryHookResult = ReturnType<typeof useFindBoardByIdLazyQuery>;
export type FindBoardByIdQueryResult = Apollo.QueryResult<FindBoardByIdQuery, FindBoardByIdQueryVariables>;
export const FindCardByIdDocument = gql`
    query FindCardById($_id: String!) {
  findCardById(_id: $_id) {
    _id
    name
    labels {
      _id
      colorId
      text
    }
    lists {
      _id
      name
      cards {
        _id
        description
        dueDate
        labels
        name
        startDate
      }
    }
    members {
      _id
      userId
    }
  }
}
    `;

/**
 * __useFindCardByIdQuery__
 *
 * To run a query within a React component, call `useFindCardByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCardByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCardByIdQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useFindCardByIdQuery(baseOptions: Apollo.QueryHookOptions<FindCardByIdQuery, FindCardByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCardByIdQuery, FindCardByIdQueryVariables>(FindCardByIdDocument, options);
      }
export function useFindCardByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCardByIdQuery, FindCardByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCardByIdQuery, FindCardByIdQueryVariables>(FindCardByIdDocument, options);
        }
export type FindCardByIdQueryHookResult = ReturnType<typeof useFindCardByIdQuery>;
export type FindCardByIdLazyQueryHookResult = ReturnType<typeof useFindCardByIdLazyQuery>;
export type FindCardByIdQueryResult = Apollo.QueryResult<FindCardByIdQuery, FindCardByIdQueryVariables>;
export const MoveCardDocument = gql`
    mutation MoveCard($boardId: String!, $destinationIndex: Float!, $destinationListId: String!, $sourceCardId: String!, $sourceListId: String!) {
  moveCard(
    moveCardInput: {boardId: $boardId, destinationIndex: $destinationIndex, destinationListId: $destinationListId, sourceCardId: $sourceCardId, sourceListId: $sourceListId}
  ) {
    _id
    background
    name
    labels {
      _id
      colorId
      text
    }
    lists {
      _id
      name
      cards {
        _id
        description
        dueDate
        labels
        name
        startDate
      }
    }
    members {
      _id
      userId
    }
  }
}
    `;
export type MoveCardMutationFn = Apollo.MutationFunction<MoveCardMutation, MoveCardMutationVariables>;

/**
 * __useMoveCardMutation__
 *
 * To run a mutation, you first call `useMoveCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveCardMutation, { data, loading, error }] = useMoveCardMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      destinationIndex: // value for 'destinationIndex'
 *      destinationListId: // value for 'destinationListId'
 *      sourceCardId: // value for 'sourceCardId'
 *      sourceListId: // value for 'sourceListId'
 *   },
 * });
 */
export function useMoveCardMutation(baseOptions?: Apollo.MutationHookOptions<MoveCardMutation, MoveCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MoveCardMutation, MoveCardMutationVariables>(MoveCardDocument, options);
      }
export type MoveCardMutationHookResult = ReturnType<typeof useMoveCardMutation>;
export type MoveCardMutationResult = Apollo.MutationResult<MoveCardMutation>;
export type MoveCardMutationOptions = Apollo.BaseMutationOptions<MoveCardMutation, MoveCardMutationVariables>;
export const BoardModifiedDocument = gql`
    subscription BoardModified($id: String!) {
  boardModified(boardId: $id) {
    _id
    background
    name
    lists {
      _id
      name
      cards {
        _id
        description
        dueDate
        labels
        name
        startDate
      }
    }
    labels {
      _id
      colorId
      text
    }
    members {
      _id
      userId
    }
  }
}
    `;

/**
 * __useBoardModifiedSubscription__
 *
 * To run a query within a React component, call `useBoardModifiedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBoardModifiedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardModifiedSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBoardModifiedSubscription(baseOptions: Apollo.SubscriptionHookOptions<BoardModifiedSubscription, BoardModifiedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<BoardModifiedSubscription, BoardModifiedSubscriptionVariables>(BoardModifiedDocument, options);
      }
export type BoardModifiedSubscriptionHookResult = ReturnType<typeof useBoardModifiedSubscription>;
export type BoardModifiedSubscriptionResult = Apollo.SubscriptionResult<BoardModifiedSubscription>;
export const RenameCardDocument = gql`
    mutation RenameCard($boardId: String!, $listId: String!, $cardId: String!, $name: String!) {
  renameCard(
    renameCardInput: {boardId: $boardId, cardId: $cardId, listId: $listId, name: $name}
  ) {
    _id
    background
    name
    labels {
      _id
      colorId
      text
    }
    lists {
      _id
      name
      cards {
        _id
        description
        dueDate
        name
        startDate
        labels
      }
    }
    members {
      userId
      _id
    }
  }
}
    `;
export type RenameCardMutationFn = Apollo.MutationFunction<RenameCardMutation, RenameCardMutationVariables>;

/**
 * __useRenameCardMutation__
 *
 * To run a mutation, you first call `useRenameCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRenameCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [renameCardMutation, { data, loading, error }] = useRenameCardMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      listId: // value for 'listId'
 *      cardId: // value for 'cardId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useRenameCardMutation(baseOptions?: Apollo.MutationHookOptions<RenameCardMutation, RenameCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RenameCardMutation, RenameCardMutationVariables>(RenameCardDocument, options);
      }
export type RenameCardMutationHookResult = ReturnType<typeof useRenameCardMutation>;
export type RenameCardMutationResult = Apollo.MutationResult<RenameCardMutation>;
export type RenameCardMutationOptions = Apollo.BaseMutationOptions<RenameCardMutation, RenameCardMutationVariables>;
export const ChangeCardOrderDocument = gql`
    mutation ChangeCardOrder($boardId: String!, $listId: String!, $firstIndex: Float!, $secondIndex: Float!) {
  changeCardOrder(
    changeCardOrderInput: {boardId: $boardId, firstIndex: $firstIndex, listId: $listId, secondIndex: $secondIndex}
  ) {
    _id
    background
    name
    labels {
      _id
      colorId
      text
    }
    lists {
      _id
      name
      cards {
        _id
        description
        dueDate
        labels
        name
        startDate
      }
    }
    members {
      _id
      userId
    }
  }
}
    `;
export type ChangeCardOrderMutationFn = Apollo.MutationFunction<ChangeCardOrderMutation, ChangeCardOrderMutationVariables>;

/**
 * __useChangeCardOrderMutation__
 *
 * To run a mutation, you first call `useChangeCardOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeCardOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeCardOrderMutation, { data, loading, error }] = useChangeCardOrderMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      listId: // value for 'listId'
 *      firstIndex: // value for 'firstIndex'
 *      secondIndex: // value for 'secondIndex'
 *   },
 * });
 */
export function useChangeCardOrderMutation(baseOptions?: Apollo.MutationHookOptions<ChangeCardOrderMutation, ChangeCardOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeCardOrderMutation, ChangeCardOrderMutationVariables>(ChangeCardOrderDocument, options);
      }
export type ChangeCardOrderMutationHookResult = ReturnType<typeof useChangeCardOrderMutation>;
export type ChangeCardOrderMutationResult = Apollo.MutationResult<ChangeCardOrderMutation>;
export type ChangeCardOrderMutationOptions = Apollo.BaseMutationOptions<ChangeCardOrderMutation, ChangeCardOrderMutationVariables>;