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
 * The `Float` scalar type represents signed double-precision fractional values as 
 * specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point).
 */
export type Float = number;

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

    "slug_ASC" |

    "slug_DESC" |

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

    "type_DESC" |

    "link_ASC" |

    "link_DESC" |

    "description_ASC" |

    "description_DESC" |

    "viewCount_ASC" |

    "viewCount_DESC"
);

export type ChannelsOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "title_ASC" |

    "title_DESC" |

    "description_ASC" |

    "description_DESC" |

    "slug_ASC" |

    "slug_DESC" |

    "isPrivate_ASC" |

    "isPrivate_DESC" |

    "isDefault_ASC" |

    "isDefault_DESC" |

    "isArchived_ASC" |

    "isArchived_DESC" |

    "type_ASC" |

    "type_DESC"
);

export type ChannelType = (

    "Group" |

    "Direct" |

    "Channel"
);

export type CommentOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "slug_ASC" |

    "slug_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "body_ASC" |

    "body_DESC"
);

export type ConnectOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "status_ASC" |

    "status_DESC"
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

    "name_DESC" |

    "avatar_ASC" |

    "avatar_DESC"
);

export type JoinSettingsOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "tokenJoinEnabled_ASC" |

    "tokenJoinEnabled_DESC" |

    "token_ASC" |

    "token_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC"
);

export type LibraryOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "name_ASC" |

    "name_DESC" |

    "description_ASC" |

    "description_DESC"
);

export type LocationOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "longitude_ASC" |

    "longitude_DESC" |

    "latitude_ASC" |

    "latitude_DESC" |

    "type_ASC" |

    "type_DESC"
);

export type MessageOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "text_ASC" |

    "text_DESC" |

    "seen_ASC" |

    "seen_DESC" |

    "delivered_ASC" |

    "delivered_DESC" |

    "sent_ASC" |

    "sent_DESC"
);

export type MutationType = (

    "CREATED" |

    "UPDATED" |

    "DELETED"
);

export type NotificationOrderByInput = (

    "id_ASC" |

    "id_DESC" |

    "createdAt_ASC" |

    "createdAt_DESC" |

    "updatedAt_ASC" |

    "updatedAt_DESC" |

    "verb_ASC" |

    "verb_DESC" |

    "type_ASC" |

    "type_DESC" |

    "slug_ASC" |

    "slug_DESC" |

    "seen_ASC" |

    "seen_DESC" |

    "sent_ASC" |

    "sent_DESC"
);

export type NotificationType = (

    "Message" |

    "Connect" |

    "Invitation" |

    "Articles" |

    "Comment" |

    "Like" |

    "Saved" |

    "General"
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

    "avatar_ASC" |

    "avatar_DESC" |

    "headerImage_ASC" |

    "headerImage_DESC" |

    "password_ASC" |

    "password_DESC" |

    "firstname_ASC" |

    "firstname_DESC" |

    "lastname_ASC" |

    "lastname_DESC" |

    "bio_ASC" |

    "bio_DESC" |

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

    "newCommunityNot_ASC" |

    "newCommunityNot_DESC" |

    "newProfileNot_ASC" |

    "newProfileNot_DESC" |

    "topWeeklyArticleNot_ASC" |

    "topWeeklyArticleNot_DESC" |

    "mentionMeNot_ASC" |

    "mentionMeNot_DESC" |

    "enableBrowserPushNot_ASC" |

    "enableBrowserPushNot_DESC" |

    "enableMobilePushNot_ASC" |

    "enableMobilePushNot_DESC" |

    "enableLocation_ASC" |

    "enableLocation_DESC" |

    "completedProfile_ASC" |

    "completedProfile_DESC" |

    "verified_ASC" |

    "verified_DESC"
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

export interface AggregateChannels {

    count: NonNull<Int>;
}

export interface AggregateComment {

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

export interface AggregateFile {

    count: NonNull<Int>;
}

export interface AggregateInstitutions {

    count: NonNull<Int>;
}

export interface AggregateInterest {

    count: NonNull<Int>;
}

export interface AggregateJoinSettings {

    count: NonNull<Int>;
}

export interface AggregateLibrary {

    count: NonNull<Int>;
}

export interface AggregateLocation {

    count: NonNull<Int>;
}

export interface AggregateMessage {

    count: NonNull<Int>;
}

export interface AggregateNotification {

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

    slug?: Optional<String>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    isPublished: NonNull<Boolean>;

    title: NonNull<String>;

    body: NonNull<String>;

    headerImage?: Optional<File>;

    tags?: List<NonNull<String>>;

    category?: Optional<Interest>;

    type?: Optional<Arcticletype>;

    link?: Optional<String>;

    description?: Optional<String>;

    author: NonNull<User>;

    viewCount?: Optional<Int>;

    likes?: List<NonNull<User>>;

    comments?: List<NonNull<Comment>>;

    userFavourited?: List<NonNull<User>>;
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

    slug?: Optional<String>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    isPublished: NonNull<Boolean>;

    title: NonNull<String>;

    body: NonNull<String>;

    tags?: List<NonNull<String>>;

    type?: Optional<Arcticletype>;

    link?: Optional<String>;

    description?: Optional<String>;

    viewCount?: Optional<Int>;
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

export interface Channels extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    title: NonNull<String>;

    description: NonNull<String>;

    avatar?: Optional<File>;

    slug: NonNull<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    author: NonNull<User>;

    type?: Optional<ChannelType>;

    messages?: List<NonNull<Message>>;

    participants?: List<NonNull<User>>;

    pendingUsers?: List<NonNull<User>>;

    blockedUsers?: List<NonNull<User>>;

    moderators?: List<NonNull<User>>;

    joinSettings?: Optional<JoinSettings>;
}

/**
 * A connection to a list of items.
 */
export interface ChannelsConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<ChannelsEdge>>>;

    aggregate: NonNull<AggregateChannels>;
}

/**
 * An edge in a connection.
 */
export interface ChannelsEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Channels>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface ChannelsPreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    title: NonNull<String>;

    description: NonNull<String>;

    slug: NonNull<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    type?: Optional<ChannelType>;
}

export interface ChannelsSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Channels>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<ChannelsPreviousValues>;
}

export interface Comment extends Node {

    id: NonNull<ID>;

    slug?: Optional<String>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    body: NonNull<String>;

    replies?: List<NonNull<Comment>>;

    article: NonNull<Article>;

    author: NonNull<User>;
}

/**
 * A connection to a list of items.
 */
export interface CommentConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<CommentEdge>>>;

    aggregate: NonNull<AggregateComment>;
}

/**
 * An edge in a connection.
 */
export interface CommentEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Comment>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface CommentPreviousValues {

    id: NonNull<ID>;

    slug?: Optional<String>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    body: NonNull<String>;
}

export interface CommentSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Comment>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<CommentPreviousValues>;
}

export interface Connect extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    status: NonNull<Int>;

    user1: NonNull<User>;

    user2: NonNull<User>;
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

    status: NonNull<Int>;
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

    institution?: Optional<Institutions>;

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

export interface File extends Node {

    id: NonNull<ID>;

    name: NonNull<String>;

    size: NonNull<Int>;

    secret: NonNull<String>;

    contentType: NonNull<String>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    url: NonNull<String>;

    userFiles?: Optional<User>;
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

export interface Institutions extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    title: NonNull<String>;

    type: NonNull<InstitutionType>;

    country?: Optional<Country>;

    users?: List<NonNull<User>>;

    departments?: List<NonNull<Department>>;
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

    avatar: NonNull<String>;

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

    avatar: NonNull<String>;
}

export interface InterestSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Interest>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<InterestPreviousValues>;
}

export interface JoinSettings extends Node {

    id: NonNull<ID>;

    tokenJoinEnabled?: Optional<Boolean>;

    token?: Optional<String>;
}

/**
 * A connection to a list of items.
 */
export interface JoinSettingsConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<JoinSettingsEdge>>>;

    aggregate: NonNull<AggregateJoinSettings>;
}

/**
 * An edge in a connection.
 */
export interface JoinSettingsEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<JoinSettings>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface JoinSettingsPreviousValues {

    id: NonNull<ID>;

    tokenJoinEnabled?: Optional<Boolean>;

    token?: Optional<String>;
}

export interface JoinSettingsSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<JoinSettings>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<JoinSettingsPreviousValues>;
}

export interface Library extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    location: NonNull<Location>;

    name: NonNull<String>;

    description?: Optional<String>;
}

/**
 * A connection to a list of items.
 */
export interface LibraryConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<LibraryEdge>>>;

    aggregate: NonNull<AggregateLibrary>;
}

/**
 * An edge in a connection.
 */
export interface LibraryEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Library>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface LibraryPreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    name: NonNull<String>;

    description?: Optional<String>;
}

export interface LibrarySubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Library>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<LibraryPreviousValues>;
}

export interface Location extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    longitude: NonNull<Float>;

    latitude: NonNull<Float>;

    type: NonNull<String>;
}

/**
 * A connection to a list of items.
 */
export interface LocationConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<LocationEdge>>>;

    aggregate: NonNull<AggregateLocation>;
}

/**
 * An edge in a connection.
 */
export interface LocationEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Location>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface LocationPreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    longitude: NonNull<Float>;

    latitude: NonNull<Float>;

    type: NonNull<String>;
}

export interface LocationSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Location>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<LocationPreviousValues>;
}

export interface Message extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    channel: NonNull<Channels>;

    text: NonNull<String>;

    user: NonNull<User>;

    seen?: Optional<Boolean>;

    delivered?: Optional<Boolean>;

    sent?: Optional<Boolean>;
}

/**
 * A connection to a list of items.
 */
export interface MessageConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<MessageEdge>>>;

    aggregate: NonNull<AggregateMessage>;
}

/**
 * An edge in a connection.
 */
export interface MessageEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Message>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface MessagePreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    text: NonNull<String>;

    seen?: Optional<Boolean>;

    delivered?: Optional<Boolean>;

    sent?: Optional<Boolean>;
}

export interface MessageSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Message>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<MessagePreviousValues>;
}

export interface Mutation {

    createFile: NonNull<File>;

    createPost: NonNull<Post>;

    createLibrary: NonNull<Library>;

    createLocation: NonNull<Location>;

    createArticle: NonNull<Article>;

    createComment: NonNull<Comment>;

    createCountry: NonNull<Country>;

    createInstitutions: NonNull<Institutions>;

    createDepartment: NonNull<Department>;

    createInterest: NonNull<Interest>;

    createUser: NonNull<User>;

    createConnect: NonNull<Connect>;

    createNotification: NonNull<Notification>;

    createChannels: NonNull<Channels>;

    createMessage: NonNull<Message>;

    createJoinSettings: NonNull<JoinSettings>;

    updateFile?: Optional<File>;

    updatePost?: Optional<Post>;

    updateLibrary?: Optional<Library>;

    updateLocation?: Optional<Location>;

    updateArticle?: Optional<Article>;

    updateComment?: Optional<Comment>;

    updateCountry?: Optional<Country>;

    updateInstitutions?: Optional<Institutions>;

    updateDepartment?: Optional<Department>;

    updateInterest?: Optional<Interest>;

    updateUser?: Optional<User>;

    updateConnect?: Optional<Connect>;

    updateNotification?: Optional<Notification>;

    updateChannels?: Optional<Channels>;

    updateMessage?: Optional<Message>;

    updateJoinSettings?: Optional<JoinSettings>;

    deleteFile?: Optional<File>;

    deletePost?: Optional<Post>;

    deleteLibrary?: Optional<Library>;

    deleteLocation?: Optional<Location>;

    deleteArticle?: Optional<Article>;

    deleteComment?: Optional<Comment>;

    deleteCountry?: Optional<Country>;

    deleteInstitutions?: Optional<Institutions>;

    deleteDepartment?: Optional<Department>;

    deleteInterest?: Optional<Interest>;

    deleteUser?: Optional<User>;

    deleteConnect?: Optional<Connect>;

    deleteNotification?: Optional<Notification>;

    deleteChannels?: Optional<Channels>;

    deleteMessage?: Optional<Message>;

    deleteJoinSettings?: Optional<JoinSettings>;

    upsertFile: NonNull<File>;

    upsertPost: NonNull<Post>;

    upsertLibrary: NonNull<Library>;

    upsertLocation: NonNull<Location>;

    upsertArticle: NonNull<Article>;

    upsertComment: NonNull<Comment>;

    upsertCountry: NonNull<Country>;

    upsertInstitutions: NonNull<Institutions>;

    upsertDepartment: NonNull<Department>;

    upsertInterest: NonNull<Interest>;

    upsertUser: NonNull<User>;

    upsertConnect: NonNull<Connect>;

    upsertNotification: NonNull<Notification>;

    upsertChannels: NonNull<Channels>;

    upsertMessage: NonNull<Message>;

    upsertJoinSettings: NonNull<JoinSettings>;

    updateManyFiles: NonNull<BatchPayload>;

    updateManyPosts: NonNull<BatchPayload>;

    updateManyLibraries: NonNull<BatchPayload>;

    updateManyLocations: NonNull<BatchPayload>;

    updateManyArticles: NonNull<BatchPayload>;

    updateManyComments: NonNull<BatchPayload>;

    updateManyCountries: NonNull<BatchPayload>;

    updateManyInstitutionses: NonNull<BatchPayload>;

    updateManyDepartments: NonNull<BatchPayload>;

    updateManyInterests: NonNull<BatchPayload>;

    updateManyUsers: NonNull<BatchPayload>;

    updateManyConnects: NonNull<BatchPayload>;

    updateManyNotifications: NonNull<BatchPayload>;

    updateManyChannelses: NonNull<BatchPayload>;

    updateManyMessages: NonNull<BatchPayload>;

    updateManyJoinSettingses: NonNull<BatchPayload>;

    deleteManyFiles: NonNull<BatchPayload>;

    deleteManyPosts: NonNull<BatchPayload>;

    deleteManyLibraries: NonNull<BatchPayload>;

    deleteManyLocations: NonNull<BatchPayload>;

    deleteManyArticles: NonNull<BatchPayload>;

    deleteManyComments: NonNull<BatchPayload>;

    deleteManyCountries: NonNull<BatchPayload>;

    deleteManyInstitutionses: NonNull<BatchPayload>;

    deleteManyDepartments: NonNull<BatchPayload>;

    deleteManyInterests: NonNull<BatchPayload>;

    deleteManyUsers: NonNull<BatchPayload>;

    deleteManyConnects: NonNull<BatchPayload>;

    deleteManyNotifications: NonNull<BatchPayload>;

    deleteManyChannelses: NonNull<BatchPayload>;

    deleteManyMessages: NonNull<BatchPayload>;

    deleteManyJoinSettingses: NonNull<BatchPayload>;
}

export interface Notification extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    target: NonNull<User>;

    actor: NonNull<User>;

    verb: NonNull<String>;

    type: NonNull<NotificationType>;

    slug?: Optional<String>;

    article?: Optional<Article>;

    message?: Optional<Message>;

    connect?: Optional<Connect>;

    seen?: Optional<Boolean>;

    sent?: Optional<Boolean>;
}

/**
 * A connection to a list of items.
 */
export interface NotificationConnection {

    /**
     * Information to aid in pagination.
     */
    pageInfo: NonNull<PageInfo>;

