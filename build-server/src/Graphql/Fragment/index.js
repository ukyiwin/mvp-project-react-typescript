"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
/**
 * @description user graphql fragment
 */
exports.USER_FRAGMENT = graphql_tag_1.default `
  fragment userFragment on User {
    id
    firstname
    lastname
    username
    email
    gender
    avatar{
      url
    }
    type
    userType
    newConnectNot
    newCommentNot
    newMessageNot
    newProfileNot
    completedProfile
  }
`;
/**
 * @description user graphql fragment
 */
exports.ARTICLE_FRAGMENT = graphql_tag_1.default `
  fragment articleFragment on Article {
    id
    title
    body
    description
    isPublished
    createdAt
    updatedAt
    tags
    author{
      id
      username
      email
      avatar{
        url
      }
      firstname
      lastname
    }
    category{
      id
      name
      avatar
      createdAt
    }
    link
    type
  }
`;
//# sourceMappingURL=index.js.map