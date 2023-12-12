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

/** Background entity */
export type Background = {
  __typename?: 'Background';
  /** Background id */
  _id: Scalars['String']['output'];
  /** Image path */
  imagePath: Scalars['String']['output'];
  /** Preview path */
  previewPath: Scalars['String']['output'];
};

/** Board entity */
export type Board = {
  __typename?: 'Board';
  /** Board id */
  _id: Scalars['String']['output'];
  /** Board background id */
  background: Scalars['String']['output'];
  /** Board background info */
  backgroundInfo: Background;
  /** Board default role */
  defaultRole: Scalars['String']['output'];
  /** Board invite link */
  inviteLink?: Maybe<Scalars['String']['output']>;
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

export type ChangeCardDateInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** Card id */
  cardId: Scalars['String']['input'];
  /** Due date */
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** List id */
  listId: Scalars['String']['input'];
  /** Start date */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ChangeCardDescriptionInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** Card id */
  cardId: Scalars['String']['input'];
  /** Card description */
  description: Scalars['String']['input'];
  /** List id */
  listId: Scalars['String']['input'];
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

export type ChangeDefaultRoleInput = {
  /** Board id */
  boardId: Scalars['String']['input'];
  /** Role id */
  roleId: Scalars['String']['input'];
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
  /** Background id */
  backgroundId: Scalars['String']['input'];
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
  colorId?: Maybe<Scalars['String']['output']>;
  /** Label color info */
  colorInfo?: Maybe<Color>;
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
  /** Role id */
  role: Scalars['String']['output'];
  /** Member id */
  userId: Scalars['String']['output'];
  /** User info */
  userInfo: User;
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
  changeCardDate: Board;
  changeCardDescription: Board;
  changeCardOrder: Board;
  changeDefaultRole: Board;
  createBoard: Board;
  createCard: Board;
  createInviteLink: Board;
  createLabel: Board;
  createList: Board;
  deleteBoard: Board;
  deleteCard: Board;
  deleteInviteLink: Board;
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


export type MutationChangeCardDateArgs = {
  changeCardDateInput: ChangeCardDateInput;
};


export type MutationChangeCardDescriptionArgs = {
  changeCardDescriptionInput: ChangeCardDescriptionInput;
};


export type MutationChangeCardOrderArgs = {
  changeCardOrderInput: ChangeCardOrderInput;
};


export type MutationChangeDefaultRoleArgs = {
  changeDefaultRoleInput: ChangeDefaultRoleInput;
};


export type MutationCreateBoardArgs = {
  createBoardInput: CreateBoardInput;
};


export type MutationCreateCardArgs = {
  createCardInput: CreateCardInput;
};


export type MutationCreateInviteLinkArgs = {
  _id: Scalars['String']['input'];
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


export type MutationDeleteInviteLinkArgs = {
  _id: Scalars['String']['input'];
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
  boardId: Scalars['String']['input'];
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
  aggregateBoardById: Board;
  aggregateBoardByUserId: Array<Board>;
  findAllBackgrounds: Array<Background>;
  findAllBoards: Array<Board>;
  findAllColors: Array<Color>;
  findAllRoles: Array<Role>;
  findBackgroundById: Array<Background>;
  findBoardById: Board;
  findBoardByUserId: Array<Board>;
  findBoardsByName: Array<Board>;
  findCardById: Board;
  findColorById: Color;
  findRoleById: Role;
};


export type QueryAggregateBoardByIdArgs = {
  _id: Scalars['String']['input'];
};


export type QueryAggregateBoardByUserIdArgs = {
  _id: Scalars['String']['input'];
};


export type QueryFindBackgroundByIdArgs = {
  _id: Scalars['String']['input'];
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


export type QueryFindRoleByIdArgs = {
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

/** Role entity */
export type Role = {
  __typename?: 'Role';
  /** Role id */
  _id: Scalars['String']['output'];
  /** Role can be name */
  canBeName: Scalars['String']['output'];
  /** Role description */
  description: Scalars['String']['output'];
  /** Role name */
  name: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  boardModified: Board;
};


export type SubscriptionBoardModifiedArgs = {
  boardId: Scalars['String']['input'];
};

/** User entity */
export type User = {
  __typename?: 'User';
  /** User id */
  _id: Scalars['String']['output'];
  /** User email */
  email: Scalars['String']['output'];
  /** User emailVerified */
  emailVerified?: Maybe<Scalars['DateTime']['output']>;
  /** User image */
  image: Scalars['String']['output'];
  /** User name */
  name: Scalars['String']['output'];
};

export type AddLabelToCardMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  listId: Scalars['String']['input'];
  cardId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
}>;


export type AddLabelToCardMutation = { __typename?: 'Mutation', addLabelToCard: { __typename?: 'Board', _id: string, background: string, name: string } };

export type AggregateBoardByIdQueryVariables = Exact<{
  bid: Scalars['String']['input'];
}>;


export type AggregateBoardByIdQuery = { __typename?: 'Query', aggregateBoardById: { __typename?: 'Board', _id: string, background: string, name: string, inviteLink?: string | null, defaultRole: string, backgroundInfo: { __typename?: 'Background', _id: string, imagePath: string, previewPath: string }, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null, colorInfo?: { __typename?: 'Color', _id: string, color: string, name: string } | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, labels?: Array<string> | null, name: string, startDate?: any | null }> | null }> | null, members?: Array<{ __typename?: 'Member', _id: string, userId: string, role: string, userInfo: { __typename?: 'User', _id: string, email: string, emailVerified?: any | null, image: string, name: string } }> | null } };

export type AggregateBoardByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type AggregateBoardByUserIdQuery = { __typename?: 'Query', aggregateBoardByUserId: Array<{ __typename?: 'Board', _id: string, background: string, name: string, backgroundInfo: { __typename?: 'Background', _id: string, imagePath: string, previewPath: string } }> };

export type ChangeCardDateMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  listId: Scalars['String']['input'];
  cardId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type ChangeCardDateMutation = { __typename?: 'Mutation', changeCardDate: { __typename?: 'Board', _id: string, background: string, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, labels?: Array<string> | null, name: string, startDate?: any | null }> | null }> | null, members?: Array<{ __typename?: 'Member', _id: string, userId: string }> | null } };

