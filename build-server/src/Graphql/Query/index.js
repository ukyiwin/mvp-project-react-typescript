"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const Fragment_1 = require("Graphql/Fragment");
/**
 * @description user registration for graphql mutation
 */
exports.SIGNUP_USER = graphql_tag_1.default `
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
exports.LOGIN_USER = graphql_tag_1.default `
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
exports.USER_EXIST = graphql_tag_1.default `
  query userExist($email: String!){
    userExist( email: $email)
  }
`;
/**
 * @description check if current user article
 */
exports.ARTICLES = graphql_tag_1.default `
  query articles {
    articles{
      ...articleFragment
    }
  }
  ${Fragment_1.ARTICLE_FRAGMENT}
`;
/**
 * @description check if current user article
 */
exports.ME = graphql_tag_1.default `
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
  ${Fragment_1.USER_FRAGMENT}
`;
/**
 * @description get all countries
 */
exports.ALL_COUNTRIES = graphql_tag_1.default `
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
exports.ALL_DEPARTMENTS = graphql_tag_1.default `
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
exports.ALL_INSTITUTION = graphql_tag_1.default `
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
exports.ALL_INTEREST = graphql_tag_1.default `
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
exports.ALL_CHAT = graphql_tag_1.default `
  query getAllChat{
    getAllChat{
      id
      name
      avatar
      createdAt
    }
  }
`;
//# sourceMappingURL=index.js.map