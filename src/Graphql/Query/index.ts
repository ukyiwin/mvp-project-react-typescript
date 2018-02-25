import gql from 'graphql-tag';

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
      title
      body
      type
      isPublished
      createdAt
      updatedAt
      author{
        email
        id
        firstname
        lastname
      }
    }
  }
`;

/**
 * @description check if current user article
 */
export const ME = gql`
  query me {
    me{
      id
      email
      username
      password
      firstname
      lastname
      gender
      favourites{
        id
        title
        content
        slug
      }
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
      type
      articles{
        id
        title
        body
      }
    }
  }
`;