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

export type ConnectOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "accepted_ASC" |

    "accepted_DESC"
);

export type CountryOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "shortName_ASC" |

    "shortName_DESC" |

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

export type DiscussionOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "title_ASC" |

    "title_DESC" |

    "slug_ASC" |

    "slug_DESC" |

    "content_ASC" |

    "content_DESC" |

    "private_ASC" |

    "private_DESC"
);

export type FileOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "name_ASC" |

    "name_DESC" |

    "size_ASC" |

    "size_DESC" |

    "secret_ASC" |

    "secret_DESC" |

    "contentType_ASC" |

    "contentType_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "url_ASC" |

    "url_DESC"
);

export type ForumOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "title_ASC" |

    "title_DESC" |

    "slug_ASC" |

    "slug_DESC" |

    "private_ASC" |

    "private_DESC"
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

export type InterestOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "name_ASC" |

    "name_DESC"
);

export type MutationType = (

    "CREATED" |

    "UPDATED" |

    "DELETED"
);

export type OpinionsOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "content_ASC" |

    "content_DESC"
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

export type UserOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "email_ASC" |

    "email_DESC" |

    "username_ASC" |

    "username_DESC" |

    "password_ASC" |

    "password_DESC" |

    "firstname_ASC" |

    "firstname_DESC" |

    "lastname_ASC" |

    "lastname_DESC" |

    "gender_ASC" |

    "gender_DESC" |

    "type_ASC" |

    "type_DESC" |

    "userType_ASC" |

    "userType_DESC" |

    "newConnectNot_ASC" |

    "newConnectNot_DESC" |

    "newCommentNot_ASC" |

    "newCommentNot_DESC" |

    "newMessageNot_ASC" |

    "newMessageNot_DESC" |

    "newProfileNot_ASC" |

    "newProfileNot_DESC" |

    "completedProfile_ASC" |

    "completedProfile_DESC"
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

export interface AggregateConnect {

    count: NonNull<Int>;
}

export interface AggregateCountry {

    count: NonNull<Int>;
}

export interface AggregateDepartment {

    count: NonNull<Int>;
}

export interface AggregateDiscussion {

    count: NonNull<Int>;
}

export interface AggregateFile {

    count: NonNull<Int>;
}

export interface AggregateForum {

    count: NonNull<Int>;
}

export interface AggregateInstitutions {

    count: NonNull<Int>;
}

export interface AggregateInterest {

    count: NonNull<Int>;
}

export interface AggregateOpinions {

    count: NonNull<Int>;
}

export interface AggregatePost {

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

export interface Connect extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    to: NonNull<User>;

    from: NonNull<User>;

    accepted: NonNull<Boolean>;
}

/**
 * A connection to a list of items.
 */
export interface ConnectConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<ConnectEdge>>>;

    aggregate: NonNull<AggregateConnect>;
}

/**
 * An edge in a connection.
 */
export interface ConnectEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Connect>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface ConnectPreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    accepted: NonNull<Boolean>;
}

export interface ConnectSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Connect>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<ConnectPreviousValues>;
}

export interface Country extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    shortName: NonNull<String>;

    name: NonNull<String>;

    institutions?: List<NonNull<Institutions>>;

    users?: List<NonNull<User>>;
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

    shortName: NonNull<String>;

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

    institution: NonNull<Institutions>;

    users?: List<NonNull<User>>;
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

export interface Discussion extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    title: NonNull<String>;

    slug?: Optional<String>;

    content: NonNull<String>;

    tags?: List<NonNull<String>>;

    favourites?: List<NonNull<User>>;

    author: NonNull<User>;

    private: NonNull<Boolean>;

    opinions?: List<NonNull<Opinions>>;
}

/**
 * A connection to a list of items.
 */
export interface DiscussionConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<DiscussionEdge>>>;

    aggregate: NonNull<AggregateDiscussion>;
}

/**
 * An edge in a connection.
 */
export interface DiscussionEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Discussion>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface DiscussionPreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    title: NonNull<String>;

    slug?: Optional<String>;

    content: NonNull<String>;

    tags?: List<NonNull<String>>;

    private: NonNull<Boolean>;
}

export interface DiscussionSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Discussion>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<DiscussionPreviousValues>;
}

export interface File extends Node {

    id: NonNull<ID>;

    name: NonNull<String>;

    size: NonNull<Int>;

    secret: NonNull<String>;

    contentType: NonNull<String>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    url: NonNull<String>;
}

/**
 * A connection to a list of items.
 */
export interface FileConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<FileEdge>>>;

    aggregate: NonNull<AggregateFile>;
}

/**
 * An edge in a connection.
 */
export interface FileEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<File>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface FilePreviousValues {

    id: NonNull<ID>;

    name: NonNull<String>;

    size: NonNull<Int>;

    secret: NonNull<String>;

    contentType: NonNull<String>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    url: NonNull<String>;
}

export interface FileSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<File>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<FilePreviousValues>;
}

export interface Forum extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    title: NonNull<String>;

    slug?: Optional<String>;

    author: NonNull<User>;

    private: NonNull<Boolean>;
}

/**
 * A connection to a list of items.
 */
export interface ForumConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<ForumEdge>>>;

    aggregate: NonNull<AggregateForum>;
}

/**
 * An edge in a connection.
 */
export interface ForumEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Forum>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface ForumPreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    title: NonNull<String>;

    slug?: Optional<String>;

    private: NonNull<Boolean>;
}

export interface ForumSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Forum>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<ForumPreviousValues>;
}

export interface Institutions extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    title: NonNull<String>;

    type: NonNull<InstitutionType>;

    country?: Optional<Country>;

    users?: List<NonNull<User>>;
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

export interface Interest extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    name: NonNull<String>;

    file: NonNull<File>;

    users?: List<NonNull<User>>;
}

/**
 * A connection to a list of items.
 */
export interface InterestConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<InterestEdge>>>;

    aggregate: NonNull<AggregateInterest>;
}

/**
 * An edge in a connection.
 */
export interface InterestEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Interest>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface InterestPreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    name: NonNull<String>;
}

export interface InterestSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Interest>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<InterestPreviousValues>;
}

export interface Mutation {

    createFile: NonNull<File>;

    createPost: NonNull<Post>;

    createArticle: NonNull<Article>;

    createCountry: NonNull<Country>;

    createInstitutions: NonNull<Institutions>;

    createDepartment: NonNull<Department>;

    createInterest: NonNull<Interest>;

    createUser: NonNull<User>;

    createConnect: NonNull<Connect>;

    createForum: NonNull<Forum>;

    createDiscussion: NonNull<Discussion>;

    createOpinions: NonNull<Opinions>;

    updateFile?: Optional<File>;

    updatePost?: Optional<Post>;

    updateArticle?: Optional<Article>;

    updateCountry?: Optional<Country>;

    updateInstitutions?: Optional<Institutions>;

    updateDepartment?: Optional<Department>;

    updateInterest?: Optional<Interest>;

    updateUser?: Optional<User>;

    updateConnect?: Optional<Connect>;

    updateForum?: Optional<Forum>;

    updateDiscussion?: Optional<Discussion>;

    updateOpinions?: Optional<Opinions>;

    deleteFile?: Optional<File>;

    deletePost?: Optional<Post>;

    deleteArticle?: Optional<Article>;

    deleteCountry?: Optional<Country>;

    deleteInstitutions?: Optional<Institutions>;

    deleteDepartment?: Optional<Department>;

    deleteInterest?: Optional<Interest>;

    deleteUser?: Optional<User>;

    deleteConnect?: Optional<Connect>;

    deleteForum?: Optional<Forum>;

    deleteDiscussion?: Optional<Discussion>;

    deleteOpinions?: Optional<Opinions>;

    upsertFile: NonNull<File>;

    upsertPost: NonNull<Post>;

    upsertArticle: NonNull<Article>;

