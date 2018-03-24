exports.id = 0;
exports.modules = {

/***/ "./src/Graphql/Query/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__ = __webpack_require__("./src/Graphql/Fragment/index.ts");


/**
 * @description user registration for graphql mutation
 */
const SIGNUP_USER = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
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
/* unused harmony export SIGNUP_USER */

/**
 * @description user login for graphql mutation
 */
const LOGIN_USER = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
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
/* unused harmony export LOGIN_USER */

/**
 * @description check if user exist by email
 */
const USER_EXIST = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query userExist($email: String!){
    userExist( email: $email)
  }
`;
/* harmony export (immutable) */ __webpack_exports__["h"] = USER_EXIST;

/**
 * @description check if current user article
 */
const ARTICLES = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query articles {
    articles{
      ...articleFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["a" /* ARTICLE_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["e"] = ARTICLES;

/**
 * @description get one article by id
 */
const GET_ARTICLE_BY_ID = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getArticleById($id: ID!){
    getArticleById(id: $id){
      ...articleFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["a" /* ARTICLE_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["f"] = GET_ARTICLE_BY_ID;

/**
 * @description get one article by slug
 */
const GET_ARTICLE_BY_SLUG = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getArticleBySlug($slug: ID!){
    getArticleBySlug(slug: $slug){
      ...articleFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["a" /* ARTICLE_FRAGMENT */]}
`;
/* unused harmony export GET_ARTICLE_BY_SLUG */

/**
 * @description check if current user article
 */
const ME = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
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
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["b" /* USER_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["g"] = ME;

/**
 * @description get all countries
 */
const ALL_COUNTRIES = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query allcountries{
    getCountry{
      id
      name
      shortName
    }
  }
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = ALL_COUNTRIES;

/**
 * @description get all departments in institution
 */
const ALL_DEPARTMENTS = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getDepartment($idInstitutions: ID!){
    getDepartment(idInstitutions: $idInstitutions){
      id
      name
    }
  }
`;
/* harmony export (immutable) */ __webpack_exports__["b"] = ALL_DEPARTMENTS;

/**
 * @description get all departments
 */
const ALL_INSTITUTION = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getInstitution($idCountry: ID!){
    getInstitution(idCountry: $idCountry){
      id
      title
    }
  }
`;
/* harmony export (immutable) */ __webpack_exports__["c"] = ALL_INSTITUTION;

/**
 * @description get all interest
 */
const ALL_INTEREST = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query allInterest{
    allInterest{
      id
      name
      avatar
      createdAt
    }
  }
`;
/* harmony export (immutable) */ __webpack_exports__["d"] = ALL_INTEREST;

/**
 * @description get all interest
 */
const ALL_CHAT = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getAllChat{
    getAllChat{
      id
      name
      avatar
      createdAt
    }
  }
`;
/* unused harmony export ALL_CHAT */



/***/ })

};
//# sourceMappingURL=0.342790e41eda56679f6e.hot-update.js.map