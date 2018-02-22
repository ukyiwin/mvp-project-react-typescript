type NonNull<T> = T;
type List<T> = T[];
type Optional<T> = T | null;

export interface Response {

    data: Query | Mutation | Subscription | null;

    errors?: ErrorResponse[];
}

export interface ErrorResponse {

    locations: ErrorLocation[];

    message: string;
}

export interface ErrorLocation {

    line: number;

    column: number;
}

/**
 * The `Boolean` scalar type represents `true` or `false`.
 */
export type Boolean = boolean;

export type DateTime = string;

/**
 * The `ID` scalar type represents a unique identifier, often used to refetch an 
 * object or as key for a cache. The ID type appears in a JSON response as a 
 * String; however, it is not intended to be human-readable. When expected as an 
 * input type, any string (such as `"4"`) or integer (such as `4`) input value will 
 * be accepted as an ID.
 */
export type ID = string;

/**
 * The `Int` scalar type represents non-fractional signed whole numeric values. Int 
 * can represent values between -(2^31) and 2^31 - 1.
 */
export type Int = number;

/**
 * The `Long` scalar type represents non-fractional signed whole numeric values. 
 * Long can represent values between -(2^63) and 2^63 - 1.
 */
export type Long = string;

/**
 * The `String` scalar type represents textual data, represented as UTF-8 character 
 * sequences. The String type is most often used by GraphQL to represent free-form 
 * human-readable text.
 */
export type String = string;

/**
 * A Directive can be adjacent to many parts of the GraphQL language, a 
 * __DirectiveLocation describes one such possible adjacencies.
 */
export type __DirectiveLocation = (

    /**
     * Location adjacent to a query operation.
     */
    "QUERY" |

    /**
     * Location adjacent to a mutation operation.
     */
    "MUTATION" |

    /**
     * Location adjacent to a subscription operation.
     */
    "SUBSCRIPTION" |

    /**
     * Location adjacent to a field.
     */
    "FIELD" |

    /**
     * Location adjacent to a fragment definition.
     */
    "FRAGMENT_DEFINITION" |

    /**
     * Location adjacent to a fragment spread.
     */
    "FRAGMENT_SPREAD" |

    /**
     * Location adjacent to an inline fragment.
     */
    "INLINE_FRAGMENT" |

    /**
     * Location adjacent to a schema definition.
     */
    "SCHEMA" |

    /**
     * Location adjacent to a scalar definition.
     */
    "SCALAR" |

    /**
     * Location adjacent to an object type definition.
     */
    "OBJECT" |

    /**
     * Location adjacent to a field definition.
     */
    "FIELD_DEFINITION" |

    /**
     * Location adjacent to an argument definition.
     */
    "ARGUMENT_DEFINITION" |

    /**
     * Location adjacent to an interface definition.
     */
    "INTERFACE" |

    /**
     * Location adjacent to a union definition.
     */
    "UNION" |

    /**
     * Location adjacent to an enum definition.
     */
    "ENUM" |

    /**
     * Location adjacent to an enum value definition.
     */
    "ENUM_VALUE" |

    /**
     * INPUT_OBJECT
     */
    "INPUT_OBJECT" |

    /**
     * Location adjacent to an input object field definition.
     */
    "INPUT_FIELD_DEFINITION"
);

/**
 * An enum describing what kind of type a given `__Type` is.
 */
export type __TypeKind = (

    /**
     * Indicates this type is a scalar.
     */
    "SCALAR" |

    /**
     * Indicates this type is an object. `fields` and `interfaces` are valid fields.
     */
    "OBJECT" |

    /**
     * Indicates this type is an interface. `fields` and `possibleTypes` are valid 
     * fields.
     */
    "INTERFACE" |

    /**
     * Indicates this type is a union. `possibleTypes` is a valid field.
     */
    "UNION" |

    /**
     * Indicates this type is an enum. `enumValues` is a valid field.
     */
    "ENUM" |

    /**
     * Indicates this type is an input object. `inputFields` is a valid field.
     */
    "INPUT_OBJECT" |

    /**
     * Indicates this type is a list. `ofType` is a valid field.
     */
    "LIST" |

    /**
     * Indicates this type is a non-null. `ofType` is a valid field.
     */
    "NON_NULL"
);

export type Arcticletype = (

    "External" |

    "Internal"
);

export type ArticleOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "isPublished_ASC" |

    "isPublished_DESC" |

    "title_ASC" |

    "title_DESC" |

    "body_ASC" |

    "body_DESC" |

    "type_ASC" |

    "type_DESC"
);

export type CountryOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "title_ASC" |

    "title_DESC" |

    "name_ASC" |

    "name_DESC"
);

export type DepartmentOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "name_ASC" |

    "name_DESC"
);

export type FacultyOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "name_ASC" |

    "name_DESC"
);

export type InstitutionsOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "title_ASC" |

    "title_DESC" |

    "type_ASC" |

    "type_DESC"
);

export type InstitutionType = (

    "University" |

    "College"
);

export type MutationType = (

    "CREATED" |

    "UPDATED" |

    "DELETED"
);

export type PostOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "isPublished_ASC" |

    "isPublished_DESC" |

    "title_ASC" |

    "title_DESC" |

    "text_ASC" |

    "text_DESC"
);

export type SchoolOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "title_ASC" |

    "title_DESC"
);

export type UserOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "email_ASC" |

    "email_DESC" |

    "username_ASC" |

    "username_DESC" |

    "password_ASC" |

    "password_DESC" |

    "name_ASC" |

    "name_DESC" |

    "firstname_ASC" |

    "firstname_DESC" |

    "lastname_ASC" |

    "lastname_DESC" |

    "gender_ASC" |

    "gender_DESC" |

    "type_ASC" |

    "type_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC"
);

export type Usertype = (

    "Student" |

    "Lecturer" |

    "Admin" |

    "Editor" |

    "Super"
);

/**
 * An object with an ID
 */
export interface Node {

    /**
     * The id of the object.
     */
    id: NonNull<ID>;
}

/**
 * A Directive provides a way to describe alternate runtime execution and type 
 * validation behavior in a GraphQL document.

 * In some cases, you need to provide options to alter GraphQL’s execution behavior 
 * in ways field arguments will not suffice, such as conditionally including or 
 * skipping a field. Directives provide this by describing additional information 
 * to the executor.
 */
export interface __Directive {

    name: NonNull<String>;

    description?: Optional<String>;

    locations: NonNull<List<NonNull<__DirectiveLocation>>>;

    args: NonNull<List<NonNull<__InputValue>>>;

    /**
     * @deprecated Use `locations`.
     */
    onOperation: NonNull<Boolean>;

    /**
     * @deprecated Use `locations`.
     */
    onFragment: NonNull<Boolean>;

    /**
     * @deprecated Use `locations`.
     */
    onField: NonNull<Boolean>;
}

/**
 * One possible value for a given Enum. Enum values are unique values, not a 
 * placeholder for a string or numeric value. However an Enum value is returned in 
 * a JSON response as a string.
 */
export interface __EnumValue {

    name: NonNull<String>;

    description?: Optional<String>;

    isDeprecated: NonNull<Boolean>;

    deprecationReason?: Optional<String>;
}

/**
 * Object and Interface types are described by a list of Fields, each of which has 
 * a name, potentially a list of arguments, and a return type.
 */
export interface __Field {

    name: NonNull<String>;

    description?: Optional<String>;

    args: NonNull<List<NonNull<__InputValue>>>;

    type: NonNull<__Type>;

    isDeprecated: NonNull<Boolean>;

    deprecationReason?: Optional<String>;
}

/**
 * Arguments provided to Fields or Directives and the input fields of an 
 * InputObject are represented as Input Values which describe their type and 
 * optionally a default value.
 */
export interface __InputValue {

