import gql from 'graphql-tag';
import { USER_FRAGMENT, ARTICLE_FRAGMENT } from 'Graphql/Fragment';

/**
 * @description user registration for graphql mutation
 */
export const SIGNUP_USER = gql`
  mutation signupUser($email: String!, $password: String, $firstname: String,
   $lastname: String, $userType: String!, $gender: String! ){
    signup( email: $email, password: $password, firstname: $firstname,
      lastname: $lastname, userType: $userType, gender: $gender) {
      token,
      user{
        id
      }
    }
  }
`;

/**
 * @description user login for graphql mutation
 */
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String, $firstname: String,
   $lastname: String, $userType: String!, $gender: String! ){
    login( email: $email, password: $password ) {
      token,
      user{
        id
      }
    }
  }
`;

/**
 * @description check if user exist by email
 */
export const USER_EXIST = gql`
  query userExist($email: String!){
    userExist( email: $email)
  }
`;

/**
 * @description check if current user article
 */
export const ARTICLES = gql`
  query articles($username: String, $cursor: String) {
    articles(cursor: $cursor){
      aggregate {
        count
      }
      edges {
        node {
          saved: userFavourited(where: {username: $username }) {
            username
          }
          liked: likes(where: {username: $username }) {
            username
          }
          ...articleFragment
        }
      }
      pageInfo{
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
  ${ARTICLE_FRAGMENT}
`;

/**
 * @description check if current user article
 */
export const DRAFTS = gql`
  query drafts($cursor: ID) {
    drafts(cursor: $cursor){
      aggregate {
        count
      }
      edges {
        node {
          ...articleFragment
        }
      }
      pageInfo{
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
  ${ARTICLE_FRAGMENT}
`;

/**
 * @description check if current user article
 */
export const PUBLISHED = gql`
  query published($username: String, $cursor: ID) {
    published(cursor: $cursor){
      aggregate {
        count
      }
      edges {
        node {
          saved: userFavourited(where: {username: $username }) {
            username
          }
          liked: likes(where: {username: $username }) {
            username
          }
          ...articleFragment
        }
      }
      pageInfo{
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
  ${ARTICLE_FRAGMENT}
`;

/**
 * @description check if current user article
 */
export const SAVED = gql`
  query saved($myUsername: String, $cursor: ID) {
    saved(cursor: $cursor){
      aggregate {
        count
      }
      edges {
        node {
          saved: userFavourited(where: {username: $myUsername }) {
            username
          }
          liked: likes(where: {username: $myUsername }) {
            username
          }
          ...articleFragment
        }
      }
      pageInfo{
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
  ${ARTICLE_FRAGMENT}
`;

/**
 * @description get one article by id
 */
export const GET_ARTICLE_BY_ID = gql`
  query getArticleById($id: ID!, $myUsername: String){
    getArticleById(id: $id){
      ...articleFragment
      saved: userFavourited(where: {username: $myUsername }) {
        username
      }
      liked: likes(where: {username: $myUsername }) {
        username
      }
    }
  }
  ${ARTICLE_FRAGMENT}
`;

/**
 * @description get one article by slug
 */
export const GET_ARTICLE_BY_SLUG = gql`
  query getArticleBySlug($slug: ID!, $myUsername: String){
    getArticleBySlug(slug: $slug){
      ...articleFragment
      saved: userFavourited(where: {username: $myUsername }) {
        username
      }
      liked: likes(where: {username: $myUsername }) {
        username
      }
    }
  }
  ${ARTICLE_FRAGMENT}
`;

/**
 * @description check if current user article
 */
export const ME = gql`
  query me {
    me{
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
export const GET_USER_BY_USERNAME = gql`
  query getUserByUsername($username: String!) {
    getUserByUsername(username: $username) {
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
 * @description get all countries
 */
export const ALL_COUNTRIES = gql`
  query allcountries{
    getCountry{
      id
      name
      shortName
    }
  }
`;

/**
 * @description get all departments in institution
 */
export const ALL_DEPARTMENTS = gql`
  query getDepartment($idInstitutions: ID!){
    getDepartment(idInstitutions: $idInstitutions){
      id
      name
    }
  }
`;
export const GET_LIBRARY = gql`
  query getLibrary{
    getLibrary{
      id
      createdAt
      location{
        longitude
        latitude
        type
      }
      description
      name
    }
  }
`;
/**
 * @description get all departments
 */
export const ALL_INSTITUTION = gql`
  query getInstitution($idCountry: ID!){
    getInstitution(idCountry: $idCountry){
      id
      title
    }
  }
`;

/**
 * @description get all interest
 */
export const ALL_INTEREST = gql`
  query allInterest{
    allInterest{
      id
      name
      avatar
      createdAt
    }
  }
`;

/**
 * @description get all interest
 */
export const ALL_CHAT = gql`
  query getAllChat{
    getAllChat{
      id
      name
      avatar
      createdAt
    }
  }
`;

/**
 * @description get all messages
 */
export const GET_MESSAGES = gql`
  query getMessages($channelId: ID!){
    getMessages(channelId: $channelId){
      id
      user {
        id
      }
      text
      createdAt
    }
  }
`;

/**
 * @description get all messages
 */
export const GET_ALL_MY_CHANNEL = gql`
  query getAllChat{
    getAllChat{
      title
      id
      participants{
        id
        username
      }
      messages(last: 1){
        text
      }
      author{
        username
        id
        firstname
        lastname
      }
    }
  }
`;

export const GET_COMMENTS = gql`
  query comments($articleId: ID!){
    comments(articleId: $articleId){
      id
      slug
      body
      createdAt
      author{
        id
        firstname
        lastname
        avatar
        username
        headerImage
      }
    }
    
  }
`;

export const ACTIVITY = gql`
  query activity($username: String!, $cursor: String) {
    activity(username: $username, cursor: $cursor){
      aggregate {
        count
      }
      edges {
        node {
          saved: userFavourited(where: {username: $username }) {
            username
          }
          liked: likes(where: {username: $username }) {
            username
          }
          ...articleFragment
        }
      }
      pageInfo{
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      } 
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export const GET_ARTICLES_BY_USERNAME = gql`
  query getArticlesByUsername($username: String!, $myUsername: String) {
    getArticlesByUsername(username: $myUsername){
      ...articleFragment
      saved: userFavourited(where: {username: $myUsername }) {
        username
      }
      liked: likes(where: {username: $myUsername }) {
        username
      }
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export const GET_RECOMMENDED_CON_BY_INT = gql`
  query getRecommendedConnectionsByInterest{
    getRecommendedConnectionsByInterest{
      id
      username
      type
      firstname
      lastname
      institution{
        id
        title
      }
      verified
      connections{
        username
        id
      }
      interest{
        name
        id
      }
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export const GET_SUGGESTED_CONNECTIONS = gql`
  query getSuggestedConnections{
    getSuggestedConnections{
      id
      username
      type
      firstname
      lastname
      institution{
        id
        title
      }
      verified
      connections{
        username
        id
        firstname
        lastname
      }
      interest{
        name
        id
      }
    }
  }
`;

export const GET_SIMILAR_ARTICLES = gql`
  query getSimilarArticles($id: ID!){
    getSimilarArticles(id :$id){
      ...articleFragment
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export const GET_SUGGESTED_ARTICLES = gql`
  query getSuggestedArticles{
    getSuggestedArticles{
      ...articleFragment
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export const NOTIFICATION = gql`
  query notifications{
    notifications{
      id
    }
  }
`;