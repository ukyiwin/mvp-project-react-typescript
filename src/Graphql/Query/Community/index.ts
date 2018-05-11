import gql from 'graphql-tag';
import { USER_FRAGMENT, ARTICLE_FRAGMENT } from 'Graphql/Fragment';

/**
 * @description user registration for graphql mutation
 */
export const MY_COMMUNITIES = gql`
  query myCommunities($username: String){
    myCommunities{
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
  }
`;

export const USER_COMMUNITIES = gql`
  query userCommunities($username: String!, $myUsername: String){
    userCommunities(username: $username){
      id
      createdAt
      updatedAt
      title
      channels{
        id
        createdAt
        title
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
      }
      moderators{
        id
        username
      }
      joined: participants(where: {username: $myUsername}){
        id
      }
      isAdmin: moderators(where: {username: $myUsername}){
        id
      }
      isBarned: blockedUsers(where: {username: $myUsername}){
        id
      }
    }
  }
`;

/**
 * @description user registration for graphql mutation
 */
export const GET_COMMUNITY = gql`
  query getCommunity($id: ID!, $username: String){
    getCommunity(id: $id){
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
  }
`;

/**
 * @description user registration for graphql mutation
 */
export const GET_PARTICIPANTS = gql`
  query getParticipants($slug: String!){
    getParticipants(slug: $slug){
      id
      username
      firstname
      lastname
      avatar
      headerImage
      department{
        id
        name
      }
      institution{
        id
        title
      }
    }
  }
`;

/**
 * @description user registration for graphql mutation
 */
export const GET_COMMUNITY_BY_SLUG = gql`
  query getCommunityBySlug($slug: String!, $username: String){
    getCommunityBySlug(slug: $slug){
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
  }
`;

/**
 * @description user registration for graphql mutation
 */
export const SEARCH_COMMUNITY = gql`
  query searchCommunities($text: String!, $username: String){
    searchCommunities(text: $text){
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
  }
`;

/**
 * @description user registration for graphql mutation
 */
export const GET_COMMUNITY_CHANNELS = gql`
  query getCommunityChannels($id: ID!, $username: String){
    getCommunityChannels(id: $id){
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
  }
`;

/**
 * @description user registration for graphql mutation
 */
export const GET_COMMUNITY_CHANNELS_BY_SLUG = gql`
  query getCommunityChannelsBySlug($slug: String!, $username: String){
    getCommunityChannelsBySlug(slug: $slug){
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
  }
`;

/**
 * @description user registration for graphql mutation
 */
export const GET_DIRECT_MESSAGES_BY_SENDER = gql`
  query getDirectMessagesBySender($username: String!){
    getDirectMessagesBySender(username: $username){
      id
      createdAt
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
      seen
      delivered
      sent
    }
  }
`;

/**
 * @description user registration for graphql mutation
 */
export const COMMUNITY_EXIST = gql`
  query communityExist($text: String!){
    communityExist(text: $text){
      exist
    }
  }
`;