    name: NonNull<String>;

    description?: Optional<String>;

    type: NonNull<__Type>;

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue?: Optional<String>;
}

/**
 * A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all 
 * available types and directives on the server, as well as the entry points for 
 * query, mutation, and subscription operations.
 */
export interface __Schema {

    /**
     * A list of all types supported by this server.
     */
    types: NonNull<List<NonNull<__Type>>>;

    /**
     * The type that query operations will be rooted at.
     */
    queryType: NonNull<__Type>;

    /**
     * If this server supports mutation, the type that mutation operations will be 
     * rooted at.
     */
    mutationType?: Optional<__Type>;

    /**
     * If this server support subscription, the type that subscription operations will 
     * be rooted at.
     */
    subscriptionType?: Optional<__Type>;

    /**
     * A list of all directives supported by this server.
     */
    directives: NonNull<List<NonNull<__Directive>>>;
}

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of 
 * types in GraphQL as represented by the `__TypeKind` enum.

 * Depending on the kind of a type, certain fields describe information about that 
 * type. Scalar types provide no information beyond a name and description, while 
 * Enum types provide their values. Object and Interface types provide the fields 
 * they describe. Abstract types, Union and Interface, provide the Object types 
 * possible at runtime. List and NonNull types compose other types.
 */
export interface __Type {

    kind: NonNull<__TypeKind>;

    name?: Optional<String>;

    description?: Optional<String>;

    fields?: List<NonNull<__Field>>;

    interfaces?: List<NonNull<__Type>>;

    possibleTypes?: List<NonNull<__Type>>;

    enumValues?: List<NonNull<__EnumValue>>;

    inputFields?: List<NonNull<__InputValue>>;

    ofType?: Optional<__Type>;
}

export interface AggregateArticle {

    count: NonNull<Int>;
}

export interface AggregateCountry {

    count: NonNull<Int>;
}

export interface AggregateDepartment {

    count: NonNull<Int>;
}

export interface AggregateFaculty {

    count: NonNull<Int>;
}

export interface AggregateInstitutions {

    count: NonNull<Int>;
}

export interface AggregatePost {

    count: NonNull<Int>;
}

export interface AggregateSchool {

    count: NonNull<Int>;
}

export interface AggregateUser {

    count: NonNull<Int>;
}

export interface Article extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    isPublished: NonNull<Boolean>;

    title: NonNull<String>;

    body: NonNull<String>;

    type?: Optional<Arcticletype>;

    author: NonNull<User>;
}

/**
 * A connection to a list of items.
 */
export interface ArticleConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<ArticleEdge>>>;

    aggregate: NonNull<AggregateArticle>;
}

/**
 * An edge in a connection.
 */
export interface ArticleEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Article>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface ArticlePreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    isPublished: NonNull<Boolean>;

    title: NonNull<String>;

    body: NonNull<String>;

    type?: Optional<Arcticletype>;
}

export interface ArticleSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Article>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<ArticlePreviousValues>;
}

export interface BatchPayload {

    /**
     * The number of nodes that have been affected by the Batch operation.
     */
    count: NonNull<Long>;
}

export interface Country extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    title: NonNull<String>;

    name: NonNull<String>;
}

/**
 * A connection to a list of items.
 */
export interface CountryConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<CountryEdge>>>;

    aggregate: NonNull<AggregateCountry>;
}

/**
 * An edge in a connection.
 */
export interface CountryEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Country>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface CountryPreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    title: NonNull<String>;

    name: NonNull<String>;
}

export interface CountrySubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Country>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<CountryPreviousValues>;
}

export interface Department extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    name: NonNull<String>;

    Country: NonNull<Country>;
}

/**
 * A connection to a list of items.
 */
export interface DepartmentConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<DepartmentEdge>>>;

    aggregate: NonNull<AggregateDepartment>;
}

/**
 * An edge in a connection.
 */
export interface DepartmentEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Department>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface DepartmentPreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    name: NonNull<String>;
}

export interface DepartmentSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Department>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<DepartmentPreviousValues>;
}

export interface Faculty extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    name: NonNull<String>;

    school: NonNull<School>;
}

/**
 * A connection to a list of items.
 */
export interface FacultyConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<FacultyEdge>>>;

    aggregate: NonNull<AggregateFaculty>;
}

/**
 * An edge in a connection.
 */
export interface FacultyEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Faculty>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface FacultyPreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    name: NonNull<String>;
}

export interface FacultySubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Faculty>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<FacultyPreviousValues>;
}

export interface Institutions extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    title: NonNull<String>;

    type: NonNull<InstitutionType>;

    Country: NonNull<Country>;
}

/**
 * A connection to a list of items.
 */
export interface InstitutionsConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<InstitutionsEdge>>>;

    aggregate: NonNull<AggregateInstitutions>;
}

/**
 * An edge in a connection.
 */
export interface InstitutionsEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Institutions>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface InstitutionsPreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    title: NonNull<String>;

    type: NonNull<InstitutionType>;
}

export interface InstitutionsSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Institutions>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<InstitutionsPreviousValues>;
}

export interface Mutation {

    createPost: NonNull<Post>;

    createArticle: NonNull<Article>;

    createCountry: NonNull<Country>;

    createInstitutions: NonNull<Institutions>;

    createSchool: NonNull<School>;

    createFaculty: NonNull<Faculty>;

    createDepartment: NonNull<Department>;

    createUser: NonNull<User>;

    updatePost?: Optional<Post>;

    updateArticle?: Optional<Article>;

    updateCountry?: Optional<Country>;

    updateInstitutions?: Optional<Institutions>;

    updateSchool?: Optional<School>;

    updateFaculty?: Optional<Faculty>;

    updateDepartment?: Optional<Department>;

    updateUser?: Optional<User>;

    deletePost?: Optional<Post>;

    deleteArticle?: Optional<Article>;

    deleteCountry?: Optional<Country>;

    deleteInstitutions?: Optional<Institutions>;

    deleteSchool?: Optional<School>;

    deleteFaculty?: Optional<Faculty>;

    deleteDepartment?: Optional<Department>;

    deleteUser?: Optional<User>;

    upsertPost: NonNull<Post>;

    upsertArticle: NonNull<Article>;

    upsertCountry: NonNull<Country>;

    upsertInstitutions: NonNull<Institutions>;

    upsertSchool: NonNull<School>;

    upsertFaculty: NonNull<Faculty>;

    upsertDepartment: NonNull<Department>;

    upsertUser: NonNull<User>;

    updateManyPosts: NonNull<BatchPayload>;

    updateManyArticles: NonNull<BatchPayload>;

    updateManyCountries: NonNull<BatchPayload>;

    updateManyInstitutionses: NonNull<BatchPayload>;

    updateManySchools: NonNull<BatchPayload>;

    updateManyFaculties: NonNull<BatchPayload>;

    updateManyDepartments: NonNull<BatchPayload>;

    updateManyUsers: NonNull<BatchPayload>;

    deleteManyPosts: NonNull<BatchPayload>;

    deleteManyArticles: NonNull<BatchPayload>;

    deleteManyCountries: NonNull<BatchPayload>;

    deleteManyInstitutionses: NonNull<BatchPayload>;

    deleteManySchools: NonNull<BatchPayload>;

    deleteManyFaculties: NonNull<BatchPayload>;

    deleteManyDepartments: NonNull<BatchPayload>;

    deleteManyUsers: NonNull<BatchPayload>;
}

/**
 * Information about pagination in a connection.
 */
export interface PageInfo {

    /**
     * When paginating forwards, are there more items?
     */
    hasNextPage: NonNull<Boolean>;

    /**
     * When paginating backwards, are there more items?
     */
    hasPreviousPage: NonNull<Boolean>;