    upsertCountry: NonNull<Country>;

    upsertInstitutions: NonNull<Institutions>;

    upsertDepartment: NonNull<Department>;

    upsertInterest: NonNull<Interest>;

    upsertUser: NonNull<User>;

    upsertConnect: NonNull<Connect>;

    upsertForum: NonNull<Forum>;

    upsertDiscussion: NonNull<Discussion>;

    upsertOpinions: NonNull<Opinions>;

    updateManyFiles: NonNull<BatchPayload>;

    updateManyPosts: NonNull<BatchPayload>;

    updateManyArticles: NonNull<BatchPayload>;

    updateManyCountries: NonNull<BatchPayload>;

    updateManyInstitutionses: NonNull<BatchPayload>;

    updateManyDepartments: NonNull<BatchPayload>;

    updateManyInterests: NonNull<BatchPayload>;

    updateManyUsers: NonNull<BatchPayload>;

    updateManyConnects: NonNull<BatchPayload>;

    updateManyForums: NonNull<BatchPayload>;

    updateManyDiscussions: NonNull<BatchPayload>;

    updateManyOpinionses: NonNull<BatchPayload>;

    deleteManyFiles: NonNull<BatchPayload>;

    deleteManyPosts: NonNull<BatchPayload>;

    deleteManyArticles: NonNull<BatchPayload>;

    deleteManyCountries: NonNull<BatchPayload>;

    deleteManyInstitutionses: NonNull<BatchPayload>;

    deleteManyDepartments: NonNull<BatchPayload>;

    deleteManyInterests: NonNull<BatchPayload>;

    deleteManyUsers: NonNull<BatchPayload>;

    deleteManyConnects: NonNull<BatchPayload>;

    deleteManyForums: NonNull<BatchPayload>;

    deleteManyDiscussions: NonNull<BatchPayload>;

    deleteManyOpinionses: NonNull<BatchPayload>;
}

export interface Opinions extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    content: NonNull<String>;

    author: NonNull<User>;

    discussion: NonNull<Discussion>;
}

/**
 * A connection to a list of items.
 */
export interface OpinionsConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<OpinionsEdge>>>;

    aggregate: NonNull<AggregateOpinions>;
}

/**
 * An edge in a connection.
 */
export interface OpinionsEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Opinions>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface OpinionsPreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    content: NonNull<String>;
}

export interface OpinionsSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Opinions>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<OpinionsPreviousValues>;
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

    files: NonNull<List<Optional<File>>>;

    posts: NonNull<List<Optional<Post>>>;

    articles: NonNull<List<Optional<Article>>>;

    countries: NonNull<List<Optional<Country>>>;

    institutionses: NonNull<List<Optional<Institutions>>>;

    departments: NonNull<List<Optional<Department>>>;

    interests: NonNull<List<Optional<Interest>>>;

    users: NonNull<List<Optional<User>>>;

    connects: NonNull<List<Optional<Connect>>>;

    forums: NonNull<List<Optional<Forum>>>;

    discussions: NonNull<List<Optional<Discussion>>>;

    opinionses: NonNull<List<Optional<Opinions>>>;

    file?: Optional<File>;

    post?: Optional<Post>;

    article?: Optional<Article>;

    country?: Optional<Country>;

    institutions?: Optional<Institutions>;

    department?: Optional<Department>;

    interest?: Optional<Interest>;

    user?: Optional<User>;

    connect?: Optional<Connect>;

    forum?: Optional<Forum>;

    discussion?: Optional<Discussion>;

    opinions?: Optional<Opinions>;

    filesConnection: NonNull<FileConnection>;

    postsConnection: NonNull<PostConnection>;

    articlesConnection: NonNull<ArticleConnection>;

    countriesConnection: NonNull<CountryConnection>;

    institutionsesConnection: NonNull<InstitutionsConnection>;

    departmentsConnection: NonNull<DepartmentConnection>;

    interestsConnection: NonNull<InterestConnection>;

    usersConnection: NonNull<UserConnection>;

    connectsConnection: NonNull<ConnectConnection>;

    forumsConnection: NonNull<ForumConnection>;

    discussionsConnection: NonNull<DiscussionConnection>;

    opinionsesConnection: NonNull<OpinionsConnection>;

    /**
     * Fetches an object given its ID
     */
    node?: Optional<Node>;
}

export interface Subscription {

    file?: Optional<FileSubscriptionPayload>;

    post?: Optional<PostSubscriptionPayload>;

    article?: Optional<ArticleSubscriptionPayload>;

    country?: Optional<CountrySubscriptionPayload>;

    institutions?: Optional<InstitutionsSubscriptionPayload>;

    department?: Optional<DepartmentSubscriptionPayload>;

    interest?: Optional<InterestSubscriptionPayload>;

    user?: Optional<UserSubscriptionPayload>;

    connect?: Optional<ConnectSubscriptionPayload>;

    forum?: Optional<ForumSubscriptionPayload>;

    discussion?: Optional<DiscussionSubscriptionPayload>;

    opinions?: Optional<OpinionsSubscriptionPayload>;
}

export interface User extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    country?: Optional<Country>;

    institution?: Optional<Institutions>;

    department?: Optional<Department>;

    interest?: Optional<Interest>;

    favourites?: List<NonNull<Discussion>>;

    myDiscussions?: Optional<Discussion>;

    connectTo?: List<NonNull<Connect>>;

    ConectFrom?: List<NonNull<Connect>>;

    type?: Optional<String>;

    userType?: Optional<String>;

    articles?: List<NonNull<Article>>;

    opinions?: List<NonNull<Opinions>>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;
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

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;
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

export interface ConnectCreateInput {

    accepted?: Optional<Boolean>;

    to: NonNull<UserCreateOneWithoutConnectToInput>;

    from: NonNull<UserCreateOneWithoutConectFromInput>;
}

export interface ConnectCreateManyWithoutFromInput {

    create?: List<NonNull<ConnectCreateWithoutFromInput>>;

    connect?: List<NonNull<ConnectWhereUniqueInput>>;
}

export interface ConnectCreateManyWithoutToInput {

    create?: List<NonNull<ConnectCreateWithoutToInput>>;

    connect?: List<NonNull<ConnectWhereUniqueInput>>;
}

export interface ConnectCreateWithoutFromInput {

    accepted?: Optional<Boolean>;

    to: NonNull<UserCreateOneWithoutConnectToInput>;
}

export interface ConnectCreateWithoutToInput {

    accepted?: Optional<Boolean>;

    from: NonNull<UserCreateOneWithoutConectFromInput>;
}

export interface ConnectSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<ConnectSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<ConnectSubscriptionWhereInput>>;

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

    node?: Optional<ConnectWhereInput>;
}

export interface ConnectUpdateInput {

    accepted?: Optional<Boolean>;

    to?: Optional<UserUpdateOneWithoutConnectToInput>;

    from?: Optional<UserUpdateOneWithoutConectFromInput>;
}

export interface ConnectUpdateManyWithoutFromInput {

    create?: List<NonNull<ConnectCreateWithoutFromInput>>;

    connect?: List<NonNull<ConnectWhereUniqueInput>>;

    disconnect?: List<NonNull<ConnectWhereUniqueInput>>;

    delete?: List<NonNull<ConnectWhereUniqueInput>>;

    update?: List<NonNull<ConnectUpdateWithoutFromInput>>;

    upsert?: List<NonNull<ConnectUpsertWithoutFromInput>>;
}

export interface ConnectUpdateManyWithoutToInput {

    create?: List<NonNull<ConnectCreateWithoutToInput>>;

    connect?: List<NonNull<ConnectWhereUniqueInput>>;

    disconnect?: List<NonNull<ConnectWhereUniqueInput>>;

    delete?: List<NonNull<ConnectWhereUniqueInput>>;

    update?: List<NonNull<ConnectUpdateWithoutToInput>>;

    upsert?: List<NonNull<ConnectUpsertWithoutToInput>>;
}

