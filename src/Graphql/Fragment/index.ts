import gql from 'graphql-tag';

/**
 * @description user graphql fragment
 */
export const USER_FRAGMENT = gql`
  fragment userFragment on User {
    id
    firstname
    lastname
    username
    email
    gender
    type
    userType
    newConnectNot
    newCommentNot
    newMessageNot
    newProfileNot
    completedProfile
  }
`;