import gql from 'graphql-tag';
import { USER_FRAGMENT } from 'Graphql/Fragment';

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
      id
      tags
      category{
        name
        avatar
        id
      }
      link
      description
      author{
        firstname
        lastname
        username
        id
        email
      }
      title
      body
      type
      isPublished
      createdAt
      updatedAt
    }
  }
`;

/**
 * @description check if current user article
 */
export const ME = gql`
  query me {
    me{
      ...userFragment
      connectTo{
        to{
          email
          id
          firstname
          lastname
          username
        }
        from{
          email
          id
          firstname
          lastname
          username
        }
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