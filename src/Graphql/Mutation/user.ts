import gql from 'graphql-tag';
import { USER_FRAGMENT, ARTICLE_FRAGMENT } from 'Graphql/Fragment';

/**
 * @description check if current user article
 */
export const FOLLOW_USER = gql`
  mutation followUser($username: String!) {
    followUser(username: $username) {
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
      isFollowing: followers(where: {username: $username}){
        id
        username
      }
      isFollower: following(where: {username: $username}){
        id
        username
      }
      isConnected: connections(where: {username: $username}){
        id
        username
      }
    }
  }
  ${USER_FRAGMENT}
`;

/**
 * @description check if current user article
 */
export const UN_FOLLOW_USER = gql`
  mutation unFollowUser($username: String!) {
    unFollowUser(username: $username) {
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
      isFollowing: followers(where: {username: $username}){
        id
        username
      }
      isFollower: following(where: {username: $username}){
        id
        username
      }
      isConnected: connections(where: {username: $username}){
        id
        username
      }
    }
  }
  ${USER_FRAGMENT}
`;

/**
 * @description check if current user article
 */
export const UPLOAD_COVER = gql`
  mutation uploadCover($headerImage: String!) {
    uploadCover(headerImage: $headerImage) {
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
  }
  ${USER_FRAGMENT}
`;

/**
 * @description check if current user article
 */
export const UPLOAD_PHOTO = gql`
  mutation uploadPhoto($avatar: String!) {
    uploadPhoto(avatar: $avatar) {
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
  }
  ${USER_FRAGMENT}
`;