    /**
     * A list of edges.
     */
    edges: NonNull<List<Optional<NotificationEdge>>>;

    aggregate: NonNull<AggregateNotification>;
}

/**
 * An edge in a connection.
 */
export interface NotificationEdge {

    /**
     * The item at the end of the edge.
     */
    node: NonNull<Notification>;

    /**
     * A cursor for use in pagination.
     */
    cursor: NonNull<String>;
}

export interface NotificationPreviousValues {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    verb: NonNull<String>;

    type: NonNull<NotificationType>;

    slug?: Optional<String>;

    seen?: Optional<Boolean>;

    sent?: Optional<Boolean>;
}

export interface NotificationSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<Notification>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<NotificationPreviousValues>;
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

    libraries: NonNull<List<Optional<Library>>>;

    locations: NonNull<List<Optional<Location>>>;

    articles: NonNull<List<Optional<Article>>>;

    comments: NonNull<List<Optional<Comment>>>;

    countries: NonNull<List<Optional<Country>>>;

    institutionses: NonNull<List<Optional<Institutions>>>;

    departments: NonNull<List<Optional<Department>>>;

    interests: NonNull<List<Optional<Interest>>>;

    users: NonNull<List<Optional<User>>>;

    connects: NonNull<List<Optional<Connect>>>;

    notifications: NonNull<List<Optional<Notification>>>;

    channelses: NonNull<List<Optional<Channels>>>;

    messages: NonNull<List<Optional<Message>>>;

    joinSettingses: NonNull<List<Optional<JoinSettings>>>;

    file?: Optional<File>;

    post?: Optional<Post>;

    library?: Optional<Library>;

    location?: Optional<Location>;

    article?: Optional<Article>;

    comment?: Optional<Comment>;

    country?: Optional<Country>;

    institutions?: Optional<Institutions>;

    department?: Optional<Department>;

    interest?: Optional<Interest>;

    user?: Optional<User>;

    connect?: Optional<Connect>;

    notification?: Optional<Notification>;

    channels?: Optional<Channels>;

    message?: Optional<Message>;

    joinSettings?: Optional<JoinSettings>;

    filesConnection: NonNull<FileConnection>;

    postsConnection: NonNull<PostConnection>;

    librariesConnection: NonNull<LibraryConnection>;

    locationsConnection: NonNull<LocationConnection>;

    articlesConnection: NonNull<ArticleConnection>;

    commentsConnection: NonNull<CommentConnection>;

    countriesConnection: NonNull<CountryConnection>;

    institutionsesConnection: NonNull<InstitutionsConnection>;

    departmentsConnection: NonNull<DepartmentConnection>;

    interestsConnection: NonNull<InterestConnection>;

    usersConnection: NonNull<UserConnection>;

    connectsConnection: NonNull<ConnectConnection>;

    notificationsConnection: NonNull<NotificationConnection>;

    channelsesConnection: NonNull<ChannelsConnection>;

    messagesConnection: NonNull<MessageConnection>;

    joinSettingsesConnection: NonNull<JoinSettingsConnection>;

    /**
     * Fetches an object given its ID
     */
    node?: Optional<Node>;
}

export interface Subscription {

    file?: Optional<FileSubscriptionPayload>;

    post?: Optional<PostSubscriptionPayload>;

    library?: Optional<LibrarySubscriptionPayload>;

    location?: Optional<LocationSubscriptionPayload>;

    article?: Optional<ArticleSubscriptionPayload>;

    comment?: Optional<CommentSubscriptionPayload>;

    country?: Optional<CountrySubscriptionPayload>;

    institutions?: Optional<InstitutionsSubscriptionPayload>;

    department?: Optional<DepartmentSubscriptionPayload>;

    interest?: Optional<InterestSubscriptionPayload>;

    user?: Optional<UserSubscriptionPayload>;

    connect?: Optional<ConnectSubscriptionPayload>;

    notification?: Optional<NotificationSubscriptionPayload>;

    channels?: Optional<ChannelsSubscriptionPayload>;

    message?: Optional<MessageSubscriptionPayload>;

    joinSettings?: Optional<JoinSettingsSubscriptionPayload>;
}

export interface User extends Node {

    id: NonNull<ID>;

    createdAt: NonNull<DateTime>;

    updatedAt: NonNull<DateTime>;

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    userFiles?: List<NonNull<File>>;

    gender: NonNull<String>;

    country?: Optional<Country>;

    institution?: Optional<Institutions>;

    department?: Optional<Department>;

    interest?: List<NonNull<Interest>>;

    messages?: Optional<Message>;

    ConnectOne?: List<NonNull<Connect>>;

    ConnectTwo?: List<NonNull<Connect>>;

    type?: Optional<String>;

    userType?: Optional<String>;

    articles?: List<NonNull<Article>>;

    favourites?: List<NonNull<Article>>;

    channels?: List<NonNull<Channels>>;

    myChannels?: List<NonNull<Channels>>;

    pendingChannels?: List<NonNull<Channels>>;

    blockedChannels?: List<NonNull<Channels>>;

    moderatorsChannels?: List<NonNull<Channels>>;

    likedArticles?: List<NonNull<Article>>;

    comments?: List<NonNull<Comment>>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    deviceIds?: List<NonNull<String>>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    location?: Optional<Location>;

    notifications?: List<NonNull<Notification>>;

    actorNotifications?: List<NonNull<Notification>>;
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

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    deviceIds?: List<NonNull<String>>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;
}

export interface UserSubscriptionPayload {

    mutation: NonNull<MutationType>;

    node?: Optional<User>;

    updatedFields?: List<NonNull<String>>;

    previousValues?: Optional<UserPreviousValues>;
}

export interface ArticleCreateInput {

    slug?: Optional<String>;

    isPublished?: Optional<Boolean>;

    title: NonNull<String>;

    body: NonNull<String>;

    type?: Optional<Arcticletype>;

    link?: Optional<String>;

    description?: Optional<String>;

    viewCount?: Optional<Int>;

    tags?: Optional<ArticleCreatetagsInput>;

    headerImage?: Optional<FileCreateOneInput>;

    category?: Optional<InterestCreateOneInput>;

    author: NonNull<UserCreateOneWithoutArticlesInput>;

    likes?: Optional<UserCreateManyWithoutLikedArticlesInput>;

    comments?: Optional<CommentCreateManyWithoutArticleInput>;

    userFavourited?: Optional<UserCreateManyWithoutFavouritesInput>;
}

export interface ArticleCreateManyWithoutAuthorInput {

    create?: List<NonNull<ArticleCreateWithoutAuthorInput>>;

    connect?: List<NonNull<ArticleWhereUniqueInput>>;
}

export interface ArticleCreateManyWithoutLikesInput {

    create?: List<NonNull<ArticleCreateWithoutLikesInput>>;

    connect?: List<NonNull<ArticleWhereUniqueInput>>;
}

export interface ArticleCreateManyWithoutUserFavouritedInput {

    create?: List<NonNull<ArticleCreateWithoutUserFavouritedInput>>;

    connect?: List<NonNull<ArticleWhereUniqueInput>>;
}

export interface ArticleCreateOneInput {

    create?: Optional<ArticleCreateInput>;

    connect?: Optional<ArticleWhereUniqueInput>;
}

export interface ArticleCreateOneWithoutCommentsInput {

    create?: Optional<ArticleCreateWithoutCommentsInput>;

    connect?: Optional<ArticleWhereUniqueInput>;
}

export interface ArticleCreatetagsInput {

    set?: List<NonNull<String>>;
}

export interface ArticleCreateWithoutAuthorInput {

    slug?: Optional<String>;

    isPublished?: Optional<Boolean>;

    title: NonNull<String>;

    body: NonNull<String>;

    type?: Optional<Arcticletype>;

    link?: Optional<String>;

    description?: Optional<String>;

    viewCount?: Optional<Int>;

    tags?: Optional<ArticleCreatetagsInput>;

    headerImage?: Optional<FileCreateOneInput>;

    category?: Optional<InterestCreateOneInput>;

    likes?: Optional<UserCreateManyWithoutLikedArticlesInput>;

    comments?: Optional<CommentCreateManyWithoutArticleInput>;

    userFavourited?: Optional<UserCreateManyWithoutFavouritesInput>;
}

export interface ArticleCreateWithoutCommentsInput {

    slug?: Optional<String>;

    isPublished?: Optional<Boolean>;

    title: NonNull<String>;

    body: NonNull<String>;

    type?: Optional<Arcticletype>;

    link?: Optional<String>;

    description?: Optional<String>;

    viewCount?: Optional<Int>;

    tags?: Optional<ArticleCreatetagsInput>;

    headerImage?: Optional<FileCreateOneInput>;

    category?: Optional<InterestCreateOneInput>;

    author: NonNull<UserCreateOneWithoutArticlesInput>;

    likes?: Optional<UserCreateManyWithoutLikedArticlesInput>;

    userFavourited?: Optional<UserCreateManyWithoutFavouritesInput>;
}

export interface ArticleCreateWithoutLikesInput {

    slug?: Optional<String>;

    isPublished?: Optional<Boolean>;

    title: NonNull<String>;

    body: NonNull<String>;

    type?: Optional<Arcticletype>;

    link?: Optional<String>;

    description?: Optional<String>;

    viewCount?: Optional<Int>;

    tags?: Optional<ArticleCreatetagsInput>;

    headerImage?: Optional<FileCreateOneInput>;

    category?: Optional<InterestCreateOneInput>;

    author: NonNull<UserCreateOneWithoutArticlesInput>;

    comments?: Optional<CommentCreateManyWithoutArticleInput>;

    userFavourited?: Optional<UserCreateManyWithoutFavouritesInput>;
}

export interface ArticleCreateWithoutUserFavouritedInput {

    slug?: Optional<String>;

    isPublished?: Optional<Boolean>;

    title: NonNull<String>;

    body: NonNull<String>;

    type?: Optional<Arcticletype>;

    link?: Optional<String>;

    description?: Optional<String>;

    viewCount?: Optional<Int>;

    tags?: Optional<ArticleCreatetagsInput>;

    headerImage?: Optional<FileCreateOneInput>;

    category?: Optional<InterestCreateOneInput>;

    author: NonNull<UserCreateOneWithoutArticlesInput>;

    likes?: Optional<UserCreateManyWithoutLikedArticlesInput>;

    comments?: Optional<CommentCreateManyWithoutArticleInput>;
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

export interface ArticleUpdateDataInput {

    slug?: Optional<String>;

    isPublished?: Optional<Boolean>;

    title?: Optional<String>;

    body?: Optional<String>;

    type?: Optional<Arcticletype>;

    link?: Optional<String>;

    description?: Optional<String>;

    viewCount?: Optional<Int>;

    tags?: Optional<ArticleUpdatetagsInput>;

    headerImage?: Optional<FileUpdateOneInput>;

    category?: Optional<InterestUpdateOneInput>;

    author?: Optional<UserUpdateOneWithoutArticlesInput>;

    likes?: Optional<UserUpdateManyWithoutLikedArticlesInput>;

    comments?: Optional<CommentUpdateManyWithoutArticleInput>;

    userFavourited?: Optional<UserUpdateManyWithoutFavouritesInput>;
}

export interface ArticleUpdateInput {

    slug?: Optional<String>;

    isPublished?: Optional<Boolean>;

    title?: Optional<String>;

    body?: Optional<String>;

    type?: Optional<Arcticletype>;

    link?: Optional<String>;

    description?: Optional<String>;

    viewCount?: Optional<Int>;

    tags?: Optional<ArticleUpdatetagsInput>;

    headerImage?: Optional<FileUpdateOneInput>;

    category?: Optional<InterestUpdateOneInput>;

    author?: Optional<UserUpdateOneWithoutArticlesInput>;

    likes?: Optional<UserUpdateManyWithoutLikedArticlesInput>;

    comments?: Optional<CommentUpdateManyWithoutArticleInput>;

    userFavourited?: Optional<UserUpdateManyWithoutFavouritesInput>;
}

export interface ArticleUpdateManyWithoutAuthorInput {

    create?: List<NonNull<ArticleCreateWithoutAuthorInput>>;

    connect?: List<NonNull<ArticleWhereUniqueInput>>;

    disconnect?: List<NonNull<ArticleWhereUniqueInput>>;

    delete?: List<NonNull<ArticleWhereUniqueInput>>;

    update?: List<NonNull<ArticleUpdateWithWhereUniqueWithoutAuthorInput>>;

    upsert?: List<NonNull<ArticleUpsertWithWhereUniqueWithoutAuthorInput>>;
}

export interface ArticleUpdateManyWithoutLikesInput {

    create?: List<NonNull<ArticleCreateWithoutLikesInput>>;

    connect?: List<NonNull<ArticleWhereUniqueInput>>;

    disconnect?: List<NonNull<ArticleWhereUniqueInput>>;

    delete?: List<NonNull<ArticleWhereUniqueInput>>;

    update?: List<NonNull<ArticleUpdateWithWhereUniqueWithoutLikesInput>>;

    upsert?: List<NonNull<ArticleUpsertWithWhereUniqueWithoutLikesInput>>;
}

export interface ArticleUpdateManyWithoutUserFavouritedInput {

    create?: List<NonNull<ArticleCreateWithoutUserFavouritedInput>>;

    connect?: List<NonNull<ArticleWhereUniqueInput>>;

    disconnect?: List<NonNull<ArticleWhereUniqueInput>>;

    delete?: List<NonNull<ArticleWhereUniqueInput>>;

    update?: List<NonNull<ArticleUpdateWithWhereUniqueWithoutUserFavouritedInput>>;

    upsert?: List<NonNull<ArticleUpsertWithWhereUniqueWithoutUserFavouritedInput>>;
}

export interface ArticleUpdateOneInput {

    create?: Optional<ArticleCreateInput>;

    connect?: Optional<ArticleWhereUniqueInput>;

    disconnect?: Optional<Boolean>;

    delete?: Optional<Boolean>;

    update?: Optional<ArticleUpdateDataInput>;

    upsert?: Optional<ArticleUpsertNestedInput>;
}

export interface ArticleUpdateOneWithoutCommentsInput {

    create?: Optional<ArticleCreateWithoutCommentsInput>;

    connect?: Optional<ArticleWhereUniqueInput>;

    delete?: Optional<Boolean>;

    update?: Optional<ArticleUpdateWithoutCommentsDataInput>;

    upsert?: Optional<ArticleUpsertWithoutCommentsInput>;
}

export interface ArticleUpdatetagsInput {

    set?: List<NonNull<String>>;
}

export interface ArticleUpdateWithoutAuthorDataInput {

    slug?: Optional<String>;

    isPublished?: Optional<Boolean>;

    title?: Optional<String>;

    body?: Optional<String>;

    type?: Optional<Arcticletype>;

    link?: Optional<String>;

    description?: Optional<String>;

    viewCount?: Optional<Int>;

    tags?: Optional<ArticleUpdatetagsInput>;

    headerImage?: Optional<FileUpdateOneInput>;

    category?: Optional<InterestUpdateOneInput>;

    likes?: Optional<UserUpdateManyWithoutLikedArticlesInput>;

    comments?: Optional<CommentUpdateManyWithoutArticleInput>;

    userFavourited?: Optional<UserUpdateManyWithoutFavouritesInput>;
}

export interface ArticleUpdateWithoutCommentsDataInput {

