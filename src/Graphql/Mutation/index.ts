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
  mutation loginUser($email: String!, $password: String, $firstname: String,
   $lastname: String, $userType: String!, $gender: String! ){
    login( email: $email, password: $password ) {
      token,
      user{
        ...userFragment
      }
    }
  }
  ${USER_FRAGMENT}
`;