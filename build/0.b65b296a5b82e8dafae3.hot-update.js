exports.id = 0;
exports.modules = {

/***/ "./src/Graphql/Fragment/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);

/**
 * @description user graphql fragment
 */
const USER_FRAGMENT = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  fragment userFragment on User {
    id
    firstname
    lastname
    username
    email
    gender
    avatar{
      url
      name
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
/* harmony export (immutable) */ __webpack_exports__["b"] = USER_FRAGMENT;

/**
 * @description user graphql fragment
 */
const ARTICLE_FRAGMENT = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
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
/* harmony export (immutable) */ __webpack_exports__["a"] = ARTICLE_FRAGMENT;



/***/ })

};
//# sourceMappingURL=0.b65b296a5b82e8dafae3.hot-update.js.map