    slug?: Optional<String>;

    isPublished?: Optional<Boolean>;

    title?: Optional<String>;

    body?: Optional<String>;

    type?: Optional<Arcticletype>;

    link?: Optional<String>;

    description?: Optional<String>;

    viewCount?: Optional<Int>;

    tags?: Optional<ArticleUpdatetagsInput>;

    headerImage?: Optional<FileUpdateOneInput>;

    category?: Optional<InterestUpdateOneInput>;

    author?: Optional<UserUpdateOneWithoutArticlesInput>;

    likes?: Optional<UserUpdateManyWithoutLikedArticlesInput>;

    userFavourited?: Optional<UserUpdateManyWithoutFavouritesInput>;
}

export interface ArticleUpdateWithoutLikesDataInput {

    slug?: Optional<String>;

    isPublished?: Optional<Boolean>;

    title?: Optional<String>;

    body?: Optional<String>;

    type?: Optional<Arcticletype>;

    link?: Optional<String>;

    description?: Optional<String>;

    viewCount?: Optional<Int>;

    tags?: Optional<ArticleUpdatetagsInput>;

    headerImage?: Optional<FileUpdateOneInput>;

    category?: Optional<InterestUpdateOneInput>;

    author?: Optional<UserUpdateOneWithoutArticlesInput>;

    comments?: Optional<CommentUpdateManyWithoutArticleInput>;

    userFavourited?: Optional<UserUpdateManyWithoutFavouritesInput>;
}

export interface ArticleUpdateWithoutUserFavouritedDataInput {

    slug?: Optional<String>;

    isPublished?: Optional<Boolean>;

    title?: Optional<String>;

    body?: Optional<String>;

    type?: Optional<Arcticletype>;

    link?: Optional<String>;

    description?: Optional<String>;

    viewCount?: Optional<Int>;

    tags?: Optional<ArticleUpdatetagsInput>;

    headerImage?: Optional<FileUpdateOneInput>;

    category?: Optional<InterestUpdateOneInput>;

    author?: Optional<UserUpdateOneWithoutArticlesInput>;

    likes?: Optional<UserUpdateManyWithoutLikedArticlesInput>;

    comments?: Optional<CommentUpdateManyWithoutArticleInput>;
}

export interface ArticleUpdateWithWhereUniqueWithoutAuthorInput {

    where: NonNull<ArticleWhereUniqueInput>;

    data: NonNull<ArticleUpdateWithoutAuthorDataInput>;
}

export interface ArticleUpdateWithWhereUniqueWithoutLikesInput {

    where: NonNull<ArticleWhereUniqueInput>;

    data: NonNull<ArticleUpdateWithoutLikesDataInput>;
}

export interface ArticleUpdateWithWhereUniqueWithoutUserFavouritedInput {

    where: NonNull<ArticleWhereUniqueInput>;

    data: NonNull<ArticleUpdateWithoutUserFavouritedDataInput>;
}

export interface ArticleUpsertNestedInput {

    update: NonNull<ArticleUpdateDataInput>;

    create: NonNull<ArticleCreateInput>;
}

export interface ArticleUpsertWithoutCommentsInput {

    update: NonNull<ArticleUpdateWithoutCommentsDataInput>;

    create: NonNull<ArticleCreateWithoutCommentsInput>;
}

export interface ArticleUpsertWithWhereUniqueWithoutAuthorInput {

    where: NonNull<ArticleWhereUniqueInput>;

    update: NonNull<ArticleUpdateWithoutAuthorDataInput>;

    create: NonNull<ArticleCreateWithoutAuthorInput>;
}

export interface ArticleUpsertWithWhereUniqueWithoutLikesInput {

    where: NonNull<ArticleWhereUniqueInput>;

    update: NonNull<ArticleUpdateWithoutLikesDataInput>;

    create: NonNull<ArticleCreateWithoutLikesInput>;
}

export interface ArticleUpsertWithWhereUniqueWithoutUserFavouritedInput {

    where: NonNull<ArticleWhereUniqueInput>;

    update: NonNull<ArticleUpdateWithoutUserFavouritedDataInput>;

    create: NonNull<ArticleCreateWithoutUserFavouritedInput>;
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

    link?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    link_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    link_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    link_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    link_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    link_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    link_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    link_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    link_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    link_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    link_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    link_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    link_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    link_not_ends_with?: Optional<String>;

    description?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    description_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    description_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    description_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    description_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    description_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    description_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    description_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    description_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    description_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    description_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    description_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    description_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    description_not_ends_with?: Optional<String>;

    viewCount?: Optional<Int>;

    /**
     * All values that are not equal to given value.
     */
    viewCount_not?: Optional<Int>;

    /**
     * All values that are contained in given list.
     */
    viewCount_in?: List<NonNull<Int>>;

    /**
     * All values that are not contained in given list.
     */
    viewCount_not_in?: List<NonNull<Int>>;

    /**
     * All values less than the given value.
     */
    viewCount_lt?: Optional<Int>;

    /**
     * All values less than or equal the given value.
     */
    viewCount_lte?: Optional<Int>;

    /**
     * All values greater than the given value.
     */
    viewCount_gt?: Optional<Int>;

    /**
     * All values greater than or equal the given value.
     */
    viewCount_gte?: Optional<Int>;

    headerImage?: Optional<FileWhereInput>;

    category?: Optional<InterestWhereInput>;

    author?: Optional<UserWhereInput>;

    likes_every?: Optional<UserWhereInput>;

    likes_some?: Optional<UserWhereInput>;

    likes_none?: Optional<UserWhereInput>;

    comments_every?: Optional<CommentWhereInput>;

    comments_some?: Optional<CommentWhereInput>;

    comments_none?: Optional<CommentWhereInput>;

    userFavourited_every?: Optional<UserWhereInput>;

    userFavourited_some?: Optional<UserWhereInput>;

    userFavourited_none?: Optional<UserWhereInput>;
}

export interface ArticleWhereUniqueInput {

    id?: Optional<ID>;

    slug?: Optional<String>;

    link?: Optional<String>;
}

export interface ChannelsCreateInput {

    title: NonNull<String>;

    description: NonNull<String>;

    slug: NonNull<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    type?: Optional<ChannelType>;

    avatar?: Optional<FileCreateOneInput>;

    author: NonNull<UserCreateOneWithoutMyChannelsInput>;

    messages?: Optional<MessageCreateManyWithoutChannelInput>;

    participants?: Optional<UserCreateManyWithoutChannelsInput>;

    pendingUsers?: Optional<UserCreateManyWithoutPendingChannelsInput>;

    blockedUsers?: Optional<UserCreateManyWithoutBlockedChannelsInput>;

    moderators?: Optional<UserCreateManyWithoutModeratorsChannelsInput>;

    joinSettings?: Optional<JoinSettingsCreateOneInput>;
}

export interface ChannelsCreateManyWithoutAuthorInput {

    create?: List<NonNull<ChannelsCreateWithoutAuthorInput>>;

    connect?: List<NonNull<ChannelsWhereUniqueInput>>;
}

export interface ChannelsCreateManyWithoutBlockedUsersInput {

    create?: List<NonNull<ChannelsCreateWithoutBlockedUsersInput>>;

    connect?: List<NonNull<ChannelsWhereUniqueInput>>;
}

export interface ChannelsCreateManyWithoutModeratorsInput {

    create?: List<NonNull<ChannelsCreateWithoutModeratorsInput>>;

    connect?: List<NonNull<ChannelsWhereUniqueInput>>;
}

export interface ChannelsCreateManyWithoutParticipantsInput {

    create?: List<NonNull<ChannelsCreateWithoutParticipantsInput>>;

    connect?: List<NonNull<ChannelsWhereUniqueInput>>;
}

export interface ChannelsCreateManyWithoutPendingUsersInput {

    create?: List<NonNull<ChannelsCreateWithoutPendingUsersInput>>;

    connect?: List<NonNull<ChannelsWhereUniqueInput>>;
}

export interface ChannelsCreateOneWithoutMessagesInput {

    create?: Optional<ChannelsCreateWithoutMessagesInput>;

    connect?: Optional<ChannelsWhereUniqueInput>;
}

export interface ChannelsCreateWithoutAuthorInput {

    title: NonNull<String>;

    description: NonNull<String>;

    slug: NonNull<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    type?: Optional<ChannelType>;

    avatar?: Optional<FileCreateOneInput>;

    messages?: Optional<MessageCreateManyWithoutChannelInput>;

    participants?: Optional<UserCreateManyWithoutChannelsInput>;

    pendingUsers?: Optional<UserCreateManyWithoutPendingChannelsInput>;

    blockedUsers?: Optional<UserCreateManyWithoutBlockedChannelsInput>;

    moderators?: Optional<UserCreateManyWithoutModeratorsChannelsInput>;

    joinSettings?: Optional<JoinSettingsCreateOneInput>;
}

export interface ChannelsCreateWithoutBlockedUsersInput {

    title: NonNull<String>;

    description: NonNull<String>;

    slug: NonNull<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    type?: Optional<ChannelType>;

    avatar?: Optional<FileCreateOneInput>;

    author: NonNull<UserCreateOneWithoutMyChannelsInput>;

    messages?: Optional<MessageCreateManyWithoutChannelInput>;

    participants?: Optional<UserCreateManyWithoutChannelsInput>;

    pendingUsers?: Optional<UserCreateManyWithoutPendingChannelsInput>;

    moderators?: Optional<UserCreateManyWithoutModeratorsChannelsInput>;

    joinSettings?: Optional<JoinSettingsCreateOneInput>;
}

export interface ChannelsCreateWithoutMessagesInput {

    title: NonNull<String>;

    description: NonNull<String>;

    slug: NonNull<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    type?: Optional<ChannelType>;

    avatar?: Optional<FileCreateOneInput>;

    author: NonNull<UserCreateOneWithoutMyChannelsInput>;

    participants?: Optional<UserCreateManyWithoutChannelsInput>;

    pendingUsers?: Optional<UserCreateManyWithoutPendingChannelsInput>;

    blockedUsers?: Optional<UserCreateManyWithoutBlockedChannelsInput>;

    moderators?: Optional<UserCreateManyWithoutModeratorsChannelsInput>;

    joinSettings?: Optional<JoinSettingsCreateOneInput>;
}

export interface ChannelsCreateWithoutModeratorsInput {

    title: NonNull<String>;

    description: NonNull<String>;

    slug: NonNull<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    type?: Optional<ChannelType>;

    avatar?: Optional<FileCreateOneInput>;

    author: NonNull<UserCreateOneWithoutMyChannelsInput>;

    messages?: Optional<MessageCreateManyWithoutChannelInput>;

    participants?: Optional<UserCreateManyWithoutChannelsInput>;

    pendingUsers?: Optional<UserCreateManyWithoutPendingChannelsInput>;

    blockedUsers?: Optional<UserCreateManyWithoutBlockedChannelsInput>;

    joinSettings?: Optional<JoinSettingsCreateOneInput>;
}

export interface ChannelsCreateWithoutParticipantsInput {

    title: NonNull<String>;

    description: NonNull<String>;

    slug: NonNull<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    type?: Optional<ChannelType>;

    avatar?: Optional<FileCreateOneInput>;

    author: NonNull<UserCreateOneWithoutMyChannelsInput>;

    messages?: Optional<MessageCreateManyWithoutChannelInput>;

    pendingUsers?: Optional<UserCreateManyWithoutPendingChannelsInput>;

    blockedUsers?: Optional<UserCreateManyWithoutBlockedChannelsInput>;

    moderators?: Optional<UserCreateManyWithoutModeratorsChannelsInput>;

    joinSettings?: Optional<JoinSettingsCreateOneInput>;
}

export interface ChannelsCreateWithoutPendingUsersInput {

    title: NonNull<String>;

    description: NonNull<String>;

    slug: NonNull<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    type?: Optional<ChannelType>;

    avatar?: Optional<FileCreateOneInput>;

    author: NonNull<UserCreateOneWithoutMyChannelsInput>;

    messages?: Optional<MessageCreateManyWithoutChannelInput>;

    participants?: Optional<UserCreateManyWithoutChannelsInput>;

    blockedUsers?: Optional<UserCreateManyWithoutBlockedChannelsInput>;

    moderators?: Optional<UserCreateManyWithoutModeratorsChannelsInput>;

    joinSettings?: Optional<JoinSettingsCreateOneInput>;
}

export interface ChannelsSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<ChannelsSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<ChannelsSubscriptionWhereInput>>;

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

    node?: Optional<ChannelsWhereInput>;
}

export interface ChannelsUpdateInput {

    title?: Optional<String>;

    description?: Optional<String>;

    slug?: Optional<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    type?: Optional<ChannelType>;

    avatar?: Optional<FileUpdateOneInput>;

    author?: Optional<UserUpdateOneWithoutMyChannelsInput>;

    messages?: Optional<MessageUpdateManyWithoutChannelInput>;

    participants?: Optional<UserUpdateManyWithoutChannelsInput>;

    pendingUsers?: Optional<UserUpdateManyWithoutPendingChannelsInput>;

    blockedUsers?: Optional<UserUpdateManyWithoutBlockedChannelsInput>;

    moderators?: Optional<UserUpdateManyWithoutModeratorsChannelsInput>;

    joinSettings?: Optional<JoinSettingsUpdateOneInput>;
}

export interface ChannelsUpdateManyWithoutAuthorInput {

    create?: List<NonNull<ChannelsCreateWithoutAuthorInput>>;

    connect?: List<NonNull<ChannelsWhereUniqueInput>>;

    disconnect?: List<NonNull<ChannelsWhereUniqueInput>>;

    delete?: List<NonNull<ChannelsWhereUniqueInput>>;

    update?: List<NonNull<ChannelsUpdateWithWhereUniqueWithoutAuthorInput>>;

    upsert?: List<NonNull<ChannelsUpsertWithWhereUniqueWithoutAuthorInput>>;
}

export interface ChannelsUpdateManyWithoutBlockedUsersInput {

    create?: List<NonNull<ChannelsCreateWithoutBlockedUsersInput>>;

    connect?: List<NonNull<ChannelsWhereUniqueInput>>;

    disconnect?: List<NonNull<ChannelsWhereUniqueInput>>;

    delete?: List<NonNull<ChannelsWhereUniqueInput>>;

    update?: List<NonNull<ChannelsUpdateWithWhereUniqueWithoutBlockedUsersInput>>;

    upsert?: List<NonNull<ChannelsUpsertWithWhereUniqueWithoutBlockedUsersInput>>;
}

export interface ChannelsUpdateManyWithoutModeratorsInput {

    create?: List<NonNull<ChannelsCreateWithoutModeratorsInput>>;

    connect?: List<NonNull<ChannelsWhereUniqueInput>>;

    disconnect?: List<NonNull<ChannelsWhereUniqueInput>>;

    delete?: List<NonNull<ChannelsWhereUniqueInput>>;

    update?: List<NonNull<ChannelsUpdateWithWhereUniqueWithoutModeratorsInput>>;

    upsert?: List<NonNull<ChannelsUpsertWithWhereUniqueWithoutModeratorsInput>>;
}

export interface ChannelsUpdateManyWithoutParticipantsInput {

    create?: List<NonNull<ChannelsCreateWithoutParticipantsInput>>;