export interface ConnectUpdateWithoutFromDataInput {

    accepted?: Optional<Boolean>;

    to?: Optional<UserUpdateOneWithoutConnectToInput>;
}

export interface ConnectUpdateWithoutFromInput {

    where: NonNull<ConnectWhereUniqueInput>;

    data: NonNull<ConnectUpdateWithoutFromDataInput>;
}

export interface ConnectUpdateWithoutToDataInput {

    accepted?: Optional<Boolean>;

    from?: Optional<UserUpdateOneWithoutConectFromInput>;
}

export interface ConnectUpdateWithoutToInput {

    where: NonNull<ConnectWhereUniqueInput>;

    data: NonNull<ConnectUpdateWithoutToDataInput>;
}

export interface ConnectUpsertWithoutFromInput {

    where: NonNull<ConnectWhereUniqueInput>;

    update: NonNull<ConnectUpdateWithoutFromDataInput>;

    create: NonNull<ConnectCreateWithoutFromInput>;
}

export interface ConnectUpsertWithoutToInput {

    where: NonNull<ConnectWhereUniqueInput>;

    update: NonNull<ConnectUpdateWithoutToDataInput>;

    create: NonNull<ConnectCreateWithoutToInput>;
}

export interface ConnectWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<ConnectWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<ConnectWhereInput>>;

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

    accepted?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    accepted_not?: Optional<Boolean>;

    to?: Optional<UserWhereInput>;

    from?: Optional<UserWhereInput>;
}

export interface ConnectWhereUniqueInput {

    id?: Optional<ID>;
}

export interface CountryCreateInput {

    shortName: NonNull<String>;

    name: NonNull<String>;

    institutions?: Optional<InstitutionsCreateManyWithoutCountryInput>;

    users?: Optional<UserCreateManyWithoutCountryInput>;
}

export interface CountryCreateOneWithoutInstitutionsInput {

    create?: Optional<CountryCreateWithoutInstitutionsInput>;

    connect?: Optional<CountryWhereUniqueInput>;
}

export interface CountryCreateOneWithoutUsersInput {

    create?: Optional<CountryCreateWithoutUsersInput>;

    connect?: Optional<CountryWhereUniqueInput>;
}

export interface CountryCreateWithoutInstitutionsInput {

    shortName: NonNull<String>;

    name: NonNull<String>;

    users?: Optional<UserCreateManyWithoutCountryInput>;
}

export interface CountryCreateWithoutUsersInput {

    shortName: NonNull<String>;

    name: NonNull<String>;

    institutions?: Optional<InstitutionsCreateManyWithoutCountryInput>;
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

export interface CountryUpdateInput {

    shortName?: Optional<String>;

    name?: Optional<String>;

    institutions?: Optional<InstitutionsUpdateManyWithoutCountryInput>;

    users?: Optional<UserUpdateManyWithoutCountryInput>;
}

export interface CountryUpdateOneWithoutInstitutionsInput {

    create?: Optional<CountryCreateWithoutInstitutionsInput>;

    connect?: Optional<CountryWhereUniqueInput>;

    disconnect?: Optional<CountryWhereUniqueInput>;

    delete?: Optional<CountryWhereUniqueInput>;

    update?: Optional<CountryUpdateWithoutInstitutionsInput>;

    upsert?: Optional<CountryUpsertWithoutInstitutionsInput>;
}

export interface CountryUpdateOneWithoutUsersInput {

    create?: Optional<CountryCreateWithoutUsersInput>;

    connect?: Optional<CountryWhereUniqueInput>;

    disconnect?: Optional<CountryWhereUniqueInput>;

    delete?: Optional<CountryWhereUniqueInput>;

    update?: Optional<CountryUpdateWithoutUsersInput>;

    upsert?: Optional<CountryUpsertWithoutUsersInput>;
}

export interface CountryUpdateWithoutInstitutionsDataInput {

    shortName?: Optional<String>;

    name?: Optional<String>;

    users?: Optional<UserUpdateManyWithoutCountryInput>;
}

export interface CountryUpdateWithoutInstitutionsInput {

    where: NonNull<CountryWhereUniqueInput>;

    data: NonNull<CountryUpdateWithoutInstitutionsDataInput>;
}

export interface CountryUpdateWithoutUsersDataInput {

    shortName?: Optional<String>;

    name?: Optional<String>;

    institutions?: Optional<InstitutionsUpdateManyWithoutCountryInput>;
}

export interface CountryUpdateWithoutUsersInput {

    where: NonNull<CountryWhereUniqueInput>;

    data: NonNull<CountryUpdateWithoutUsersDataInput>;
}

export interface CountryUpsertWithoutInstitutionsInput {

    where: NonNull<CountryWhereUniqueInput>;

    update: NonNull<CountryUpdateWithoutInstitutionsDataInput>;

    create: NonNull<CountryCreateWithoutInstitutionsInput>;
}

export interface CountryUpsertWithoutUsersInput {

    where: NonNull<CountryWhereUniqueInput>;

    update: NonNull<CountryUpdateWithoutUsersDataInput>;

    create: NonNull<CountryCreateWithoutUsersInput>;
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

    shortName?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    shortName_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    shortName_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    shortName_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    shortName_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    shortName_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    shortName_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    shortName_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    shortName_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    shortName_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    shortName_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    shortName_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    shortName_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    shortName_not_ends_with?: Optional<String>;

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

    institutions_every?: Optional<InstitutionsWhereInput>;

    institutions_some?: Optional<InstitutionsWhereInput>;

    institutions_none?: Optional<InstitutionsWhereInput>;

    users_every?: Optional<UserWhereInput>;

    users_some?: Optional<UserWhereInput>;

    users_none?: Optional<UserWhereInput>;
}

export interface CountryWhereUniqueInput {

    id?: Optional<ID>;

    shortName?: Optional<String>;

    name?: Optional<String>;
}

export interface DepartmentCreateInput {

    name: NonNull<String>;

    institution: NonNull<InstitutionsCreateOneInput>;

    users?: Optional<UserCreateManyWithoutDepartmentInput>;
}

export interface DepartmentCreateOneWithoutUsersInput {

    create?: Optional<DepartmentCreateWithoutUsersInput>;

    connect?: Optional<DepartmentWhereUniqueInput>;
}

export interface DepartmentCreateWithoutUsersInput {

    name: NonNull<String>;

    institution: NonNull<InstitutionsCreateOneInput>;
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

    institution?: Optional<InstitutionsUpdateOneInput>;

    users?: Optional<UserUpdateManyWithoutDepartmentInput>;
}

export interface DepartmentUpdateOneWithoutUsersInput {

    create?: Optional<DepartmentCreateWithoutUsersInput>;

    connect?: Optional<DepartmentWhereUniqueInput>;

    disconnect?: Optional<DepartmentWhereUniqueInput>;

    delete?: Optional<DepartmentWhereUniqueInput>;

    update?: Optional<DepartmentUpdateWithoutUsersInput>;

    upsert?: Optional<DepartmentUpsertWithoutUsersInput>;
}

export interface DepartmentUpdateWithoutUsersDataInput {

    name?: Optional<String>;

    institution?: Optional<InstitutionsUpdateOneInput>;
}

export interface DepartmentUpdateWithoutUsersInput {

    where: NonNull<DepartmentWhereUniqueInput>;

    data: NonNull<DepartmentUpdateWithoutUsersDataInput>;
}

export interface DepartmentUpsertWithoutUsersInput {

    where: NonNull<DepartmentWhereUniqueInput>;

    update: NonNull<DepartmentUpdateWithoutUsersDataInput>;

    create: NonNull<DepartmentCreateWithoutUsersInput>;
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

    institution?: Optional<InstitutionsWhereInput>;

    users_every?: Optional<UserWhereInput>;

    users_some?: Optional<UserWhereInput>;

