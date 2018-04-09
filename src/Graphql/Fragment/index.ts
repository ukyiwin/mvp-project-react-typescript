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
    avatar
    headerImage
    type
    userType
    newConnectNot
    newCommentNot
    newMessageNot
    newProfileNot
    completedProfile
    country {
      name
    }
    postCount: articles(where: {isPublished: true}){
      id
    }
    institution {
      title
    }
    department { 
      name
    }
    type
    userType
    verified
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
    headerImage {
      id
      url
    }
    author{
      id
      username
      email
      avatar
      headerImage
      firstname
      lastname
      type
      department {
        name
      }
      institution{
        title
      }
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

/**
 * @description user graphql fragment
 */
export const MESSAGE_FRAGMENT = gql`
  fragment messageFragment on Article {
    text
    user {
      id
      username
    }
    cahnnel {
      id
      updatedAt
    }
    createdAt
    updatedAt
  }
`;