    /**
     * When paginating backwards, the cursor to continue.
     */
    startCursor?: Optional<String>;

    /**
     * When paginating forwards, the cursor to continue.
     */
    endCursor?: Optional<String>;
}

export interface Post extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    isPublished: NonNull<Boolean>;

    title: NonNull<String>;

    text: NonNull<String>;
}

/**
 * A connection to a list of items.
 */
export interface PostConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<PostEdge>>>;

    aggregate: NonNull<AggregatePost>;
}

/**
 * An edge in a connection.
 */
export interface PostEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Post>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface PostPreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    isPublished: NonNull<Boolean>;

    title: NonNull<String>;

    text: NonNull<String>;
}

export interface PostSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Post>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<PostPreviousValues>;
}

export interface Query {

    posts: NonNull<List<Optional<Post>>>;

    articles: NonNull<List<Optional<Article>>>;

    countries: NonNull<List<Optional<Country>>>;

    institutionses: NonNull<List<Optional<Institutions>>>;

    schools: NonNull<List<Optional<School>>>;

    faculties: NonNull<List<Optional<Faculty>>>;

    departments: NonNull<List<Optional<Department>>>;

    users: NonNull<List<Optional<User>>>;

    post?: Optional<Post>;

    article?: Optional<Article>;

    country?: Optional<Country>;

    institutions?: Optional<Institutions>;

    school?: Optional<School>;

    faculty?: Optional<Faculty>;

    department?: Optional<Department>;

    user?: Optional<User>;

    postsConnection: NonNull<PostConnection>;

    articlesConnection: NonNull<ArticleConnection>;

    countriesConnection: NonNull<CountryConnection>;

    institutionsesConnection: NonNull<InstitutionsConnection>;

    schoolsConnection: NonNull<SchoolConnection>;

    facultiesConnection: NonNull<FacultyConnection>;

    departmentsConnection: NonNull<DepartmentConnection>;

    usersConnection: NonNull<UserConnection>;

    /**
     * Fetches an object given its ID
     */
    node?: Optional<Node>;
}

export interface School extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    title: NonNull<String>;

    Country: NonNull<Country>;
}

/**
 * A connection to a list of items.
 */
export interface SchoolConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<SchoolEdge>>>;

    aggregate: NonNull<AggregateSchool>;
}

/**
 * An edge in a connection.
 */
export interface SchoolEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<School>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface SchoolPreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    title: NonNull<String>;
}

export interface SchoolSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<School>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<SchoolPreviousValues>;
}

export interface Subscription {

    post?: Optional<PostSubscriptionPayload>;

    article?: Optional<ArticleSubscriptionPayload>;

    country?: Optional<CountrySubscriptionPayload>;

    institutions?: Optional<InstitutionsSubscriptionPayload>;

    school?: Optional<SchoolSubscriptionPayload>;

    faculty?: Optional<FacultySubscriptionPayload>;

    department?: Optional<DepartmentSubscriptionPayload>;

    user?: Optional<UserSubscriptionPayload>;
}

export interface User extends Node {

    id: NonNull<ID>;

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    name?: Optional<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    followedBy?: List<NonNull<User>>;

    following?: List<NonNull<User>>;

    type: NonNull<Usertype>;

    articles?: List<NonNull<Article>>;
}

/**
 * A connection to a list of items.
 */
export interface UserConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<UserEdge>>>;

    aggregate: NonNull<AggregateUser>;
}

/**
 * An edge in a connection.
 */
export interface UserEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<User>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface UserPreviousValues {

    id: NonNull<ID>;

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    name?: Optional<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type: NonNull<Usertype>;
}

export interface UserSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<User>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<UserPreviousValues>;
}

export interface ArticleCreateInput {

    isPublished?: Optional<Boolean>;

    title: NonNull<String>;

    body: NonNull<String>;

    type?: Optional<Arcticletype>;

    author: NonNull<UserCreateOneWithoutArticlesInput>;
}

export interface ArticleCreateManyWithoutAuthorInput {

    create?: List<NonNull<ArticleCreateWithoutAuthorInput>>;

    connect?: List<NonNull<ArticleWhereUniqueInput>>;
}

export interface ArticleCreateWithoutAuthorInput {

    isPublished?: Optional<Boolean>;

    title: NonNull<String>;

    body: NonNull<String>;

    type?: Optional<Arcticletype>;
}

export interface ArticleSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<ArticleSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<ArticleSubscriptionWhereInput>>;

    /**
     * The subscription event gets dispatched when it's listed in mutation_in
     */
    mutation_in?: List<NonNull<MutationType>>;

    /**
     * The subscription event gets only dispatched when one of the updated fields names 
     * is included in this list
     */
    updatedFields_contains?: Optional<String>;

    /**
     * The subscription event gets only dispatched when all of the field names included 
     * in this list have been updated
     */
    updatedFields_contains_every?: List<NonNull<String>>;

    /**
     * The subscription event gets only dispatched when some of the field names 
     * included in this list have been updated
     */
    updatedFields_contains_some?: List<NonNull<String>>;

    node?: Optional<ArticleWhereInput>;
}

export interface ArticleUpdateInput {

    isPublished?: Optional<Boolean>;

    title?: Optional<String>;

    body?: Optional<String>;

    type?: Optional<Arcticletype>;

    author?: Optional<UserUpdateOneWithoutArticlesInput>;
}

export interface ArticleUpdateManyWithoutAuthorInput {

    create?: List<NonNull<ArticleCreateWithoutAuthorInput>>;

    connect?: List<NonNull<ArticleWhereUniqueInput>>;

    disconnect?: List<NonNull<ArticleWhereUniqueInput>>;

    delete?: List<NonNull<ArticleWhereUniqueInput>>;

    update?: List<NonNull<ArticleUpdateWithoutAuthorInput>>;

    upsert?: List<NonNull<ArticleUpsertWithoutAuthorInput>>;
}

export interface ArticleUpdateWithoutAuthorDataInput {

    isPublished?: Optional<Boolean>;

    title?: Optional<String>;

    body?: Optional<String>;

    type?: Optional<Arcticletype>;
}

export interface ArticleUpdateWithoutAuthorInput {

    where: NonNull<ArticleWhereUniqueInput>;

    data: NonNull<ArticleUpdateWithoutAuthorDataInput>;
}

export interface ArticleUpsertWithoutAuthorInput {

    where: NonNull<ArticleWhereUniqueInput>;

    update: NonNull<ArticleUpdateWithoutAuthorDataInput>;

    create: NonNull<ArticleCreateWithoutAuthorInput>;
}