    users_none?: Optional<UserWhereInput>;
}

export interface DepartmentWhereUniqueInput {

    id?: Optional<ID>;
}

export interface DiscussionCreateInput {

    title: NonNull<String>;

    slug?: Optional<String>;

    content: NonNull<String>;

    private?: Optional<Boolean>;

    tags?: Optional<DiscussionCreatetagsInput>;

    favourites?: Optional<UserCreateManyWithoutFavouritesInput>;

    author: NonNull<UserCreateOneWithoutMyDiscussionsInput>;

    opinions?: Optional<OpinionsCreateManyWithoutDiscussionInput>;
}

export interface DiscussionCreateManyWithoutFavouritesInput {

    create?: List<NonNull<DiscussionCreateWithoutFavouritesInput>>;

    connect?: List<NonNull<DiscussionWhereUniqueInput>>;
}

export interface DiscussionCreateOneWithoutAuthorInput {

    create?: Optional<DiscussionCreateWithoutAuthorInput>;

    connect?: Optional<DiscussionWhereUniqueInput>;
}

export interface DiscussionCreateOneWithoutOpinionsInput {

    create?: Optional<DiscussionCreateWithoutOpinionsInput>;

    connect?: Optional<DiscussionWhereUniqueInput>;
}

export interface DiscussionCreatetagsInput {

    set?: List<NonNull<String>>;
}

export interface DiscussionCreateWithoutAuthorInput {

    title: NonNull<String>;

    slug?: Optional<String>;

    content: NonNull<String>;

    private?: Optional<Boolean>;

    tags?: Optional<DiscussionCreatetagsInput>;

    favourites?: Optional<UserCreateManyWithoutFavouritesInput>;

    opinions?: Optional<OpinionsCreateManyWithoutDiscussionInput>;
}

export interface DiscussionCreateWithoutFavouritesInput {

    title: NonNull<String>;

    slug?: Optional<String>;

    content: NonNull<String>;

    private?: Optional<Boolean>;

    tags?: Optional<DiscussionCreatetagsInput>;

    author: NonNull<UserCreateOneWithoutMyDiscussionsInput>;

    opinions?: Optional<OpinionsCreateManyWithoutDiscussionInput>;
}

export interface DiscussionCreateWithoutOpinionsInput {

    title: NonNull<String>;

    slug?: Optional<String>;

    content: NonNull<String>;

    private?: Optional<Boolean>;

    tags?: Optional<DiscussionCreatetagsInput>;

    favourites?: Optional<UserCreateManyWithoutFavouritesInput>;

    author: NonNull<UserCreateOneWithoutMyDiscussionsInput>;
}

export interface DiscussionSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<DiscussionSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<DiscussionSubscriptionWhereInput>>;

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

    node?: Optional<DiscussionWhereInput>;
}

export interface DiscussionUpdateInput {

    title?: Optional<String>;

    slug?: Optional<String>;

    content?: Optional<String>;

    private?: Optional<Boolean>;

    tags?: Optional<DiscussionUpdatetagsInput>;

    favourites?: Optional<UserUpdateManyWithoutFavouritesInput>;

    author?: Optional<UserUpdateOneWithoutMyDiscussionsInput>;

    opinions?: Optional<OpinionsUpdateManyWithoutDiscussionInput>;
}

export interface DiscussionUpdateManyWithoutFavouritesInput {

    create?: List<NonNull<DiscussionCreateWithoutFavouritesInput>>;

    connect?: List<NonNull<DiscussionWhereUniqueInput>>;

    disconnect?: List<NonNull<DiscussionWhereUniqueInput>>;

    delete?: List<NonNull<DiscussionWhereUniqueInput>>;

    update?: List<NonNull<DiscussionUpdateWithoutFavouritesInput>>;

    upsert?: List<NonNull<DiscussionUpsertWithoutFavouritesInput>>;
}

export interface DiscussionUpdateOneWithoutAuthorInput {

    create?: Optional<DiscussionCreateWithoutAuthorInput>;

    connect?: Optional<DiscussionWhereUniqueInput>;

    disconnect?: Optional<DiscussionWhereUniqueInput>;

    delete?: Optional<DiscussionWhereUniqueInput>;

    update?: Optional<DiscussionUpdateWithoutAuthorInput>;

    upsert?: Optional<DiscussionUpsertWithoutAuthorInput>;
}

export interface DiscussionUpdateOneWithoutOpinionsInput {

    create?: Optional<DiscussionCreateWithoutOpinionsInput>;

    connect?: Optional<DiscussionWhereUniqueInput>;

    disconnect?: Optional<DiscussionWhereUniqueInput>;

    delete?: Optional<DiscussionWhereUniqueInput>;

    update?: Optional<DiscussionUpdateWithoutOpinionsInput>;

    upsert?: Optional<DiscussionUpsertWithoutOpinionsInput>;
}

export interface DiscussionUpdatetagsInput {

    set?: List<NonNull<String>>;
}

export interface DiscussionUpdateWithoutAuthorDataInput {

    title?: Optional<String>;

    slug?: Optional<String>;

    content?: Optional<String>;

    private?: Optional<Boolean>;

    tags?: Optional<DiscussionUpdatetagsInput>;

    favourites?: Optional<UserUpdateManyWithoutFavouritesInput>;

    opinions?: Optional<OpinionsUpdateManyWithoutDiscussionInput>;
}

export interface DiscussionUpdateWithoutAuthorInput {

    where: NonNull<DiscussionWhereUniqueInput>;

    data: NonNull<DiscussionUpdateWithoutAuthorDataInput>;
}

export interface DiscussionUpdateWithoutFavouritesDataInput {

    title?: Optional<String>;

    slug?: Optional<String>;

    content?: Optional<String>;

    private?: Optional<Boolean>;

    tags?: Optional<DiscussionUpdatetagsInput>;

    author?: Optional<UserUpdateOneWithoutMyDiscussionsInput>;

    opinions?: Optional<OpinionsUpdateManyWithoutDiscussionInput>;
}

export interface DiscussionUpdateWithoutFavouritesInput {

    where: NonNull<DiscussionWhereUniqueInput>;

    data: NonNull<DiscussionUpdateWithoutFavouritesDataInput>;
}

export interface DiscussionUpdateWithoutOpinionsDataInput {

    title?: Optional<String>;

    slug?: Optional<String>;

    content?: Optional<String>;

    private?: Optional<Boolean>;

    tags?: Optional<DiscussionUpdatetagsInput>;

    favourites?: Optional<UserUpdateManyWithoutFavouritesInput>;

    author?: Optional<UserUpdateOneWithoutMyDiscussionsInput>;
}

export interface DiscussionUpdateWithoutOpinionsInput {

    where: NonNull<DiscussionWhereUniqueInput>;

    data: NonNull<DiscussionUpdateWithoutOpinionsDataInput>;
}

export interface DiscussionUpsertWithoutAuthorInput {

    where: NonNull<DiscussionWhereUniqueInput>;

    update: NonNull<DiscussionUpdateWithoutAuthorDataInput>;

    create: NonNull<DiscussionCreateWithoutAuthorInput>;
}

export interface DiscussionUpsertWithoutFavouritesInput {

    where: NonNull<DiscussionWhereUniqueInput>;

    update: NonNull<DiscussionUpdateWithoutFavouritesDataInput>;

    create: NonNull<DiscussionCreateWithoutFavouritesInput>;
}

export interface DiscussionUpsertWithoutOpinionsInput {

    where: NonNull<DiscussionWhereUniqueInput>;

    update: NonNull<DiscussionUpdateWithoutOpinionsDataInput>;

    create: NonNull<DiscussionCreateWithoutOpinionsInput>;
}

