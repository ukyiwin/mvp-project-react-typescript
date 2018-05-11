import gql from 'graphql-tag';
import { USER_FRAGMENT, ARTICLE_FRAGMENT } from 'Graphql/Fragment';

export const ARTICLE_SUBSCRIPTION = gql`
  subscription articleSubscription($myUsername: String){
    articleSubscription{
      mutation
      node{
        ...articleFragment
        saved: userFavourited(where: {username: $myUsername }) {
          username
        }
        liked: likes(where: {username: $myUsername }) {
          username
        }
      }
      updatedFields
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export const USER_ARTICLE_SUBSCRIPTION = gql`
  subscription userActivitySubscription( $username: String!){
    userActivitySubscription(username: $username){
      mutation
      node{
        ...articleFragment
        saved: userFavourited(where: {username: $username }) {
          username
        }
        liked: likes(where: {username: $username }) {
          username
        }
      }
      updatedFields
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export const ACTIVITY_SUBSCRIPTION = gql`
  subscription activitySubscription( $username: String!){
    activitySubscription(username: $username){
      mutation
      node{
        ...articleFragment
        saved: userFavourited(where: {username: $username }) {
          username
        }
        liked: likes(where: {username: $username }) {
          username
        }
      }
      updatedFields
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export const COMMENT_SUBSCRIPTION = gql`
  subscription commentSubscription( $id: ID!){
    commentSubscription(articleId: $id){
      mutation
      node{
        id
        slug
        body
        createdAt
        article{
          id
        }
        author{
          id
          firstname
          lastname
          avatar
          username
          headerImage
        }
      }
      updatedFields
    }
  }
`;

export const ME_SUBSCRIPTION = gql`
  subscription meSubscription{
    meSubscription{
      mutation
      node{
        ...userFragment
        connections{
          username
          id
        }
        avatar
        headerImage
        articles{
          id
          title
          body
        }
      }
      updatedFields
    }
  }
  ${USER_FRAGMENT}
`;

export const SAVED_SUBSCRIPTION = gql`
  subscription savedSubscription($username: String, $cursor: ID){
    savedSubscription{
      mutation
      node{
        saved: userFavourited(where: {username: $username }) {
          username
        }
        liked: likes(where: {username: $username }) {
          username
        }
        ...articleFragment
      }
      updatedFields
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export const PUBLISH_SUBSCRIPTION = gql`
  subscription publishSubscription($username: String, $cursor: ID){
    publishSubscription{
      mutation
      node{
        saved: userFavourited(where: {username: $username }) {
          username
        }
        liked: likes(where: {username: $username }) {
          username
        }
        ...articleFragment
      }
      updatedFields
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export const DRAFTS_SUBSCRIPTION = gql`
  subscription draftsSubscription($username: String, $cursor: ID){
    draftsSubscription{
      mutation
      node{
        saved: userFavourited(where: {username: $username }) {
          username
        }
        liked: likes(where: {username: $username }) {
          username
        }
        ...articleFragment
      }
      updatedFields
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export const CHANNEL_SUBSCRIPTION = gql`
  subscription channelSubscription($slug: String!, $username: String){
    channelSubscription(slug: $slug){
      mutation
      node{
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
        joined: participants(where: {username: $username}){
          id
        }
        isAdmin: moderators(where: {username: $username}){
          id
        }
        isBarned: blockedUsers(where: {username: $username}){
          id
        }
      }
      updatedFields
    }
  }
`;

export const DIRECT_MESSAGE_SUBSCRIPTION = gql`
  subscription directMessageSubscription($username: String!){
    directMessageSubscription(username: $username){
      mutation
      node{
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
      updatedFields
    }
  }
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

export const MESSAGE_SUBSCRIPTION = gql`
  subscription messageSubscription($channelId: String!){
    messageSubscription(channelId: $channelId){
      mutation
      node{
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
      updatedFields
    }
  }
`;

export const COMMUNITY_SUBSCRIPTION = gql`
  subscription communitySubscription{
    communitySubscription{
      mutation
      node{
        username
        id
        firstname
        lastname
        email
        avatar
        headerImage
      }
      updatedFields
    }
  }
`;

export const DIRECT_USERS_SUBSCRIPTION = gql`
  subscription directUserSubscription{
    directUserSubscription{
      mutation
      node{
        username
        id
        firstname
        lastname
        email
        avatar
        headerImage
      }
      updatedFields
    }
  }
`;