    connect?: List<NonNull<ChannelsWhereUniqueInput>>;

    disconnect?: List<NonNull<ChannelsWhereUniqueInput>>;

    delete?: List<NonNull<ChannelsWhereUniqueInput>>;

    update?: List<NonNull<ChannelsUpdateWithWhereUniqueWithoutParticipantsInput>>;

    upsert?: List<NonNull<ChannelsUpsertWithWhereUniqueWithoutParticipantsInput>>;
}

export interface ChannelsUpdateManyWithoutPendingUsersInput {

    create?: List<NonNull<ChannelsCreateWithoutPendingUsersInput>>;

    connect?: List<NonNull<ChannelsWhereUniqueInput>>;

    disconnect?: List<NonNull<ChannelsWhereUniqueInput>>;

    delete?: List<NonNull<ChannelsWhereUniqueInput>>;

    update?: List<NonNull<ChannelsUpdateWithWhereUniqueWithoutPendingUsersInput>>;

    upsert?: List<NonNull<ChannelsUpsertWithWhereUniqueWithoutPendingUsersInput>>;
}

export interface ChannelsUpdateOneWithoutMessagesInput {

    create?: Optional<ChannelsCreateWithoutMessagesInput>;

    connect?: Optional<ChannelsWhereUniqueInput>;

    delete?: Optional<Boolean>;

    update?: Optional<ChannelsUpdateWithoutMessagesDataInput>;

    upsert?: Optional<ChannelsUpsertWithoutMessagesInput>;
}

export interface ChannelsUpdateWithoutAuthorDataInput {

    title?: Optional<String>;

    description?: Optional<String>;

    slug?: Optional<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    type?: Optional<ChannelType>;

    avatar?: Optional<FileUpdateOneInput>;

    messages?: Optional<MessageUpdateManyWithoutChannelInput>;

    participants?: Optional<UserUpdateManyWithoutChannelsInput>;

    pendingUsers?: Optional<UserUpdateManyWithoutPendingChannelsInput>;

    blockedUsers?: Optional<UserUpdateManyWithoutBlockedChannelsInput>;

    moderators?: Optional<UserUpdateManyWithoutModeratorsChannelsInput>;

    joinSettings?: Optional<JoinSettingsUpdateOneInput>;
}

export interface ChannelsUpdateWithoutBlockedUsersDataInput {

    title?: Optional<String>;

    description?: Optional<String>;

    slug?: Optional<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    type?: Optional<ChannelType>;

    avatar?: Optional<FileUpdateOneInput>;

    author?: Optional<UserUpdateOneWithoutMyChannelsInput>;

    messages?: Optional<MessageUpdateManyWithoutChannelInput>;

    participants?: Optional<UserUpdateManyWithoutChannelsInput>;

    pendingUsers?: Optional<UserUpdateManyWithoutPendingChannelsInput>;

    moderators?: Optional<UserUpdateManyWithoutModeratorsChannelsInput>;

    joinSettings?: Optional<JoinSettingsUpdateOneInput>;
}

export interface ChannelsUpdateWithoutMessagesDataInput {

    title?: Optional<String>;

    description?: Optional<String>;

    slug?: Optional<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    type?: Optional<ChannelType>;

    avatar?: Optional<FileUpdateOneInput>;

    author?: Optional<UserUpdateOneWithoutMyChannelsInput>;

    participants?: Optional<UserUpdateManyWithoutChannelsInput>;

    pendingUsers?: Optional<UserUpdateManyWithoutPendingChannelsInput>;

    blockedUsers?: Optional<UserUpdateManyWithoutBlockedChannelsInput>;

    moderators?: Optional<UserUpdateManyWithoutModeratorsChannelsInput>;

    joinSettings?: Optional<JoinSettingsUpdateOneInput>;
}

export interface ChannelsUpdateWithoutModeratorsDataInput {

    title?: Optional<String>;

    description?: Optional<String>;

    slug?: Optional<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    type?: Optional<ChannelType>;

    avatar?: Optional<FileUpdateOneInput>;

    author?: Optional<UserUpdateOneWithoutMyChannelsInput>;

    messages?: Optional<MessageUpdateManyWithoutChannelInput>;

    participants?: Optional<UserUpdateManyWithoutChannelsInput>;

    pendingUsers?: Optional<UserUpdateManyWithoutPendingChannelsInput>;

    blockedUsers?: Optional<UserUpdateManyWithoutBlockedChannelsInput>;

    joinSettings?: Optional<JoinSettingsUpdateOneInput>;
}

export interface ChannelsUpdateWithoutParticipantsDataInput {

    title?: Optional<String>;

    description?: Optional<String>;

    slug?: Optional<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    type?: Optional<ChannelType>;

    avatar?: Optional<FileUpdateOneInput>;

    author?: Optional<UserUpdateOneWithoutMyChannelsInput>;

    messages?: Optional<MessageUpdateManyWithoutChannelInput>;

    pendingUsers?: Optional<UserUpdateManyWithoutPendingChannelsInput>;

    blockedUsers?: Optional<UserUpdateManyWithoutBlockedChannelsInput>;

    moderators?: Optional<UserUpdateManyWithoutModeratorsChannelsInput>;

    joinSettings?: Optional<JoinSettingsUpdateOneInput>;
}

export interface ChannelsUpdateWithoutPendingUsersDataInput {

    title?: Optional<String>;

    description?: Optional<String>;

    slug?: Optional<String>;

    isPrivate?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    type?: Optional<ChannelType>;

    avatar?: Optional<FileUpdateOneInput>;

    author?: Optional<UserUpdateOneWithoutMyChannelsInput>;

    messages?: Optional<MessageUpdateManyWithoutChannelInput>;

    participants?: Optional<UserUpdateManyWithoutChannelsInput>;

    blockedUsers?: Optional<UserUpdateManyWithoutBlockedChannelsInput>;

    moderators?: Optional<UserUpdateManyWithoutModeratorsChannelsInput>;

    joinSettings?: Optional<JoinSettingsUpdateOneInput>;
}

export interface ChannelsUpdateWithWhereUniqueWithoutAuthorInput {

    where: NonNull<ChannelsWhereUniqueInput>;

    data: NonNull<ChannelsUpdateWithoutAuthorDataInput>;
}

export interface ChannelsUpdateWithWhereUniqueWithoutBlockedUsersInput {

    where: NonNull<ChannelsWhereUniqueInput>;

    data: NonNull<ChannelsUpdateWithoutBlockedUsersDataInput>;
}

export interface ChannelsUpdateWithWhereUniqueWithoutModeratorsInput {

    where: NonNull<ChannelsWhereUniqueInput>;

    data: NonNull<ChannelsUpdateWithoutModeratorsDataInput>;
}

export interface ChannelsUpdateWithWhereUniqueWithoutParticipantsInput {

    where: NonNull<ChannelsWhereUniqueInput>;

    data: NonNull<ChannelsUpdateWithoutParticipantsDataInput>;
}

export interface ChannelsUpdateWithWhereUniqueWithoutPendingUsersInput {

    where: NonNull<ChannelsWhereUniqueInput>;

    data: NonNull<ChannelsUpdateWithoutPendingUsersDataInput>;
}

export interface ChannelsUpsertWithoutMessagesInput {

    update: NonNull<ChannelsUpdateWithoutMessagesDataInput>;

    create: NonNull<ChannelsCreateWithoutMessagesInput>;
}

export interface ChannelsUpsertWithWhereUniqueWithoutAuthorInput {

    where: NonNull<ChannelsWhereUniqueInput>;

    update: NonNull<ChannelsUpdateWithoutAuthorDataInput>;

    create: NonNull<ChannelsCreateWithoutAuthorInput>;
}

export interface ChannelsUpsertWithWhereUniqueWithoutBlockedUsersInput {

    where: NonNull<ChannelsWhereUniqueInput>;

    update: NonNull<ChannelsUpdateWithoutBlockedUsersDataInput>;

    create: NonNull<ChannelsCreateWithoutBlockedUsersInput>;
}

export interface ChannelsUpsertWithWhereUniqueWithoutModeratorsInput {

    where: NonNull<ChannelsWhereUniqueInput>;

    update: NonNull<ChannelsUpdateWithoutModeratorsDataInput>;

    create: NonNull<ChannelsCreateWithoutModeratorsInput>;
}

export interface ChannelsUpsertWithWhereUniqueWithoutParticipantsInput {

    where: NonNull<ChannelsWhereUniqueInput>;

    update: NonNull<ChannelsUpdateWithoutParticipantsDataInput>;

    create: NonNull<ChannelsCreateWithoutParticipantsInput>;
}

export interface ChannelsUpsertWithWhereUniqueWithoutPendingUsersInput {

    where: NonNull<ChannelsWhereUniqueInput>;

    update: NonNull<ChannelsUpdateWithoutPendingUsersDataInput>;

    create: NonNull<ChannelsCreateWithoutPendingUsersInput>;
}

export interface ChannelsWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<ChannelsWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<ChannelsWhereInput>>;

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

    description?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    description_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    description_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    description_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    description_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    description_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    description_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    description_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    description_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    description_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    description_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    description_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    description_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    description_not_ends_with?: Optional<String>;

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

    isPrivate?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    isPrivate_not?: Optional<Boolean>;

    isDefault?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    isDefault_not?: Optional<Boolean>;

    isArchived?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    isArchived_not?: Optional<Boolean>;

    type?: Optional<ChannelType>;

    /**
     * All values that are not equal to given value.
     */
    type_not?: Optional<ChannelType>;

    /**
     * All values that are contained in given list.
     */
    type_in?: List<NonNull<ChannelType>>;

    /**
     * All values that are not contained in given list.
     */
    type_not_in?: List<NonNull<ChannelType>>;

    avatar?: Optional<FileWhereInput>;

    author?: Optional<UserWhereInput>;

    messages_every?: Optional<MessageWhereInput>;

    messages_some?: Optional<MessageWhereInput>;

    messages_none?: Optional<MessageWhereInput>;

    participants_every?: Optional<UserWhereInput>;

    participants_some?: Optional<UserWhereInput>;

    participants_none?: Optional<UserWhereInput>;

    pendingUsers_every?: Optional<UserWhereInput>;

    pendingUsers_some?: Optional<UserWhereInput>;

    pendingUsers_none?: Optional<UserWhereInput>;

    blockedUsers_every?: Optional<UserWhereInput>;

    blockedUsers_some?: Optional<UserWhereInput>;

    blockedUsers_none?: Optional<UserWhereInput>;

    moderators_every?: Optional<UserWhereInput>;

    moderators_some?: Optional<UserWhereInput>;

    moderators_none?: Optional<UserWhereInput>;

    joinSettings?: Optional<JoinSettingsWhereInput>;
}

export interface ChannelsWhereUniqueInput {

    id?: Optional<ID>;

    slug?: Optional<String>;
}

export interface CommentCreateInput {

    slug?: Optional<String>;

    body: NonNull<String>;

    replies?: Optional<CommentCreateManyInput>;

    article: NonNull<ArticleCreateOneWithoutCommentsInput>;

    author: NonNull<UserCreateOneWithoutCommentsInput>;
}

export interface CommentCreateManyInput {

    create?: List<NonNull<CommentCreateInput>>;

    connect?: List<NonNull<CommentWhereUniqueInput>>;
}

export interface CommentCreateManyWithoutArticleInput {

    create?: List<NonNull<CommentCreateWithoutArticleInput>>;

    connect?: List<NonNull<CommentWhereUniqueInput>>;
}

export interface CommentCreateManyWithoutAuthorInput {

    create?: List<NonNull<CommentCreateWithoutAuthorInput>>;

    connect?: List<NonNull<CommentWhereUniqueInput>>;
}

export interface CommentCreateWithoutArticleInput {

    slug?: Optional<String>;

    body: NonNull<String>;

    replies?: Optional<CommentCreateManyInput>;

    author: NonNull<UserCreateOneWithoutCommentsInput>;
}

export interface CommentCreateWithoutAuthorInput {

    slug?: Optional<String>;

    body: NonNull<String>;

    replies?: Optional<CommentCreateManyInput>;

    article: NonNull<ArticleCreateOneWithoutCommentsInput>;
}

export interface CommentSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<CommentSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<CommentSubscriptionWhereInput>>;

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

    node?: Optional<CommentWhereInput>;
}

export interface CommentUpdateDataInput {

    slug?: Optional<String>;

    body?: Optional<String>;

    replies?: Optional<CommentUpdateManyInput>;

    article?: Optional<ArticleUpdateOneWithoutCommentsInput>;

    author?: Optional<UserUpdateOneWithoutCommentsInput>;
}

export interface CommentUpdateInput {

    slug?: Optional<String>;

    body?: Optional<String>;

    replies?: Optional<CommentUpdateManyInput>;

    article?: Optional<ArticleUpdateOneWithoutCommentsInput>;

    author?: Optional<UserUpdateOneWithoutCommentsInput>;
}

export interface CommentUpdateManyInput {

    create?: List<NonNull<CommentCreateInput>>;

    connect?: List<NonNull<CommentWhereUniqueInput>>;

    disconnect?: List<NonNull<CommentWhereUniqueInput>>;

    delete?: List<NonNull<CommentWhereUniqueInput>>;

    update?: List<NonNull<CommentUpdateWithWhereUniqueNestedInput>>;

    upsert?: List<NonNull<CommentUpsertWithWhereUniqueNestedInput>>;
}

export interface CommentUpdateManyWithoutArticleInput {

    create?: List<NonNull<CommentCreateWithoutArticleInput>>;

    connect?: List<NonNull<CommentWhereUniqueInput>>;

    disconnect?: List<NonNull<CommentWhereUniqueInput>>;

    delete?: List<NonNull<CommentWhereUniqueInput>>;

    update?: List<NonNull<CommentUpdateWithWhereUniqueWithoutArticleInput>>;

    upsert?: List<NonNull<CommentUpsertWithWhereUniqueWithoutArticleInput>>;
}

export interface CommentUpdateManyWithoutAuthorInput {

    create?: List<NonNull<CommentCreateWithoutAuthorInput>>;

    connect?: List<NonNull<CommentWhereUniqueInput>>;

    disconnect?: List<NonNull<CommentWhereUniqueInput>>;

    delete?: List<NonNull<CommentWhereUniqueInput>>;

    update?: List<NonNull<CommentUpdateWithWhereUniqueWithoutAuthorInput>>;

    upsert?: List<NonNull<CommentUpsertWithWhereUniqueWithoutAuthorInput>>;
}

export interface CommentUpdateWithoutArticleDataInput {

    slug?: Optional<String>;

    body?: Optional<String>;

    replies?: Optional<CommentUpdateManyInput>;

    author?: Optional<UserUpdateOneWithoutCommentsInput>;
}

export interface CommentUpdateWithoutAuthorDataInput {

    slug?: Optional<String>;

    body?: Optional<String>;

    replies?: Optional<CommentUpdateManyInput>;

    article?: Optional<ArticleUpdateOneWithoutCommentsInput>;
}

export interface CommentUpdateWithWhereUniqueNestedInput {

    where: NonNull<CommentWhereUniqueInput>;

    data: NonNull<CommentUpdateDataInput>;
}

export interface CommentUpdateWithWhereUniqueWithoutArticleInput {