export interface DiscussionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<DiscussionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<DiscussionWhereInput>>;

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

    slug?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    slug_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    slug_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    slug_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    slug_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    slug_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    slug_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    slug_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    slug_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    slug_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    slug_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    slug_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    slug_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    slug_not_ends_with?: Optional<String>;

    content?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    content_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    content_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    content_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    content_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    content_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    content_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    content_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    content_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    content_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    content_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    content_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    content_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    content_not_ends_with?: Optional<String>;

    private?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    private_not?: Optional<Boolean>;

    favourites_every?: Optional<UserWhereInput>;

    favourites_some?: Optional<UserWhereInput>;

    favourites_none?: Optional<UserWhereInput>;

    author?: Optional<UserWhereInput>;

    opinions_every?: Optional<OpinionsWhereInput>;

    opinions_some?: Optional<OpinionsWhereInput>;

    opinions_none?: Optional<OpinionsWhereInput>;
}

export interface DiscussionWhereUniqueInput {

    id?: Optional<ID>;
}

export interface FileCreateInput {

    name: NonNull<String>;

    size: NonNull<Int>;

    secret: NonNull<String>;

    contentType: NonNull<String>;

    url: NonNull<String>;
}

export interface FileCreateOneInput {

    create?: Optional<FileCreateInput>;

    connect?: Optional<FileWhereUniqueInput>;
}

export interface FileSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<FileSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<FileSubscriptionWhereInput>>;

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

    node?: Optional<FileWhereInput>;
}

export interface FileUpdateDataInput {

    name?: Optional<String>;

    size?: Optional<Int>;

    secret?: Optional<String>;

    contentType?: Optional<String>;

    url?: Optional<String>;
}

export interface FileUpdateInput {

    name?: Optional<String>;

    size?: Optional<Int>;

    secret?: Optional<String>;

    contentType?: Optional<String>;

    url?: Optional<String>;
}

export interface FileUpdateNestedInput {

    where: NonNull<FileWhereUniqueInput>;

    data: NonNull<FileUpdateDataInput>;
}

export interface FileUpdateOneInput {

    create?: Optional<FileCreateInput>;

    connect?: Optional<FileWhereUniqueInput>;

    disconnect?: Optional<FileWhereUniqueInput>;

    delete?: Optional<FileWhereUniqueInput>;

    update?: Optional<FileUpdateNestedInput>;

    upsert?: Optional<FileUpsertNestedInput>;
}

export interface FileUpsertNestedInput {

    where: NonNull<FileWhereUniqueInput>;

    update: NonNull<FileUpdateDataInput>;

    create: NonNull<FileCreateInput>;
}

export interface FileWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<FileWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<FileWhereInput>>;

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

    size?: Optional<Int>;

    /**
     * All values that are not equal to given value.
     */
    size_not?: Optional<Int>;

    /**
     * All values that are contained in given list.
     */
    size_in?: List<NonNull<Int>>;

    /**
     * All values that are not contained in given list.
     */
    size_not_in?: List<NonNull<Int>>;

    /**
     * All values less than the given value.
     */
    size_lt?: Optional<Int>;

    /**
     * All values less than or equal the given value.
     */
    size_lte?: Optional<Int>;

    /**
     * All values greater than the given value.
     */
    size_gt?: Optional<Int>;

    /**
     * All values greater than or equal the given value.
     */
    size_gte?: Optional<Int>;

    secret?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    secret_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    secret_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    secret_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    secret_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    secret_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    secret_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    secret_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    secret_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    secret_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    secret_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    secret_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    secret_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    secret_not_ends_with?: Optional<String>;

    contentType?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    contentType_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    contentType_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    contentType_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    contentType_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    contentType_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    contentType_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    contentType_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    contentType_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    contentType_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    contentType_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    contentType_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    contentType_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    contentType_not_ends_with?: Optional<String>;

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

    url?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    url_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    url_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    url_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    url_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    url_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    url_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    url_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    url_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    url_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    url_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    url_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    url_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    url_not_ends_with?: Optional<String>;
}

export interface FileWhereUniqueInput {

    id?: Optional<ID>;

    secret?: Optional<String>;

    url?: Optional<String>;
}

export interface ForumCreateInput {

    title: NonNull<String>;

    slug?: Optional<String>;

    private?: Optional<Boolean>;

    author: NonNull<UserCreateOneInput>;
}

export interface ForumSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<ForumSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<ForumSubscriptionWhereInput>>;

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

    node?: Optional<ForumWhereInput>;
}

export interface ForumUpdateInput {

    title?: Optional<String>;

    slug?: Optional<String>;

    private?: Optional<Boolean>;

    author?: Optional<UserUpdateOneInput>;
}

export interface ForumWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<ForumWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<ForumWhereInput>>;

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

    slug?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    slug_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    slug_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    slug_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    slug_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    slug_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    slug_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    slug_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    slug_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    slug_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    slug_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    slug_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    slug_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    slug_not_ends_with?: Optional<String>;

    private?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    private_not?: Optional<Boolean>;

    author?: Optional<UserWhereInput>;
}

export interface ForumWhereUniqueInput {

    id?: Optional<ID>;
}

export interface InstitutionsCreateInput {

    title: NonNull<String>;

    type: NonNull<InstitutionType>;

    country?: Optional<CountryCreateOneWithoutInstitutionsInput>;

    users?: Optional<UserCreateManyWithoutInstitutionInput>;
}

export interface InstitutionsCreateManyWithoutCountryInput {

    create?: List<NonNull<InstitutionsCreateWithoutCountryInput>>;

    connect?: List<NonNull<InstitutionsWhereUniqueInput>>;
}

export interface InstitutionsCreateOneInput {

    create?: Optional<InstitutionsCreateInput>;

    connect?: Optional<InstitutionsWhereUniqueInput>;
}

export interface InstitutionsCreateOneWithoutUsersInput {

    create?: Optional<InstitutionsCreateWithoutUsersInput>;

    connect?: Optional<InstitutionsWhereUniqueInput>;
}

export interface InstitutionsCreateWithoutCountryInput {

    title: NonNull<String>;

    type: NonNull<InstitutionType>;

    users?: Optional<UserCreateManyWithoutInstitutionInput>;
}

export interface InstitutionsCreateWithoutUsersInput {

    title: NonNull<String>;

    type: NonNull<InstitutionType>;

    country?: Optional<CountryCreateOneWithoutInstitutionsInput>;
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

export interface InstitutionsUpdateDataInput {

    title?: Optional<String>;

    type?: Optional<InstitutionType>;

    country?: Optional<CountryUpdateOneWithoutInstitutionsInput>;

    users?: Optional<UserUpdateManyWithoutInstitutionInput>;
}

export interface InstitutionsUpdateInput {

    title?: Optional<String>;

    type?: Optional<InstitutionType>;

    country?: Optional<CountryUpdateOneWithoutInstitutionsInput>;

    users?: Optional<UserUpdateManyWithoutInstitutionInput>;
}

export interface InstitutionsUpdateManyWithoutCountryInput {

    create?: List<NonNull<InstitutionsCreateWithoutCountryInput>>;

    connect?: List<NonNull<InstitutionsWhereUniqueInput>>;

    disconnect?: List<NonNull<InstitutionsWhereUniqueInput>>;

    delete?: List<NonNull<InstitutionsWhereUniqueInput>>;

    update?: List<NonNull<InstitutionsUpdateWithoutCountryInput>>;

    upsert?: List<NonNull<InstitutionsUpsertWithoutCountryInput>>;
}

export interface InstitutionsUpdateNestedInput {

    where: NonNull<InstitutionsWhereUniqueInput>;

    data: NonNull<InstitutionsUpdateDataInput>;
}

export interface InstitutionsUpdateOneInput {

    create?: Optional<InstitutionsCreateInput>;

    connect?: Optional<InstitutionsWhereUniqueInput>;

    disconnect?: Optional<InstitutionsWhereUniqueInput>;

    delete?: Optional<InstitutionsWhereUniqueInput>;

    update?: Optional<InstitutionsUpdateNestedInput>;

    upsert?: Optional<InstitutionsUpsertNestedInput>;
}

export interface InstitutionsUpdateOneWithoutUsersInput {

