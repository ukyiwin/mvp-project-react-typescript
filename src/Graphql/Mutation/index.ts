import gql from 'graphql-tag';
import { USER_FRAGMENT, ARTICLE_FRAGMENT, MESSAGE_FRAGMENT } from 'Graphql/Fragment';
/**
 * @description user registration for graphql mutation
 */
export const SIGNUP_USER = gql`
  mutation signupUser($email: String!, $password: String!, $username: String!,, $firstname: String!,
   $lastname: String!, $userType: String!, $gender: String! ){
    signup( email: $email, password: $password, username: $username, firstname: $firstname,
      lastname: $lastname, type: $userType, gender: $gender) {
      token,
      user{
        ...userFragment
      }
    }
  }
  ${USER_FRAGMENT}
`;

/**
 * @description user login for graphql mutation
 * @augments email, password
 */
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!){
    login( email: $email, password: $password ) {
      token,
      user{
        ...userFragment
      }
    }
  }
  ${USER_FRAGMENT}
`;

export const ADD_PROFILE = gql`
  mutation addProfile($photoId: ID!, $countryId: ID!, $institutionId: ID!, $departmentId: ID!){
    addProfile(photoId: $photoId, countryId: $countryId, institutionId: $institutionId, departmentId: $departmentId){
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const ADD_INTERESTS = gql`
  mutation addInterest($interests: [String!]!){
    addInterest(interests: $interests){
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const COMPLETE_SIGNUP = gql`
  mutation {
    finishSignup{
      success
    }
  }
`;

export const CREATE_ARTICLE = gql`
  mutation createArticle($id: ID, $title: String, $body: String, $tags: [String!]!, $category: [String!]!, $photoId: ID){
    createArticle(id: $id, title: $title, body: $body, tags: $tags, category: $category, photoId: $photoId ){
      ...articleFragment
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export const PUBLISH_ARTICLE = gql`
  mutation publishArticle($id: ID!){
    publishArticle(id: $id){
      ...articleFragment
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export const CREATE_MESSAGE = gql`
  mutation createMessage($channelId: ID!, $text: String!){
    createMessage(channelId: $id, text: $text){
      text
      user {
        id
      }
      cahnnel {
        id
      }
    }
  }
  ${MESSAGE_FRAGMENT}
`;

export const CREATE_COMMENT = gql`
  mutation commentArticle($articleId: ID!, $text: String!){
    commentArticle(articleId: $articleId, text: $text){
      id
      slug
      createdAt
      body
      article{
        id
        slug
      }
      author{
        id
        username
        firstname
        lastname
        avatar
        headerImage
      }
    }
  }
`;

export const LIKE_ARTICLE = gql`
  mutation likeArticle($id: ID!) {
  likeArticle(id: $id){
      id
      title
      title
    }
  }
`;

export const UNLIKE_ARTICLE = gql`
  mutation unLikeArticle($id: ID!){
    unLikeArticle(id: $id){
      id
      title
      title
    }
  }
`;

export const SAVE_ARTICLE = gql`
  mutation saveArticle($id: ID!){
    favourite(id: $id){
      id
      title
      title
    }
  }
`;

export const UNSAVE_ARTICLE = gql`
  mutation unSaveArticle($id: ID!){
    unFavourite(id: $id){
      id
      title
      title
    }
  }
`;