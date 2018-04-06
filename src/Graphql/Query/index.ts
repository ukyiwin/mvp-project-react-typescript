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
  query articles {
    articles{
      ...articleFragment
    }
  }
  ${ARTICLE_FRAGMENT}
`;

/**
 * @description get one article by id
 */
export const GET_ARTICLE_BY_ID = gql`
  query getArticleById($id: ID!){
    getArticleById(id: $id){
      ...articleFragment
    }
  }
  ${ARTICLE_FRAGMENT}
`;

/**
 * @description get one article by slug
 */
export const GET_ARTICLE_BY_SLUG = gql`
  query getArticleBySlug($slug: ID!){
    getArticleBySlug(slug: $slug){
      ...articleFragment
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
      connectTo(where: {status: 2}){
        id
      }
      connectFrom(where: {status: 2}){
        id
      }
      avatar{
        url
        name
      }
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
      connectTo(where: {status: 2}){
        id
      }
      connectFrom(where: {status: 2}){
        id
      }
      avatar{
        url
        name
      }
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