    create?: Optional<InstitutionsCreateWithoutUsersInput>;

    connect?: Optional<InstitutionsWhereUniqueInput>;

    disconnect?: Optional<InstitutionsWhereUniqueInput>;

    delete?: Optional<InstitutionsWhereUniqueInput>;

    update?: Optional<InstitutionsUpdateWithoutUsersInput>;

    upsert?: Optional<InstitutionsUpsertWithoutUsersInput>;
}

export interface InstitutionsUpdateWithoutCountryDataInput {

    title?: Optional<String>;

    type?: Optional<InstitutionType>;

    users?: Optional<UserUpdateManyWithoutInstitutionInput>;
}

export interface InstitutionsUpdateWithoutCountryInput {

    where: NonNull<InstitutionsWhereUniqueInput>;

    data: NonNull<InstitutionsUpdateWithoutCountryDataInput>;
}

export interface InstitutionsUpdateWithoutUsersDataInput {

    title?: Optional<String>;

    type?: Optional<InstitutionType>;

    country?: Optional<CountryUpdateOneWithoutInstitutionsInput>;
}

export interface InstitutionsUpdateWithoutUsersInput {

    where: NonNull<InstitutionsWhereUniqueInput>;

    data: NonNull<InstitutionsUpdateWithoutUsersDataInput>;
}

export interface InstitutionsUpsertNestedInput {

    where: NonNull<InstitutionsWhereUniqueInput>;

    update: NonNull<InstitutionsUpdateDataInput>;

    create: NonNull<InstitutionsCreateInput>;
}

export interface InstitutionsUpsertWithoutCountryInput {

    where: NonNull<InstitutionsWhereUniqueInput>;

    update: NonNull<InstitutionsUpdateWithoutCountryDataInput>;

    create: NonNull<InstitutionsCreateWithoutCountryInput>;
}

export interface InstitutionsUpsertWithoutUsersInput {

    where: NonNull<InstitutionsWhereUniqueInput>;

    update: NonNull<InstitutionsUpdateWithoutUsersDataInput>;

    create: NonNull<InstitutionsCreateWithoutUsersInput>;
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

    country?: Optional<CountryWhereInput>;

    users_every?: Optional<UserWhereInput>;

    users_some?: Optional<UserWhereInput>;

    users_none?: Optional<UserWhereInput>;
}

export interface InstitutionsWhereUniqueInput {

    id?: Optional<ID>;
}

export interface InterestCreateInput {

    name: NonNull<String>;

    file: NonNull<FileCreateOneInput>;

    users?: Optional<UserCreateManyWithoutInterestInput>;
}

export interface InterestCreateOneWithoutUsersInput {

    create?: Optional<InterestCreateWithoutUsersInput>;

    connect?: Optional<InterestWhereUniqueInput>;
}

export interface InterestCreateWithoutUsersInput {

    name: NonNull<String>;

    file: NonNull<FileCreateOneInput>;
}

export interface InterestSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<InterestSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<InterestSubscriptionWhereInput>>;

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

    node?: Optional<InterestWhereInput>;
}

export interface InterestUpdateInput {

    name?: Optional<String>;

    file?: Optional<FileUpdateOneInput>;

    users?: Optional<UserUpdateManyWithoutInterestInput>;
}

export interface InterestUpdateOneWithoutUsersInput {

    create?: Optional<InterestCreateWithoutUsersInput>;

    connect?: Optional<InterestWhereUniqueInput>;

    disconnect?: Optional<InterestWhereUniqueInput>;

    delete?: Optional<InterestWhereUniqueInput>;

    update?: Optional<InterestUpdateWithoutUsersInput>;

    upsert?: Optional<InterestUpsertWithoutUsersInput>;
}

export interface InterestUpdateWithoutUsersDataInput {

    name?: Optional<String>;

    file?: Optional<FileUpdateOneInput>;
}

export interface InterestUpdateWithoutUsersInput {

    where: NonNull<InterestWhereUniqueInput>;

    data: NonNull<InterestUpdateWithoutUsersDataInput>;
}

export interface InterestUpsertWithoutUsersInput {

    where: NonNull<InterestWhereUniqueInput>;

    update: NonNull<InterestUpdateWithoutUsersDataInput>;

    create: NonNull<InterestCreateWithoutUsersInput>;
}

export interface InterestWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<InterestWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<InterestWhereInput>>;

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

    file?: Optional<FileWhereInput>;

    users_every?: Optional<UserWhereInput>;

    users_some?: Optional<UserWhereInput>;

    users_none?: Optional<UserWhereInput>;
}

export interface InterestWhereUniqueInput {

    id?: Optional<ID>;
}

export interface OpinionsCreateInput {

    content: NonNull<String>;

    author: NonNull<UserCreateOneWithoutOpinionsInput>;

    discussion: NonNull<DiscussionCreateOneWithoutOpinionsInput>;
}

export interface OpinionsCreateManyWithoutAuthorInput {

    create?: List<NonNull<OpinionsCreateWithoutAuthorInput>>;

    connect?: List<NonNull<OpinionsWhereUniqueInput>>;
}

export interface OpinionsCreateManyWithoutDiscussionInput {

    create?: List<NonNull<OpinionsCreateWithoutDiscussionInput>>;

    connect?: List<NonNull<OpinionsWhereUniqueInput>>;
}

export interface OpinionsCreateWithoutAuthorInput {

    content: NonNull<String>;

    discussion: NonNull<DiscussionCreateOneWithoutOpinionsInput>;
}

export interface OpinionsCreateWithoutDiscussionInput {

    content: NonNull<String>;

    author: NonNull<UserCreateOneWithoutOpinionsInput>;
}

export interface OpinionsSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<OpinionsSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<OpinionsSubscriptionWhereInput>>;

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

    node?: Optional<OpinionsWhereInput>;
}

export interface OpinionsUpdateInput {

    content?: Optional<String>;

    author?: Optional<UserUpdateOneWithoutOpinionsInput>;

    discussion?: Optional<DiscussionUpdateOneWithoutOpinionsInput>;
}

export interface OpinionsUpdateManyWithoutAuthorInput {

    create?: List<NonNull<OpinionsCreateWithoutAuthorInput>>;

    connect?: List<NonNull<OpinionsWhereUniqueInput>>;

    disconnect?: List<NonNull<OpinionsWhereUniqueInput>>;

    delete?: List<NonNull<OpinionsWhereUniqueInput>>;

    update?: List<NonNull<OpinionsUpdateWithoutAuthorInput>>;

    upsert?: List<NonNull<OpinionsUpsertWithoutAuthorInput>>;
}

export interface OpinionsUpdateManyWithoutDiscussionInput {

    create?: List<NonNull<OpinionsCreateWithoutDiscussionInput>>;

    connect?: List<NonNull<OpinionsWhereUniqueInput>>;

    disconnect?: List<NonNull<OpinionsWhereUniqueInput>>;

    delete?: List<NonNull<OpinionsWhereUniqueInput>>;

    update?: List<NonNull<OpinionsUpdateWithoutDiscussionInput>>;

    upsert?: List<NonNull<OpinionsUpsertWithoutDiscussionInput>>;
}

export interface OpinionsUpdateWithoutAuthorDataInput {

    content?: Optional<String>;

    discussion?: Optional<DiscussionUpdateOneWithoutOpinionsInput>;
}

export interface OpinionsUpdateWithoutAuthorInput {

    where: NonNull<OpinionsWhereUniqueInput>;

    data: NonNull<OpinionsUpdateWithoutAuthorDataInput>;
}

export interface OpinionsUpdateWithoutDiscussionDataInput {

    content?: Optional<String>;

    author?: Optional<UserUpdateOneWithoutOpinionsInput>;
}

export interface OpinionsUpdateWithoutDiscussionInput {

    where: NonNull<OpinionsWhereUniqueInput>;