export interface ArticleWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<ArticleWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<ArticleWhereInput>>;

    id?: Optional<ID>;

    /**
     * All values that are not equal to given value.
     */
    id_not?: Optional<ID>;

    /**
     * All values that are contained in given list.
     */
    id_in?: List<NonNull<ID>>;

    /**
     * All values that are not contained in given list.
     */
    id_not_in?: List<NonNull<ID>>;

    /**
     * All values less than the given value.
     */
    id_lt?: Optional<ID>;

    /**
     * All values less than or equal the given value.
     */
    id_lte?: Optional<ID>;

    /**
     * All values greater than the given value.
     */
    id_gt?: Optional<ID>;

    /**
     * All values greater than or equal the given value.
     */
    id_gte?: Optional<ID>;

    /**
     * All values containing the given string.
     */
    id_contains?: Optional<ID>;

    /**
     * All values not containing the given string.
     */
    id_not_contains?: Optional<ID>;

    /**
     * All values starting with the given string.
     */
    id_starts_with?: Optional<ID>;

    /**
     * All values not starting with the given string.
     */
    id_not_starts_with?: Optional<ID>;

    /**
     * All values ending with the given string.
     */
    id_ends_with?: Optional<ID>;

    /**
     * All values not ending with the given string.
     */
    id_not_ends_with?: Optional<ID>;

    createdAt?: Optional<DateTime>;

    /**
     * All values that are not equal to given value.
     */
    createdAt_not?: Optional<DateTime>;

    /**
     * All values that are contained in given list.
     */
    createdAt_in?: List<NonNull<DateTime>>;

    /**
     * All values that are not contained in given list.
     */
    createdAt_not_in?: List<NonNull<DateTime>>;

    /**
     * All values less than the given value.
     */
    createdAt_lt?: Optional<DateTime>;

    /**
     * All values less than or equal the given value.
     */
    createdAt_lte?: Optional<DateTime>;

    /**
     * All values greater than the given value.
     */
    createdAt_gt?: Optional<DateTime>;

    /**
     * All values greater than or equal the given value.
     */
    createdAt_gte?: Optional<DateTime>;

    updatedAt?: Optional<DateTime>;

    /**
     * All values that are not equal to given value.
     */
    updatedAt_not?: Optional<DateTime>;

    /**
     * All values that are contained in given list.
     */
    updatedAt_in?: List<NonNull<DateTime>>;

    /**
     * All values that are not contained in given list.
     */
    updatedAt_not_in?: List<NonNull<DateTime>>;

    /**
     * All values less than the given value.
     */
    updatedAt_lt?: Optional<DateTime>;

    /**
     * All values less than or equal the given value.
     */
    updatedAt_lte?: Optional<DateTime>;

    /**
     * All values greater than the given value.
     */
    updatedAt_gt?: Optional<DateTime>;

    /**
     * All values greater than or equal the given value.
     */
    updatedAt_gte?: Optional<DateTime>;

    isPublished?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    isPublished_not?: Optional<Boolean>;

    title?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    title_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    title_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    title_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    title_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    title_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    title_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    title_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    title_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    title_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    title_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    title_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    title_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    title_not_ends_with?: Optional<String>;

    body?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    body_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    body_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    body_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    body_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    body_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    body_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    body_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    body_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    body_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    body_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    body_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    body_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    body_not_ends_with?: Optional<String>;

    type?: Optional<Arcticletype>;

    /**
     * All values that are not equal to given value.
     */
    type_not?: Optional<Arcticletype>;

    /**
     * All values that are contained in given list.
     */
    type_in?: List<NonNull<Arcticletype>>;

    /**
     * All values that are not contained in given list.
     */
    type_not_in?: List<NonNull<Arcticletype>>;

    author?: Optional<UserWhereInput>;
}

export interface ArticleWhereUniqueInput {

    id?: Optional<ID>;
}

export interface CountryCreateInput {

    title: NonNull<String>;

    name: NonNull<String>;
}

export interface CountryCreateOneInput {

    create?: Optional<CountryCreateInput>;

    connect?: Optional<CountryWhereUniqueInput>;
}

export interface CountrySubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<CountrySubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<CountrySubscriptionWhereInput>>;

    /**
     * The subscription event gets dispatched when it's listed in mutation_in
     */
    mutation_in?: List<NonNull<MutationType>>;

    /**
     * The subscription event gets only dispatched when one of the updated fields names 
     * is included in this list
     */
    updatedFields_contains?: Optional<String>;

    /**
     * The subscription event gets only dispatched when all of the field names included 
     * in this list have been updated
     */
    updatedFields_contains_every?: List<NonNull<String>>;

    /**
     * The subscription event gets only dispatched when some of the field names 
     * included in this list have been updated
     */
    updatedFields_contains_some?: List<NonNull<String>>;

    node?: Optional<CountryWhereInput>;
}

export interface CountryUpdateDataInput {

    title?: Optional<String>;

    name?: Optional<String>;
}

export interface CountryUpdateInput {

    title?: Optional<String>;

    name?: Optional<String>;
}

export interface CountryUpdateNestedInput {

    where: NonNull<CountryWhereUniqueInput>;

    data: NonNull<CountryUpdateDataInput>;
}

export interface CountryUpdateOneInput {

    create?: Optional<CountryCreateInput>;

    connect?: Optional<CountryWhereUniqueInput>;

    disconnect?: Optional<CountryWhereUniqueInput>;

    delete?: Optional<CountryWhereUniqueInput>;

    update?: Optional<CountryUpdateNestedInput>;

    upsert?: Optional<CountryUpsertNestedInput>;
}

export interface CountryUpsertNestedInput {

    where: NonNull<CountryWhereUniqueInput>;

    update: NonNull<CountryUpdateDataInput>;

    create: NonNull<CountryCreateInput>;
}

export interface CountryWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<CountryWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<CountryWhereInput>>;

    id?: Optional<ID>;

    /**
     * All values that are not equal to given value.
     */
    id_not?: Optional<ID>;

    /**
     * All values that are contained in given list.
     */
    id_in?: List<NonNull<ID>>;

    /**
     * All values that are not contained in given list.
     */
    id_not_in?: List<NonNull<ID>>;

    /**
     * All values less than the given value.
     */
    id_lt?: Optional<ID>;

    /**
     * All values less than or equal the given value.
     */
    id_lte?: Optional<ID>;

    /**
     * All values greater than the given value.
     */
    id_gt?: Optional<ID>;

    /**
     * All values greater than or equal the given value.
     */
    id_gte?: Optional<ID>;

    /**
     * All values containing the given string.
     */
    id_contains?: Optional<ID>;

    /**
     * All values not containing the given string.
     */
    id_not_contains?: Optional<ID>;

    /**
     * All values starting with the given string.
     */
    id_starts_with?: Optional<ID>;

    /**
     * All values not starting with the given string.
     */
    id_not_starts_with?: Optional<ID>;

    /**
     * All values ending with the given string.
     */
    id_ends_with?: Optional<ID>;

    /**
     * All values not ending with the given string.
     */
    id_not_ends_with?: Optional<ID>;

    createdAt?: Optional<DateTime>;

    /**
     * All values that are not equal to given value.
     */
    createdAt_not?: Optional<DateTime>;

    /**
     * All values that are contained in given list.
     */
    createdAt_in?: List<NonNull<DateTime>>;

    /**
     * All values that are not contained in given list.
     */
    createdAt_not_in?: List<NonNull<DateTime>>;

    /**
     * All values less than the given value.
     */
    createdAt_lt?: Optional<DateTime>;

    /**
     * All values less than or equal the given value.
     */
    createdAt_lte?: Optional<DateTime>;

    /**
     * All values greater than the given value.
     */
    createdAt_gt?: Optional<DateTime>;

    /**
     * All values greater than or equal the given value.
     */
    createdAt_gte?: Optional<DateTime>;

    updatedAt?: Optional<DateTime>;

    /**
     * All values that are not equal to given value.
     */
    updatedAt_not?: Optional<DateTime>;

    /**
     * All values that are contained in given list.
     */
    updatedAt_in?: List<NonNull<DateTime>>;

    /**
     * All values that are not contained in given list.
     */
    updatedAt_not_in?: List<NonNull<DateTime>>;

    /**
     * All values less than the given value.
     */
    updatedAt_lt?: Optional<DateTime>;

    /**
     * All values less than or equal the given value.
     */
    updatedAt_lte?: Optional<DateTime>;

    /**
     * All values greater than the given value.
     */
    updatedAt_gt?: Optional<DateTime>;

    /**
     * All values greater than or equal the given value.
     */
    updatedAt_gte?: Optional<DateTime>;

    title?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    title_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    title_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    title_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    title_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    title_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    title_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    title_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    title_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    title_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    title_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    title_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    title_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    title_not_ends_with?: Optional<String>;

    name?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    name_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    name_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    name_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    name_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    name_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    name_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    name_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    name_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    name_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    name_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    name_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    name_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    name_not_ends_with?: Optional<String>;
}

