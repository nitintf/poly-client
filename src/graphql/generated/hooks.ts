import * as Types from './operations';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(LoginInput: $loginInput) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<Types.LoginMutation, Types.LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<Types.LoginMutation, Types.LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.LoginMutation, Types.LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<Types.LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<Types.LoginMutation, Types.LoginMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($signupInput: SignupInput!) {
  signup(SignupInput: $signupInput) {
    token
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<Types.SignUpMutation, Types.SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      signupInput: // value for 'signupInput'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<Types.SignUpMutation, Types.SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.SignUpMutation, Types.SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<Types.SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<Types.SignUpMutation, Types.SignUpMutationVariables>;
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