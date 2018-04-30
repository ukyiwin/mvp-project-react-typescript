import gql from 'graphql-tag';
import { USER_FRAGMENT, ARTICLE_FRAGMENT } from 'Graphql/Fragment';
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
  mutation createArticle($id: ID, $title: String, $body: String, $category: [String!]!, $photoId: ID){
    createArticle(id: $id, title: $title, body: $body, category: $category, photoId: $photoId ){
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

export const DELETE_ARTICLE = gql`
  mutation deleteArticle($id: ID!){
    deleteArticle(id: $id){
      ...articleFragment
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export const SEND_MESSAGE_BY_SLUG = gql`
  mutation sendMessageBySlug($slug: String!, $text: String! ) {
    sendMessageBySlug(slug: $slug, text: $text){
      id
      createdAt
      updatedAt
      text
      user{
        id
        avatar
        username
        firstname
        lastname
        email
      }
      seen
      delivered
      sent
      channel{
        id
        slug
        title
      }
    }
  }
`;

export const SEND_DIRECT_MESSAGE = gql`
  mutation sendDirectMessage($username: String!, $text: String! ) {
    sendDirectMessage(username: $username, text: $text){
      id
      createdAt
      updatedAt
      text
      seen
      delivered
      sent
      to{
        id
        username
        firstname
        lastname
        email
      }
      from{
        id
        username
        firstname
        lastname
        email
      }
    }
  }
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

export const UPDATE_NEW_COMMUNITY_NOT = gql`
  mutation updateNewCommunityNot($value: Boolean!){
    updateNewCommunityNot(value: $value){
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const UPDATE_TOP_ARTICLE_NOT = gql`
  mutation updateTopArticleNot($value: Boolean!){
    updateTopArticleNot(value: $value){
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const UPDATE_NEW_COMMENT_NOT = gql`
  mutation updateNewCommentNot($value: Boolean!){
    updateNewCommentNot(value: $value){
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const UPDATE_NEW_MESSAGE_NOT = gql`
  mutation updateNewMessageNot($value: Boolean!){
    updateNewMessageNot(value: $value){
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const UPDATE_NEW_CONNECTION_NOT = gql`
  mutation updateNewConnectNot($value: Boolean!){
    updateNewConnectNot(value: $value){
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const UPDATE_MENTION_ME_NOT = gql`
  mutation updateMentionMeNot($value: Boolean!){
    updateMentionMeNot(value: $value){
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const LOCATION_SHARING = gql`
  mutation locationSharing($value: Boolean!){
    locationSharing(value: $value){
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const ENABLE_MOBILE_PUSH_NOT = gql`
  mutation enableMobilePushNot($value: Boolean!){
    enableMobilePushNot(value: $value){
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const ENABLE_WEB_PUSH_NOT = gql`
  mutation enableMobilePushNot($value: Boolean!){
    enableBrowserPushNot(value: $value){
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const UPDATE_USER_PROFILE = gql`
  mutation updateUserProfile($firstname: String, $lastname: String, $bio: String, $username: String, $role: String){
    updateUserProfile(firstname: $firstname, lastname: $lastname, bio: $bio, username: $username, role: $role){
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;