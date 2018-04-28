import gql from 'graphql-tag';
import { USER_FRAGMENT, ARTICLE_FRAGMENT } from 'Graphql/Fragment';

/**
 * @description user registration for graphql mutation
 */
export const CREATE_COMMUNITY = gql`
  mutation createCommunity($title: String!, $description: String!, $category: String, $isPrivate: Boolean!, $photo: String!){
    createCommunity(title: $title, description: $description, category: $category, isPrivate: $isPrivate, photo: $photo){
      id
      createdAt
      updatedAt
      title
      channels{
        id
        createdAt
        title
        description
        slug
        participants{
          id
          username
          firstname
          lastname
          avatar
        }
      }
      description
      author{
        id
        username
        firstname
        lastname
        avatar
      }
      avatar
      slug
      isPrivate
      participants{
        id
        username
        firstname
        lastname
        avatar
      }
      moderators{
        id
        username
        firstname
        lastname
        avatar
      }
      blockedUsers{
        id
        username
        firstname
        lastname
        avatar
      }
    }
  }
`;

/**
 * @description user registration for graphql mutation
 */
export const JOIN_COMMUNITY = gql`
  mutation joinCommunity($id: ID!){
    joinCommunity(id: $id){
      id
      createdAt
      updatedAt
      title
      channels{
        id
        createdAt
        title
        description
        slug
        participants{
          id
          username
          firstname
          lastname
          avatar
        }
      }
      description
      author{
        id
        username
        firstname
        lastname
        avatar
      }
      avatar
      slug
      isPrivate
      participants{
        id
        username
        firstname
        lastname
        avatar
      }
      moderators{
        id
        username
        firstname
        lastname
        avatar
      }
      blockedUsers{
        id
        username
        firstname
        lastname
        avatar
      }
    }
  }
`;

/**
 * @description user registration for graphql mutation
 */
export const LEAVE_COMMUNITY = gql`
  mutation leaveCommunity($id: ID!){
    leaveCommunity(id: $id){
      id
      createdAt
      updatedAt
      title
      channels{
        id
        createdAt
        title
        description
        slug
        participants{
          id
          username
          firstname
          lastname
          avatar
        }
      }
      description
      author{
        id
        username
        firstname
        lastname
        avatar
      }
      avatar
      slug
      isPrivate
      participants{
        id
        username
        firstname
        lastname
        avatar
      }
      moderators{
        id
        username
        firstname
        lastname
        avatar
      }
      blockedUsers{
        id
        username
        firstname
        lastname
        avatar
      }
    }
  }
`;

/**
 * @description user registration for graphql mutation
 */
export const BLOCK_USER_FROM_COMMUNITY = gql`
  mutation blockUserFromCommunity($id: ID!, $username: String!){
    blockUserFromCommunity(id: $id, username: $username){
      id
      createdAt
      updatedAt
      title
      channels{
        id
        createdAt
        title
        description
        slug
        participants{
          id
          username
          firstname
          lastname
          avatar
        }
      }
      description
      author{
        id
        username
        firstname
        lastname
        avatar
      }
      avatar
      slug
      isPrivate
      participants{
        id
        username
        firstname
        lastname
        avatar
      }
      moderators{
        id
        username
        firstname
        lastname
        avatar
      }
      blockedUsers{
        id
        username
        firstname
        lastname
        avatar
      }
    }
  }
`;

/**
 * @description user registration for graphql mutation
 */
export const SEND_DIRECT_MESSAGE = gql`
  mutation sendDirectMessage($userID: ID!, $text: String!){
    sendDirectMessage(userId: $userID, text: $text){
      id
      createdAt
      updatedAt
      text
      to{
        username
        id
        firstname
        lastname
        avatar
        headerImage
      }
      from{
        username
        id
        firstname
        lastname
        avatar
        headerImage
      }
    }
  }
`;

/**
 * @description user registration for graphql mutation
 */
export const SEND_MESSAGE = gql`
  mutation sendMessage($channelId: ID!, $text: String!){
    sendMessage(channelId: $channelId, text: $text){
      id
      createdAt
      updatedAt
      text
      delivered
      sent
      seen
      user{
        username
        id
        firstname
        lastname
        avatar
        headerImage
      }
    }
  }
`;