export type ChangeCardDescriptionMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  listId: Scalars['String']['input'];
  cardId: Scalars['String']['input'];
  description: Scalars['String']['input'];
}>;


export type ChangeCardDescriptionMutation = { __typename?: 'Mutation', changeCardDescription: { __typename?: 'Board', _id: string, background: string, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, labels?: Array<string> | null, name: string, startDate?: any | null }> | null }> | null, members?: Array<{ __typename?: 'Member', _id: string, userId: string }> | null } };

export type ChangeDefaultRoleMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  roleId: Scalars['String']['input'];
}>;


export type ChangeDefaultRoleMutation = { __typename?: 'Mutation', changeDefaultRole: { __typename?: 'Board', _id: string, background: string, defaultRole: string, inviteLink?: string | null, name: string } };

export type CreateBoardMutationVariables = Exact<{
  boardName: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  backgroundId: Scalars['String']['input'];
}>;


export type CreateBoardMutation = { __typename?: 'Mutation', createBoard: { __typename?: 'Board', _id: string, background: string, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, name: string, startDate?: any | null, labels?: Array<string> | null }> | null }> | null, members?: Array<{ __typename?: 'Member', userId: string }> | null } };

export type CreateCardMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  listId: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type CreateCardMutation = { __typename?: 'Mutation', createCard: { __typename?: 'Board', _id: string, background: string, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, name: string, startDate?: any | null, labels?: Array<string> | null }> | null }> | null, members?: Array<{ __typename?: 'Member', userId: string }> | null } };

export type CreateInviteLinkMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
}>;


export type CreateInviteLinkMutation = { __typename?: 'Mutation', createInviteLink: { __typename?: 'Board', _id: string, background: string, defaultRole: string, inviteLink?: string | null, name: string } };

export type CreateLabelMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  colorId: Scalars['String']['input'];
  text: Scalars['String']['input'];
}>;


export type CreateLabelMutation = { __typename?: 'Mutation', createLabel: { __typename?: 'Board', _id: string, background: string, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, name: string, startDate?: any | null, labels?: Array<string> | null }> | null }> | null, members?: Array<{ __typename?: 'Member', userId: string }> | null } };

export type CreateListMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type CreateListMutation = { __typename?: 'Mutation', createList: { __typename?: 'Board', _id: string, background: string, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, name: string, startDate?: any | null }> | null }> | null, members?: Array<{ __typename?: 'Member', userId: string }> | null } };

export type DeleteInviteLinkMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
}>;


export type DeleteInviteLinkMutation = { __typename?: 'Mutation', deleteInviteLink: { __typename?: 'Board', _id: string, background: string, defaultRole: string, inviteLink?: string | null, name: string } };

export type DeleteLabelMutationVariables = Exact<{
  bid: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
}>;


export type DeleteLabelMutation = { __typename?: 'Mutation', deleteLabel: { __typename?: 'Board', _id: string, background: string, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, name: string, startDate?: any | null, labels?: Array<string> | null }> | null }> | null, members?: Array<{ __typename?: 'Member', userId: string }> | null } };

export type FindAllBackgroundsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllBackgroundsQuery = { __typename?: 'Query', findAllBackgrounds: Array<{ __typename?: 'Background', _id: string, imagePath: string, previewPath: string }> };

export type FindAllRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllRolesQuery = { __typename?: 'Query', findAllRoles: Array<{ __typename?: 'Role', _id: string, canBeName: string, description: string, name: string }> };

