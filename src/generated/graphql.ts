import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, useInfiniteQuery, UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** columns and relationships of "Conversation" */
export type Conversation = {
  __typename?: 'Conversation';
  ConversationName?: Maybe<Scalars['String']>;
  Created_at: Scalars['timestamptz'];
  Id: Scalars['uuid'];
  /** An object relationship */
  Mentor: User;
  MentorId: Scalars['uuid'];
  /** An array relationship */
  Messages: Array<Message>;
  /** An aggregate relationship */
  Messages_aggregate: Message_Aggregate;
  /** An object relationship */
  Student: User;
  StudentId: Scalars['uuid'];
  Updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "Conversation" */
export type ConversationMessagesArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "Conversation" */
export type ConversationMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** aggregated selection of "Conversation" */
export type Conversation_Aggregate = {
  __typename?: 'Conversation_aggregate';
  aggregate?: Maybe<Conversation_Aggregate_Fields>;
  nodes: Array<Conversation>;
};

export type Conversation_Aggregate_Bool_Exp = {
  count?: InputMaybe<Conversation_Aggregate_Bool_Exp_Count>;
};

export type Conversation_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Conversation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Conversation_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Conversation" */
export type Conversation_Aggregate_Fields = {
  __typename?: 'Conversation_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Conversation_Max_Fields>;
  min?: Maybe<Conversation_Min_Fields>;
};


/** aggregate fields of "Conversation" */
export type Conversation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Conversation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Conversation" */
export type Conversation_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Conversation_Max_Order_By>;
  min?: InputMaybe<Conversation_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Conversation" */
export type Conversation_Arr_Rel_Insert_Input = {
  data: Array<Conversation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Conversation_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Conversation". All fields are combined with a logical 'AND'. */
export type Conversation_Bool_Exp = {
  ConversationName?: InputMaybe<String_Comparison_Exp>;
  Created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  Id?: InputMaybe<Uuid_Comparison_Exp>;
  Mentor?: InputMaybe<User_Bool_Exp>;
  MentorId?: InputMaybe<Uuid_Comparison_Exp>;
  Messages?: InputMaybe<Message_Bool_Exp>;
  Messages_aggregate?: InputMaybe<Message_Aggregate_Bool_Exp>;
  Student?: InputMaybe<User_Bool_Exp>;
  StudentId?: InputMaybe<Uuid_Comparison_Exp>;
  Updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  _and?: InputMaybe<Array<Conversation_Bool_Exp>>;
  _not?: InputMaybe<Conversation_Bool_Exp>;
  _or?: InputMaybe<Array<Conversation_Bool_Exp>>;
};

/** unique or primary key constraints on table "Conversation" */
export enum Conversation_Constraint {
  /** unique or primary key constraint on columns "Id" */
  ConverstationPkey = 'Converstation_pkey'
}

/** input type for inserting data into table "Conversation" */
export type Conversation_Insert_Input = {
  ConversationName?: InputMaybe<Scalars['String']>;
  Created_at?: InputMaybe<Scalars['timestamptz']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Mentor?: InputMaybe<User_Obj_Rel_Insert_Input>;
  MentorId?: InputMaybe<Scalars['uuid']>;
  Messages?: InputMaybe<Message_Arr_Rel_Insert_Input>;
  Student?: InputMaybe<User_Obj_Rel_Insert_Input>;
  StudentId?: InputMaybe<Scalars['uuid']>;
  Updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Conversation_Max_Fields = {
  __typename?: 'Conversation_max_fields';
  ConversationName?: Maybe<Scalars['String']>;
  Created_at?: Maybe<Scalars['timestamptz']>;
  Id?: Maybe<Scalars['uuid']>;
  MentorId?: Maybe<Scalars['uuid']>;
  StudentId?: Maybe<Scalars['uuid']>;
  Updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "Conversation" */
export type Conversation_Max_Order_By = {
  ConversationName?: InputMaybe<Order_By>;
  Created_at?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  MentorId?: InputMaybe<Order_By>;
  StudentId?: InputMaybe<Order_By>;
  Updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Conversation_Min_Fields = {
  __typename?: 'Conversation_min_fields';
  ConversationName?: Maybe<Scalars['String']>;
  Created_at?: Maybe<Scalars['timestamptz']>;
  Id?: Maybe<Scalars['uuid']>;
  MentorId?: Maybe<Scalars['uuid']>;
  StudentId?: Maybe<Scalars['uuid']>;
  Updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "Conversation" */
export type Conversation_Min_Order_By = {
  ConversationName?: InputMaybe<Order_By>;
  Created_at?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  MentorId?: InputMaybe<Order_By>;
  StudentId?: InputMaybe<Order_By>;
  Updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Conversation" */
export type Conversation_Mutation_Response = {
  __typename?: 'Conversation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Conversation>;
};

/** input type for inserting object relation for remote table "Conversation" */
export type Conversation_Obj_Rel_Insert_Input = {
  data: Conversation_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Conversation_On_Conflict>;
};

/** on_conflict condition type for table "Conversation" */
export type Conversation_On_Conflict = {
  constraint: Conversation_Constraint;
  update_columns?: Array<Conversation_Update_Column>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};

/** Ordering options when selecting data from "Conversation". */
export type Conversation_Order_By = {
  ConversationName?: InputMaybe<Order_By>;
  Created_at?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  Mentor?: InputMaybe<User_Order_By>;
  MentorId?: InputMaybe<Order_By>;
  Messages_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  Student?: InputMaybe<User_Order_By>;
  StudentId?: InputMaybe<Order_By>;
  Updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Conversation */
export type Conversation_Pk_Columns_Input = {
  Id: Scalars['uuid'];
};

/** select columns of table "Conversation" */
export enum Conversation_Select_Column {
  /** column name */
  ConversationName = 'ConversationName',
  /** column name */
  CreatedAt = 'Created_at',
  /** column name */
  Id = 'Id',
  /** column name */
  MentorId = 'MentorId',
  /** column name */
  StudentId = 'StudentId',
  /** column name */
  UpdatedAt = 'Updated_at'
}

/** input type for updating data in table "Conversation" */
export type Conversation_Set_Input = {
  ConversationName?: InputMaybe<Scalars['String']>;
  Created_at?: InputMaybe<Scalars['timestamptz']>;
  Id?: InputMaybe<Scalars['uuid']>;
  MentorId?: InputMaybe<Scalars['uuid']>;
  StudentId?: InputMaybe<Scalars['uuid']>;
  Updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "Conversation" */
export type Conversation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Conversation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Conversation_Stream_Cursor_Value_Input = {
  ConversationName?: InputMaybe<Scalars['String']>;
  Created_at?: InputMaybe<Scalars['timestamptz']>;
  Id?: InputMaybe<Scalars['uuid']>;
  MentorId?: InputMaybe<Scalars['uuid']>;
  StudentId?: InputMaybe<Scalars['uuid']>;
  Updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "Conversation" */
export enum Conversation_Update_Column {
  /** column name */
  ConversationName = 'ConversationName',
  /** column name */
  CreatedAt = 'Created_at',
  /** column name */
  Id = 'Id',
  /** column name */
  MentorId = 'MentorId',
  /** column name */
  StudentId = 'StudentId',
  /** column name */
  UpdatedAt = 'Updated_at'
}

export type Conversation_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Conversation_Set_Input>;
  /** filter the rows which have to be updated */
  where: Conversation_Bool_Exp;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Message" */
export type Message = {
  __typename?: 'Message';
  Content: Scalars['String'];
  /** An object relationship */
  Conversation: Conversation;
  ConversationId: Scalars['uuid'];
  Created_at: Scalars['timestamptz'];
  Id: Scalars['uuid'];
  ReceiverId: Scalars['uuid'];
  SenderId: Scalars['uuid'];
  /** An object relationship */
  Status?: Maybe<Status>;
  StatusId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  User: User;
  /** An object relationship */
  userBySenderid: User;
};

/** aggregated selection of "Message" */
export type Message_Aggregate = {
  __typename?: 'Message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

export type Message_Aggregate_Bool_Exp = {
  count?: InputMaybe<Message_Aggregate_Bool_Exp_Count>;
};

export type Message_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Message_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Message" */
export type Message_Aggregate_Fields = {
  __typename?: 'Message_aggregate_fields';
  avg?: Maybe<Message_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
  stddev?: Maybe<Message_Stddev_Fields>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Fields>;
  sum?: Maybe<Message_Sum_Fields>;
  var_pop?: Maybe<Message_Var_Pop_Fields>;
  var_samp?: Maybe<Message_Var_Samp_Fields>;
  variance?: Maybe<Message_Variance_Fields>;
};


/** aggregate fields of "Message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Message" */
export type Message_Aggregate_Order_By = {
  avg?: InputMaybe<Message_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Message_Max_Order_By>;
  min?: InputMaybe<Message_Min_Order_By>;
  stddev?: InputMaybe<Message_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Message_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Message_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Message_Sum_Order_By>;
  var_pop?: InputMaybe<Message_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Message_Var_Samp_Order_By>;
  variance?: InputMaybe<Message_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Message" */
export type Message_Arr_Rel_Insert_Input = {
  data: Array<Message_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Message_On_Conflict>;
};

/** aggregate avg on columns */
export type Message_Avg_Fields = {
  __typename?: 'Message_avg_fields';
  StatusId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Message" */
export type Message_Avg_Order_By = {
  StatusId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  Content?: InputMaybe<String_Comparison_Exp>;
  Conversation?: InputMaybe<Conversation_Bool_Exp>;
  ConversationId?: InputMaybe<Uuid_Comparison_Exp>;
  Created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  Id?: InputMaybe<Uuid_Comparison_Exp>;
  ReceiverId?: InputMaybe<Uuid_Comparison_Exp>;
  SenderId?: InputMaybe<Uuid_Comparison_Exp>;
  Status?: InputMaybe<Status_Bool_Exp>;
  StatusId?: InputMaybe<Int_Comparison_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Message_Bool_Exp>>;
  _not?: InputMaybe<Message_Bool_Exp>;
  _or?: InputMaybe<Array<Message_Bool_Exp>>;
  userBySenderid?: InputMaybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "Message" */
export enum Message_Constraint {
  /** unique or primary key constraint on columns "Id" */
  MessagePkey = 'Message_pkey'
}

/** input type for incrementing numeric columns in table "Message" */
export type Message_Inc_Input = {
  StatusId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Message" */
export type Message_Insert_Input = {
  Content?: InputMaybe<Scalars['String']>;
  Conversation?: InputMaybe<Conversation_Obj_Rel_Insert_Input>;
  ConversationId?: InputMaybe<Scalars['uuid']>;
  Created_at?: InputMaybe<Scalars['timestamptz']>;
  Id?: InputMaybe<Scalars['uuid']>;
  ReceiverId?: InputMaybe<Scalars['uuid']>;
  SenderId?: InputMaybe<Scalars['uuid']>;
  Status?: InputMaybe<Status_Obj_Rel_Insert_Input>;
  StatusId?: InputMaybe<Scalars['Int']>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userBySenderid?: InputMaybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'Message_max_fields';
  Content?: Maybe<Scalars['String']>;
  ConversationId?: Maybe<Scalars['uuid']>;
  Created_at?: Maybe<Scalars['timestamptz']>;
  Id?: Maybe<Scalars['uuid']>;
  ReceiverId?: Maybe<Scalars['uuid']>;
  SenderId?: Maybe<Scalars['uuid']>;
  StatusId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Message" */
export type Message_Max_Order_By = {
  Content?: InputMaybe<Order_By>;
  ConversationId?: InputMaybe<Order_By>;
  Created_at?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  ReceiverId?: InputMaybe<Order_By>;
  SenderId?: InputMaybe<Order_By>;
  StatusId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'Message_min_fields';
  Content?: Maybe<Scalars['String']>;
  ConversationId?: Maybe<Scalars['uuid']>;
  Created_at?: Maybe<Scalars['timestamptz']>;
  Id?: Maybe<Scalars['uuid']>;
  ReceiverId?: Maybe<Scalars['uuid']>;
  SenderId?: Maybe<Scalars['uuid']>;
  StatusId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Message" */
export type Message_Min_Order_By = {
  Content?: InputMaybe<Order_By>;
  ConversationId?: InputMaybe<Order_By>;
  Created_at?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  ReceiverId?: InputMaybe<Order_By>;
  SenderId?: InputMaybe<Order_By>;
  StatusId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Message" */
export type Message_Mutation_Response = {
  __typename?: 'Message_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Message>;
};

/** on_conflict condition type for table "Message" */
export type Message_On_Conflict = {
  constraint: Message_Constraint;
  update_columns?: Array<Message_Update_Column>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** Ordering options when selecting data from "Message". */
export type Message_Order_By = {
  Content?: InputMaybe<Order_By>;
  Conversation?: InputMaybe<Conversation_Order_By>;
  ConversationId?: InputMaybe<Order_By>;
  Created_at?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  ReceiverId?: InputMaybe<Order_By>;
  SenderId?: InputMaybe<Order_By>;
  Status?: InputMaybe<Status_Order_By>;
  StatusId?: InputMaybe<Order_By>;
  User?: InputMaybe<User_Order_By>;
  userBySenderid?: InputMaybe<User_Order_By>;
};

/** primary key columns input for table: Message */
export type Message_Pk_Columns_Input = {
  Id: Scalars['uuid'];
};

/** select columns of table "Message" */
export enum Message_Select_Column {
  /** column name */
  Content = 'Content',
  /** column name */
  ConversationId = 'ConversationId',
  /** column name */
  CreatedAt = 'Created_at',
  /** column name */
  Id = 'Id',
  /** column name */
  ReceiverId = 'ReceiverId',
  /** column name */
  SenderId = 'SenderId',
  /** column name */
  StatusId = 'StatusId'
}

/** input type for updating data in table "Message" */
export type Message_Set_Input = {
  Content?: InputMaybe<Scalars['String']>;
  ConversationId?: InputMaybe<Scalars['uuid']>;
  Created_at?: InputMaybe<Scalars['timestamptz']>;
  Id?: InputMaybe<Scalars['uuid']>;
  ReceiverId?: InputMaybe<Scalars['uuid']>;
  SenderId?: InputMaybe<Scalars['uuid']>;
  StatusId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Message_Stddev_Fields = {
  __typename?: 'Message_stddev_fields';
  StatusId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Message" */
export type Message_Stddev_Order_By = {
  StatusId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Message_Stddev_Pop_Fields = {
  __typename?: 'Message_stddev_pop_fields';
  StatusId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Message" */
export type Message_Stddev_Pop_Order_By = {
  StatusId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Message_Stddev_Samp_Fields = {
  __typename?: 'Message_stddev_samp_fields';
  StatusId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Message" */
export type Message_Stddev_Samp_Order_By = {
  StatusId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Message" */
export type Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Message_Stream_Cursor_Value_Input = {
  Content?: InputMaybe<Scalars['String']>;
  ConversationId?: InputMaybe<Scalars['uuid']>;
  Created_at?: InputMaybe<Scalars['timestamptz']>;
  Id?: InputMaybe<Scalars['uuid']>;
  ReceiverId?: InputMaybe<Scalars['uuid']>;
  SenderId?: InputMaybe<Scalars['uuid']>;
  StatusId?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Message_Sum_Fields = {
  __typename?: 'Message_sum_fields';
  StatusId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Message" */
export type Message_Sum_Order_By = {
  StatusId?: InputMaybe<Order_By>;
};

/** update columns of table "Message" */
export enum Message_Update_Column {
  /** column name */
  Content = 'Content',
  /** column name */
  ConversationId = 'ConversationId',
  /** column name */
  CreatedAt = 'Created_at',
  /** column name */
  Id = 'Id',
  /** column name */
  ReceiverId = 'ReceiverId',
  /** column name */
  SenderId = 'SenderId',
  /** column name */
  StatusId = 'StatusId'
}

export type Message_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Message_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Message_Set_Input>;
  /** filter the rows which have to be updated */
  where: Message_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Message_Var_Pop_Fields = {
  __typename?: 'Message_var_pop_fields';
  StatusId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Message" */
export type Message_Var_Pop_Order_By = {
  StatusId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Message_Var_Samp_Fields = {
  __typename?: 'Message_var_samp_fields';
  StatusId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Message" */
export type Message_Var_Samp_Order_By = {
  StatusId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Message_Variance_Fields = {
  __typename?: 'Message_variance_fields';
  StatusId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Message" */
export type Message_Variance_Order_By = {
  StatusId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Role" */
export type Role = {
  __typename?: 'Role';
  Id: Scalars['Int'];
  Name: Scalars['String'];
  /** An array relationship */
  Users: Array<User>;
  /** An aggregate relationship */
  Users_aggregate: User_Aggregate;
};


/** columns and relationships of "Role" */
export type RoleUsersArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


/** columns and relationships of "Role" */
export type RoleUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** aggregated selection of "Role" */
export type Role_Aggregate = {
  __typename?: 'Role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "Role" */
export type Role_Aggregate_Fields = {
  __typename?: 'Role_aggregate_fields';
  avg?: Maybe<Role_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
  stddev?: Maybe<Role_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Sum_Fields>;
  var_pop?: Maybe<Role_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Var_Samp_Fields>;
  variance?: Maybe<Role_Variance_Fields>;
};


/** aggregate fields of "Role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Role_Avg_Fields = {
  __typename?: 'Role_avg_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  Id?: InputMaybe<Int_Comparison_Exp>;
  Name?: InputMaybe<String_Comparison_Exp>;
  Users?: InputMaybe<User_Bool_Exp>;
  Users_aggregate?: InputMaybe<User_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Role_Bool_Exp>>;
  _not?: InputMaybe<Role_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Bool_Exp>>;
};

/** unique or primary key constraints on table "Role" */
export enum Role_Constraint {
  /** unique or primary key constraint on columns "Id" */
  RolePkey = 'Role_pkey'
}

/** input type for incrementing numeric columns in table "Role" */
export type Role_Inc_Input = {
  Id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Role" */
export type Role_Insert_Input = {
  Id?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
  Users?: InputMaybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'Role_max_fields';
  Id?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'Role_min_fields';
  Id?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Role" */
export type Role_Mutation_Response = {
  __typename?: 'Role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** input type for inserting object relation for remote table "Role" */
export type Role_Obj_Rel_Insert_Input = {
  data: Role_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** on_conflict condition type for table "Role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "Role". */
export type Role_Order_By = {
  Id?: InputMaybe<Order_By>;
  Name?: InputMaybe<Order_By>;
  Users_aggregate?: InputMaybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: Role */
export type Role_Pk_Columns_Input = {
  Id: Scalars['Int'];
};

/** select columns of table "Role" */
export enum Role_Select_Column {
  /** column name */
  Id = 'Id',
  /** column name */
  Name = 'Name'
}

/** input type for updating data in table "Role" */
export type Role_Set_Input = {
  Id?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Role_Stddev_Fields = {
  __typename?: 'Role_stddev_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Role_Stddev_Pop_Fields = {
  __typename?: 'Role_stddev_pop_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Role_Stddev_Samp_Fields = {
  __typename?: 'Role_stddev_samp_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "Role" */
export type Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Stream_Cursor_Value_Input = {
  Id?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Role_Sum_Fields = {
  __typename?: 'Role_sum_fields';
  Id?: Maybe<Scalars['Int']>;
};

/** update columns of table "Role" */
export enum Role_Update_Column {
  /** column name */
  Id = 'Id',
  /** column name */
  Name = 'Name'
}

export type Role_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Role_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: Role_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Role_Var_Pop_Fields = {
  __typename?: 'Role_var_pop_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Role_Var_Samp_Fields = {
  __typename?: 'Role_var_samp_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Role_Variance_Fields = {
  __typename?: 'Role_variance_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Status" */
export type Status = {
  __typename?: 'Status';
  Id: Scalars['Int'];
  /** An array relationship */
  Messages: Array<Message>;
  /** An aggregate relationship */
  Messages_aggregate: Message_Aggregate;
  Name: Scalars['String'];
};


/** columns and relationships of "Status" */
export type StatusMessagesArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "Status" */
export type StatusMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** aggregated selection of "Status" */
export type Status_Aggregate = {
  __typename?: 'Status_aggregate';
  aggregate?: Maybe<Status_Aggregate_Fields>;
  nodes: Array<Status>;
};

/** aggregate fields of "Status" */
export type Status_Aggregate_Fields = {
  __typename?: 'Status_aggregate_fields';
  avg?: Maybe<Status_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Status_Max_Fields>;
  min?: Maybe<Status_Min_Fields>;
  stddev?: Maybe<Status_Stddev_Fields>;
  stddev_pop?: Maybe<Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Status_Stddev_Samp_Fields>;
  sum?: Maybe<Status_Sum_Fields>;
  var_pop?: Maybe<Status_Var_Pop_Fields>;
  var_samp?: Maybe<Status_Var_Samp_Fields>;
  variance?: Maybe<Status_Variance_Fields>;
};


/** aggregate fields of "Status" */
export type Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Status_Avg_Fields = {
  __typename?: 'Status_avg_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Status". All fields are combined with a logical 'AND'. */
export type Status_Bool_Exp = {
  Id?: InputMaybe<Int_Comparison_Exp>;
  Messages?: InputMaybe<Message_Bool_Exp>;
  Messages_aggregate?: InputMaybe<Message_Aggregate_Bool_Exp>;
  Name?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Status_Bool_Exp>>;
  _not?: InputMaybe<Status_Bool_Exp>;
  _or?: InputMaybe<Array<Status_Bool_Exp>>;
};

/** unique or primary key constraints on table "Status" */
export enum Status_Constraint {
  /** unique or primary key constraint on columns "Id" */
  StatusPkey = 'Status_pkey'
}

/** input type for incrementing numeric columns in table "Status" */
export type Status_Inc_Input = {
  Id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Status" */
export type Status_Insert_Input = {
  Id?: InputMaybe<Scalars['Int']>;
  Messages?: InputMaybe<Message_Arr_Rel_Insert_Input>;
  Name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Status_Max_Fields = {
  __typename?: 'Status_max_fields';
  Id?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Status_Min_Fields = {
  __typename?: 'Status_min_fields';
  Id?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Status" */
export type Status_Mutation_Response = {
  __typename?: 'Status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Status>;
};

/** input type for inserting object relation for remote table "Status" */
export type Status_Obj_Rel_Insert_Input = {
  data: Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Status_On_Conflict>;
};

/** on_conflict condition type for table "Status" */
export type Status_On_Conflict = {
  constraint: Status_Constraint;
  update_columns?: Array<Status_Update_Column>;
  where?: InputMaybe<Status_Bool_Exp>;
};

/** Ordering options when selecting data from "Status". */
export type Status_Order_By = {
  Id?: InputMaybe<Order_By>;
  Messages_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  Name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Status */
export type Status_Pk_Columns_Input = {
  Id: Scalars['Int'];
};

/** select columns of table "Status" */
export enum Status_Select_Column {
  /** column name */
  Id = 'Id',
  /** column name */
  Name = 'Name'
}

/** input type for updating data in table "Status" */
export type Status_Set_Input = {
  Id?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Status_Stddev_Fields = {
  __typename?: 'Status_stddev_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Status_Stddev_Pop_Fields = {
  __typename?: 'Status_stddev_pop_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Status_Stddev_Samp_Fields = {
  __typename?: 'Status_stddev_samp_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "Status" */
export type Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Status_Stream_Cursor_Value_Input = {
  Id?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Status_Sum_Fields = {
  __typename?: 'Status_sum_fields';
  Id?: Maybe<Scalars['Int']>;
};

/** update columns of table "Status" */
export enum Status_Update_Column {
  /** column name */
  Id = 'Id',
  /** column name */
  Name = 'Name'
}

export type Status_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Status_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Status_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Status_Var_Pop_Fields = {
  __typename?: 'Status_var_pop_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Status_Var_Samp_Fields = {
  __typename?: 'Status_var_samp_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Status_Variance_Fields = {
  __typename?: 'Status_variance_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  /** An array relationship */
  Converstations: Array<Conversation>;
  /** An aggregate relationship */
  Converstations_aggregate: Conversation_Aggregate;
  Created_at: Scalars['timestamptz'];
  DOB: Scalars['timestamptz'];
  Email?: Maybe<Scalars['String']>;
  FirstName: Scalars['String'];
  Id: Scalars['uuid'];
  Info: Scalars['jsonb'];
  LastName: Scalars['String'];
  /** An array relationship */
  Messages: Array<Message>;
  /** An aggregate relationship */
  Messages_aggregate: Message_Aggregate;
  Password?: Maybe<Scalars['String']>;
  /** An object relationship */
  Role: Role;
  RoleId: Scalars['Int'];
  Updated_at: Scalars['timestamptz'];
  UserName: Scalars['String'];
  /** An array relationship */
  converstationsByStudentid: Array<Conversation>;
  /** An aggregate relationship */
  converstationsByStudentid_aggregate: Conversation_Aggregate;
  /** An array relationship */
  messagesBySenderid: Array<Message>;
  /** An aggregate relationship */
  messagesBySenderid_aggregate: Message_Aggregate;
};


/** columns and relationships of "User" */
export type UserConverstationsArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserConverstations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserInfoArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "User" */
export type UserMessagesArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserConverstationsByStudentidArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserConverstationsByStudentid_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserMessagesBySenderidArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserMessagesBySenderid_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

export type User_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Aggregate_Bool_Exp_Count>;
};

export type User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "User" */
export type User_Aggregate_Order_By = {
  avg?: InputMaybe<User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Max_Order_By>;
  min?: InputMaybe<User_Min_Order_By>;
  stddev?: InputMaybe<User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Sum_Order_By>;
  var_pop?: InputMaybe<User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Append_Input = {
  Info?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "User" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'User_avg_fields';
  RoleId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "User" */
export type User_Avg_Order_By = {
  RoleId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  Converstations?: InputMaybe<Conversation_Bool_Exp>;
  Converstations_aggregate?: InputMaybe<Conversation_Aggregate_Bool_Exp>;
  Created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  DOB?: InputMaybe<Timestamptz_Comparison_Exp>;
  Email?: InputMaybe<String_Comparison_Exp>;
  FirstName?: InputMaybe<String_Comparison_Exp>;
  Id?: InputMaybe<Uuid_Comparison_Exp>;
  Info?: InputMaybe<Jsonb_Comparison_Exp>;
  LastName?: InputMaybe<String_Comparison_Exp>;
  Messages?: InputMaybe<Message_Bool_Exp>;
  Messages_aggregate?: InputMaybe<Message_Aggregate_Bool_Exp>;
  Password?: InputMaybe<String_Comparison_Exp>;
  Role?: InputMaybe<Role_Bool_Exp>;
  RoleId?: InputMaybe<Int_Comparison_Exp>;
  Updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  UserName?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  converstationsByStudentid?: InputMaybe<Conversation_Bool_Exp>;
  converstationsByStudentid_aggregate?: InputMaybe<Conversation_Aggregate_Bool_Exp>;
  messagesBySenderid?: InputMaybe<Message_Bool_Exp>;
  messagesBySenderid_aggregate?: InputMaybe<Message_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "UserName" */
  UserUserNameKey = 'User_UserName_key',
  /** unique or primary key constraint on columns "Id" */
  UserPkey = 'User_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Delete_At_Path_Input = {
  Info?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Delete_Elem_Input = {
  Info?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Delete_Key_Input = {
  Info?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "User" */
export type User_Inc_Input = {
  RoleId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  Converstations?: InputMaybe<Conversation_Arr_Rel_Insert_Input>;
  Created_at?: InputMaybe<Scalars['timestamptz']>;
  DOB?: InputMaybe<Scalars['timestamptz']>;
  Email?: InputMaybe<Scalars['String']>;
  FirstName?: InputMaybe<Scalars['String']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Info?: InputMaybe<Scalars['jsonb']>;
  LastName?: InputMaybe<Scalars['String']>;
  Messages?: InputMaybe<Message_Arr_Rel_Insert_Input>;
  Password?: InputMaybe<Scalars['String']>;
  Role?: InputMaybe<Role_Obj_Rel_Insert_Input>;
  RoleId?: InputMaybe<Scalars['Int']>;
  Updated_at?: InputMaybe<Scalars['timestamptz']>;
  UserName?: InputMaybe<Scalars['String']>;
  converstationsByStudentid?: InputMaybe<Conversation_Arr_Rel_Insert_Input>;
  messagesBySenderid?: InputMaybe<Message_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  Created_at?: Maybe<Scalars['timestamptz']>;
  DOB?: Maybe<Scalars['timestamptz']>;
  Email?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['uuid']>;
  LastName?: Maybe<Scalars['String']>;
  Password?: Maybe<Scalars['String']>;
  RoleId?: Maybe<Scalars['Int']>;
  Updated_at?: Maybe<Scalars['timestamptz']>;
  UserName?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "User" */
export type User_Max_Order_By = {
  Created_at?: InputMaybe<Order_By>;
  DOB?: InputMaybe<Order_By>;
  Email?: InputMaybe<Order_By>;
  FirstName?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  LastName?: InputMaybe<Order_By>;
  Password?: InputMaybe<Order_By>;
  RoleId?: InputMaybe<Order_By>;
  Updated_at?: InputMaybe<Order_By>;
  UserName?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  Created_at?: Maybe<Scalars['timestamptz']>;
  DOB?: Maybe<Scalars['timestamptz']>;
  Email?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['uuid']>;
  LastName?: Maybe<Scalars['String']>;
  Password?: Maybe<Scalars['String']>;
  RoleId?: Maybe<Scalars['Int']>;
  Updated_at?: Maybe<Scalars['timestamptz']>;
  UserName?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "User" */
export type User_Min_Order_By = {
  Created_at?: InputMaybe<Order_By>;
  DOB?: InputMaybe<Order_By>;
  Email?: InputMaybe<Order_By>;
  FirstName?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  LastName?: InputMaybe<Order_By>;
  Password?: InputMaybe<Order_By>;
  RoleId?: InputMaybe<Order_By>;
  Updated_at?: InputMaybe<Order_By>;
  UserName?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  Converstations_aggregate?: InputMaybe<Conversation_Aggregate_Order_By>;
  Created_at?: InputMaybe<Order_By>;
  DOB?: InputMaybe<Order_By>;
  Email?: InputMaybe<Order_By>;
  FirstName?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  Info?: InputMaybe<Order_By>;
  LastName?: InputMaybe<Order_By>;
  Messages_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  Password?: InputMaybe<Order_By>;
  Role?: InputMaybe<Role_Order_By>;
  RoleId?: InputMaybe<Order_By>;
  Updated_at?: InputMaybe<Order_By>;
  UserName?: InputMaybe<Order_By>;
  converstationsByStudentid_aggregate?: InputMaybe<Conversation_Aggregate_Order_By>;
  messagesBySenderid_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  Id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Prepend_Input = {
  Info?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'Created_at',
  /** column name */
  Dob = 'DOB',
  /** column name */
  Email = 'Email',
  /** column name */
  FirstName = 'FirstName',
  /** column name */
  Id = 'Id',
  /** column name */
  Info = 'Info',
  /** column name */
  LastName = 'LastName',
  /** column name */
  Password = 'Password',
  /** column name */
  RoleId = 'RoleId',
  /** column name */
  UpdatedAt = 'Updated_at',
  /** column name */
  UserName = 'UserName'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  Created_at?: InputMaybe<Scalars['timestamptz']>;
  DOB?: InputMaybe<Scalars['timestamptz']>;
  Email?: InputMaybe<Scalars['String']>;
  FirstName?: InputMaybe<Scalars['String']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Info?: InputMaybe<Scalars['jsonb']>;
  LastName?: InputMaybe<Scalars['String']>;
  Password?: InputMaybe<Scalars['String']>;
  RoleId?: InputMaybe<Scalars['Int']>;
  Updated_at?: InputMaybe<Scalars['timestamptz']>;
  UserName?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'User_stddev_fields';
  RoleId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "User" */
export type User_Stddev_Order_By = {
  RoleId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'User_stddev_pop_fields';
  RoleId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "User" */
export type User_Stddev_Pop_Order_By = {
  RoleId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'User_stddev_samp_fields';
  RoleId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "User" */
export type User_Stddev_Samp_Order_By = {
  RoleId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  Created_at?: InputMaybe<Scalars['timestamptz']>;
  DOB?: InputMaybe<Scalars['timestamptz']>;
  Email?: InputMaybe<Scalars['String']>;
  FirstName?: InputMaybe<Scalars['String']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Info?: InputMaybe<Scalars['jsonb']>;
  LastName?: InputMaybe<Scalars['String']>;
  Password?: InputMaybe<Scalars['String']>;
  RoleId?: InputMaybe<Scalars['Int']>;
  Updated_at?: InputMaybe<Scalars['timestamptz']>;
  UserName?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'User_sum_fields';
  RoleId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "User" */
export type User_Sum_Order_By = {
  RoleId?: InputMaybe<Order_By>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'Created_at',
  /** column name */
  Dob = 'DOB',
  /** column name */
  Email = 'Email',
  /** column name */
  FirstName = 'FirstName',
  /** column name */
  Id = 'Id',
  /** column name */
  Info = 'Info',
  /** column name */
  LastName = 'LastName',
  /** column name */
  Password = 'Password',
  /** column name */
  RoleId = 'RoleId',
  /** column name */
  UpdatedAt = 'Updated_at',
  /** column name */
  UserName = 'UserName'
}

export type User_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<User_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<User_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'User_var_pop_fields';
  RoleId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "User" */
export type User_Var_Pop_Order_By = {
  RoleId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'User_var_samp_fields';
  RoleId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "User" */
export type User_Var_Samp_Order_By = {
  RoleId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'User_variance_fields';
  RoleId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "User" */
export type User_Variance_Order_By = {
  RoleId?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Conversation" */
  delete_Conversation?: Maybe<Conversation_Mutation_Response>;
  /** delete single row from the table: "Conversation" */
  delete_Conversation_by_pk?: Maybe<Conversation>;
  /** delete data from the table: "Message" */
  delete_Message?: Maybe<Message_Mutation_Response>;
  /** delete single row from the table: "Message" */
  delete_Message_by_pk?: Maybe<Message>;
  /** delete data from the table: "Role" */
  delete_Role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "Role" */
  delete_Role_by_pk?: Maybe<Role>;
  /** delete data from the table: "Status" */
  delete_Status?: Maybe<Status_Mutation_Response>;
  /** delete single row from the table: "Status" */
  delete_Status_by_pk?: Maybe<Status>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** insert data into the table: "Conversation" */
  insert_Conversation?: Maybe<Conversation_Mutation_Response>;
  /** insert a single row into the table: "Conversation" */
  insert_Conversation_one?: Maybe<Conversation>;
  /** insert data into the table: "Message" */
  insert_Message?: Maybe<Message_Mutation_Response>;
  /** insert a single row into the table: "Message" */
  insert_Message_one?: Maybe<Message>;
  /** insert data into the table: "Role" */
  insert_Role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "Role" */
  insert_Role_one?: Maybe<Role>;
  /** insert data into the table: "Status" */
  insert_Status?: Maybe<Status_Mutation_Response>;
  /** insert a single row into the table: "Status" */
  insert_Status_one?: Maybe<Status>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** update data of the table: "Conversation" */
  update_Conversation?: Maybe<Conversation_Mutation_Response>;
  /** update single row of the table: "Conversation" */
  update_Conversation_by_pk?: Maybe<Conversation>;
  /** update multiples rows of table: "Conversation" */
  update_Conversation_many?: Maybe<Array<Maybe<Conversation_Mutation_Response>>>;
  /** update data of the table: "Message" */
  update_Message?: Maybe<Message_Mutation_Response>;
  /** update single row of the table: "Message" */
  update_Message_by_pk?: Maybe<Message>;
  /** update multiples rows of table: "Message" */
  update_Message_many?: Maybe<Array<Maybe<Message_Mutation_Response>>>;
  /** update data of the table: "Role" */
  update_Role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "Role" */
  update_Role_by_pk?: Maybe<Role>;
  /** update multiples rows of table: "Role" */
  update_Role_many?: Maybe<Array<Maybe<Role_Mutation_Response>>>;
  /** update data of the table: "Status" */
  update_Status?: Maybe<Status_Mutation_Response>;
  /** update single row of the table: "Status" */
  update_Status_by_pk?: Maybe<Status>;
  /** update multiples rows of table: "Status" */
  update_Status_many?: Maybe<Array<Maybe<Status_Mutation_Response>>>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
  /** update multiples rows of table: "User" */
  update_User_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ConversationArgs = {
  where: Conversation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Conversation_By_PkArgs = {
  Id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MessageArgs = {
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Message_By_PkArgs = {
  Id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  Id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_StatusArgs = {
  where: Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Status_By_PkArgs = {
  Id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  Id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ConversationArgs = {
  objects: Array<Conversation_Insert_Input>;
  on_conflict?: InputMaybe<Conversation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Conversation_OneArgs = {
  object: Conversation_Insert_Input;
  on_conflict?: InputMaybe<Conversation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessageArgs = {
  objects: Array<Message_Insert_Input>;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_OneArgs = {
  object: Message_Insert_Input;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StatusArgs = {
  objects: Array<Status_Insert_Input>;
  on_conflict?: InputMaybe<Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Status_OneArgs = {
  object: Status_Insert_Input;
  on_conflict?: InputMaybe<Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ConversationArgs = {
  _set?: InputMaybe<Conversation_Set_Input>;
  where: Conversation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Conversation_By_PkArgs = {
  _set?: InputMaybe<Conversation_Set_Input>;
  pk_columns: Conversation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Conversation_ManyArgs = {
  updates: Array<Conversation_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MessageArgs = {
  _inc?: InputMaybe<Message_Inc_Input>;
  _set?: InputMaybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_By_PkArgs = {
  _inc?: InputMaybe<Message_Inc_Input>;
  _set?: InputMaybe<Message_Set_Input>;
  pk_columns: Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Message_ManyArgs = {
  updates: Array<Message_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _inc?: InputMaybe<Role_Inc_Input>;
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _inc?: InputMaybe<Role_Inc_Input>;
  _set?: InputMaybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_ManyArgs = {
  updates: Array<Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StatusArgs = {
  _inc?: InputMaybe<Status_Inc_Input>;
  _set?: InputMaybe<Status_Set_Input>;
  where: Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Status_By_PkArgs = {
  _inc?: InputMaybe<Status_Inc_Input>;
  _set?: InputMaybe<Status_Set_Input>;
  pk_columns: Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Status_ManyArgs = {
  updates: Array<Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _inc?: InputMaybe<User_Inc_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _inc?: InputMaybe<User_Inc_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Conversation" */
  Conversation: Array<Conversation>;
  /** fetch aggregated fields from the table: "Conversation" */
  Conversation_aggregate: Conversation_Aggregate;
  /** fetch data from the table: "Conversation" using primary key columns */
  Conversation_by_pk?: Maybe<Conversation>;
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "Role" */
  Role: Array<Role>;
  /** fetch aggregated fields from the table: "Role" */
  Role_aggregate: Role_Aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  Role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "Status" */
  Status: Array<Status>;
  /** fetch aggregated fields from the table: "Status" */
  Status_aggregate: Status_Aggregate;
  /** fetch data from the table: "Status" using primary key columns */
  Status_by_pk?: Maybe<Status>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


export type Query_RootConversationArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


export type Query_RootConversation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


export type Query_RootConversation_By_PkArgs = {
  Id: Scalars['uuid'];
};


export type Query_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_By_PkArgs = {
  Id: Scalars['uuid'];
};


export type Query_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  Id: Scalars['Int'];
};


export type Query_RootStatusArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Query_RootStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Query_RootStatus_By_PkArgs = {
  Id: Scalars['Int'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  Id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Conversation" */
  Conversation: Array<Conversation>;
  /** fetch aggregated fields from the table: "Conversation" */
  Conversation_aggregate: Conversation_Aggregate;
  /** fetch data from the table: "Conversation" using primary key columns */
  Conversation_by_pk?: Maybe<Conversation>;
  /** fetch data from the table in a streaming manner: "Conversation" */
  Conversation_stream: Array<Conversation>;
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table in a streaming manner: "Message" */
  Message_stream: Array<Message>;
  /** fetch data from the table: "Role" */
  Role: Array<Role>;
  /** fetch aggregated fields from the table: "Role" */
  Role_aggregate: Role_Aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  Role_by_pk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "Role" */
  Role_stream: Array<Role>;
  /** fetch data from the table: "Status" */
  Status: Array<Status>;
  /** fetch aggregated fields from the table: "Status" */
  Status_aggregate: Status_Aggregate;
  /** fetch data from the table: "Status" using primary key columns */
  Status_by_pk?: Maybe<Status>;
  /** fetch data from the table in a streaming manner: "Status" */
  Status_stream: Array<Status>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "User" */
  User_stream: Array<User>;
};


export type Subscription_RootConversationArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


export type Subscription_RootConversation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


export type Subscription_RootConversation_By_PkArgs = {
  Id: Scalars['uuid'];
};


export type Subscription_RootConversation_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Conversation_Stream_Cursor_Input>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


export type Subscription_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_By_PkArgs = {
  Id: Scalars['uuid'];
};


export type Subscription_RootMessage_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Message_Stream_Cursor_Input>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  Id: Scalars['Int'];
};


export type Subscription_RootRole_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootStatusArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Subscription_RootStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Subscription_RootStatus_By_PkArgs = {
  Id: Scalars['Int'];
};


export type Subscription_RootStatus_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  Id: Scalars['uuid'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type AddConversationMutationVariables = Exact<{
  object: Conversation_Insert_Input;
}>;


export type AddConversationMutation = { __typename?: 'mutation_root', insert_Conversation_one?: { __typename?: 'Conversation', Id: any, MentorId: any, StudentId: any, ConversationName?: string | null } | null };

export type AddMessageMutationVariables = Exact<{
  object?: InputMaybe<Message_Insert_Input>;
}>;


export type AddMessageMutation = { __typename?: 'mutation_root', insert_Message_one?: { __typename?: 'Message', Id: any } | null };

export type AddUserMutationVariables = Exact<{
  object: User_Insert_Input;
}>;


export type AddUserMutation = { __typename?: 'mutation_root', insert_User_one?: { __typename?: 'User', Id: any, FirstName: string, LastName: string, RoleId: number, Email?: string | null, Info: any } | null };

export type GetConversationQueryVariables = Exact<{
  conversationId?: InputMaybe<Uuid_Comparison_Exp>;
}>;


export type GetConversationQuery = { __typename?: 'query_root', Conversation: Array<{ __typename?: 'Conversation', Id: any, ConversationName?: string | null, Messages: Array<{ __typename?: 'Message', Content: string, ReceiverId: any, Created_at: any, SenderId: any, senderInfo: { __typename?: 'User', FirstName: string, LastName: string }, receiverInfo: { __typename?: 'User', FirstName: string, LastName: string }, Status?: { __typename?: 'Status', Id: number, Name: string } | null }>, Mentor: { __typename?: 'User', Id: any, FirstName: string, LastName: string, Info: any, DOB: any }, Student: { __typename?: 'User', Id: any, FirstName: string, LastName: string, Info: any, DOB: any } }> };

export type GetUserByRoleQueryVariables = Exact<{
  roleId: Scalars['Int'];
}>;


export type GetUserByRoleQuery = { __typename?: 'query_root', User: Array<{ __typename?: 'User', LastName: string, Id: any, FirstName: string, Password?: string | null, RoleId: number, UserName: string, Info: any, DOB: any, Role: { __typename?: 'Role', Id: number, Name: string } }> };

export type GetUserLoginQueryVariables = Exact<{
  userTag?: InputMaybe<Scalars['String']>;
}>;


export type GetUserLoginQuery = { __typename?: 'query_root', User: Array<{ __typename?: 'User', LastName: string, Id: any, FirstName: string, Password?: string | null, RoleId: number, UserName: string, Info: any, DOB: any, Role: { __typename?: 'Role', Id: number, Name: string } }> };


export const AddConversationDocument = `
    mutation addConversation($object: Conversation_insert_input!) {
  insert_Conversation_one(object: $object) {
    Id
    MentorId
    StudentId
    ConversationName
  }
}
    `;
export const useAddConversationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddConversationMutation, TError, AddConversationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddConversationMutation, TError, AddConversationMutationVariables, TContext>(
      ['addConversation'],
      (variables?: AddConversationMutationVariables) => fetcher<AddConversationMutation, AddConversationMutationVariables>(client, AddConversationDocument, variables, headers)(),
      options
    );
export const AddMessageDocument = `
    mutation addMessage($object: Message_insert_input = {}) {
  insert_Message_one(object: $object) {
    Id
  }
}
    `;
export const useAddMessageMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddMessageMutation, TError, AddMessageMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddMessageMutation, TError, AddMessageMutationVariables, TContext>(
      ['addMessage'],
      (variables?: AddMessageMutationVariables) => fetcher<AddMessageMutation, AddMessageMutationVariables>(client, AddMessageDocument, variables, headers)(),
      options
    );
export const AddUserDocument = `
    mutation addUser($object: User_insert_input!) {
  insert_User_one(object: $object) {
    Id
    FirstName
    LastName
    RoleId
    Email
    Info
  }
}
    `;
export const useAddUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddUserMutation, TError, AddUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddUserMutation, TError, AddUserMutationVariables, TContext>(
      ['addUser'],
      (variables?: AddUserMutationVariables) => fetcher<AddUserMutation, AddUserMutationVariables>(client, AddUserDocument, variables, headers)(),
      options
    );
export const GetConversationDocument = `
    query getConversation($conversationId: uuid_comparison_exp = {}) {
  Conversation(where: {Id: $conversationId}) {
    Id
    ConversationName
    Messages(order_by: {Created_at: asc}) {
      Content
      ReceiverId
      Created_at
      SenderId
      senderInfo: userBySenderid {
        FirstName
        LastName
      }
      receiverInfo: User {
        FirstName
        LastName
      }
      Status {
        Id
        Name
      }
    }
    Mentor {
      Id
      FirstName
      LastName
      Info
      DOB
    }
    Student {
      Id
      FirstName
      LastName
      Info
      DOB
    }
  }
}
    `;
export const useGetConversationQuery = <
      TData = GetConversationQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetConversationQueryVariables,
      options?: UseQueryOptions<GetConversationQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetConversationQuery, TError, TData>(
      variables === undefined ? ['getConversation'] : ['getConversation', variables],
      fetcher<GetConversationQuery, GetConversationQueryVariables>(client, GetConversationDocument, variables, headers),
      options
    );
export const useInfiniteGetConversationQuery = <
      TData = GetConversationQuery,
      TError = unknown
    >(
      pageParamKey: keyof GetConversationQueryVariables,
      client: GraphQLClient,
      variables?: GetConversationQueryVariables,
      options?: UseInfiniteQueryOptions<GetConversationQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetConversationQuery, TError, TData>(
      variables === undefined ? ['getConversation.infinite'] : ['getConversation.infinite', variables],
      (metaData) => fetcher<GetConversationQuery, GetConversationQueryVariables>(client, GetConversationDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetUserByRoleDocument = `
    query getUserByRole($roleId: Int!) {
  User(where: {RoleId: {_eq: $roleId}}) {
    LastName
    Id
    FirstName
    Password
    RoleId
    Role {
      Id
      Name
    }
    UserName
    Info
    DOB
  }
}
    `;
export const useGetUserByRoleQuery = <
      TData = GetUserByRoleQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetUserByRoleQueryVariables,
      options?: UseQueryOptions<GetUserByRoleQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUserByRoleQuery, TError, TData>(
      ['getUserByRole', variables],
      fetcher<GetUserByRoleQuery, GetUserByRoleQueryVariables>(client, GetUserByRoleDocument, variables, headers),
      options
    );
export const useInfiniteGetUserByRoleQuery = <
      TData = GetUserByRoleQuery,
      TError = unknown
    >(
      pageParamKey: keyof GetUserByRoleQueryVariables,
      client: GraphQLClient,
      variables: GetUserByRoleQueryVariables,
      options?: UseInfiniteQueryOptions<GetUserByRoleQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetUserByRoleQuery, TError, TData>(
      ['getUserByRole.infinite', variables],
      (metaData) => fetcher<GetUserByRoleQuery, GetUserByRoleQueryVariables>(client, GetUserByRoleDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetUserLoginDocument = `
    query GetUserLogin($userTag: String) {
  User(where: {UserName: {_eq: $userTag}}) {
    LastName
    Id
    FirstName
    Password
    RoleId
    Role {
      Id
      Name
    }
    UserName
    Info
    DOB
  }
}
    `;
export const useGetUserLoginQuery = <
      TData = GetUserLoginQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetUserLoginQueryVariables,
      options?: UseQueryOptions<GetUserLoginQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUserLoginQuery, TError, TData>(
      variables === undefined ? ['GetUserLogin'] : ['GetUserLogin', variables],
      fetcher<GetUserLoginQuery, GetUserLoginQueryVariables>(client, GetUserLoginDocument, variables, headers),
      options
    );
export const useInfiniteGetUserLoginQuery = <
      TData = GetUserLoginQuery,
      TError = unknown
    >(
      pageParamKey: keyof GetUserLoginQueryVariables,
      client: GraphQLClient,
      variables?: GetUserLoginQueryVariables,
      options?: UseInfiniteQueryOptions<GetUserLoginQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetUserLoginQuery, TError, TData>(
      variables === undefined ? ['GetUserLogin.infinite'] : ['GetUserLogin.infinite', variables],
      (metaData) => fetcher<GetUserLoginQuery, GetUserLoginQueryVariables>(client, GetUserLoginDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );
