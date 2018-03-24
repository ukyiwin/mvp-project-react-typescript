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
    avatar{
      url
      name
    }
    type
    userType
    newConnectNot
    newCommentNot
    newMessageNot
    newProfileNot
    completedProfile
  }
`;

/**
 * @description user graphql fragment
 */
export const ARTICLE_FRAGMENT = gql`
  fragment articleFragment on Article {
    id
    title
    body
    description
    isPublished
    createdAt
    updatedAt
    tags
    author{
      id
      username
      email
      avatar{
        url
      }
      firstname
      lastname
    }
    category{
      id
      name
      avatar
      createdAt
    }
    link
    type
  }
`;