export interface CountryWhereUniqueInput {

    id?: Optional<ID>;
}

export interface DepartmentCreateInput {

    name: NonNull<String>;

    Country: NonNull<CountryCreateOneInput>;
}

export interface DepartmentSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<DepartmentSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<DepartmentSubscriptionWhereInput>>;

    /**
     * The subscription event gets dispatched when it's listed in mutation_in
     */
    mutation_in?: List<NonNull<MutationType>>;

    /**
     * The subscription event gets only dispatched when one of the updated fields names 
     * is included in this list
     */
    updatedFields_contains?: Optional<String>;

    /**
     * The subscription event gets only dispatched when all of the field names included 
     * in this list have been updated
     */
    updatedFields_contains_every?: List<NonNull<String>>;

    /**
     * The subscription event gets only dispatched when some of the field names 
     * included in this list have been updated
     */
    updatedFields_contains_some?: List<NonNull<String>>;

    node?: Optional<DepartmentWhereInput>;
}

export interface DepartmentUpdateInput {

    name?: Optional<String>;

    Country?: Optional<CountryUpdateOneInput>;
}

export interface DepartmentWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<DepartmentWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<DepartmentWhereInput>>;

    id?: Optional<ID>;

    /**
     * All values that are not equal to given value.
     */
    id_not?: Optional<ID>;

    /**
     * All values that are contained in given list.
     */
    id_in?: List<NonNull<ID>>;

    /**
     * All values that are not contained in given list.
     */
    id_not_in?: List<NonNull<ID>>;

    /**
     * All values less than the given value.
     */
    id_lt?: Optional<ID>;

    /**
     * All values less than or equal the given value.
     */
    id_lte?: Optional<ID>;

    /**
     * All values greater than the given value.
     */
    id_gt?: Optional<ID>;

    /**
     * All values greater than or equal the given value.
     */
    id_gte?: Optional<ID>;

    /**
     * All values containing the given string.
     */
    id_contains?: Optional<ID>;

    /**
     * All values not containing the given string.
     */
    id_not_contains?: Optional<ID>;

    /**
     * All values starting with the given string.
     */
    id_starts_with?: Optional<ID>;

    /**
     * All values not starting with the given string.
     */
    id_not_starts_with?: Optional<ID>;

    /**
     * All values ending with the given string.
     */
    id_ends_with?: Optional<ID>;

    /**
     * All values not ending with the given string.
     */
    id_not_ends_with?: Optional<ID>;

    createdAt?: Optional<DateTime>;

    /**
     * All values that are not equal to given value.
     */
    createdAt_not?: Optional<DateTime>;

    /**
     * All values that are contained in given list.
     */
    createdAt_in?: List<NonNull<DateTime>>;

    /**
     * All values that are not contained in given list.
     */
    createdAt_not_in?: List<NonNull<DateTime>>;

    /**
     * All values less than the given value.
     */
    createdAt_lt?: Optional<DateTime>;

    /**
     * All values less than or equal the given value.
     */
    createdAt_lte?: Optional<DateTime>;

    /**
     * All values greater than the given value.
     */
    createdAt_gt?: Optional<DateTime>;

    /**
     * All values greater than or equal the given value.
     */
    createdAt_gte?: Optional<DateTime>;

    updatedAt?: Optional<DateTime>;

    /**
     * All values that are not equal to given value.
     */
    updatedAt_not?: Optional<DateTime>;

    /**
     * All values that are contained in given list.
     */
    updatedAt_in?: List<NonNull<DateTime>>;

    /**
     * All values that are not contained in given list.
     */
    updatedAt_not_in?: List<NonNull<DateTime>>;

    /**
     * All values less than the given value.
     */
    updatedAt_lt?: Optional<DateTime>;

    /**
     * All values less than or equal the given value.
     */
    updatedAt_lte?: Optional<DateTime>;

    /**
     * All values greater than the given value.
     */
    updatedAt_gt?: Optional<DateTime>;

    /**
     * All values greater than or equal the given value.
     */
    updatedAt_gte?: Optional<DateTime>;

    name?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    name_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    name_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    name_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    name_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    name_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    name_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    name_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    name_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    name_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    name_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    name_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    name_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    name_not_ends_with?: Optional<String>;

    Country?: Optional<CountryWhereInput>;
}

export interface DepartmentWhereUniqueInput {

    id?: Optional<ID>;
}

export interface FacultyCreateInput {

    name: NonNull<String>;

    school: NonNull<SchoolCreateOneInput>;
}

export interface FacultySubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<FacultySubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<FacultySubscriptionWhereInput>>;

    /**
     * The subscription event gets dispatched when it's listed in mutation_in
     */
    mutation_in?: List<NonNull<MutationType>>;

    /**
     * The subscription event gets only dispatched when one of the updated fields names 
     * is included in this list
     */
    updatedFields_contains?: Optional<String>;

    /**
     * The subscription event gets only dispatched when all of the field names included 
     * in this list have been updated
     */
    updatedFields_contains_every?: List<NonNull<String>>;

    /**
     * The subscription event gets only dispatched when some of the field names 
     * included in this list have been updated
     */
    updatedFields_contains_some?: List<NonNull<String>>;

    node?: Optional<FacultyWhereInput>;
}

export interface FacultyUpdateInput {

    name?: Optional<String>;

    school?: Optional<SchoolUpdateOneInput>;
}

export interface FacultyWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<FacultyWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<FacultyWhereInput>>;

    id?: Optional<ID>;

    /**
     * All values that are not equal to given value.
     */
    id_not?: Optional<ID>;

    /**
     * All values that are contained in given list.
     */
    id_in?: List<NonNull<ID>>;

    /**
     * All values that are not contained in given list.
     */
    id_not_in?: List<NonNull<ID>>;

    /**
     * All values less than the given value.
     */
    id_lt?: Optional<ID>;

    /**
     * All values less than or equal the given value.
     */
    id_lte?: Optional<ID>;

    /**
     * All values greater than the given value.
     */
    id_gt?: Optional<ID>;

    /**
     * All values greater than or equal the given value.
     */
    id_gte?: Optional<ID>;

    /**
     * All values containing the given string.
     */
    id_contains?: Optional<ID>;

    /**
     * All values not containing the given string.
     */
    id_not_contains?: Optional<ID>;

    /**
     * All values starting with the given string.
     */
    id_starts_with?: Optional<ID>;

    /**
     * All values not starting with the given string.
     */
    id_not_starts_with?: Optional<ID>;

    /**
     * All values ending with the given string.
     */
    id_ends_with?: Optional<ID>;

    /**
     * All values not ending with the given string.
     */
    id_not_ends_with?: Optional<ID>;

    createdAt?: Optional<DateTime>;

    /**
     * All values that are not equal to given value.
     */
    createdAt_not?: Optional<DateTime>;

    /**
     * All values that are contained in given list.
     */
    createdAt_in?: List<NonNull<DateTime>>;

    /**
     * All values that are not contained in given list.
     */
    createdAt_not_in?: List<NonNull<DateTime>>;

    /**
     * All values less than the given value.
     */
    createdAt_lt?: Optional<DateTime>;

    /**
     * All values less than or equal the given value.
     */
    createdAt_lte?: Optional<DateTime>;

    /**
     * All values greater than the given value.
     */
    createdAt_gt?: Optional<DateTime>;

    /**
     * All values greater than or equal the given value.
     */
    createdAt_gte?: Optional<DateTime>;

    updatedAt?: Optional<DateTime>;

    /**
     * All values that are not equal to given value.
     */
    updatedAt_not?: Optional<DateTime>;

    /**
     * All values that are contained in given list.
     */
    updatedAt_in?: List<NonNull<DateTime>>;

    /**
     * All values that are not contained in given list.
     */
    updatedAt_not_in?: List<NonNull<DateTime>>;

    /**
     * All values less than the given value.
     */
    updatedAt_lt?: Optional<DateTime>;

    /**
     * All values less than or equal the given value.
     */
    updatedAt_lte?: Optional<DateTime>;

    /**
     * All values greater than the given value.
     */
    updatedAt_gt?: Optional<DateTime>;

    /**
     * All values greater than or equal the given value.
     */
    updatedAt_gte?: Optional<DateTime>;

    name?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    name_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    name_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    name_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    name_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    name_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    name_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    name_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    name_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    name_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    name_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    name_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    name_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    name_not_ends_with?: Optional<String>;

    school?: Optional<SchoolWhereInput>;
}