export type FindBackgroundByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindBackgroundByIdQuery = { __typename?: 'Query', findBackgroundById: Array<{ __typename?: 'Background', _id: string, imagePath: string, previewPath: string }> };

export type FindBoardByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindBoardByIdQuery = { __typename?: 'Query', findBoardById: { __typename?: 'Board', _id: string, background: string, name: string, inviteLink?: string | null, defaultRole: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null, colorInfo?: { __typename?: 'Color', _id: string, name: string, color: string } | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, name: string, startDate?: any | null, labels?: Array<string> | null }> | null }> | null, members?: Array<{ __typename?: 'Member', _id: string, userId: string, role: string, userInfo: { __typename?: 'User', _id: string, email: string, emailVerified?: any | null, image: string, name: string } }> | null } };

export type FindBoardByUserIdQueryVariables = Exact<{
  uid: Scalars['String']['input'];
}>;


export type FindBoardByUserIdQuery = { __typename?: 'Query', findBoardByUserId: Array<{ __typename?: 'Board', _id: string, background: string, name: string, inviteLink?: string | null, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, labels?: Array<string> | null, name: string, startDate?: any | null }> | null }> | null, members?: Array<{ __typename?: 'Member', _id: string, userId: string }> | null }> };

export type FindCardByIdQueryVariables = Exact<{
  _id: Scalars['String']['input'];
}>;


export type FindCardByIdQuery = { __typename?: 'Query', findCardById: { __typename?: 'Board', _id: string, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, labels?: Array<string> | null, name: string, startDate?: any | null }> | null }> | null, members?: Array<{ __typename?: 'Member', _id: string, userId: string }> | null } };

export type FindAllColorsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllColorsQuery = { __typename?: 'Query', findAllColors: Array<{ __typename?: 'Color', color: string, name: string, _id: string }> };

export type MoveCardMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  destinationIndex: Scalars['Float']['input'];
  destinationListId: Scalars['String']['input'];
  sourceCardId: Scalars['String']['input'];
  sourceListId: Scalars['String']['input'];
}>;


export type MoveCardMutation = { __typename?: 'Mutation', moveCard: { __typename?: 'Board', _id: string, background: string, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, labels?: Array<string> | null, name: string, startDate?: any | null }> | null }> | null, members?: Array<{ __typename?: 'Member', _id: string, userId: string }> | null } };

export type BoardModifiedSubscriptionVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type BoardModifiedSubscription = { __typename?: 'Subscription', boardModified: { __typename?: 'Board', _id: string, background: string, name: string, inviteLink?: string | null, defaultRole: string, backgroundInfo: { __typename?: 'Background', _id: string, imagePath: string, previewPath: string }, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, labels?: Array<string> | null, name: string, startDate?: any | null }> | null }> | null, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null, colorInfo?: { __typename?: 'Color', _id: string, name: string, color: string } | null }> | null, members?: Array<{ __typename?: 'Member', _id: string, userId: string, role: string, userInfo: { __typename?: 'User', _id: string, email: string, emailVerified?: any | null, image: string, name: string } }> | null } };

export type DeleteLabelFromCardMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  listId: Scalars['String']['input'];
  cardId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
}>;


export type DeleteLabelFromCardMutation = { __typename?: 'Mutation', deleteLabelFromCard: { __typename?: 'Board', _id: string, background: string, name: string } };

export type RenameBoardMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  boardName: Scalars['String']['input'];
}>;


export type RenameBoardMutation = { __typename?: 'Mutation', renameBoard: { __typename?: 'Board', _id: string, background: string, name: string } };

export type RenameCardMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  listId: Scalars['String']['input'];
  cardId: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type RenameCardMutation = { __typename?: 'Mutation', renameCard: { __typename?: 'Board', _id: string, background: string, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, name: string, startDate?: any | null, labels?: Array<string> | null }> | null }> | null, members?: Array<{ __typename?: 'Member', userId: string, _id: string }> | null } };

export type RenameListMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  listId: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type RenameListMutation = { __typename?: 'Mutation', renameList: { __typename?: 'Board', _id: string, background: string, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, name: string, startDate?: any | null, labels?: Array<string> | null }> | null }> | null, members?: Array<{ __typename?: 'Member', userId: string, _id: string }> | null } };

export type ChangeCardOrderMutationVariables = Exact<{
  boardId: Scalars['String']['input'];
  listId: Scalars['String']['input'];
  firstIndex: Scalars['Float']['input'];
  secondIndex: Scalars['Float']['input'];
}>;


export type ChangeCardOrderMutation = { __typename?: 'Mutation', changeCardOrder: { __typename?: 'Board', _id: string, background: string, name: string, labels?: Array<{ __typename?: 'Label', _id: string, colorId?: string | null, text?: string | null }> | null, lists?: Array<{ __typename?: 'List', _id: string, name: string, cards?: Array<{ __typename?: 'Card', _id: string, description?: string | null, dueDate?: any | null, labels?: Array<string> | null, name: string, startDate?: any | null }> | null }> | null, members?: Array<{ __typename?: 'Member', _id: string, userId: string }> | null } };