    data: NonNull<OpinionsUpdateWithoutDiscussionDataInput>;
}

export interface OpinionsUpsertWithoutAuthorInput {

    where: NonNull<OpinionsWhereUniqueInput>;

    update: NonNull<OpinionsUpdateWithoutAuthorDataInput>;

    create: NonNull<OpinionsCreateWithoutAuthorInput>;
}

export interface OpinionsUpsertWithoutDiscussionInput {

    where: NonNull<OpinionsWhereUniqueInput>;

    update: NonNull<OpinionsUpdateWithoutDiscussionDataInput>;

    create: NonNull<OpinionsCreateWithoutDiscussionInput>;
}

export interface OpinionsWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<OpinionsWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<OpinionsWhereInput>>;

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

    content?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    content_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    content_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    content_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    content_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    content_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    content_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    content_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    content_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    content_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    content_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    content_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    content_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    content_not_ends_with?: Optional<String>;

    author?: Optional<UserWhereInput>;

    discussion?: Optional<DiscussionWhereInput>;
}

export interface OpinionsWhereUniqueInput {

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

export interface UserCreateInput {

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionCreateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionCreateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectCreateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectCreateManyWithoutFromInput>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsCreateManyWithoutAuthorInput>;
}

export interface UserCreateManyWithoutCountryInput {

    create?: List<NonNull<UserCreateWithoutCountryInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;
}

export interface UserCreateManyWithoutDepartmentInput {

    create?: List<NonNull<UserCreateWithoutDepartmentInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;
}

export interface UserCreateManyWithoutFavouritesInput {

    create?: List<NonNull<UserCreateWithoutFavouritesInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;
}

export interface UserCreateManyWithoutInstitutionInput {

    create?: List<NonNull<UserCreateWithoutInstitutionInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;
}

export interface UserCreateManyWithoutInterestInput {

    create?: List<NonNull<UserCreateWithoutInterestInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;
}

export interface UserCreateOneInput {

    create?: Optional<UserCreateInput>;

    connect?: Optional<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutArticlesInput {

    create?: Optional<UserCreateWithoutArticlesInput>;

    connect?: Optional<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutConectFromInput {

    create?: Optional<UserCreateWithoutConectFromInput>;

    connect?: Optional<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutConnectToInput {

    create?: Optional<UserCreateWithoutConnectToInput>;

    connect?: Optional<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutMyDiscussionsInput {

    create?: Optional<UserCreateWithoutMyDiscussionsInput>;

    connect?: Optional<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutOpinionsInput {

    create?: Optional<UserCreateWithoutOpinionsInput>;

    connect?: Optional<UserWhereUniqueInput>;
}

export interface UserCreateWithoutArticlesInput {

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionCreateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionCreateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectCreateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectCreateManyWithoutFromInput>;

    opinions?: Optional<OpinionsCreateManyWithoutAuthorInput>;
}

export interface UserCreateWithoutConectFromInput {

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionCreateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionCreateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectCreateManyWithoutToInput>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsCreateManyWithoutAuthorInput>;
}

export interface UserCreateWithoutConnectToInput {

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionCreateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionCreateOneWithoutAuthorInput>;

    ConectFrom?: Optional<ConnectCreateManyWithoutFromInput>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsCreateManyWithoutAuthorInput>;
}

export interface UserCreateWithoutCountryInput {

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionCreateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionCreateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectCreateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectCreateManyWithoutFromInput>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsCreateManyWithoutAuthorInput>;
}

export interface UserCreateWithoutDepartmentInput {

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionCreateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionCreateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectCreateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectCreateManyWithoutFromInput>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsCreateManyWithoutAuthorInput>;
}

export interface UserCreateWithoutFavouritesInput {

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateOneWithoutUsersInput>;

    myDiscussions?: Optional<DiscussionCreateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectCreateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectCreateManyWithoutFromInput>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsCreateManyWithoutAuthorInput>;
}

export interface UserCreateWithoutInstitutionInput {

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionCreateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionCreateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectCreateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectCreateManyWithoutFromInput>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsCreateManyWithoutAuthorInput>;
}

export interface UserCreateWithoutInterestInput {

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionCreateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionCreateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectCreateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectCreateManyWithoutFromInput>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsCreateManyWithoutAuthorInput>;
}

export interface UserCreateWithoutMyDiscussionsInput {

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionCreateManyWithoutFavouritesInput>;

    connectTo?: Optional<ConnectCreateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectCreateManyWithoutFromInput>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsCreateManyWithoutAuthorInput>;
}

export interface UserCreateWithoutOpinionsInput {

    email: NonNull<String>;

    username?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionCreateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionCreateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectCreateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectCreateManyWithoutFromInput>;

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

export interface UserUpdateDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionUpdateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionUpdateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectUpdateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectUpdateManyWithoutFromInput>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionUpdateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionUpdateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectUpdateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectUpdateManyWithoutFromInput>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateManyWithoutCountryInput {

    create?: List<NonNull<UserCreateWithoutCountryInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithoutCountryInput>>;

    upsert?: List<NonNull<UserUpsertWithoutCountryInput>>;
}

export interface UserUpdateManyWithoutDepartmentInput {

    create?: List<NonNull<UserCreateWithoutDepartmentInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithoutDepartmentInput>>;

    upsert?: List<NonNull<UserUpsertWithoutDepartmentInput>>;
}

export interface UserUpdateManyWithoutFavouritesInput {

    create?: List<NonNull<UserCreateWithoutFavouritesInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithoutFavouritesInput>>;

    upsert?: List<NonNull<UserUpsertWithoutFavouritesInput>>;
}

export interface UserUpdateManyWithoutInstitutionInput {

    create?: List<NonNull<UserCreateWithoutInstitutionInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithoutInstitutionInput>>;

    upsert?: List<NonNull<UserUpsertWithoutInstitutionInput>>;
}

export interface UserUpdateManyWithoutInterestInput {

    create?: List<NonNull<UserCreateWithoutInterestInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithoutInterestInput>>;

    upsert?: List<NonNull<UserUpsertWithoutInterestInput>>;
}

export interface UserUpdateNestedInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateDataInput>;
}

export interface UserUpdateOneInput {

    create?: Optional<UserCreateInput>;

    connect?: Optional<UserWhereUniqueInput>;

    disconnect?: Optional<UserWhereUniqueInput>;

    delete?: Optional<UserWhereUniqueInput>;

    update?: Optional<UserUpdateNestedInput>;

    upsert?: Optional<UserUpsertNestedInput>;
}

export interface UserUpdateOneWithoutArticlesInput {

    create?: Optional<UserCreateWithoutArticlesInput>;

    connect?: Optional<UserWhereUniqueInput>;

    disconnect?: Optional<UserWhereUniqueInput>;

    delete?: Optional<UserWhereUniqueInput>;

    update?: Optional<UserUpdateWithoutArticlesInput>;

    upsert?: Optional<UserUpsertWithoutArticlesInput>;
}

export interface UserUpdateOneWithoutConectFromInput {

    create?: Optional<UserCreateWithoutConectFromInput>;

    connect?: Optional<UserWhereUniqueInput>;

    disconnect?: Optional<UserWhereUniqueInput>;

    delete?: Optional<UserWhereUniqueInput>;

    update?: Optional<UserUpdateWithoutConectFromInput>;

    upsert?: Optional<UserUpsertWithoutConectFromInput>;
}

export interface UserUpdateOneWithoutConnectToInput {

    create?: Optional<UserCreateWithoutConnectToInput>;

    connect?: Optional<UserWhereUniqueInput>;

    disconnect?: Optional<UserWhereUniqueInput>;

    delete?: Optional<UserWhereUniqueInput>;

    update?: Optional<UserUpdateWithoutConnectToInput>;

    upsert?: Optional<UserUpsertWithoutConnectToInput>;
}

export interface UserUpdateOneWithoutMyDiscussionsInput {

    create?: Optional<UserCreateWithoutMyDiscussionsInput>;

    connect?: Optional<UserWhereUniqueInput>;

    disconnect?: Optional<UserWhereUniqueInput>;

    delete?: Optional<UserWhereUniqueInput>;

    update?: Optional<UserUpdateWithoutMyDiscussionsInput>;

    upsert?: Optional<UserUpsertWithoutMyDiscussionsInput>;
}

export interface UserUpdateOneWithoutOpinionsInput {

    create?: Optional<UserCreateWithoutOpinionsInput>;

    connect?: Optional<UserWhereUniqueInput>;

    disconnect?: Optional<UserWhereUniqueInput>;

    delete?: Optional<UserWhereUniqueInput>;

    update?: Optional<UserUpdateWithoutOpinionsInput>;

    upsert?: Optional<UserUpsertWithoutOpinionsInput>;
}

export interface UserUpdateWithoutArticlesDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionUpdateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionUpdateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectUpdateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectUpdateManyWithoutFromInput>;

    opinions?: Optional<OpinionsUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateWithoutArticlesInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutArticlesDataInput>;
}

export interface UserUpdateWithoutConectFromDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionUpdateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionUpdateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectUpdateManyWithoutToInput>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateWithoutConectFromInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutConectFromDataInput>;
}

export interface UserUpdateWithoutConnectToDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionUpdateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionUpdateOneWithoutAuthorInput>;

    ConectFrom?: Optional<ConnectUpdateManyWithoutFromInput>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateWithoutConnectToInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutConnectToDataInput>;
}

export interface UserUpdateWithoutCountryDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionUpdateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionUpdateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectUpdateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectUpdateManyWithoutFromInput>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateWithoutCountryInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutCountryDataInput>;
}

export interface UserUpdateWithoutDepartmentDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionUpdateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionUpdateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectUpdateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectUpdateManyWithoutFromInput>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateWithoutDepartmentInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutDepartmentDataInput>;
}

export interface UserUpdateWithoutFavouritesDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateOneWithoutUsersInput>;