export interface FacultyWhereUniqueInput {

    id?: Optional<ID>;
}

export interface InstitutionsCreateInput {

    title: NonNull<String>;

    type: NonNull<InstitutionType>;

    Country: NonNull<CountryCreateOneInput>;
}

export interface InstitutionsSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<InstitutionsSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<InstitutionsSubscriptionWhereInput>>;

    /**
     * The subscription event gets dispatched when it's listed in mutation_in
     */
    mutation_in?: List<NonNull<MutationType>>;

    /**
     * The subscription event gets only dispatched when one of the updated fields names 
     * is included in this list
     */
    updatedFields_contains?: Optional<String>;

    /**
     * The subscription event gets only dispatched when all of the field names included 
     * in this list have been updated
     */
    updatedFields_contains_every?: List<NonNull<String>>;

    /**
     * The subscription event gets only dispatched when some of the field names 
     * included in this list have been updated
     */
    updatedFields_contains_some?: List<NonNull<String>>;

    node?: Optional<InstitutionsWhereInput>;
}

export interface InstitutionsUpdateInput {

    title?: Optional<String>;

    type?: Optional<InstitutionType>;

    Country?: Optional<CountryUpdateOneInput>;
}

export interface InstitutionsWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<InstitutionsWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<InstitutionsWhereInput>>;

    id?: Optional<ID>;

    /**
     * All values that are not equal to given value.
     */
    id_not?: Optional<ID>;

    /**
     * All values that are contained in given list.
     */
    id_in?: List<NonNull<ID>>;

    /**
     * All values that are not contained in given list.
     */
    id_not_in?: List<NonNull<ID>>;

    /**
     * All values less than the given value.
     */
    id_lt?: Optional<ID>;

    /**
     * All values less than or equal the given value.
     */
    id_lte?: Optional<ID>;

    /**
     * All values greater than the given value.
     */
    id_gt?: Optional<ID>;

    /**
     * All values greater than or equal the given value.
     */
    id_gte?: Optional<ID>;

    /**
     * All values containing the given string.
     */
    id_contains?: Optional<ID>;

    /**
     * All values not containing the given string.
     */
    id_not_contains?: Optional<ID>;

    /**
     * All values starting with the given string.
     */
    id_starts_with?: Optional<ID>;

    /**
     * All values not starting with the given string.
     */
    id_not_starts_with?: Optional<ID>;

    /**
     * All values ending with the given string.
     */
    id_ends_with?: Optional<ID>;

    /**
     * All values not ending with the given string.
     */
    id_not_ends_with?: Optional<ID>;

    createdAt?: Optional<DateTime>;

    /**
     * All values that are not equal to given value.
     */
    createdAt_not?: Optional<DateTime>;

    /**
     * All values that are contained in given list.
     */
    createdAt_in?: List<NonNull<DateTime>>;

    /**
     * All values that are not contained in given list.
     */
    createdAt_not_in?: List<NonNull<DateTime>>;

    /**
     * All values less than the given value.
     */
    createdAt_lt?: Optional<DateTime>;

    /**
     * All values less than or equal the given value.
     */
    createdAt_lte?: Optional<DateTime>;

    /**
     * All values greater than the given value.
     */
    createdAt_gt?: Optional<DateTime>;

    /**
     * All values greater than or equal the given value.
     */
    createdAt_gte?: Optional<DateTime>;

    updatedAt?: Optional<DateTime>;

    /**
     * All values that are not equal to given value.
     */
    updatedAt_not?: Optional<DateTime>;

    /**
     * All values that are contained in given list.
     */
    updatedAt_in?: List<NonNull<DateTime>>;

    /**
     * All values that are not contained in given list.
     */
    updatedAt_not_in?: List<NonNull<DateTime>>;

    /**
     * All values less than the given value.
     */
    updatedAt_lt?: Optional<DateTime>;

    /**
     * All values less than or equal the given value.
     */
    updatedAt_lte?: Optional<DateTime>;

    /**
     * All values greater than the given value.
     */
    updatedAt_gt?: Optional<DateTime>;

    /**
     * All values greater than or equal the given value.
     */
    updatedAt_gte?: Optional<DateTime>;

    title?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    title_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    title_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    title_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    title_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    title_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    title_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    title_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    title_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    title_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    title_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    title_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    title_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    title_not_ends_with?: Optional<String>;

    type?: Optional<InstitutionType>;

    /**
     * All values that are not equal to given value.
     */
    type_not?: Optional<InstitutionType>;

    /**
     * All values that are contained in given list.
     */
    type_in?: List<NonNull<InstitutionType>>;

    /**
     * All values that are not contained in given list.
     */
    type_not_in?: List<NonNull<InstitutionType>>;

    Country?: Optional<CountryWhereInput>;
}

export interface InstitutionsWhereUniqueInput {

    id?: Optional<ID>;
}

export interface PostCreateInput {

    isPublished?: Optional<Boolean>;

    title: NonNull<String>;

    text: NonNull<String>;
}

export interface PostSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<PostSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<PostSubscriptionWhereInput>>;

    /**
     * The subscription event gets dispatched when it's listed in mutation_in
     */
    mutation_in?: List<NonNull<MutationType>>;

    /**
     * The subscription event gets only dispatched when one of the updated fields names 
     * is included in this list
     */
    updatedFields_contains?: Optional<String>;

    /**
     * The subscription event gets only dispatched when all of the field names included 
     * in this list have been updated
     */
    updatedFields_contains_every?: List<NonNull<String>>;

    /**
     * The subscription event gets only dispatched when some of the field names 
     * included in this list have been updated
     */
    updatedFields_contains_some?: List<NonNull<String>>;

    node?: Optional<PostWhereInput>;
}

export interface PostUpdateInput {

    isPublished?: Optional<Boolean>;

    title?: Optional<String>;

    text?: Optional<String>;
}