export const AddLabelToCardDocument = gql`
    mutation AddLabelToCard($boardId: String!, $listId: String!, $cardId: String!, $labelId: String!) {
  addLabelToCard(
    addLabelToCardInput: {boardId: $boardId, cardId: $cardId, labelId: $labelId, listId: $listId}
  ) {
    _id
    background
    name
  }
}
    `;
export type AddLabelToCardMutationFn = Apollo.MutationFunction<AddLabelToCardMutation, AddLabelToCardMutationVariables>;

/**
 * __useAddLabelToCardMutation__
 *
 * To run a mutation, you first call `useAddLabelToCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLabelToCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLabelToCardMutation, { data, loading, error }] = useAddLabelToCardMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      listId: // value for 'listId'
 *      cardId: // value for 'cardId'
 *      labelId: // value for 'labelId'
 *   },
 * });
 */
export function useAddLabelToCardMutation(baseOptions?: Apollo.MutationHookOptions<AddLabelToCardMutation, AddLabelToCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddLabelToCardMutation, AddLabelToCardMutationVariables>(AddLabelToCardDocument, options);
      }
export type AddLabelToCardMutationHookResult = ReturnType<typeof useAddLabelToCardMutation>;
export type AddLabelToCardMutationResult = Apollo.MutationResult<AddLabelToCardMutation>;
export type AddLabelToCardMutationOptions = Apollo.BaseMutationOptions<AddLabelToCardMutation, AddLabelToCardMutationVariables>;
export const AggregateBoardByIdDocument = gql`
    query AggregateBoardById($bid: String!) {
  aggregateBoardById(_id: $bid) {
    _id
    background
    backgroundInfo {
      _id
      imagePath
      previewPath
    }
    name
    labels {
      _id
      colorId
      text
      colorInfo {
        _id
        color
        name
      }
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
      role
      userInfo {
        _id
        email
        emailVerified
        image
        name
      }
    }
    inviteLink
    defaultRole
  }
}
    `;

/**
 * __useAggregateBoardByIdQuery__
 *
 * To run a query within a React component, call `useAggregateBoardByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAggregateBoardByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAggregateBoardByIdQuery({
 *   variables: {
 *      bid: // value for 'bid'
 *   },
 * });
 */
export function useAggregateBoardByIdQuery(baseOptions: Apollo.QueryHookOptions<AggregateBoardByIdQuery, AggregateBoardByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AggregateBoardByIdQuery, AggregateBoardByIdQueryVariables>(AggregateBoardByIdDocument, options);
      }
export function useAggregateBoardByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AggregateBoardByIdQuery, AggregateBoardByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AggregateBoardByIdQuery, AggregateBoardByIdQueryVariables>(AggregateBoardByIdDocument, options);
        }
export type AggregateBoardByIdQueryHookResult = ReturnType<typeof useAggregateBoardByIdQuery>;
export type AggregateBoardByIdLazyQueryHookResult = ReturnType<typeof useAggregateBoardByIdLazyQuery>;
export type AggregateBoardByIdQueryResult = Apollo.QueryResult<AggregateBoardByIdQuery, AggregateBoardByIdQueryVariables>;
export const AggregateBoardByUserIdDocument = gql`
    query AggregateBoardByUserId($userId: String!) {
  aggregateBoardByUserId(_id: $userId) {
    _id
    background
    name
    backgroundInfo {
      _id
      imagePath
      previewPath
    }
  }
}
    `;

/**
 * __useAggregateBoardByUserIdQuery__
 *
 * To run a query within a React component, call `useAggregateBoardByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAggregateBoardByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAggregateBoardByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAggregateBoardByUserIdQuery(baseOptions: Apollo.QueryHookOptions<AggregateBoardByUserIdQuery, AggregateBoardByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AggregateBoardByUserIdQuery, AggregateBoardByUserIdQueryVariables>(AggregateBoardByUserIdDocument, options);
      }
export function useAggregateBoardByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AggregateBoardByUserIdQuery, AggregateBoardByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AggregateBoardByUserIdQuery, AggregateBoardByUserIdQueryVariables>(AggregateBoardByUserIdDocument, options);
        }
export type AggregateBoardByUserIdQueryHookResult = ReturnType<typeof useAggregateBoardByUserIdQuery>;
export type AggregateBoardByUserIdLazyQueryHookResult = ReturnType<typeof useAggregateBoardByUserIdLazyQuery>;
export type AggregateBoardByUserIdQueryResult = Apollo.QueryResult<AggregateBoardByUserIdQuery, AggregateBoardByUserIdQueryVariables>;
export const ChangeCardDateDocument = gql`
    mutation ChangeCardDate($boardId: String!, $listId: String!, $cardId: String!, $startDate: DateTime, $dueDate: DateTime) {
  changeCardDate(
    changeCardDateInput: {boardId: $boardId, cardId: $cardId, dueDate: $dueDate, listId: $listId, startDate: $startDate}
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
export type ChangeCardDateMutationFn = Apollo.MutationFunction<ChangeCardDateMutation, ChangeCardDateMutationVariables>;

/**
 * __useChangeCardDateMutation__
 *
 * To run a mutation, you first call `useChangeCardDateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeCardDateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeCardDateMutation, { data, loading, error }] = useChangeCardDateMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      listId: // value for 'listId'
 *      cardId: // value for 'cardId'
 *      startDate: // value for 'startDate'
 *      dueDate: // value for 'dueDate'
 *   },
 * });
 */
