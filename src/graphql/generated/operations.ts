import * as Types from './schemas';

export type ForgotPasswordMutationVariables = Types.Exact<{
  input: Types.ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword?: { __typename?: 'SuccessOutput', success: boolean } | null };

export type LoginMutationVariables = Types.Exact<{
  loginInput: Types.LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', token: string } };

export type MeQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, userVerified: boolean, avatar: string } };

export type ResetPasswordMutationVariables = Types.Exact<{
  input: Types.ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword?: { __typename?: 'SuccessOutput', success: boolean } | null };

export type SignUpMutationVariables = Types.Exact<{
  signupInput: Types.SignupInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup: { __typename?: 'SignupOutput', verificaitonLinkSent: boolean } };

export type UsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', avatar: string, email: string, firstName: string, id: string, socialId?: string | null, userVerified: boolean }> };

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