export interface PostWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<PostWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<PostWhereInput>>;

    id?: Optional<ID>;

    /**
     * All values that are not equal to given value.
     */
    id_not?: Optional<ID>;

    /**
     * All values that are contained in given list.
     */
    id_in?: List<NonNull<ID>>;

    /**
     * All values that are not contained in given list.
     */
    id_not_in?: List<NonNull<ID>>;

    /**
     * All values less than the given value.
     */
    id_lt?: Optional<ID>;

    /**
     * All values less than or equal the given value.
     */
    id_lte?: Optional<ID>;

    /**
     * All values greater than the given value.
     */
    id_gt?: Optional<ID>;

    /**
     * All values greater than or equal the given value.
     */
    id_gte?: Optional<ID>;

    /**
     * All values containing the given string.
     */
    id_contains?: Optional<ID>;

    /**
     * All values not containing the given string.
     */
    id_not_contains?: Optional<ID>;

    /**
     * All values starting with the given string.
     */
    id_starts_with?: Optional<ID>;

    /**
     * All values not starting with the given string.
     */
    id_not_starts_with?: Optional<ID>;

    /**
     * All values ending with the given string.
     */
    id_ends_with?: Optional<ID>;

    /**
     * All values not ending with the given string.
     */
    id_not_ends_with?: Optional<ID>;

    createdAt?: Optional<DateTime>;

    /**
     * All values that are not equal to given value.
     */
    createdAt_not?: Optional<DateTime>;

    /**
     * All values that are contained in given list.
     */
    createdAt_in?: List<NonNull<DateTime>>;

    /**
     * All values that are not contained in given list.
     */
    createdAt_not_in?: List<NonNull<DateTime>>;

    /**
     * All values less than the given value.
     */
    createdAt_lt?: Optional<DateTime>;

    /**
     * All values less than or equal the given value.
     */
    createdAt_lte?: Optional<DateTime>;

    /**
     * All values greater than the given value.
     */
    createdAt_gt?: Optional<DateTime>;

    /**
     * All values greater than or equal the given value.
     */
    createdAt_gte?: Optional<DateTime>;

    updatedAt?: Optional<DateTime>;

    /**
     * All values that are not equal to given value.
     */
    updatedAt_not?: Optional<DateTime>;

    /**
     * All values that are contained in given list.
     */
    updatedAt_in?: List<NonNull<DateTime>>;

    /**
     * All values that are not contained in given list.
     */
    updatedAt_not_in?: List<NonNull<DateTime>>;

    /**
     * All values less than the given value.
     */
    updatedAt_lt?: Optional<DateTime>;

    /**
     * All values less than or equal the given value.
     */
    updatedAt_lte?: Optional<DateTime>;

    /**
     * All values greater than the given value.
     */
    updatedAt_gt?: Optional<DateTime>;

    /**
     * All values greater than or equal the given value.
     */
    updatedAt_gte?: Optional<DateTime>;

    isPublished?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    isPublished_not?: Optional<Boolean>;

    title?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    title_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    title_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    title_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    title_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    title_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    title_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    title_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    title_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    title_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    title_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    title_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    title_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    title_not_ends_with?: Optional<String>;

    text?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    text_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    text_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    text_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    text_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    text_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    text_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    text_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    text_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    text_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    text_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    text_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    text_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    text_not_ends_with?: Optional<String>;
}

export interface PostWhereUniqueInput {

    id?: Optional<ID>;
}

export interface SchoolCreateInput {

    title: NonNull<String>;

    Country: NonNull<CountryCreateOneInput>;
}

export interface SchoolCreateOneInput {

    create?: Optional<SchoolCreateInput>;

    connect?: Optional<SchoolWhereUniqueInput>;
}

export interface SchoolSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<SchoolSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<SchoolSubscriptionWhereInput>>;

    /**
     * The subscription event gets dispatched when it's listed in mutation_in
     */
    mutation_in?: List<NonNull<MutationType>>;

    /**
     * The subscription event gets only dispatched when one of the updated fields names 
     * is included in this list
     */
    updatedFields_contains?: Optional<String>;

    /**
     * The subscription event gets only dispatched when all of the field names included 
     * in this list have been updated
     */
    updatedFields_contains_every?: List<NonNull<String>>;

    /**
     * The subscription event gets only dispatched when some of the field names 
     * included in this list have been updated
     */
    updatedFields_contains_some?: List<NonNull<String>>;

    node?: Optional<SchoolWhereInput>;
}

export interface SchoolUpdateDataInput {

    title?: Optional<String>;

    Country?: Optional<CountryUpdateOneInput>;
}

export interface SchoolUpdateInput {

    title?: Optional<String>;

    Country?: Optional<CountryUpdateOneInput>;
}

export interface SchoolUpdateNestedInput {

    where: NonNull<SchoolWhereUniqueInput>;

    data: NonNull<SchoolUpdateDataInput>;
}

export interface SchoolUpdateOneInput {

    create?: Optional<SchoolCreateInput>;

    connect?: Optional<SchoolWhereUniqueInput>;

    disconnect?: Optional<SchoolWhereUniqueInput>;

    delete?: Optional<SchoolWhereUniqueInput>;

    update?: Optional<SchoolUpdateNestedInput>;

    upsert?: Optional<SchoolUpsertNestedInput>;
}

export interface SchoolUpsertNestedInput {

    where: NonNull<SchoolWhereUniqueInput>;

    update: NonNull<SchoolUpdateDataInput>;

    create: NonNull<SchoolCreateInput>;
}

export interface SchoolWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<SchoolWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<SchoolWhereInput>>;

    id?: Optional<ID>;

    /**
     * All values that are not equal to given value.
     */
    id_not?: Optional<ID>;

    /**
     * All values that are contained in given list.
     */
    id_in?: List<NonNull<ID>>;

    /**
     * All values that are not contained in given list.
     */
    id_not_in?: List<NonNull<ID>>;

    /**
     * All values less than the given value.
     */
    id_lt?: Optional<ID>;

    /**
     * All values less than or equal the given value.
     */
    id_lte?: Optional<ID>;

    /**
     * All values greater than the given value.
     */
    id_gt?: Optional<ID>;

    /**
     * All values greater than or equal the given value.
     */
    id_gte?: Optional<ID>;

    /**
     * All values containing the given string.
     */
    id_contains?: Optional<ID>;

    /**
     * All values not containing the given string.
     */
    id_not_contains?: Optional<ID>;

    /**
     * All values starting with the given string.
     */
    id_starts_with?: Optional<ID>;

    /**
     * All values not starting with the given string.
     */
    id_not_starts_with?: Optional<ID>;

    /**
     * All values ending with the given string.
     */
    id_ends_with?: Optional<ID>;

    /**
     * All values not ending with the given string.
     */
    id_not_ends_with?: Optional<ID>;

    createdAt?: Optional<DateTime>;

    /**
     * All values that are not equal to given value.
     */
    createdAt_not?: Optional<DateTime>;

    /**
     * All values that are contained in given list.
     */
    createdAt_in?: List<NonNull<DateTime>>;

    /**
     * All values that are not contained in given list.
     */
    createdAt_not_in?: List<NonNull<DateTime>>;

    /**
     * All values less than the given value.
     */
    createdAt_lt?: Optional<DateTime>;

    /**
     * All values less than or equal the given value.
     */
    createdAt_lte?: Optional<DateTime>;

    /**
     * All values greater than the given value.
     */
    createdAt_gt?: Optional<DateTime>;

    /**
     * All values greater than or equal the given value.
     */
    createdAt_gte?: Optional<DateTime>;

    updatedAt?: Optional<DateTime>;

    /**
     * All values that are not equal to given value.
     */
    updatedAt_not?: Optional<DateTime>;

    /**
     * All values that are contained in given list.
     */
    updatedAt_in?: List<NonNull<DateTime>>;

    /**
     * All values that are not contained in given list.
     */
    updatedAt_not_in?: List<NonNull<DateTime>>;

    /**
     * All values less than the given value.
     */
    updatedAt_lt?: Optional<DateTime>;

    /**
     * All values less than or equal the given value.
     */
    updatedAt_lte?: Optional<DateTime>;

    /**
     * All values greater than the given value.
     */
    updatedAt_gt?: Optional<DateTime>;

    /**
     * All values greater than or equal the given value.
     */
    updatedAt_gte?: Optional<DateTime>;

    title?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    title_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    title_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    title_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    title_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    title_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    title_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    title_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    title_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    title_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    title_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    title_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    title_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    title_not_ends_with?: Optional<String>;

    Country?: Optional<CountryWhereInput>;
}

export interface SchoolWhereUniqueInput {

    id?: Optional<ID>;
}

export interface UserCreateInput {

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    name?: Optional<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type: NonNull<Usertype>;

    followedBy?: Optional<UserCreateManyWithoutFollowedByInput>;

    following?: Optional<UserCreateManyWithoutFollowingInput>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;
}

export interface UserCreateManyWithoutFollowedByInput {

    create?: List<NonNull<UserCreateWithoutFollowedByInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;
}