export function useChangeCardDateMutation(baseOptions?: Apollo.MutationHookOptions<ChangeCardDateMutation, ChangeCardDateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeCardDateMutation, ChangeCardDateMutationVariables>(ChangeCardDateDocument, options);
      }
export type ChangeCardDateMutationHookResult = ReturnType<typeof useChangeCardDateMutation>;
export type ChangeCardDateMutationResult = Apollo.MutationResult<ChangeCardDateMutation>;
export type ChangeCardDateMutationOptions = Apollo.BaseMutationOptions<ChangeCardDateMutation, ChangeCardDateMutationVariables>;
export const ChangeCardDescriptionDocument = gql`
    mutation ChangeCardDescription($boardId: String!, $listId: String!, $cardId: String!, $description: String!) {
  changeCardDescription(
    changeCardDescriptionInput: {boardId: $boardId, listId: $listId, cardId: $cardId, description: $description}
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
export type ChangeCardDescriptionMutationFn = Apollo.MutationFunction<ChangeCardDescriptionMutation, ChangeCardDescriptionMutationVariables>;

/**
 * __useChangeCardDescriptionMutation__
 *
 * To run a mutation, you first call `useChangeCardDescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeCardDescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeCardDescriptionMutation, { data, loading, error }] = useChangeCardDescriptionMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      listId: // value for 'listId'
 *      cardId: // value for 'cardId'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useChangeCardDescriptionMutation(baseOptions?: Apollo.MutationHookOptions<ChangeCardDescriptionMutation, ChangeCardDescriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeCardDescriptionMutation, ChangeCardDescriptionMutationVariables>(ChangeCardDescriptionDocument, options);
      }
export type ChangeCardDescriptionMutationHookResult = ReturnType<typeof useChangeCardDescriptionMutation>;
export type ChangeCardDescriptionMutationResult = Apollo.MutationResult<ChangeCardDescriptionMutation>;
export type ChangeCardDescriptionMutationOptions = Apollo.BaseMutationOptions<ChangeCardDescriptionMutation, ChangeCardDescriptionMutationVariables>;
export const ChangeDefaultRoleDocument = gql`
    mutation ChangeDefaultRole($boardId: String!, $roleId: String!) {
  changeDefaultRole(changeDefaultRoleInput: {boardId: $boardId, roleId: $roleId}) {
    _id
    background
    defaultRole
    inviteLink
    name
  }
}
    `;
export type ChangeDefaultRoleMutationFn = Apollo.MutationFunction<ChangeDefaultRoleMutation, ChangeDefaultRoleMutationVariables>;

/**
 * __useChangeDefaultRoleMutation__
 *
 * To run a mutation, you first call `useChangeDefaultRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeDefaultRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeDefaultRoleMutation, { data, loading, error }] = useChangeDefaultRoleMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      roleId: // value for 'roleId'
 *   },
 * });
 */
export function useChangeDefaultRoleMutation(baseOptions?: Apollo.MutationHookOptions<ChangeDefaultRoleMutation, ChangeDefaultRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeDefaultRoleMutation, ChangeDefaultRoleMutationVariables>(ChangeDefaultRoleDocument, options);
      }
export type ChangeDefaultRoleMutationHookResult = ReturnType<typeof useChangeDefaultRoleMutation>;
export type ChangeDefaultRoleMutationResult = Apollo.MutationResult<ChangeDefaultRoleMutation>;
export type ChangeDefaultRoleMutationOptions = Apollo.BaseMutationOptions<ChangeDefaultRoleMutation, ChangeDefaultRoleMutationVariables>;
export const CreateBoardDocument = gql`
    mutation CreateBoard($boardName: String!, $userId: String!, $backgroundId: String!) {
  createBoard(
    createBoardInput: {name: $boardName, userId: $userId, backgroundId: $backgroundId}
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
    }
  }
}
    `;
export type CreateBoardMutationFn = Apollo.MutationFunction<CreateBoardMutation, CreateBoardMutationVariables>;

