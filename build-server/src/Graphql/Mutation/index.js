"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const Fragment_1 = require("Graphql/Fragment");
/**
 * @description user registration for graphql mutation
 */
exports.SIGNUP_USER = graphql_tag_1.default `
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
  ${Fragment_1.USER_FRAGMENT}
`;
/**
 * @description user login for graphql mutation
 * @augments email, password
 */
exports.LOGIN_USER = graphql_tag_1.default `
  mutation loginUser($email: String!, $password: String!){
    login( email: $email, password: $password ) {
      token,
      user{
        ...userFragment
      }
    }
  }
  ${Fragment_1.USER_FRAGMENT}
`;
exports.ADD_PROFILE = graphql_tag_1.default `
  mutation addProfile($photoId: ID!, $countryId: ID!, $institutionId: ID!, $departmentId: ID!){
    addProfile(photoId: $photoId, countryId: $countryId, institutionId: $institutionId, departmentId: $departmentId){
      ...userFragment
    }
  }
  ${Fragment_1.USER_FRAGMENT}
`;
exports.ADD_INTERESTS = graphql_tag_1.default `
  mutation addInterest($interests: [String!]!){
    addInterest(interests: $interests){
      ...userFragment
    }
  }
  ${Fragment_1.USER_FRAGMENT}
`;
exports.CREATE_ARTICLE = graphql_tag_1.default `
  mutation createArticle($title: String, $body: String, $tags: [String!]!, $category: [String!]!){
    createArticle(title: $title, body: $body, tags: $tags, category: $category ){
      ...articleFragment
    }
  }
  ${Fragment_1.ARTICLE_FRAGMENT}
`;
exports.PUBLISH_ARTICLE = graphql_tag_1.default `
  mutation publishArticle($id: ID!){
    publishArticle(id: $id){
      ...articleFragment
    }
  }
  ${Fragment_1.ARTICLE_FRAGMENT}
`;
//# sourceMappingURL=index.js.map