export interface UserCreateManyWithoutFollowingInput {

    create?: List<NonNull<UserCreateWithoutFollowingInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;
}

export interface UserCreateOneWithoutArticlesInput {

    create?: Optional<UserCreateWithoutArticlesInput>;

    connect?: Optional<UserWhereUniqueInput>;
}

export interface UserCreateWithoutArticlesInput {

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    name?: Optional<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type: NonNull<Usertype>;

    followedBy?: Optional<UserCreateManyWithoutFollowedByInput>;

    following?: Optional<UserCreateManyWithoutFollowingInput>;
}

export interface UserCreateWithoutFollowedByInput {

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    name?: Optional<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type: NonNull<Usertype>;

    following?: Optional<UserCreateManyWithoutFollowingInput>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;
}

export interface UserCreateWithoutFollowingInput {

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    name?: Optional<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type: NonNull<Usertype>;

    followedBy?: Optional<UserCreateManyWithoutFollowedByInput>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;
}

export interface UserSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<UserSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<UserSubscriptionWhereInput>>;

    /**
     * The subscription event gets dispatched when it's listed in mutation_in
     */
    mutation_in?: List<NonNull<MutationType>>;

    /**
     * The subscription event gets only dispatched when one of the updated fields names 
     * is included in this list
     */
    updatedFields_contains?: Optional<String>;

    /**
     * The subscription event gets only dispatched when all of the field names included 
     * in this list have been updated
     */
    updatedFields_contains_every?: List<NonNull<String>>;

    /**
     * The subscription event gets only dispatched when some of the field names 
     * included in this list have been updated
     */
    updatedFields_contains_some?: List<NonNull<String>>;

    node?: Optional<UserWhereInput>;
}

export interface UserUpdateInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    name?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<Usertype>;

    followedBy?: Optional<UserUpdateManyWithoutFollowedByInput>;

    following?: Optional<UserUpdateManyWithoutFollowingInput>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateManyWithoutFollowedByInput {

    create?: List<NonNull<UserCreateWithoutFollowedByInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithoutFollowedByInput>>;

    upsert?: List<NonNull<UserUpsertWithoutFollowedByInput>>;
}

export interface UserUpdateManyWithoutFollowingInput {

    create?: List<NonNull<UserCreateWithoutFollowingInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithoutFollowingInput>>;

    upsert?: List<NonNull<UserUpsertWithoutFollowingInput>>;
}

export interface UserUpdateOneWithoutArticlesInput {

    create?: Optional<UserCreateWithoutArticlesInput>;

    connect?: Optional<UserWhereUniqueInput>;

    disconnect?: Optional<UserWhereUniqueInput>;

    delete?: Optional<UserWhereUniqueInput>;

    update?: Optional<UserUpdateWithoutArticlesInput>;

    upsert?: Optional<UserUpsertWithoutArticlesInput>;
}

export interface UserUpdateWithoutArticlesDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    name?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<Usertype>;

    followedBy?: Optional<UserUpdateManyWithoutFollowedByInput>;

    following?: Optional<UserUpdateManyWithoutFollowingInput>;
}

export interface UserUpdateWithoutArticlesInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutArticlesDataInput>;
}

export interface UserUpdateWithoutFollowedByDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    name?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<Usertype>;

    following?: Optional<UserUpdateManyWithoutFollowingInput>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateWithoutFollowedByInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutFollowedByDataInput>;
}

export interface UserUpdateWithoutFollowingDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    name?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<Usertype>;

    followedBy?: Optional<UserUpdateManyWithoutFollowedByInput>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateWithoutFollowingInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutFollowingDataInput>;
}

export interface UserUpsertWithoutArticlesInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutArticlesDataInput>;

    create: NonNull<UserCreateWithoutArticlesInput>;
}

export interface UserUpsertWithoutFollowedByInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutFollowedByDataInput>;

    create: NonNull<UserCreateWithoutFollowedByInput>;
}

export interface UserUpsertWithoutFollowingInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutFollowingDataInput>;

    create: NonNull<UserCreateWithoutFollowingInput>;
}

export interface UserWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<UserWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<UserWhereInput>>;

    id?: Optional<ID>;

    /**
     * All values that are not equal to given value.
     */
    id_not?: Optional<ID>;

    /**
     * All values that are contained in given list.
     */
    id_in?: List<NonNull<ID>>;

    /**
     * All values that are not contained in given list.
     */
    id_not_in?: List<NonNull<ID>>;

    /**
     * All values less than the given value.
     */
    id_lt?: Optional<ID>;

    /**
     * All values less than or equal the given value.
     */
    id_lte?: Optional<ID>;

    /**
     * All values greater than the given value.
     */
    id_gt?: Optional<ID>;

    /**
     * All values greater than or equal the given value.
     */
    id_gte?: Optional<ID>;

    /**
     * All values containing the given string.
     */
    id_contains?: Optional<ID>;

    /**
     * All values not containing the given string.
     */
    id_not_contains?: Optional<ID>;

    /**
     * All values starting with the given string.
     */
    id_starts_with?: Optional<ID>;

    /**
     * All values not starting with the given string.
     */
    id_not_starts_with?: Optional<ID>;

    /**
     * All values ending with the given string.
     */
    id_ends_with?: Optional<ID>;

    /**
     * All values not ending with the given string.
     */
    id_not_ends_with?: Optional<ID>;

    email?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    email_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    email_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    email_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    email_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    email_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    email_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    email_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    email_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    email_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    email_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    email_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    email_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    email_not_ends_with?: Optional<String>;

    username?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    username_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    username_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    username_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    username_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    username_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    username_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    username_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    username_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    username_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    username_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    username_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    username_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    username_not_ends_with?: Optional<String>;

    password?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    password_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    password_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    password_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    password_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    password_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    password_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    password_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    password_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    password_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    password_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    password_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    password_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    password_not_ends_with?: Optional<String>;

    name?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    name_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    name_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    name_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    name_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    name_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    name_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    name_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    name_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    name_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    name_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    name_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    name_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    name_not_ends_with?: Optional<String>;

    firstname?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    firstname_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    firstname_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    firstname_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    firstname_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    firstname_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    firstname_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    firstname_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    firstname_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    firstname_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    firstname_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    firstname_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    firstname_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    firstname_not_ends_with?: Optional<String>;

    lastname?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    lastname_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    lastname_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    lastname_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    lastname_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    lastname_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    lastname_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    lastname_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    lastname_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    lastname_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    lastname_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    lastname_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    lastname_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    lastname_not_ends_with?: Optional<String>;

    gender?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    gender_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    gender_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    gender_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    gender_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    gender_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    gender_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    gender_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    gender_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    gender_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    gender_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    gender_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    gender_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    gender_not_ends_with?: Optional<String>;

    type?: Optional<Usertype>;

    /**
     * All values that are not equal to given value.
     */
    type_not?: Optional<Usertype>;

    /**
     * All values that are contained in given list.
     */
    type_in?: List<NonNull<Usertype>>;

    /**
     * All values that are not contained in given list.
     */
    type_not_in?: List<NonNull<Usertype>>;

    followedBy_every?: Optional<UserWhereInput>;

    followedBy_some?: Optional<UserWhereInput>;

    followedBy_none?: Optional<UserWhereInput>;

    following_every?: Optional<UserWhereInput>;

    following_some?: Optional<UserWhereInput>;

    following_none?: Optional<UserWhereInput>;

    articles_every?: Optional<ArticleWhereInput>;

    articles_some?: Optional<ArticleWhereInput>;

    articles_none?: Optional<ArticleWhereInput>;
}

export interface UserWhereUniqueInput {

    id?: Optional<ID>;

    email?: Optional<String>;

    username?: Optional<String>;
}