/**
 * __useCreateBoardMutation__
 *
 * To run a mutation, you first call `useCreateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoardMutation, { data, loading, error }] = useCreateBoardMutation({
 *   variables: {
 *      boardName: // value for 'boardName'
 *      userId: // value for 'userId'
 *      backgroundId: // value for 'backgroundId'
 *   },
 * });
 */
export function useCreateBoardMutation(baseOptions?: Apollo.MutationHookOptions<CreateBoardMutation, CreateBoardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBoardMutation, CreateBoardMutationVariables>(CreateBoardDocument, options);
      }
export type CreateBoardMutationHookResult = ReturnType<typeof useCreateBoardMutation>;
export type CreateBoardMutationResult = Apollo.MutationResult<CreateBoardMutation>;
export type CreateBoardMutationOptions = Apollo.BaseMutationOptions<CreateBoardMutation, CreateBoardMutationVariables>;
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
export const CreateInviteLinkDocument = gql`
    mutation CreateInviteLink($boardId: String!) {
  createInviteLink(_id: $boardId) {
    _id
    background
    defaultRole
    inviteLink
    name
  }
}
    `;
export type CreateInviteLinkMutationFn = Apollo.MutationFunction<CreateInviteLinkMutation, CreateInviteLinkMutationVariables>;

/**
 * __useCreateInviteLinkMutation__
 *
 * To run a mutation, you first call `useCreateInviteLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInviteLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInviteLinkMutation, { data, loading, error }] = useCreateInviteLinkMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useCreateInviteLinkMutation(baseOptions?: Apollo.MutationHookOptions<CreateInviteLinkMutation, CreateInviteLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInviteLinkMutation, CreateInviteLinkMutationVariables>(CreateInviteLinkDocument, options);
      }
export type CreateInviteLinkMutationHookResult = ReturnType<typeof useCreateInviteLinkMutation>;
export type CreateInviteLinkMutationResult = Apollo.MutationResult<CreateInviteLinkMutation>;
export type CreateInviteLinkMutationOptions = Apollo.BaseMutationOptions<CreateInviteLinkMutation, CreateInviteLinkMutationVariables>;
export const CreateLabelDocument = gql`
    mutation CreateLabel($boardId: String!, $colorId: String!, $text: String!) {
  createLabel(
    createLabelInput: {boardId: $boardId, colorId: $colorId, text: $text}
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
    }
  }
}
    `;
export type CreateLabelMutationFn = Apollo.MutationFunction<CreateLabelMutation, CreateLabelMutationVariables>;

/**
 * __useCreateLabelMutation__
 *
 * To run a mutation, you first call `useCreateLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLabelMutation, { data, loading, error }] = useCreateLabelMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      colorId: // value for 'colorId'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useCreateLabelMutation(baseOptions?: Apollo.MutationHookOptions<CreateLabelMutation, CreateLabelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLabelMutation, CreateLabelMutationVariables>(CreateLabelDocument, options);
      }
export type CreateLabelMutationHookResult = ReturnType<typeof useCreateLabelMutation>;
export type CreateLabelMutationResult = Apollo.MutationResult<CreateLabelMutation>;
export type CreateLabelMutationOptions = Apollo.BaseMutationOptions<CreateLabelMutation, CreateLabelMutationVariables>;
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
export const DeleteInviteLinkDocument = gql`
    mutation DeleteInviteLink($boardId: String!) {
  deleteInviteLink(_id: $boardId) {
    _id
    background
    defaultRole
    inviteLink
    name
  }
}
    `;
export type DeleteInviteLinkMutationFn = Apollo.MutationFunction<DeleteInviteLinkMutation, DeleteInviteLinkMutationVariables>;

/**
 * __useDeleteInviteLinkMutation__
 *
 * To run a mutation, you first call `useDeleteInviteLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteInviteLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInviteLinkMutation, { data, loading, error }] = useDeleteInviteLinkMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useDeleteInviteLinkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteInviteLinkMutation, DeleteInviteLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteInviteLinkMutation, DeleteInviteLinkMutationVariables>(DeleteInviteLinkDocument, options);
      }
export type DeleteInviteLinkMutationHookResult = ReturnType<typeof useDeleteInviteLinkMutation>;
export type DeleteInviteLinkMutationResult = Apollo.MutationResult<DeleteInviteLinkMutation>;
export type DeleteInviteLinkMutationOptions = Apollo.BaseMutationOptions<DeleteInviteLinkMutation, DeleteInviteLinkMutationVariables>;
export const DeleteLabelDocument = gql`
    mutation DeleteLabel($bid: String!, $labelId: String!) {
  deleteLabel(deleteLabelInput: {boardId: $bid, labelId: $labelId}) {
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
export type DeleteLabelMutationFn = Apollo.MutationFunction<DeleteLabelMutation, DeleteLabelMutationVariables>;

/**
 * __useDeleteLabelMutation__
 *
 * To run a mutation, you first call `useDeleteLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLabelMutation, { data, loading, error }] = useDeleteLabelMutation({
 *   variables: {
 *      bid: // value for 'bid'
 *      labelId: // value for 'labelId'
 *   },
 * });
 */