    where: NonNull<CommentWhereUniqueInput>;

    data: NonNull<CommentUpdateWithoutArticleDataInput>;
}

export interface CommentUpdateWithWhereUniqueWithoutAuthorInput {

    where: NonNull<CommentWhereUniqueInput>;

    data: NonNull<CommentUpdateWithoutAuthorDataInput>;
}

export interface CommentUpsertWithWhereUniqueNestedInput {

    where: NonNull<CommentWhereUniqueInput>;

    update: NonNull<CommentUpdateDataInput>;

    create: NonNull<CommentCreateInput>;
}

export interface CommentUpsertWithWhereUniqueWithoutArticleInput {

    where: NonNull<CommentWhereUniqueInput>;

    update: NonNull<CommentUpdateWithoutArticleDataInput>;

    create: NonNull<CommentCreateWithoutArticleInput>;
}

export interface CommentUpsertWithWhereUniqueWithoutAuthorInput {

    where: NonNull<CommentWhereUniqueInput>;

    update: NonNull<CommentUpdateWithoutAuthorDataInput>;

    create: NonNull<CommentCreateWithoutAuthorInput>;
}

export interface CommentWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<CommentWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<CommentWhereInput>>;

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

    replies_every?: Optional<CommentWhereInput>;

    replies_some?: Optional<CommentWhereInput>;

    replies_none?: Optional<CommentWhereInput>;

    article?: Optional<ArticleWhereInput>;

    author?: Optional<UserWhereInput>;
}

export interface CommentWhereUniqueInput {

    id?: Optional<ID>;

    slug?: Optional<String>;
}

export interface ConnectCreateInput {

    status?: Optional<Int>;

    user1: NonNull<UserCreateOneWithoutConnectOneInput>;

    user2: NonNull<UserCreateOneWithoutConnectTwoInput>;
}

export interface ConnectCreateManyWithoutUser1Input {

    create?: List<NonNull<ConnectCreateWithoutUser1Input>>;

    connect?: List<NonNull<ConnectWhereUniqueInput>>;
}

export interface ConnectCreateManyWithoutUser2Input {

    create?: List<NonNull<ConnectCreateWithoutUser2Input>>;

    connect?: List<NonNull<ConnectWhereUniqueInput>>;
}

export interface ConnectCreateOneInput {

    create?: Optional<ConnectCreateInput>;

    connect?: Optional<ConnectWhereUniqueInput>;
}

export interface ConnectCreateWithoutUser1Input {

    status?: Optional<Int>;

    user2: NonNull<UserCreateOneWithoutConnectTwoInput>;
}

export interface ConnectCreateWithoutUser2Input {

    status?: Optional<Int>;

    user1: NonNull<UserCreateOneWithoutConnectOneInput>;
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

export interface ConnectUpdateDataInput {

    status?: Optional<Int>;

    user1?: Optional<UserUpdateOneWithoutConnectOneInput>;

    user2?: Optional<UserUpdateOneWithoutConnectTwoInput>;
}

export interface ConnectUpdateInput {

    status?: Optional<Int>;

    user1?: Optional<UserUpdateOneWithoutConnectOneInput>;

    user2?: Optional<UserUpdateOneWithoutConnectTwoInput>;
}

export interface ConnectUpdateManyWithoutUser1Input {

    create?: List<NonNull<ConnectCreateWithoutUser1Input>>;

    connect?: List<NonNull<ConnectWhereUniqueInput>>;

    disconnect?: List<NonNull<ConnectWhereUniqueInput>>;

    delete?: List<NonNull<ConnectWhereUniqueInput>>;

    update?: List<NonNull<ConnectUpdateWithWhereUniqueWithoutUser1Input>>;

    upsert?: List<NonNull<ConnectUpsertWithWhereUniqueWithoutUser1Input>>;
}

export interface ConnectUpdateManyWithoutUser2Input {

    create?: List<NonNull<ConnectCreateWithoutUser2Input>>;

    connect?: List<NonNull<ConnectWhereUniqueInput>>;

    disconnect?: List<NonNull<ConnectWhereUniqueInput>>;

    delete?: List<NonNull<ConnectWhereUniqueInput>>;

    update?: List<NonNull<ConnectUpdateWithWhereUniqueWithoutUser2Input>>;

    upsert?: List<NonNull<ConnectUpsertWithWhereUniqueWithoutUser2Input>>;
}

export interface ConnectUpdateOneInput {

    create?: Optional<ConnectCreateInput>;

    connect?: Optional<ConnectWhereUniqueInput>;

    disconnect?: Optional<Boolean>;

    delete?: Optional<Boolean>;

    update?: Optional<ConnectUpdateDataInput>;

    upsert?: Optional<ConnectUpsertNestedInput>;
}

export interface ConnectUpdateWithoutUser1DataInput {

    status?: Optional<Int>;

    user2?: Optional<UserUpdateOneWithoutConnectTwoInput>;
}

export interface ConnectUpdateWithoutUser2DataInput {

    status?: Optional<Int>;

    user1?: Optional<UserUpdateOneWithoutConnectOneInput>;
}

export interface ConnectUpdateWithWhereUniqueWithoutUser1Input {

    where: NonNull<ConnectWhereUniqueInput>;

    data: NonNull<ConnectUpdateWithoutUser1DataInput>;
}

export interface ConnectUpdateWithWhereUniqueWithoutUser2Input {

    where: NonNull<ConnectWhereUniqueInput>;

    data: NonNull<ConnectUpdateWithoutUser2DataInput>;
}

export interface ConnectUpsertNestedInput {

    update: NonNull<ConnectUpdateDataInput>;

    create: NonNull<ConnectCreateInput>;
}

export interface ConnectUpsertWithWhereUniqueWithoutUser1Input {

    where: NonNull<ConnectWhereUniqueInput>;

    update: NonNull<ConnectUpdateWithoutUser1DataInput>;

    create: NonNull<ConnectCreateWithoutUser1Input>;
}

export interface ConnectUpsertWithWhereUniqueWithoutUser2Input {

    where: NonNull<ConnectWhereUniqueInput>;

    update: NonNull<ConnectUpdateWithoutUser2DataInput>;

    create: NonNull<ConnectCreateWithoutUser2Input>;
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

    status?: Optional<Int>;

    /**
     * All values that are not equal to given value.
     */
    status_not?: Optional<Int>;

    /**
     * All values that are contained in given list.
     */
    status_in?: List<NonNull<Int>>;

    /**
     * All values that are not contained in given list.
     */
    status_not_in?: List<NonNull<Int>>;

    /**
     * All values less than the given value.
     */
    status_lt?: Optional<Int>;

    /**
     * All values less than or equal the given value.
     */
    status_lte?: Optional<Int>;

    /**
     * All values greater than the given value.
     */
    status_gt?: Optional<Int>;

    /**
     * All values greater than or equal the given value.
     */
    status_gte?: Optional<Int>;

    user1?: Optional<UserWhereInput>;

    user2?: Optional<UserWhereInput>;
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

    disconnect?: Optional<Boolean>;

    delete?: Optional<Boolean>;

    update?: Optional<CountryUpdateWithoutInstitutionsDataInput>;

    upsert?: Optional<CountryUpsertWithoutInstitutionsInput>;
}

export interface CountryUpdateOneWithoutUsersInput {

    create?: Optional<CountryCreateWithoutUsersInput>;

    connect?: Optional<CountryWhereUniqueInput>;

    disconnect?: Optional<Boolean>;

    delete?: Optional<Boolean>;

    update?: Optional<CountryUpdateWithoutUsersDataInput>;

    upsert?: Optional<CountryUpsertWithoutUsersInput>;
}

export interface CountryUpdateWithoutInstitutionsDataInput {

    shortName?: Optional<String>;

    name?: Optional<String>;

    users?: Optional<UserUpdateManyWithoutCountryInput>;
}

export interface CountryUpdateWithoutUsersDataInput {

    shortName?: Optional<String>;

    name?: Optional<String>;

    institutions?: Optional<InstitutionsUpdateManyWithoutCountryInput>;
}

export interface CountryUpsertWithoutInstitutionsInput {

    update: NonNull<CountryUpdateWithoutInstitutionsDataInput>;

    create: NonNull<CountryCreateWithoutInstitutionsInput>;
}

export interface CountryUpsertWithoutUsersInput {

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

    institution?: Optional<InstitutionsCreateOneWithoutDepartmentsInput>;

    users?: Optional<UserCreateManyWithoutDepartmentInput>;
}

export interface DepartmentCreateManyWithoutInstitutionInput {

    create?: List<NonNull<DepartmentCreateWithoutInstitutionInput>>;

    connect?: List<NonNull<DepartmentWhereUniqueInput>>;
}

export interface DepartmentCreateOneWithoutUsersInput {

    create?: Optional<DepartmentCreateWithoutUsersInput>;

    connect?: Optional<DepartmentWhereUniqueInput>;
}

export interface DepartmentCreateWithoutInstitutionInput {

    name: NonNull<String>;

    users?: Optional<UserCreateManyWithoutDepartmentInput>;
}

export interface DepartmentCreateWithoutUsersInput {

    name: NonNull<String>;

    institution?: Optional<InstitutionsCreateOneWithoutDepartmentsInput>;
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

    institution?: Optional<InstitutionsUpdateOneWithoutDepartmentsInput>;

    users?: Optional<UserUpdateManyWithoutDepartmentInput>;
}

export interface DepartmentUpdateManyWithoutInstitutionInput {

    create?: List<NonNull<DepartmentCreateWithoutInstitutionInput>>;

    connect?: List<NonNull<DepartmentWhereUniqueInput>>;

    disconnect?: List<NonNull<DepartmentWhereUniqueInput>>;

    delete?: List<NonNull<DepartmentWhereUniqueInput>>;

    update?: List<NonNull<DepartmentUpdateWithWhereUniqueWithoutInstitutionInput>>;

    upsert?: List<NonNull<DepartmentUpsertWithWhereUniqueWithoutInstitutionInput>>;
}

export interface DepartmentUpdateOneWithoutUsersInput {

    create?: Optional<DepartmentCreateWithoutUsersInput>;

    connect?: Optional<DepartmentWhereUniqueInput>;

    disconnect?: Optional<Boolean>;

    delete?: Optional<Boolean>;

    update?: Optional<DepartmentUpdateWithoutUsersDataInput>;

    upsert?: Optional<DepartmentUpsertWithoutUsersInput>;
}

export interface DepartmentUpdateWithoutInstitutionDataInput {

    name?: Optional<String>;

    users?: Optional<UserUpdateManyWithoutDepartmentInput>;
}

export interface DepartmentUpdateWithoutUsersDataInput {

    name?: Optional<String>;

    institution?: Optional<InstitutionsUpdateOneWithoutDepartmentsInput>;
}

export interface DepartmentUpdateWithWhereUniqueWithoutInstitutionInput {

    where: NonNull<DepartmentWhereUniqueInput>;

    data: NonNull<DepartmentUpdateWithoutInstitutionDataInput>;
}

export interface DepartmentUpsertWithoutUsersInput {

    update: NonNull<DepartmentUpdateWithoutUsersDataInput>;

    create: NonNull<DepartmentCreateWithoutUsersInput>;
}

export interface DepartmentUpsertWithWhereUniqueWithoutInstitutionInput {

    where: NonNull<DepartmentWhereUniqueInput>;

    update: NonNull<DepartmentUpdateWithoutInstitutionDataInput>;

    create: NonNull<DepartmentCreateWithoutInstitutionInput>;
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

export interface FileCreateInput {

    name: NonNull<String>;

    size: NonNull<Int>;

    secret: NonNull<String>;

    contentType: NonNull<String>;

    url: NonNull<String>;

    userFiles?: Optional<UserCreateOneInput>;
}

export interface FileCreateManyInput {

    create?: List<NonNull<FileCreateInput>>;

    connect?: List<NonNull<FileWhereUniqueInput>>;
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

    userFiles?: Optional<UserUpdateOneInput>;
}

export interface FileUpdateInput {

    name?: Optional<String>;

    size?: Optional<Int>;

    secret?: Optional<String>;

    contentType?: Optional<String>;

    url?: Optional<String>;

    userFiles?: Optional<UserUpdateOneInput>;
}

export interface FileUpdateManyInput {

    create?: List<NonNull<FileCreateInput>>;

    connect?: List<NonNull<FileWhereUniqueInput>>;

    disconnect?: List<NonNull<FileWhereUniqueInput>>;

    delete?: List<NonNull<FileWhereUniqueInput>>;

    update?: List<NonNull<FileUpdateWithWhereUniqueNestedInput>>;

    upsert?: List<NonNull<FileUpsertWithWhereUniqueNestedInput>>;
}

export interface FileUpdateOneInput {

    create?: Optional<FileCreateInput>;

    connect?: Optional<FileWhereUniqueInput>;

    disconnect?: Optional<Boolean>;

    delete?: Optional<Boolean>;

    update?: Optional<FileUpdateDataInput>;

    upsert?: Optional<FileUpsertNestedInput>;
}

export interface FileUpdateWithWhereUniqueNestedInput {

    where: NonNull<FileWhereUniqueInput>;

    data: NonNull<FileUpdateDataInput>;
}

export interface FileUpsertNestedInput {

    update: NonNull<FileUpdateDataInput>;

    create: NonNull<FileCreateInput>;
}

export interface FileUpsertWithWhereUniqueNestedInput {

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

    userFiles?: Optional<UserWhereInput>;
}

export interface FileWhereUniqueInput {

    id?: Optional<ID>;

    secret?: Optional<String>;

    url?: Optional<String>;
}

export interface InstitutionsCreateInput {

    title: NonNull<String>;

    type: NonNull<InstitutionType>;

    country?: Optional<CountryCreateOneWithoutInstitutionsInput>;

    users?: Optional<UserCreateManyWithoutInstitutionInput>;

    departments?: Optional<DepartmentCreateManyWithoutInstitutionInput>;
}

export interface InstitutionsCreateManyWithoutCountryInput {

    create?: List<NonNull<InstitutionsCreateWithoutCountryInput>>;

    connect?: List<NonNull<InstitutionsWhereUniqueInput>>;
}

export interface InstitutionsCreateOneWithoutDepartmentsInput {

    create?: Optional<InstitutionsCreateWithoutDepartmentsInput>;

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

    departments?: Optional<DepartmentCreateManyWithoutInstitutionInput>;
}

export interface InstitutionsCreateWithoutDepartmentsInput {

    title: NonNull<String>;

    type: NonNull<InstitutionType>;

    country?: Optional<CountryCreateOneWithoutInstitutionsInput>;

    users?: Optional<UserCreateManyWithoutInstitutionInput>;
}

export interface InstitutionsCreateWithoutUsersInput {

    title: NonNull<String>;

    type: NonNull<InstitutionType>;

    country?: Optional<CountryCreateOneWithoutInstitutionsInput>;

    departments?: Optional<DepartmentCreateManyWithoutInstitutionInput>;
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

    country?: Optional<CountryUpdateOneWithoutInstitutionsInput>;

    users?: Optional<UserUpdateManyWithoutInstitutionInput>;

    departments?: Optional<DepartmentUpdateManyWithoutInstitutionInput>;
}

export interface InstitutionsUpdateManyWithoutCountryInput {

    create?: List<NonNull<InstitutionsCreateWithoutCountryInput>>;

