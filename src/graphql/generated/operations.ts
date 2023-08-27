import * as Types from './schemas';

export type LoginMutationVariables = Types.Exact<{
  loginInput: Types.LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', token: string } };

export type SignUpMutationVariables = Types.Exact<{
  signupInput: Types.SignupInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup: { __typename?: 'Auth', token: string } };

/**
 * @typedef {Object} Auth
 * @property {string} token - JWT Bearer token
 */

/**
 * Date custom scalar type
 * @typedef {*} Date
 */

/**
 * @typedef {Object} LoginInput
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {Object} Mutation
 * @property {Auth} login
 * @property {Auth} signup
 */

/**
 * @typedef {Object} Query
 * @property {Array<User>} users
 */

/**
 * @typedef {Object} SignupInput
 * @property {string} email
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} password
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