export function useDeleteLabelMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLabelMutation, DeleteLabelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLabelMutation, DeleteLabelMutationVariables>(DeleteLabelDocument, options);
      }
export type DeleteLabelMutationHookResult = ReturnType<typeof useDeleteLabelMutation>;
export type DeleteLabelMutationResult = Apollo.MutationResult<DeleteLabelMutation>;
export type DeleteLabelMutationOptions = Apollo.BaseMutationOptions<DeleteLabelMutation, DeleteLabelMutationVariables>;
export const FindAllBackgroundsDocument = gql`
    query FindAllBackgrounds {
  findAllBackgrounds {
    _id
    imagePath
    previewPath
  }
}
    `;

/**
 * __useFindAllBackgroundsQuery__
 *
 * To run a query within a React component, call `useFindAllBackgroundsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllBackgroundsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllBackgroundsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllBackgroundsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllBackgroundsQuery, FindAllBackgroundsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllBackgroundsQuery, FindAllBackgroundsQueryVariables>(FindAllBackgroundsDocument, options);
      }
export function useFindAllBackgroundsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllBackgroundsQuery, FindAllBackgroundsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllBackgroundsQuery, FindAllBackgroundsQueryVariables>(FindAllBackgroundsDocument, options);
        }
export type FindAllBackgroundsQueryHookResult = ReturnType<typeof useFindAllBackgroundsQuery>;
export type FindAllBackgroundsLazyQueryHookResult = ReturnType<typeof useFindAllBackgroundsLazyQuery>;
export type FindAllBackgroundsQueryResult = Apollo.QueryResult<FindAllBackgroundsQuery, FindAllBackgroundsQueryVariables>;
export const FindAllRolesDocument = gql`
    query FindAllRoles {
  findAllRoles {
    _id
    canBeName
    description
    name
  }
}
    `;

/**
 * __useFindAllRolesQuery__
 *
 * To run a query within a React component, call `useFindAllRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllRolesQuery(baseOptions?: Apollo.QueryHookOptions<FindAllRolesQuery, FindAllRolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllRolesQuery, FindAllRolesQueryVariables>(FindAllRolesDocument, options);
      }
export function useFindAllRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllRolesQuery, FindAllRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllRolesQuery, FindAllRolesQueryVariables>(FindAllRolesDocument, options);
        }
export type FindAllRolesQueryHookResult = ReturnType<typeof useFindAllRolesQuery>;
export type FindAllRolesLazyQueryHookResult = ReturnType<typeof useFindAllRolesLazyQuery>;
export type FindAllRolesQueryResult = Apollo.QueryResult<FindAllRolesQuery, FindAllRolesQueryVariables>;
export const FindBackgroundByIdDocument = gql`
    query FindBackgroundById($id: String!) {
  findBackgroundById(_id: $id) {
    _id
    imagePath
    previewPath
  }
}
    `;

/**
 * __useFindBackgroundByIdQuery__
 *
 * To run a query within a React component, call `useFindBackgroundByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindBackgroundByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindBackgroundByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindBackgroundByIdQuery(baseOptions: Apollo.QueryHookOptions<FindBackgroundByIdQuery, FindBackgroundByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindBackgroundByIdQuery, FindBackgroundByIdQueryVariables>(FindBackgroundByIdDocument, options);
      }
export function useFindBackgroundByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindBackgroundByIdQuery, FindBackgroundByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindBackgroundByIdQuery, FindBackgroundByIdQueryVariables>(FindBackgroundByIdDocument, options);
        }
export type FindBackgroundByIdQueryHookResult = ReturnType<typeof useFindBackgroundByIdQuery>;
export type FindBackgroundByIdLazyQueryHookResult = ReturnType<typeof useFindBackgroundByIdLazyQuery>;
export type FindBackgroundByIdQueryResult = Apollo.QueryResult<FindBackgroundByIdQuery, FindBackgroundByIdQueryVariables>;
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
      colorInfo {
        _id
        name
        color
      }
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
      _id
      userId
      role
      userInfo {
        _id
        email
        emailVerified
        image
        name
      }
    }
    inviteLink
    defaultRole
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
export const FindBoardByUserIdDocument = gql`
    query FindBoardByUserId($uid: String!) {
  findBoardByUserId(_id: $uid) {
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
    inviteLink
  }
}
    `;

/**
 * __useFindBoardByUserIdQuery__
 *
 * To run a query within a React component, call `useFindBoardByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindBoardByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindBoardByUserIdQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useFindBoardByUserIdQuery(baseOptions: Apollo.QueryHookOptions<FindBoardByUserIdQuery, FindBoardByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindBoardByUserIdQuery, FindBoardByUserIdQueryVariables>(FindBoardByUserIdDocument, options);
      }
export function useFindBoardByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindBoardByUserIdQuery, FindBoardByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindBoardByUserIdQuery, FindBoardByUserIdQueryVariables>(FindBoardByUserIdDocument, options);
        }
export type FindBoardByUserIdQueryHookResult = ReturnType<typeof useFindBoardByUserIdQuery>;
export type FindBoardByUserIdLazyQueryHookResult = ReturnType<typeof useFindBoardByUserIdLazyQuery>;
export type FindBoardByUserIdQueryResult = Apollo.QueryResult<FindBoardByUserIdQuery, FindBoardByUserIdQueryVariables>;
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
export const FindAllColorsDocument = gql`
    query FindAllColors {
  findAllColors {
    color
    name
    _id
  }
}
    `;

/**
 * __useFindAllColorsQuery__
 *
 * To run a query within a React component, call `useFindAllColorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllColorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllColorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllColorsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllColorsQuery, FindAllColorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllColorsQuery, FindAllColorsQueryVariables>(FindAllColorsDocument, options);
      }
export function useFindAllColorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllColorsQuery, FindAllColorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllColorsQuery, FindAllColorsQueryVariables>(FindAllColorsDocument, options);
        }
export type FindAllColorsQueryHookResult = ReturnType<typeof useFindAllColorsQuery>;
export type FindAllColorsLazyQueryHookResult = ReturnType<typeof useFindAllColorsLazyQuery>;
export type FindAllColorsQueryResult = Apollo.QueryResult<FindAllColorsQuery, FindAllColorsQueryVariables>;
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
    backgroundInfo {
      _id
      imagePath
      previewPath
    }
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
      colorInfo {
        _id
        name
        color
      }
    }
    members {
      _id
      userId
      role
      userInfo {
        _id
        email
        emailVerified
        image
        name
      }
    }
    inviteLink
    defaultRole
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
export const DeleteLabelFromCardDocument = gql`
    mutation DeleteLabelFromCard($boardId: String!, $listId: String!, $cardId: String!, $labelId: String!) {
  deleteLabelFromCard(
    deleteLabelFromCardInput: {boardId: $boardId, cardId: $cardId, labelId: $labelId, listId: $listId}
  ) {
    _id
    background
    name
  }
}
    `;
export type DeleteLabelFromCardMutationFn = Apollo.MutationFunction<DeleteLabelFromCardMutation, DeleteLabelFromCardMutationVariables>;

/**
 * __useDeleteLabelFromCardMutation__
 *
 * To run a mutation, you first call `useDeleteLabelFromCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLabelFromCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLabelFromCardMutation, { data, loading, error }] = useDeleteLabelFromCardMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      listId: // value for 'listId'
 *      cardId: // value for 'cardId'
 *      labelId: // value for 'labelId'
 *   },
 * });
 */
export function useDeleteLabelFromCardMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLabelFromCardMutation, DeleteLabelFromCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLabelFromCardMutation, DeleteLabelFromCardMutationVariables>(DeleteLabelFromCardDocument, options);
      }
export type DeleteLabelFromCardMutationHookResult = ReturnType<typeof useDeleteLabelFromCardMutation>;
export type DeleteLabelFromCardMutationResult = Apollo.MutationResult<DeleteLabelFromCardMutation>;
export type DeleteLabelFromCardMutationOptions = Apollo.BaseMutationOptions<DeleteLabelFromCardMutation, DeleteLabelFromCardMutationVariables>;
export const RenameBoardDocument = gql`
    mutation RenameBoard($boardId: String!, $boardName: String!) {
  renameBoard(
    boardId: $boardId
    renameBoardInput: {_id: $boardId, name: $boardName}
  ) {
    _id
    background
    name
  }
}
    `;
export type RenameBoardMutationFn = Apollo.MutationFunction<RenameBoardMutation, RenameBoardMutationVariables>;

/**
 * __useRenameBoardMutation__
 *
 * To run a mutation, you first call `useRenameBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRenameBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [renameBoardMutation, { data, loading, error }] = useRenameBoardMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      boardName: // value for 'boardName'
 *   },
 * });
 */
export function useRenameBoardMutation(baseOptions?: Apollo.MutationHookOptions<RenameBoardMutation, RenameBoardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RenameBoardMutation, RenameBoardMutationVariables>(RenameBoardDocument, options);
      }
export type RenameBoardMutationHookResult = ReturnType<typeof useRenameBoardMutation>;
export type RenameBoardMutationResult = Apollo.MutationResult<RenameBoardMutation>;
export type RenameBoardMutationOptions = Apollo.BaseMutationOptions<RenameBoardMutation, RenameBoardMutationVariables>;
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