    connect?: List<NonNull<InstitutionsWhereUniqueInput>>;

    disconnect?: List<NonNull<InstitutionsWhereUniqueInput>>;

    delete?: List<NonNull<InstitutionsWhereUniqueInput>>;

    update?: List<NonNull<InstitutionsUpdateWithWhereUniqueWithoutCountryInput>>;

    upsert?: List<NonNull<InstitutionsUpsertWithWhereUniqueWithoutCountryInput>>;
}

export interface InstitutionsUpdateOneWithoutDepartmentsInput {

    create?: Optional<InstitutionsCreateWithoutDepartmentsInput>;

    connect?: Optional<InstitutionsWhereUniqueInput>;

    disconnect?: Optional<Boolean>;

    delete?: Optional<Boolean>;

    update?: Optional<InstitutionsUpdateWithoutDepartmentsDataInput>;

    upsert?: Optional<InstitutionsUpsertWithoutDepartmentsInput>;
}

export interface InstitutionsUpdateOneWithoutUsersInput {

    create?: Optional<InstitutionsCreateWithoutUsersInput>;

    connect?: Optional<InstitutionsWhereUniqueInput>;

    disconnect?: Optional<Boolean>;

    delete?: Optional<Boolean>;

    update?: Optional<InstitutionsUpdateWithoutUsersDataInput>;

    upsert?: Optional<InstitutionsUpsertWithoutUsersInput>;
}

export interface InstitutionsUpdateWithoutCountryDataInput {

    title?: Optional<String>;

    type?: Optional<InstitutionType>;

    users?: Optional<UserUpdateManyWithoutInstitutionInput>;

    departments?: Optional<DepartmentUpdateManyWithoutInstitutionInput>;
}

export interface InstitutionsUpdateWithoutDepartmentsDataInput {

    title?: Optional<String>;

    type?: Optional<InstitutionType>;

    country?: Optional<CountryUpdateOneWithoutInstitutionsInput>;

    users?: Optional<UserUpdateManyWithoutInstitutionInput>;
}

export interface InstitutionsUpdateWithoutUsersDataInput {

    title?: Optional<String>;

    type?: Optional<InstitutionType>;

    country?: Optional<CountryUpdateOneWithoutInstitutionsInput>;

    departments?: Optional<DepartmentUpdateManyWithoutInstitutionInput>;
}

export interface InstitutionsUpdateWithWhereUniqueWithoutCountryInput {

    where: NonNull<InstitutionsWhereUniqueInput>;

    data: NonNull<InstitutionsUpdateWithoutCountryDataInput>;
}

export interface InstitutionsUpsertWithoutDepartmentsInput {

    update: NonNull<InstitutionsUpdateWithoutDepartmentsDataInput>;

    create: NonNull<InstitutionsCreateWithoutDepartmentsInput>;
}

export interface InstitutionsUpsertWithoutUsersInput {

    update: NonNull<InstitutionsUpdateWithoutUsersDataInput>;

    create: NonNull<InstitutionsCreateWithoutUsersInput>;
}

export interface InstitutionsUpsertWithWhereUniqueWithoutCountryInput {

    where: NonNull<InstitutionsWhereUniqueInput>;

    update: NonNull<InstitutionsUpdateWithoutCountryDataInput>;

    create: NonNull<InstitutionsCreateWithoutCountryInput>;
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

    departments_every?: Optional<DepartmentWhereInput>;

    departments_some?: Optional<DepartmentWhereInput>;

    departments_none?: Optional<DepartmentWhereInput>;
}

export interface InstitutionsWhereUniqueInput {

    id?: Optional<ID>;
}

export interface InterestCreateInput {

    name: NonNull<String>;

    avatar: NonNull<String>;

    users?: Optional<UserCreateManyWithoutInterestInput>;
}

export interface InterestCreateManyWithoutUsersInput {

    create?: List<NonNull<InterestCreateWithoutUsersInput>>;

    connect?: List<NonNull<InterestWhereUniqueInput>>;
}

export interface InterestCreateOneInput {

    create?: Optional<InterestCreateInput>;

    connect?: Optional<InterestWhereUniqueInput>;
}

export interface InterestCreateWithoutUsersInput {

    name: NonNull<String>;

    avatar: NonNull<String>;
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

export interface InterestUpdateDataInput {

    name?: Optional<String>;

    avatar?: Optional<String>;

    users?: Optional<UserUpdateManyWithoutInterestInput>;
}

export interface InterestUpdateInput {

    name?: Optional<String>;

    avatar?: Optional<String>;

    users?: Optional<UserUpdateManyWithoutInterestInput>;
}

export interface InterestUpdateManyWithoutUsersInput {

    create?: List<NonNull<InterestCreateWithoutUsersInput>>;

    connect?: List<NonNull<InterestWhereUniqueInput>>;

    disconnect?: List<NonNull<InterestWhereUniqueInput>>;

    delete?: List<NonNull<InterestWhereUniqueInput>>;

    update?: List<NonNull<InterestUpdateWithWhereUniqueWithoutUsersInput>>;

    upsert?: List<NonNull<InterestUpsertWithWhereUniqueWithoutUsersInput>>;
}

export interface InterestUpdateOneInput {

    create?: Optional<InterestCreateInput>;

    connect?: Optional<InterestWhereUniqueInput>;

    disconnect?: Optional<Boolean>;

    delete?: Optional<Boolean>;

    update?: Optional<InterestUpdateDataInput>;

    upsert?: Optional<InterestUpsertNestedInput>;
}

export interface InterestUpdateWithoutUsersDataInput {

    name?: Optional<String>;

    avatar?: Optional<String>;
}

export interface InterestUpdateWithWhereUniqueWithoutUsersInput {

    where: NonNull<InterestWhereUniqueInput>;

    data: NonNull<InterestUpdateWithoutUsersDataInput>;
}

export interface InterestUpsertNestedInput {

    update: NonNull<InterestUpdateDataInput>;

    create: NonNull<InterestCreateInput>;
}

export interface InterestUpsertWithWhereUniqueWithoutUsersInput {

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

    avatar?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    avatar_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    avatar_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    avatar_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    avatar_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    avatar_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    avatar_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    avatar_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    avatar_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    avatar_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    avatar_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    avatar_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    avatar_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    avatar_not_ends_with?: Optional<String>;

    users_every?: Optional<UserWhereInput>;

    users_some?: Optional<UserWhereInput>;

    users_none?: Optional<UserWhereInput>;
}

export interface InterestWhereUniqueInput {

    id?: Optional<ID>;

    name?: Optional<String>;
}

export interface JoinSettingsCreateInput {

    tokenJoinEnabled?: Optional<Boolean>;

    token?: Optional<String>;
}

export interface JoinSettingsCreateOneInput {

    create?: Optional<JoinSettingsCreateInput>;

    connect?: Optional<JoinSettingsWhereUniqueInput>;
}

export interface JoinSettingsSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<JoinSettingsSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<JoinSettingsSubscriptionWhereInput>>;

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

    node?: Optional<JoinSettingsWhereInput>;
}

export interface JoinSettingsUpdateDataInput {

    tokenJoinEnabled?: Optional<Boolean>;

    token?: Optional<String>;
}

export interface JoinSettingsUpdateInput {

    tokenJoinEnabled?: Optional<Boolean>;

    token?: Optional<String>;
}

export interface JoinSettingsUpdateOneInput {

    create?: Optional<JoinSettingsCreateInput>;

    connect?: Optional<JoinSettingsWhereUniqueInput>;

    disconnect?: Optional<Boolean>;

    delete?: Optional<Boolean>;

    update?: Optional<JoinSettingsUpdateDataInput>;

    upsert?: Optional<JoinSettingsUpsertNestedInput>;
}

export interface JoinSettingsUpsertNestedInput {

    update: NonNull<JoinSettingsUpdateDataInput>;

    create: NonNull<JoinSettingsCreateInput>;
}

export interface JoinSettingsWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<JoinSettingsWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<JoinSettingsWhereInput>>;

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

    tokenJoinEnabled?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    tokenJoinEnabled_not?: Optional<Boolean>;

    token?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    token_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    token_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    token_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    token_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    token_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    token_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    token_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    token_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    token_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    token_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    token_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    token_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    token_not_ends_with?: Optional<String>;
}

export interface JoinSettingsWhereUniqueInput {

    id?: Optional<ID>;
}

export interface LibraryCreateInput {

    name: NonNull<String>;

    description?: Optional<String>;

    location: NonNull<LocationCreateOneInput>;
}

export interface LibrarySubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<LibrarySubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<LibrarySubscriptionWhereInput>>;

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

    node?: Optional<LibraryWhereInput>;
}

export interface LibraryUpdateInput {

    name?: Optional<String>;

    description?: Optional<String>;

    location?: Optional<LocationUpdateOneInput>;
}

export interface LibraryWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<LibraryWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<LibraryWhereInput>>;

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

    description?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    description_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    description_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    description_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    description_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    description_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    description_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    description_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    description_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    description_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    description_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    description_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    description_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    description_not_ends_with?: Optional<String>;

    location?: Optional<LocationWhereInput>;
}

export interface LibraryWhereUniqueInput {

    id?: Optional<ID>;
}

export interface LocationCreateInput {

    longitude: NonNull<Float>;

    latitude: NonNull<Float>;

    type: NonNull<String>;
}

export interface LocationCreateOneInput {

    create?: Optional<LocationCreateInput>;

    connect?: Optional<LocationWhereUniqueInput>;
}

export interface LocationSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<LocationSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<LocationSubscriptionWhereInput>>;

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

    node?: Optional<LocationWhereInput>;
}

export interface LocationUpdateDataInput {

    longitude?: Optional<Float>;

    latitude?: Optional<Float>;

    type?: Optional<String>;
}

export interface LocationUpdateInput {

    longitude?: Optional<Float>;

    latitude?: Optional<Float>;

    type?: Optional<String>;
}

export interface LocationUpdateOneInput {

    create?: Optional<LocationCreateInput>;

    connect?: Optional<LocationWhereUniqueInput>;

    disconnect?: Optional<Boolean>;

    delete?: Optional<Boolean>;

    update?: Optional<LocationUpdateDataInput>;

    upsert?: Optional<LocationUpsertNestedInput>;
}

export interface LocationUpsertNestedInput {

    update: NonNull<LocationUpdateDataInput>;

    create: NonNull<LocationCreateInput>;
}

export interface LocationWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<LocationWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<LocationWhereInput>>;

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

    longitude?: Optional<Float>;

    /**
     * All values that are not equal to given value.
     */
    longitude_not?: Optional<Float>;

    /**
     * All values that are contained in given list.
     */
    longitude_in?: List<NonNull<Float>>;

    /**
     * All values that are not contained in given list.
     */
    longitude_not_in?: List<NonNull<Float>>;

    /**
     * All values less than the given value.
     */
    longitude_lt?: Optional<Float>;

    /**
     * All values less than or equal the given value.
     */
    longitude_lte?: Optional<Float>;

    /**
     * All values greater than the given value.
     */
    longitude_gt?: Optional<Float>;

    /**
     * All values greater than or equal the given value.
     */
    longitude_gte?: Optional<Float>;

    latitude?: Optional<Float>;

    /**
     * All values that are not equal to given value.
     */
    latitude_not?: Optional<Float>;

    /**
     * All values that are contained in given list.
     */
    latitude_in?: List<NonNull<Float>>;

    /**
     * All values that are not contained in given list.
     */
    latitude_not_in?: List<NonNull<Float>>;

    /**
     * All values less than the given value.
     */
    latitude_lt?: Optional<Float>;

    /**
     * All values less than or equal the given value.
     */
    latitude_lte?: Optional<Float>;

    /**
     * All values greater than the given value.
     */
    latitude_gt?: Optional<Float>;

    /**
     * All values greater than or equal the given value.
     */
    latitude_gte?: Optional<Float>;

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
}

export interface LocationWhereUniqueInput {

    id?: Optional<ID>;
}

export interface MessageCreateInput {

    text: NonNull<String>;

    seen?: Optional<Boolean>;

    delivered?: Optional<Boolean>;

    sent?: Optional<Boolean>;

    channel: NonNull<ChannelsCreateOneWithoutMessagesInput>;

    user: NonNull<UserCreateOneInput>;
}

export interface MessageCreateManyWithoutChannelInput {

    create?: List<NonNull<MessageCreateWithoutChannelInput>>;

    connect?: List<NonNull<MessageWhereUniqueInput>>;
}

export interface MessageCreateOneInput {

    create?: Optional<MessageCreateInput>;

    connect?: Optional<MessageWhereUniqueInput>;
}

export interface MessageCreateWithoutChannelInput {

    text: NonNull<String>;

    seen?: Optional<Boolean>;

    delivered?: Optional<Boolean>;

    sent?: Optional<Boolean>;

    user: NonNull<UserCreateOneInput>;
}

export interface MessageSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<MessageSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<MessageSubscriptionWhereInput>>;

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

    node?: Optional<MessageWhereInput>;
}

export interface MessageUpdateDataInput {

    text?: Optional<String>;

    seen?: Optional<Boolean>;

    delivered?: Optional<Boolean>;

    sent?: Optional<Boolean>;

    channel?: Optional<ChannelsUpdateOneWithoutMessagesInput>;

    user?: Optional<UserUpdateOneInput>;
}

export interface MessageUpdateInput {

    text?: Optional<String>;

    seen?: Optional<Boolean>;

    delivered?: Optional<Boolean>;

    sent?: Optional<Boolean>;

    channel?: Optional<ChannelsUpdateOneWithoutMessagesInput>;

    user?: Optional<UserUpdateOneInput>;
}

export interface MessageUpdateManyWithoutChannelInput {

    create?: List<NonNull<MessageCreateWithoutChannelInput>>;

    connect?: List<NonNull<MessageWhereUniqueInput>>;

    disconnect?: List<NonNull<MessageWhereUniqueInput>>;

    delete?: List<NonNull<MessageWhereUniqueInput>>;

    update?: List<NonNull<MessageUpdateWithWhereUniqueWithoutChannelInput>>;

    upsert?: List<NonNull<MessageUpsertWithWhereUniqueWithoutChannelInput>>;
}

export interface MessageUpdateOneInput {

    create?: Optional<MessageCreateInput>;

    connect?: Optional<MessageWhereUniqueInput>;

    disconnect?: Optional<Boolean>;

    delete?: Optional<Boolean>;

    update?: Optional<MessageUpdateDataInput>;

    upsert?: Optional<MessageUpsertNestedInput>;
}

export interface MessageUpdateWithoutChannelDataInput {

    text?: Optional<String>;

    seen?: Optional<Boolean>;

    delivered?: Optional<Boolean>;

    sent?: Optional<Boolean>;

    user?: Optional<UserUpdateOneInput>;
}

export interface MessageUpdateWithWhereUniqueWithoutChannelInput {

    where: NonNull<MessageWhereUniqueInput>;

    data: NonNull<MessageUpdateWithoutChannelDataInput>;
}

export interface MessageUpsertNestedInput {

    update: NonNull<MessageUpdateDataInput>;

    create: NonNull<MessageCreateInput>;
}

export interface MessageUpsertWithWhereUniqueWithoutChannelInput {

    where: NonNull<MessageWhereUniqueInput>;

