import { ReadStream } from "fs";
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { z } from 'zod'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
interface GraphQLFileUpload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream( options?:{ encoding?: string, highWaterMark?: number } ): ReadStream;
}
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: Date; output: Date; }
};

export type Auth = {
  __typename?: 'Auth';
  /** JWT Bearer token */
  token: Scalars['String']['output'];
};

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  rememberMe: Scalars['Boolean']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  forgotPassword?: Maybe<SuccessOutput>;
  login: Auth;
  resetPassword?: Maybe<SuccessOutput>;
  signup: SignupOutput;
};


export type MutationForgotPasswordArgs = {
  ForgotPasswordInput: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  LoginInput: LoginInput;
};


export type MutationResetPasswordArgs = {
  ResetPasswordInput: ResetPasswordInput;
};


export type MutationSignupArgs = {
  SignupInput: SignupInput;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  users: Array<User>;
};

export type ResetPasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type SignupInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignupOutput = {
  __typename?: 'SignupOutput';
  /** Varications link sent or not */
  verificaitonLinkSent: Scalars['Boolean']['output'];
};

export type SuccessOutput = {
  __typename?: 'SuccessOutput';
  success: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  avatar: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  socialId?: Maybe<Scalars['String']['output']>;
  socialProvider?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
  userVerified: Scalars['Boolean']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Auth: ResolverTypeWrapper<Auth>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  ForgotPasswordInput: ForgotPasswordInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  ResetPasswordInput: ResetPasswordInput;
  SignupInput: SignupInput;
  SignupOutput: ResolverTypeWrapper<SignupOutput>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  SuccessOutput: ResolverTypeWrapper<SuccessOutput>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Auth: Auth;
  Boolean: Scalars['Boolean']['output'];
  Date: Scalars['Date']['output'];
  ForgotPasswordInput: ForgotPasswordInput;
  ID: Scalars['ID']['output'];
  LoginInput: LoginInput;
  Mutation: {};
  Query: {};
  ResetPasswordInput: ResetPasswordInput;
  SignupInput: SignupInput;
  SignupOutput: SignupOutput;
  String: Scalars['String']['output'];
  SuccessOutput: SuccessOutput;
  User: User;
};

export type AuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  forgotPassword?: Resolver<Maybe<ResolversTypes['SuccessOutput']>, ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'ForgotPasswordInput'>>;
  login?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'LoginInput'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['SuccessOutput']>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'ResetPasswordInput'>>;
  signup?: Resolver<ResolversTypes['SignupOutput'], ParentType, ContextType, RequireFields<MutationSignupArgs, 'SignupInput'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type SignupOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignupOutput'] = ResolversParentTypes['SignupOutput']> = {
  verificaitonLinkSent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuccessOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SuccessOutput'] = ResolversParentTypes['SuccessOutput']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  socialId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  socialProvider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  userVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Auth?: AuthResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SignupOutput?: SignupOutputResolvers<ContextType>;
  SuccessOutput?: SuccessOutputResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};



type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export function ForgotPasswordInputSchema(): z.ZodObject<Properties<ForgotPasswordInput>> {
  return z.object({
    email: z.string()
  })
}

export function LoginInputSchema(): z.ZodObject<Properties<LoginInput>> {
  return z.object({
    email: z.string(),
    password: z.string(),
    rememberMe: z.boolean()
  })
}

export function ResetPasswordInputSchema(): z.ZodObject<Properties<ResetPasswordInput>> {
  return z.object({
    password: z.string(),
    token: z.string()
  })
}

export function SignupInputSchema(): z.ZodObject<Properties<SignupInput>> {
  return z.object({
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string()
  })
}

/**
 * @typedef {Object} Auth
 * @property {string} token - JWT Bearer token
 */

/**
 * Date custom scalar type
 * @typedef {*} Date
 */

/**
 * @typedef {Object} ForgotPasswordInput
 * @property {string} email
 */

/**
 * @typedef {Object} LoginInput
 * @property {string} email
 * @property {string} password
 * @property {boolean} rememberMe
 */

/**
 * @typedef {Object} Mutation
 * @property {SuccessOutput} [forgotPassword]
 * @property {Auth} login
 * @property {SuccessOutput} [resetPassword]
 * @property {SignupOutput} signup
 */

/**
 * @typedef {Object} Query
 * @property {User} me
 * @property {Array<User>} users
 */

/**
 * @typedef {Object} ResetPasswordInput
 * @property {string} password
 * @property {string} token
 */

/**
 * @typedef {Object} SignupInput
 * @property {string} email
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} password
 */

/**
 * @typedef {Object} SignupOutput
 * @property {boolean} verificaitonLinkSent - Varications link sent or not
 */

/**
 * @typedef {Object} SuccessOutput
 * @property {boolean} success
 */

/**
 * @typedef {Object} User
 * @property {string} avatar
 * @property {Date} createdAt
 * @property {string} email
 * @property {string} firstName
 * @property {string} id
 * @property {string} lastName
 * @property {string} [socialId]
 * @property {string} [socialProvider]
 * @property {Date} updatedAt
 * @property {boolean} userVerified
 */

import { gql } from "@apollo/client/core"
export const typeDefs = gql('schema{query:Query mutation:Mutation}type Auth{"""JWT Bearer token""" token:String!}"""Date custom scalar type""" scalar Date input ForgotPasswordInput{email:String!}input LoginInput{email:String!password:String!rememberMe:Boolean!}type Mutation{forgotPassword(ForgotPasswordInput:ForgotPasswordInput!):SuccessOutput login(LoginInput:LoginInput!):Auth!resetPassword(ResetPasswordInput:ResetPasswordInput!):SuccessOutput signup(SignupInput:SignupInput!):SignupOutput!}type Query{me:User!users:[User!]!}input ResetPasswordInput{password:String!token:String!}input SignupInput{email:String!firstName:String!lastName:String!password:String!}type SignupOutput{"""Varications link sent or not""" verificaitonLinkSent:Boolean!}type SuccessOutput{success:Boolean!}type User{avatar:String!createdAt:Date!email:String!firstName:String!id:ID!lastName:String!socialId:String socialProvider:String updatedAt:Date!userVerified:Boolean!}');