    myDiscussions?: Optional<DiscussionUpdateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectUpdateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectUpdateManyWithoutFromInput>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateWithoutFavouritesInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutFavouritesDataInput>;
}

export interface UserUpdateWithoutInstitutionDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionUpdateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionUpdateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectUpdateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectUpdateManyWithoutFromInput>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateWithoutInstitutionInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutInstitutionDataInput>;
}

export interface UserUpdateWithoutInterestDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionUpdateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionUpdateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectUpdateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectUpdateManyWithoutFromInput>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateWithoutInterestInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutInterestDataInput>;
}

export interface UserUpdateWithoutMyDiscussionsDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionUpdateManyWithoutFavouritesInput>;

    connectTo?: Optional<ConnectUpdateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectUpdateManyWithoutFromInput>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    opinions?: Optional<OpinionsUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateWithoutMyDiscussionsInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutMyDiscussionsDataInput>;
}

export interface UserUpdateWithoutOpinionsDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateOneWithoutUsersInput>;

    favourites?: Optional<DiscussionUpdateManyWithoutFavouritesInput>;

    myDiscussions?: Optional<DiscussionUpdateOneWithoutAuthorInput>;

    connectTo?: Optional<ConnectUpdateManyWithoutToInput>;

    ConectFrom?: Optional<ConnectUpdateManyWithoutFromInput>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateWithoutOpinionsInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutOpinionsDataInput>;
}

export interface UserUpsertNestedInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateDataInput>;

    create: NonNull<UserCreateInput>;
}

export interface UserUpsertWithoutArticlesInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutArticlesDataInput>;

    create: NonNull<UserCreateWithoutArticlesInput>;
}

export interface UserUpsertWithoutConectFromInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutConectFromDataInput>;

    create: NonNull<UserCreateWithoutConectFromInput>;
}

export interface UserUpsertWithoutConnectToInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutConnectToDataInput>;

    create: NonNull<UserCreateWithoutConnectToInput>;
}

export interface UserUpsertWithoutCountryInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutCountryDataInput>;

    create: NonNull<UserCreateWithoutCountryInput>;
}

export interface UserUpsertWithoutDepartmentInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutDepartmentDataInput>;

    create: NonNull<UserCreateWithoutDepartmentInput>;
}

export interface UserUpsertWithoutFavouritesInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutFavouritesDataInput>;

    create: NonNull<UserCreateWithoutFavouritesInput>;
}

export interface UserUpsertWithoutInstitutionInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutInstitutionDataInput>;

    create: NonNull<UserCreateWithoutInstitutionInput>;
}

export interface UserUpsertWithoutInterestInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutInterestDataInput>;

    create: NonNull<UserCreateWithoutInterestInput>;
}

export interface UserUpsertWithoutMyDiscussionsInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutMyDiscussionsDataInput>;

    create: NonNull<UserCreateWithoutMyDiscussionsInput>;
}

export interface UserUpsertWithoutOpinionsInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutOpinionsDataInput>;

    create: NonNull<UserCreateWithoutOpinionsInput>;
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

    type?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    type_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    type_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    type_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    type_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    type_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    type_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    type_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    type_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    type_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    type_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    type_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    type_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    type_not_ends_with?: Optional<String>;

    userType?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    userType_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    userType_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    userType_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    userType_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    userType_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    userType_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    userType_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    userType_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    userType_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    userType_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    userType_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    userType_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    userType_not_ends_with?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    newConnectNot_not?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    newCommentNot_not?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    newMessageNot_not?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    newProfileNot_not?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    /**
     * All values that are not equal to given value.
     */
    completedProfile_not?: Optional<Int>;

    /**
     * All values that are contained in given list.
     */
    completedProfile_in?: List<NonNull<Int>>;

    /**
     * All values that are not contained in given list.
     */
    completedProfile_not_in?: List<NonNull<Int>>;

    /**
     * All values less than the given value.
     */
    completedProfile_lt?: Optional<Int>;

    /**
     * All values less than or equal the given value.
     */
    completedProfile_lte?: Optional<Int>;

    /**
     * All values greater than the given value.
     */
    completedProfile_gt?: Optional<Int>;

    /**
     * All values greater than or equal the given value.
     */
    completedProfile_gte?: Optional<Int>;

    country?: Optional<CountryWhereInput>;

    institution?: Optional<InstitutionsWhereInput>;

    department?: Optional<DepartmentWhereInput>;

    interest?: Optional<InterestWhereInput>;

    favourites_every?: Optional<DiscussionWhereInput>;

    favourites_some?: Optional<DiscussionWhereInput>;

    favourites_none?: Optional<DiscussionWhereInput>;

    myDiscussions?: Optional<DiscussionWhereInput>;

    connectTo_every?: Optional<ConnectWhereInput>;

    connectTo_some?: Optional<ConnectWhereInput>;

    connectTo_none?: Optional<ConnectWhereInput>;

    ConectFrom_every?: Optional<ConnectWhereInput>;

    ConectFrom_some?: Optional<ConnectWhereInput>;

    ConectFrom_none?: Optional<ConnectWhereInput>;

    articles_every?: Optional<ArticleWhereInput>;

    articles_some?: Optional<ArticleWhereInput>;

    articles_none?: Optional<ArticleWhereInput>;

    opinions_every?: Optional<OpinionsWhereInput>;

    opinions_some?: Optional<OpinionsWhereInput>;

    opinions_none?: Optional<OpinionsWhereInput>;
}

export interface UserWhereUniqueInput {

    id?: Optional<ID>;

    email?: Optional<String>;

    username?: Optional<String>;
}