    update: NonNull<MessageUpdateWithoutChannelDataInput>;

    create: NonNull<MessageCreateWithoutChannelInput>;
}

export interface MessageWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<MessageWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<MessageWhereInput>>;

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

    seen?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    seen_not?: Optional<Boolean>;

    delivered?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    delivered_not?: Optional<Boolean>;

    sent?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    sent_not?: Optional<Boolean>;

    channel?: Optional<ChannelsWhereInput>;

    user?: Optional<UserWhereInput>;
}

export interface MessageWhereUniqueInput {

    id?: Optional<ID>;
}

export interface NotificationCreateInput {

    verb: NonNull<String>;

    type: NonNull<NotificationType>;

    slug?: Optional<String>;

    seen?: Optional<Boolean>;

    sent?: Optional<Boolean>;

    target: NonNull<UserCreateOneWithoutNotificationsInput>;

    actor: NonNull<UserCreateOneWithoutActorNotificationsInput>;

    article?: Optional<ArticleCreateOneInput>;

    message?: Optional<MessageCreateOneInput>;

    connect?: Optional<ConnectCreateOneInput>;
}

export interface NotificationCreateManyWithoutActorInput {

    create?: List<NonNull<NotificationCreateWithoutActorInput>>;

    connect?: List<NonNull<NotificationWhereUniqueInput>>;
}

export interface NotificationCreateManyWithoutTargetInput {

    create?: List<NonNull<NotificationCreateWithoutTargetInput>>;

    connect?: List<NonNull<NotificationWhereUniqueInput>>;
}

export interface NotificationCreateWithoutActorInput {

    verb: NonNull<String>;

    type: NonNull<NotificationType>;

    slug?: Optional<String>;

    seen?: Optional<Boolean>;

    sent?: Optional<Boolean>;

    target: NonNull<UserCreateOneWithoutNotificationsInput>;

    article?: Optional<ArticleCreateOneInput>;

    message?: Optional<MessageCreateOneInput>;

    connect?: Optional<ConnectCreateOneInput>;
}

export interface NotificationCreateWithoutTargetInput {

    verb: NonNull<String>;

    type: NonNull<NotificationType>;

    slug?: Optional<String>;

    seen?: Optional<Boolean>;

    sent?: Optional<Boolean>;

    actor: NonNull<UserCreateOneWithoutActorNotificationsInput>;

    article?: Optional<ArticleCreateOneInput>;

    message?: Optional<MessageCreateOneInput>;

    connect?: Optional<ConnectCreateOneInput>;
}

export interface NotificationSubscriptionWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<NotificationSubscriptionWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<NotificationSubscriptionWhereInput>>;

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

    node?: Optional<NotificationWhereInput>;
}

export interface NotificationUpdateInput {

    verb?: Optional<String>;

    type?: Optional<NotificationType>;

    slug?: Optional<String>;

    seen?: Optional<Boolean>;

    sent?: Optional<Boolean>;

    target?: Optional<UserUpdateOneWithoutNotificationsInput>;

    actor?: Optional<UserUpdateOneWithoutActorNotificationsInput>;

    article?: Optional<ArticleUpdateOneInput>;

    message?: Optional<MessageUpdateOneInput>;

    connect?: Optional<ConnectUpdateOneInput>;
}

export interface NotificationUpdateManyWithoutActorInput {

    create?: List<NonNull<NotificationCreateWithoutActorInput>>;

    connect?: List<NonNull<NotificationWhereUniqueInput>>;

    disconnect?: List<NonNull<NotificationWhereUniqueInput>>;

    delete?: List<NonNull<NotificationWhereUniqueInput>>;

    update?: List<NonNull<NotificationUpdateWithWhereUniqueWithoutActorInput>>;

    upsert?: List<NonNull<NotificationUpsertWithWhereUniqueWithoutActorInput>>;
}

export interface NotificationUpdateManyWithoutTargetInput {

    create?: List<NonNull<NotificationCreateWithoutTargetInput>>;

    connect?: List<NonNull<NotificationWhereUniqueInput>>;

    disconnect?: List<NonNull<NotificationWhereUniqueInput>>;

    delete?: List<NonNull<NotificationWhereUniqueInput>>;

    update?: List<NonNull<NotificationUpdateWithWhereUniqueWithoutTargetInput>>;

    upsert?: List<NonNull<NotificationUpsertWithWhereUniqueWithoutTargetInput>>;
}

export interface NotificationUpdateWithoutActorDataInput {

    verb?: Optional<String>;

    type?: Optional<NotificationType>;

    slug?: Optional<String>;

    seen?: Optional<Boolean>;

    sent?: Optional<Boolean>;

    target?: Optional<UserUpdateOneWithoutNotificationsInput>;

    article?: Optional<ArticleUpdateOneInput>;

    message?: Optional<MessageUpdateOneInput>;

    connect?: Optional<ConnectUpdateOneInput>;
}

export interface NotificationUpdateWithoutTargetDataInput {

    verb?: Optional<String>;

    type?: Optional<NotificationType>;

    slug?: Optional<String>;

    seen?: Optional<Boolean>;

    sent?: Optional<Boolean>;

    actor?: Optional<UserUpdateOneWithoutActorNotificationsInput>;

    article?: Optional<ArticleUpdateOneInput>;

    message?: Optional<MessageUpdateOneInput>;

    connect?: Optional<ConnectUpdateOneInput>;
}

export interface NotificationUpdateWithWhereUniqueWithoutActorInput {

    where: NonNull<NotificationWhereUniqueInput>;

    data: NonNull<NotificationUpdateWithoutActorDataInput>;
}

export interface NotificationUpdateWithWhereUniqueWithoutTargetInput {

    where: NonNull<NotificationWhereUniqueInput>;

    data: NonNull<NotificationUpdateWithoutTargetDataInput>;
}

export interface NotificationUpsertWithWhereUniqueWithoutActorInput {

    where: NonNull<NotificationWhereUniqueInput>;

    update: NonNull<NotificationUpdateWithoutActorDataInput>;

    create: NonNull<NotificationCreateWithoutActorInput>;
}

export interface NotificationUpsertWithWhereUniqueWithoutTargetInput {

    where: NonNull<NotificationWhereUniqueInput>;

    update: NonNull<NotificationUpdateWithoutTargetDataInput>;

    create: NonNull<NotificationCreateWithoutTargetInput>;
}

export interface NotificationWhereInput {

    /**
     * Logical AND on all given filters.
     */
    AND?: List<NonNull<NotificationWhereInput>>;

    /**
     * Logical OR on all given filters.
     */
    OR?: List<NonNull<NotificationWhereInput>>;

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

    verb?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    verb_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    verb_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    verb_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    verb_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    verb_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    verb_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    verb_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    verb_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    verb_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    verb_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    verb_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    verb_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    verb_not_ends_with?: Optional<String>;

    type?: Optional<NotificationType>;

    /**
     * All values that are not equal to given value.
     */
    type_not?: Optional<NotificationType>;

    /**
     * All values that are contained in given list.
     */
    type_in?: List<NonNull<NotificationType>>;

    /**
     * All values that are not contained in given list.
     */
    type_not_in?: List<NonNull<NotificationType>>;

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

    seen?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    seen_not?: Optional<Boolean>;

    sent?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    sent_not?: Optional<Boolean>;

    target?: Optional<UserWhereInput>;

    actor?: Optional<UserWhereInput>;

    article?: Optional<ArticleWhereInput>;

    message?: Optional<MessageWhereInput>;

    connect?: Optional<ConnectWhereInput>;
}

export interface NotificationWhereUniqueInput {

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

export interface UserCreatedeviceIdsInput {

    set?: List<NonNull<String>>;
}

export interface UserCreateInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateManyWithoutBlockedChannelsInput {

    create?: List<NonNull<UserCreateWithoutBlockedChannelsInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;
}

export interface UserCreateManyWithoutChannelsInput {

    create?: List<NonNull<UserCreateWithoutChannelsInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;
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

export interface UserCreateManyWithoutLikedArticlesInput {

    create?: List<NonNull<UserCreateWithoutLikedArticlesInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;
}

export interface UserCreateManyWithoutModeratorsChannelsInput {

    create?: List<NonNull<UserCreateWithoutModeratorsChannelsInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;
}

export interface UserCreateManyWithoutPendingChannelsInput {

    create?: List<NonNull<UserCreateWithoutPendingChannelsInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;
}

export interface UserCreateOneInput {

    create?: Optional<UserCreateInput>;

    connect?: Optional<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutActorNotificationsInput {

    create?: Optional<UserCreateWithoutActorNotificationsInput>;

    connect?: Optional<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutArticlesInput {

    create?: Optional<UserCreateWithoutArticlesInput>;

    connect?: Optional<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutCommentsInput {

    create?: Optional<UserCreateWithoutCommentsInput>;

    connect?: Optional<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutConnectOneInput {

    create?: Optional<UserCreateWithoutConnectOneInput>;

    connect?: Optional<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutConnectTwoInput {

    create?: Optional<UserCreateWithoutConnectTwoInput>;

    connect?: Optional<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutMyChannelsInput {

    create?: Optional<UserCreateWithoutMyChannelsInput>;

    connect?: Optional<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutNotificationsInput {

    create?: Optional<UserCreateWithoutNotificationsInput>;

    connect?: Optional<UserWhereUniqueInput>;
}

export interface UserCreateWithoutActorNotificationsInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;
}

export interface UserCreateWithoutArticlesInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateWithoutBlockedChannelsInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateWithoutChannelsInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateWithoutCommentsInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateWithoutConnectOneInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateWithoutConnectTwoInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateWithoutCountryInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateWithoutDepartmentInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateWithoutFavouritesInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateWithoutInstitutionInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateWithoutInterestInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateWithoutLikedArticlesInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateWithoutModeratorsChannelsInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateWithoutMyChannelsInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateWithoutNotificationsInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsCreateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
}

export interface UserCreateWithoutPendingChannelsInput {

    email: NonNull<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password: NonNull<String>;

    firstname: NonNull<String>;

    lastname: NonNull<String>;

    bio?: Optional<String>;

    gender: NonNull<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserCreatedeviceIdsInput>;

    userFiles?: Optional<FileCreateManyInput>;

    country?: Optional<CountryCreateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsCreateOneWithoutUsersInput>;

    department?: Optional<DepartmentCreateOneWithoutUsersInput>;

    interest?: Optional<InterestCreateManyWithoutUsersInput>;

    messages?: Optional<MessageCreateOneInput>;

    ConnectOne?: Optional<ConnectCreateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectCreateManyWithoutUser2Input>;

    articles?: Optional<ArticleCreateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleCreateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsCreateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsCreateManyWithoutAuthorInput>;

    blockedChannels?: Optional<ChannelsCreateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsCreateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleCreateManyWithoutLikesInput>;

    comments?: Optional<CommentCreateManyWithoutAuthorInput>;

    location?: Optional<LocationCreateOneInput>;

    notifications?: Optional<NotificationCreateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationCreateManyWithoutActorInput>;
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

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdatedeviceIdsInput {

    set?: List<NonNull<String>>;
}

export interface UserUpdateInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateManyWithoutBlockedChannelsInput {

    create?: List<NonNull<UserCreateWithoutBlockedChannelsInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithWhereUniqueWithoutBlockedChannelsInput>>;

    upsert?: List<NonNull<UserUpsertWithWhereUniqueWithoutBlockedChannelsInput>>;
}

export interface UserUpdateManyWithoutChannelsInput {

    create?: List<NonNull<UserCreateWithoutChannelsInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithWhereUniqueWithoutChannelsInput>>;

    upsert?: List<NonNull<UserUpsertWithWhereUniqueWithoutChannelsInput>>;
}

export interface UserUpdateManyWithoutCountryInput {

    create?: List<NonNull<UserCreateWithoutCountryInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithWhereUniqueWithoutCountryInput>>;

    upsert?: List<NonNull<UserUpsertWithWhereUniqueWithoutCountryInput>>;
}

export interface UserUpdateManyWithoutDepartmentInput {

    create?: List<NonNull<UserCreateWithoutDepartmentInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithWhereUniqueWithoutDepartmentInput>>;

    upsert?: List<NonNull<UserUpsertWithWhereUniqueWithoutDepartmentInput>>;
}

export interface UserUpdateManyWithoutFavouritesInput {

    create?: List<NonNull<UserCreateWithoutFavouritesInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithWhereUniqueWithoutFavouritesInput>>;

    upsert?: List<NonNull<UserUpsertWithWhereUniqueWithoutFavouritesInput>>;
}

export interface UserUpdateManyWithoutInstitutionInput {

    create?: List<NonNull<UserCreateWithoutInstitutionInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithWhereUniqueWithoutInstitutionInput>>;

    upsert?: List<NonNull<UserUpsertWithWhereUniqueWithoutInstitutionInput>>;
}

export interface UserUpdateManyWithoutInterestInput {

    create?: List<NonNull<UserCreateWithoutInterestInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithWhereUniqueWithoutInterestInput>>;

    upsert?: List<NonNull<UserUpsertWithWhereUniqueWithoutInterestInput>>;
}

export interface UserUpdateManyWithoutLikedArticlesInput {

    create?: List<NonNull<UserCreateWithoutLikedArticlesInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithWhereUniqueWithoutLikedArticlesInput>>;

    upsert?: List<NonNull<UserUpsertWithWhereUniqueWithoutLikedArticlesInput>>;
}

export interface UserUpdateManyWithoutModeratorsChannelsInput {

    create?: List<NonNull<UserCreateWithoutModeratorsChannelsInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithWhereUniqueWithoutModeratorsChannelsInput>>;

    upsert?: List<NonNull<UserUpsertWithWhereUniqueWithoutModeratorsChannelsInput>>;
}

export interface UserUpdateManyWithoutPendingChannelsInput {

    create?: List<NonNull<UserCreateWithoutPendingChannelsInput>>;

    connect?: List<NonNull<UserWhereUniqueInput>>;

    disconnect?: List<NonNull<UserWhereUniqueInput>>;

    delete?: List<NonNull<UserWhereUniqueInput>>;

    update?: List<NonNull<UserUpdateWithWhereUniqueWithoutPendingChannelsInput>>;

    upsert?: List<NonNull<UserUpsertWithWhereUniqueWithoutPendingChannelsInput>>;
}

export interface UserUpdateOneInput {

    create?: Optional<UserCreateInput>;

    connect?: Optional<UserWhereUniqueInput>;

    disconnect?: Optional<Boolean>;

    delete?: Optional<Boolean>;

    update?: Optional<UserUpdateDataInput>;

    upsert?: Optional<UserUpsertNestedInput>;
}

export interface UserUpdateOneWithoutActorNotificationsInput {

    create?: Optional<UserCreateWithoutActorNotificationsInput>;

    connect?: Optional<UserWhereUniqueInput>;

    delete?: Optional<Boolean>;

    update?: Optional<UserUpdateWithoutActorNotificationsDataInput>;

    upsert?: Optional<UserUpsertWithoutActorNotificationsInput>;
}

export interface UserUpdateOneWithoutArticlesInput {

    create?: Optional<UserCreateWithoutArticlesInput>;

    connect?: Optional<UserWhereUniqueInput>;

    delete?: Optional<Boolean>;

    update?: Optional<UserUpdateWithoutArticlesDataInput>;

    upsert?: Optional<UserUpsertWithoutArticlesInput>;
}

export interface UserUpdateOneWithoutCommentsInput {

    create?: Optional<UserCreateWithoutCommentsInput>;

    connect?: Optional<UserWhereUniqueInput>;

    delete?: Optional<Boolean>;

    update?: Optional<UserUpdateWithoutCommentsDataInput>;

    upsert?: Optional<UserUpsertWithoutCommentsInput>;
}

export interface UserUpdateOneWithoutConnectOneInput {

    create?: Optional<UserCreateWithoutConnectOneInput>;

    connect?: Optional<UserWhereUniqueInput>;

    delete?: Optional<Boolean>;

    update?: Optional<UserUpdateWithoutConnectOneDataInput>;

    upsert?: Optional<UserUpsertWithoutConnectOneInput>;
}

export interface UserUpdateOneWithoutConnectTwoInput {

    create?: Optional<UserCreateWithoutConnectTwoInput>;

    connect?: Optional<UserWhereUniqueInput>;

    delete?: Optional<Boolean>;

    update?: Optional<UserUpdateWithoutConnectTwoDataInput>;

    upsert?: Optional<UserUpsertWithoutConnectTwoInput>;
}

export interface UserUpdateOneWithoutMyChannelsInput {

    create?: Optional<UserCreateWithoutMyChannelsInput>;

    connect?: Optional<UserWhereUniqueInput>;

    delete?: Optional<Boolean>;

    update?: Optional<UserUpdateWithoutMyChannelsDataInput>;

    upsert?: Optional<UserUpsertWithoutMyChannelsInput>;
}

export interface UserUpdateOneWithoutNotificationsInput {

    create?: Optional<UserCreateWithoutNotificationsInput>;

    connect?: Optional<UserWhereUniqueInput>;

    delete?: Optional<Boolean>;

    update?: Optional<UserUpdateWithoutNotificationsDataInput>;

    upsert?: Optional<UserUpsertWithoutNotificationsInput>;
}

export interface UserUpdateWithoutActorNotificationsDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;
}

export interface UserUpdateWithoutArticlesDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithoutBlockedChannelsDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithoutChannelsDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithoutCommentsDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithoutConnectOneDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithoutConnectTwoDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithoutCountryDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithoutDepartmentDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithoutFavouritesDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithoutInstitutionDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithoutInterestDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithoutLikedArticlesDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithoutModeratorsChannelsDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithoutMyChannelsDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithoutNotificationsDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    pendingChannels?: Optional<ChannelsUpdateManyWithoutPendingUsersInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithoutPendingChannelsDataInput {

    email?: Optional<String>;

    username?: Optional<String>;

    avatar?: Optional<String>;

    headerImage?: Optional<String>;

    password?: Optional<String>;

    firstname?: Optional<String>;

    lastname?: Optional<String>;

    bio?: Optional<String>;

    gender?: Optional<String>;

    type?: Optional<String>;

    userType?: Optional<String>;

    newConnectNot?: Optional<Boolean>;

    newCommentNot?: Optional<Boolean>;

    newMessageNot?: Optional<Boolean>;

    newCommunityNot?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    completedProfile?: Optional<Int>;

    verified?: Optional<Boolean>;

    deviceIds?: Optional<UserUpdatedeviceIdsInput>;

    userFiles?: Optional<FileUpdateManyInput>;

    country?: Optional<CountryUpdateOneWithoutUsersInput>;

    institution?: Optional<InstitutionsUpdateOneWithoutUsersInput>;

    department?: Optional<DepartmentUpdateOneWithoutUsersInput>;

    interest?: Optional<InterestUpdateManyWithoutUsersInput>;

    messages?: Optional<MessageUpdateOneInput>;

    ConnectOne?: Optional<ConnectUpdateManyWithoutUser1Input>;

    ConnectTwo?: Optional<ConnectUpdateManyWithoutUser2Input>;

    articles?: Optional<ArticleUpdateManyWithoutAuthorInput>;

    favourites?: Optional<ArticleUpdateManyWithoutUserFavouritedInput>;

    channels?: Optional<ChannelsUpdateManyWithoutParticipantsInput>;

    myChannels?: Optional<ChannelsUpdateManyWithoutAuthorInput>;

    blockedChannels?: Optional<ChannelsUpdateManyWithoutBlockedUsersInput>;

    moderatorsChannels?: Optional<ChannelsUpdateManyWithoutModeratorsInput>;

    likedArticles?: Optional<ArticleUpdateManyWithoutLikesInput>;

    comments?: Optional<CommentUpdateManyWithoutAuthorInput>;

    location?: Optional<LocationUpdateOneInput>;

    notifications?: Optional<NotificationUpdateManyWithoutTargetInput>;

    actorNotifications?: Optional<NotificationUpdateManyWithoutActorInput>;
}

export interface UserUpdateWithWhereUniqueWithoutBlockedChannelsInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutBlockedChannelsDataInput>;
}

export interface UserUpdateWithWhereUniqueWithoutChannelsInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutChannelsDataInput>;
}

export interface UserUpdateWithWhereUniqueWithoutCountryInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutCountryDataInput>;
}

export interface UserUpdateWithWhereUniqueWithoutDepartmentInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutDepartmentDataInput>;
}

export interface UserUpdateWithWhereUniqueWithoutFavouritesInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutFavouritesDataInput>;
}

export interface UserUpdateWithWhereUniqueWithoutInstitutionInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutInstitutionDataInput>;
}

export interface UserUpdateWithWhereUniqueWithoutInterestInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutInterestDataInput>;
}

export interface UserUpdateWithWhereUniqueWithoutLikedArticlesInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutLikedArticlesDataInput>;
}

export interface UserUpdateWithWhereUniqueWithoutModeratorsChannelsInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutModeratorsChannelsDataInput>;
}

export interface UserUpdateWithWhereUniqueWithoutPendingChannelsInput {

    where: NonNull<UserWhereUniqueInput>;

    data: NonNull<UserUpdateWithoutPendingChannelsDataInput>;
}

export interface UserUpsertNestedInput {

    update: NonNull<UserUpdateDataInput>;

    create: NonNull<UserCreateInput>;
}

export interface UserUpsertWithoutActorNotificationsInput {

    update: NonNull<UserUpdateWithoutActorNotificationsDataInput>;

    create: NonNull<UserCreateWithoutActorNotificationsInput>;
}

export interface UserUpsertWithoutArticlesInput {

    update: NonNull<UserUpdateWithoutArticlesDataInput>;

    create: NonNull<UserCreateWithoutArticlesInput>;
}

export interface UserUpsertWithoutCommentsInput {

    update: NonNull<UserUpdateWithoutCommentsDataInput>;

    create: NonNull<UserCreateWithoutCommentsInput>;
}

export interface UserUpsertWithoutConnectOneInput {

    update: NonNull<UserUpdateWithoutConnectOneDataInput>;

    create: NonNull<UserCreateWithoutConnectOneInput>;
}

export interface UserUpsertWithoutConnectTwoInput {

    update: NonNull<UserUpdateWithoutConnectTwoDataInput>;

    create: NonNull<UserCreateWithoutConnectTwoInput>;
}

export interface UserUpsertWithoutMyChannelsInput {

    update: NonNull<UserUpdateWithoutMyChannelsDataInput>;

    create: NonNull<UserCreateWithoutMyChannelsInput>;
}

export interface UserUpsertWithoutNotificationsInput {

    update: NonNull<UserUpdateWithoutNotificationsDataInput>;

    create: NonNull<UserCreateWithoutNotificationsInput>;
}

export interface UserUpsertWithWhereUniqueWithoutBlockedChannelsInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutBlockedChannelsDataInput>;

    create: NonNull<UserCreateWithoutBlockedChannelsInput>;
}

export interface UserUpsertWithWhereUniqueWithoutChannelsInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutChannelsDataInput>;

    create: NonNull<UserCreateWithoutChannelsInput>;
}

export interface UserUpsertWithWhereUniqueWithoutCountryInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutCountryDataInput>;

    create: NonNull<UserCreateWithoutCountryInput>;
}

export interface UserUpsertWithWhereUniqueWithoutDepartmentInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutDepartmentDataInput>;

    create: NonNull<UserCreateWithoutDepartmentInput>;
}

export interface UserUpsertWithWhereUniqueWithoutFavouritesInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutFavouritesDataInput>;

    create: NonNull<UserCreateWithoutFavouritesInput>;
}

export interface UserUpsertWithWhereUniqueWithoutInstitutionInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutInstitutionDataInput>;

    create: NonNull<UserCreateWithoutInstitutionInput>;
}

export interface UserUpsertWithWhereUniqueWithoutInterestInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutInterestDataInput>;

    create: NonNull<UserCreateWithoutInterestInput>;
}

export interface UserUpsertWithWhereUniqueWithoutLikedArticlesInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutLikedArticlesDataInput>;

    create: NonNull<UserCreateWithoutLikedArticlesInput>;
}

export interface UserUpsertWithWhereUniqueWithoutModeratorsChannelsInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutModeratorsChannelsDataInput>;

    create: NonNull<UserCreateWithoutModeratorsChannelsInput>;
}

export interface UserUpsertWithWhereUniqueWithoutPendingChannelsInput {

    where: NonNull<UserWhereUniqueInput>;

    update: NonNull<UserUpdateWithoutPendingChannelsDataInput>;

    create: NonNull<UserCreateWithoutPendingChannelsInput>;
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

    avatar?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    avatar_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    avatar_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    avatar_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    avatar_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    avatar_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    avatar_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    avatar_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    avatar_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    avatar_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    avatar_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    avatar_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    avatar_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    avatar_not_ends_with?: Optional<String>;

    headerImage?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    headerImage_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    headerImage_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    headerImage_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    headerImage_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    headerImage_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    headerImage_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    headerImage_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    headerImage_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    headerImage_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    headerImage_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    headerImage_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    headerImage_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    headerImage_not_ends_with?: Optional<String>;

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

    bio?: Optional<String>;

    /**
     * All values that are not equal to given value.
     */
    bio_not?: Optional<String>;

    /**
     * All values that are contained in given list.
     */
    bio_in?: List<NonNull<String>>;

    /**
     * All values that are not contained in given list.
     */
    bio_not_in?: List<NonNull<String>>;

    /**
     * All values less than the given value.
     */
    bio_lt?: Optional<String>;

    /**
     * All values less than or equal the given value.
     */
    bio_lte?: Optional<String>;

    /**
     * All values greater than the given value.
     */
    bio_gt?: Optional<String>;

    /**
     * All values greater than or equal the given value.
     */
    bio_gte?: Optional<String>;

    /**
     * All values containing the given string.
     */
    bio_contains?: Optional<String>;

    /**
     * All values not containing the given string.
     */
    bio_not_contains?: Optional<String>;

    /**
     * All values starting with the given string.
     */
    bio_starts_with?: Optional<String>;

    /**
     * All values not starting with the given string.
     */
    bio_not_starts_with?: Optional<String>;

    /**
     * All values ending with the given string.
     */
    bio_ends_with?: Optional<String>;

    /**
     * All values not ending with the given string.
     */
    bio_not_ends_with?: Optional<String>;

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

    newCommunityNot?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    newCommunityNot_not?: Optional<Boolean>;

    newProfileNot?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    newProfileNot_not?: Optional<Boolean>;

    topWeeklyArticleNot?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    topWeeklyArticleNot_not?: Optional<Boolean>;

    mentionMeNot?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    mentionMeNot_not?: Optional<Boolean>;

    enableBrowserPushNot?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    enableBrowserPushNot_not?: Optional<Boolean>;

    enableMobilePushNot?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    enableMobilePushNot_not?: Optional<Boolean>;

    enableLocation?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    enableLocation_not?: Optional<Boolean>;

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

    verified?: Optional<Boolean>;

    /**
     * All values that are not equal to given value.
     */
    verified_not?: Optional<Boolean>;

    userFiles_every?: Optional<FileWhereInput>;

    userFiles_some?: Optional<FileWhereInput>;

    userFiles_none?: Optional<FileWhereInput>;

    country?: Optional<CountryWhereInput>;

    institution?: Optional<InstitutionsWhereInput>;

    department?: Optional<DepartmentWhereInput>;

    interest_every?: Optional<InterestWhereInput>;

    interest_some?: Optional<InterestWhereInput>;

    interest_none?: Optional<InterestWhereInput>;

    messages?: Optional<MessageWhereInput>;

    ConnectOne_every?: Optional<ConnectWhereInput>;

    ConnectOne_some?: Optional<ConnectWhereInput>;

    ConnectOne_none?: Optional<ConnectWhereInput>;

    ConnectTwo_every?: Optional<ConnectWhereInput>;

    ConnectTwo_some?: Optional<ConnectWhereInput>;

    ConnectTwo_none?: Optional<ConnectWhereInput>;

    articles_every?: Optional<ArticleWhereInput>;

    articles_some?: Optional<ArticleWhereInput>;

    articles_none?: Optional<ArticleWhereInput>;

    favourites_every?: Optional<ArticleWhereInput>;

    favourites_some?: Optional<ArticleWhereInput>;

    favourites_none?: Optional<ArticleWhereInput>;

    channels_every?: Optional<ChannelsWhereInput>;

    channels_some?: Optional<ChannelsWhereInput>;

    channels_none?: Optional<ChannelsWhereInput>;

    myChannels_every?: Optional<ChannelsWhereInput>;

    myChannels_some?: Optional<ChannelsWhereInput>;

    myChannels_none?: Optional<ChannelsWhereInput>;

    pendingChannels_every?: Optional<ChannelsWhereInput>;

    pendingChannels_some?: Optional<ChannelsWhereInput>;

    pendingChannels_none?: Optional<ChannelsWhereInput>;

    blockedChannels_every?: Optional<ChannelsWhereInput>;

    blockedChannels_some?: Optional<ChannelsWhereInput>;

    blockedChannels_none?: Optional<ChannelsWhereInput>;

    moderatorsChannels_every?: Optional<ChannelsWhereInput>;

    moderatorsChannels_some?: Optional<ChannelsWhereInput>;

    moderatorsChannels_none?: Optional<ChannelsWhereInput>;

    likedArticles_every?: Optional<ArticleWhereInput>;

    likedArticles_some?: Optional<ArticleWhereInput>;

    likedArticles_none?: Optional<ArticleWhereInput>;

    comments_every?: Optional<CommentWhereInput>;

    comments_some?: Optional<CommentWhereInput>;

    comments_none?: Optional<CommentWhereInput>;

    location?: Optional<LocationWhereInput>;

    notifications_every?: Optional<NotificationWhereInput>;

    notifications_some?: Optional<NotificationWhereInput>;

    notifications_none?: Optional<NotificationWhereInput>;

    actorNotifications_every?: Optional<NotificationWhereInput>;

    actorNotifications_some?: Optional<NotificationWhereInput>;

    actorNotifications_none?: Optional<NotificationWhereInput>;
}

export interface UserWhereUniqueInput {

    id?: Optional<ID>;

    email?: Optional<String>;

    username?: Optional<String>;
}

