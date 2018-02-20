import gql from 'graphql-tag';

/**
 * @description user graphql fragment
 */
export const USER_FRAGMENT = gql`
  fragement userFragment on User {
    id
    firstname
    lastname
    username
    email
    gender
  }
`;