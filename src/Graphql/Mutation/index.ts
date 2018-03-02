import gql from 'graphql-tag';
import { USER_FRAGMENT } from 'Graphql/Fragment';
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
  mutation addProfile($countryId: ID!, $institutionId: ID!, $departmentId: ID!){
    addProfile(countryId: $countryId, institutionId: $institutionId, courseId: $departmentId){
      ...userFragment
    }
  }
  ${USER_FRAGMENT}
`;