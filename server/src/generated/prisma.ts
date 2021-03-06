import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type Article implements Node {
  id: ID!
  slug: String
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  body: String!
  tags: [String!]
  category(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interest!]
  type: Arcticletype
  link: String
  description: String
  author(where: UserWhereInput): User!
  viewCount: Int
  likes(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  userFavourited(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type Channels implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  avatar: String
  author(where: UserWhereInput): User!
  type: ChannelType
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  participants(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type Comment implements Node {
  id: ID!
  slug: String
  createdAt: DateTime!
  updatedAt: DateTime!
  body: String!
  replies(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  article(where: ArticleWhereInput): Article!
  author(where: UserWhereInput): User!
}

type Connect implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  to(where: UserWhereInput): User!
  from(where: UserWhereInput): User!
  status: Int!
}

type Country implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  shortName: String!
  name: String!
  institutions(where: InstitutionsWhereInput, orderBy: InstitutionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Institutions!]
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type Department implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  institution(where: InstitutionsWhereInput): Institutions
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type File implements Node {
  id: ID!
  name: String!
  size: Int!
  secret: String!
  contentType: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  url: String!
}

type Institutions implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  type: InstitutionType!
  country(where: CountryWhereInput): Country
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  departments(where: DepartmentWhereInput, orderBy: DepartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Department!]
}

type Interest implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  avatar: String!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type Library implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  location(where: LocationWhereInput): Location!
  name: String!
  description: String
}

type Location implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  longitude: Float!
  latitude: Float!
  type: String!
}

type Message implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  channel(where: ChannelsWhereInput): Channels!
  text: String!
  user(where: UserWhereInput): User!
}

type Post implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  username: String
  avatar(where: FileWhereInput): File
  password: String!
  firstname: String!
  lastname: String!
  gender: String!
  country(where: CountryWhereInput): Country
  institution(where: InstitutionsWhereInput): Institutions
  department(where: DepartmentWhereInput): Department
  interest(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interest!]
  messages(where: MessageWhereInput): Message
  connectTo(where: ConnectWhereInput, orderBy: ConnectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Connect!]
  connectFrom(where: ConnectWhereInput, orderBy: ConnectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Connect!]
  type: String
  userType: String
  articles(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Article!]
  favourites(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Article!]
  channels(where: ChannelsWhereInput, orderBy: ChannelsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channels!]
  myChannels(where: ChannelsWhereInput, orderBy: ChannelsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channels!]
  likedArticles(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Article!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
}

type AggregateArticle {
  count: Int!
}

type AggregateChannels {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregateConnect {
  count: Int!
}

type AggregateCountry {
  count: Int!
}

type AggregateDepartment {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateInstitutions {
  count: Int!
}

type AggregateInterest {
  count: Int!
}

type AggregateLibrary {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

enum Arcticletype {
  External
  Internal
}

"""
A connection to a list of items.
"""
type ArticleConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ArticleEdge]!
  aggregate: AggregateArticle!
}

input ArticleCreateInput {
  slug: String
  isPublished: Boolean
  title: String!
  body: String!
  type: Arcticletype
  link: String
  description: String
  viewCount: Int
  tags: ArticleCreatetagsInput
  category: InterestCreateManyInput
  author: UserCreateOneWithoutArticlesInput!
  likes: UserCreateManyWithoutLikedArticlesInput
  comments: CommentCreateManyWithoutArticleInput
  userFavourited: UserCreateManyWithoutFavouritesInput
}

input ArticleCreateManyWithoutAuthorInput {
  create: [ArticleCreateWithoutAuthorInput!]
  connect: [ArticleWhereUniqueInput!]
}

input ArticleCreateManyWithoutLikesInput {
  create: [ArticleCreateWithoutLikesInput!]
  connect: [ArticleWhereUniqueInput!]
}

input ArticleCreateManyWithoutUserFavouritedInput {
  create: [ArticleCreateWithoutUserFavouritedInput!]
  connect: [ArticleWhereUniqueInput!]
}

input ArticleCreateOneWithoutCommentsInput {
  create: ArticleCreateWithoutCommentsInput
  connect: ArticleWhereUniqueInput
}

input ArticleCreatetagsInput {
  set: [String!]
}

input ArticleCreateWithoutAuthorInput {
  slug: String
  isPublished: Boolean
  title: String!
  body: String!
  type: Arcticletype
  link: String
  description: String
  viewCount: Int
  tags: ArticleCreatetagsInput
  category: InterestCreateManyInput
  likes: UserCreateManyWithoutLikedArticlesInput
  comments: CommentCreateManyWithoutArticleInput
  userFavourited: UserCreateManyWithoutFavouritesInput
}

input ArticleCreateWithoutCommentsInput {
  slug: String
  isPublished: Boolean
  title: String!
  body: String!
  type: Arcticletype
  link: String
  description: String
  viewCount: Int
  tags: ArticleCreatetagsInput
  category: InterestCreateManyInput
  author: UserCreateOneWithoutArticlesInput!
  likes: UserCreateManyWithoutLikedArticlesInput
  userFavourited: UserCreateManyWithoutFavouritesInput
}

input ArticleCreateWithoutLikesInput {
  slug: String
  isPublished: Boolean
  title: String!
  body: String!
  type: Arcticletype
  link: String
  description: String
  viewCount: Int
  tags: ArticleCreatetagsInput
  category: InterestCreateManyInput
  author: UserCreateOneWithoutArticlesInput!
  comments: CommentCreateManyWithoutArticleInput
  userFavourited: UserCreateManyWithoutFavouritesInput
}

input ArticleCreateWithoutUserFavouritedInput {
  slug: String
  isPublished: Boolean
  title: String!
  body: String!
  type: Arcticletype
  link: String
  description: String
  viewCount: Int
  tags: ArticleCreatetagsInput
  category: InterestCreateManyInput
  author: UserCreateOneWithoutArticlesInput!
  likes: UserCreateManyWithoutLikedArticlesInput
  comments: CommentCreateManyWithoutArticleInput
}

"""
An edge in a connection.
"""
type ArticleEdge {
  """
  The item at the end of the edge.
  """
  node: Article!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ArticleOrderByInput {
  id_ASC
  id_DESC
  slug_ASC
  slug_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  body_ASC
  body_DESC
  type_ASC
  type_DESC
  link_ASC
  link_DESC
  description_ASC
  description_DESC
  viewCount_ASC
  viewCount_DESC
}

type ArticlePreviousValues {
  id: ID!
  slug: String
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  body: String!
  tags: [String!]
  type: Arcticletype
  link: String
  description: String
  viewCount: Int
}

type ArticleSubscriptionPayload {
  mutation: MutationType!
  node: Article
  updatedFields: [String!]
  previousValues: ArticlePreviousValues
}

input ArticleSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ArticleSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ArticleSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ArticleWhereInput
}

input ArticleUpdateInput {
  slug: String
  isPublished: Boolean
  title: String
  body: String
  type: Arcticletype
  link: String
  description: String
  viewCount: Int
  tags: ArticleUpdatetagsInput
  category: InterestUpdateManyInput
  author: UserUpdateOneWithoutArticlesInput
  likes: UserUpdateManyWithoutLikedArticlesInput
  comments: CommentUpdateManyWithoutArticleInput
  userFavourited: UserUpdateManyWithoutFavouritesInput
}

input ArticleUpdateManyWithoutAuthorInput {
  create: [ArticleCreateWithoutAuthorInput!]
  connect: [ArticleWhereUniqueInput!]
  disconnect: [ArticleWhereUniqueInput!]
  delete: [ArticleWhereUniqueInput!]
  update: [ArticleUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [ArticleUpsertWithWhereUniqueWithoutAuthorInput!]
}

input ArticleUpdateManyWithoutLikesInput {
  create: [ArticleCreateWithoutLikesInput!]
  connect: [ArticleWhereUniqueInput!]
  disconnect: [ArticleWhereUniqueInput!]
  delete: [ArticleWhereUniqueInput!]
  update: [ArticleUpdateWithWhereUniqueWithoutLikesInput!]
  upsert: [ArticleUpsertWithWhereUniqueWithoutLikesInput!]
}

input ArticleUpdateManyWithoutUserFavouritedInput {
  create: [ArticleCreateWithoutUserFavouritedInput!]
  connect: [ArticleWhereUniqueInput!]
  disconnect: [ArticleWhereUniqueInput!]
  delete: [ArticleWhereUniqueInput!]
  update: [ArticleUpdateWithWhereUniqueWithoutUserFavouritedInput!]
  upsert: [ArticleUpsertWithWhereUniqueWithoutUserFavouritedInput!]
}

input ArticleUpdateOneWithoutCommentsInput {
  create: ArticleCreateWithoutCommentsInput
  connect: ArticleWhereUniqueInput
  delete: Boolean
  update: ArticleUpdateWithoutCommentsDataInput
  upsert: ArticleUpsertWithoutCommentsInput
}

input ArticleUpdatetagsInput {
  set: [String!]
}

input ArticleUpdateWithoutAuthorDataInput {
  slug: String
  isPublished: Boolean
  title: String
  body: String
  type: Arcticletype
  link: String
  description: String
  viewCount: Int
  tags: ArticleUpdatetagsInput
  category: InterestUpdateManyInput
  likes: UserUpdateManyWithoutLikedArticlesInput
  comments: CommentUpdateManyWithoutArticleInput
  userFavourited: UserUpdateManyWithoutFavouritesInput
}

input ArticleUpdateWithoutCommentsDataInput {
  slug: String
  isPublished: Boolean
  title: String
  body: String
  type: Arcticletype
  link: String
  description: String
  viewCount: Int
  tags: ArticleUpdatetagsInput
  category: InterestUpdateManyInput
  author: UserUpdateOneWithoutArticlesInput
  likes: UserUpdateManyWithoutLikedArticlesInput
  userFavourited: UserUpdateManyWithoutFavouritesInput
}

input ArticleUpdateWithoutLikesDataInput {
  slug: String
  isPublished: Boolean
  title: String
  body: String
  type: Arcticletype
  link: String
  description: String
  viewCount: Int
  tags: ArticleUpdatetagsInput
  category: InterestUpdateManyInput
  author: UserUpdateOneWithoutArticlesInput
  comments: CommentUpdateManyWithoutArticleInput
  userFavourited: UserUpdateManyWithoutFavouritesInput
}

input ArticleUpdateWithoutUserFavouritedDataInput {
  slug: String
  isPublished: Boolean
  title: String
  body: String
  type: Arcticletype
  link: String
  description: String
  viewCount: Int
  tags: ArticleUpdatetagsInput
  category: InterestUpdateManyInput
  author: UserUpdateOneWithoutArticlesInput
  likes: UserUpdateManyWithoutLikedArticlesInput
  comments: CommentUpdateManyWithoutArticleInput
}

input ArticleUpdateWithWhereUniqueWithoutAuthorInput {
  where: ArticleWhereUniqueInput!
  data: ArticleUpdateWithoutAuthorDataInput!
}

input ArticleUpdateWithWhereUniqueWithoutLikesInput {
  where: ArticleWhereUniqueInput!
  data: ArticleUpdateWithoutLikesDataInput!
}

input ArticleUpdateWithWhereUniqueWithoutUserFavouritedInput {
  where: ArticleWhereUniqueInput!
  data: ArticleUpdateWithoutUserFavouritedDataInput!
}

input ArticleUpsertWithoutCommentsInput {
  update: ArticleUpdateWithoutCommentsDataInput!
  create: ArticleCreateWithoutCommentsInput!
}

input ArticleUpsertWithWhereUniqueWithoutAuthorInput {
  where: ArticleWhereUniqueInput!
  update: ArticleUpdateWithoutAuthorDataInput!
  create: ArticleCreateWithoutAuthorInput!
}

input ArticleUpsertWithWhereUniqueWithoutLikesInput {
  where: ArticleWhereUniqueInput!
  update: ArticleUpdateWithoutLikesDataInput!
  create: ArticleCreateWithoutLikesInput!
}

input ArticleUpsertWithWhereUniqueWithoutUserFavouritedInput {
  where: ArticleWhereUniqueInput!
  update: ArticleUpdateWithoutUserFavouritedDataInput!
  create: ArticleCreateWithoutUserFavouritedInput!
}

input ArticleWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ArticleWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ArticleWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  slug: String
  """
  All values that are not equal to given value.
  """
  slug_not: String
  """
  All values that are contained in given list.
  """
  slug_in: [String!]
  """
  All values that are not contained in given list.
  """
  slug_not_in: [String!]
  """
  All values less than the given value.
  """
  slug_lt: String
  """
  All values less than or equal the given value.
  """
  slug_lte: String
  """
  All values greater than the given value.
  """
  slug_gt: String
  """
  All values greater than or equal the given value.
  """
  slug_gte: String
  """
  All values containing the given string.
  """
  slug_contains: String
  """
  All values not containing the given string.
  """
  slug_not_contains: String
  """
  All values starting with the given string.
  """
  slug_starts_with: String
  """
  All values not starting with the given string.
  """
  slug_not_starts_with: String
  """
  All values ending with the given string.
  """
  slug_ends_with: String
  """
  All values not ending with the given string.
  """
  slug_not_ends_with: String
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  isPublished: Boolean
  """
  All values that are not equal to given value.
  """
  isPublished_not: Boolean
  title: String
  """
  All values that are not equal to given value.
  """
  title_not: String
  """
  All values that are contained in given list.
  """
  title_in: [String!]
  """
  All values that are not contained in given list.
  """
  title_not_in: [String!]
  """
  All values less than the given value.
  """
  title_lt: String
  """
  All values less than or equal the given value.
  """
  title_lte: String
  """
  All values greater than the given value.
  """
  title_gt: String
  """
  All values greater than or equal the given value.
  """
  title_gte: String
  """
  All values containing the given string.
  """
  title_contains: String
  """
  All values not containing the given string.
  """
  title_not_contains: String
  """
  All values starting with the given string.
  """
  title_starts_with: String
  """
  All values not starting with the given string.
  """
  title_not_starts_with: String
  """
  All values ending with the given string.
  """
  title_ends_with: String
  """
  All values not ending with the given string.
  """
  title_not_ends_with: String
  body: String
  """
  All values that are not equal to given value.
  """
  body_not: String
  """
  All values that are contained in given list.
  """
  body_in: [String!]
  """
  All values that are not contained in given list.
  """
  body_not_in: [String!]
  """
  All values less than the given value.
  """
  body_lt: String
  """
  All values less than or equal the given value.
  """
  body_lte: String
  """
  All values greater than the given value.
  """
  body_gt: String
  """
  All values greater than or equal the given value.
  """
  body_gte: String
  """
  All values containing the given string.
  """
  body_contains: String
  """
  All values not containing the given string.
  """
  body_not_contains: String
  """
  All values starting with the given string.
  """
  body_starts_with: String
  """
  All values not starting with the given string.
  """
  body_not_starts_with: String
  """
  All values ending with the given string.
  """
  body_ends_with: String
  """
  All values not ending with the given string.
  """
  body_not_ends_with: String
  type: Arcticletype
  """
  All values that are not equal to given value.
  """
  type_not: Arcticletype
  """
  All values that are contained in given list.
  """
  type_in: [Arcticletype!]
  """
  All values that are not contained in given list.
  """
  type_not_in: [Arcticletype!]
  link: String
  """
  All values that are not equal to given value.
  """
  link_not: String
  """
  All values that are contained in given list.
  """
  link_in: [String!]
  """
  All values that are not contained in given list.
  """
  link_not_in: [String!]
  """
  All values less than the given value.
  """
  link_lt: String
  """
  All values less than or equal the given value.
  """
  link_lte: String
  """
  All values greater than the given value.
  """
  link_gt: String
  """
  All values greater than or equal the given value.
  """
  link_gte: String
  """
  All values containing the given string.
  """
  link_contains: String
  """
  All values not containing the given string.
  """
  link_not_contains: String
  """
  All values starting with the given string.
  """
  link_starts_with: String
  """
  All values not starting with the given string.
  """
  link_not_starts_with: String
  """
  All values ending with the given string.
  """
  link_ends_with: String
  """
  All values not ending with the given string.
  """
  link_not_ends_with: String
  description: String
  """
  All values that are not equal to given value.
  """
  description_not: String
  """
  All values that are contained in given list.
  """
  description_in: [String!]
  """
  All values that are not contained in given list.
  """
  description_not_in: [String!]
  """
  All values less than the given value.
  """
  description_lt: String
  """
  All values less than or equal the given value.
  """
  description_lte: String
  """
  All values greater than the given value.
  """
  description_gt: String
  """
  All values greater than or equal the given value.
  """
  description_gte: String
  """
  All values containing the given string.
  """
  description_contains: String
  """
  All values not containing the given string.
  """
  description_not_contains: String
  """
  All values starting with the given string.
  """
  description_starts_with: String
  """
  All values not starting with the given string.
  """
  description_not_starts_with: String
  """
  All values ending with the given string.
  """
  description_ends_with: String
  """
  All values not ending with the given string.
  """
  description_not_ends_with: String
  viewCount: Int
  """
  All values that are not equal to given value.
  """
  viewCount_not: Int
  """
  All values that are contained in given list.
  """
  viewCount_in: [Int!]
  """
  All values that are not contained in given list.
  """
  viewCount_not_in: [Int!]
  """
  All values less than the given value.
  """
  viewCount_lt: Int
  """
  All values less than or equal the given value.
  """
  viewCount_lte: Int
  """
  All values greater than the given value.
  """
  viewCount_gt: Int
  """
  All values greater than or equal the given value.
  """
  viewCount_gte: Int
  category_every: InterestWhereInput
  category_some: InterestWhereInput
  category_none: InterestWhereInput
  author: UserWhereInput
  likes_every: UserWhereInput
  likes_some: UserWhereInput
  likes_none: UserWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  userFavourited_every: UserWhereInput
  userFavourited_some: UserWhereInput
  userFavourited_none: UserWhereInput
}

input ArticleWhereUniqueInput {
  id: ID
  slug: String
  link: String
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

"""
A connection to a list of items.
"""
type ChannelsConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ChannelsEdge]!
  aggregate: AggregateChannels!
}

input ChannelsCreateInput {
  title: String!
  avatar: String
  type: ChannelType
  author: UserCreateOneWithoutMyChannelsInput!
  messages: MessageCreateManyWithoutChannelInput
  participants: UserCreateManyWithoutChannelsInput
}

input ChannelsCreateManyWithoutAuthorInput {
  create: [ChannelsCreateWithoutAuthorInput!]
  connect: [ChannelsWhereUniqueInput!]
}

input ChannelsCreateManyWithoutParticipantsInput {
  create: [ChannelsCreateWithoutParticipantsInput!]
  connect: [ChannelsWhereUniqueInput!]
}

input ChannelsCreateOneWithoutMessagesInput {
  create: ChannelsCreateWithoutMessagesInput
  connect: ChannelsWhereUniqueInput
}

input ChannelsCreateWithoutAuthorInput {
  title: String!
  avatar: String
  type: ChannelType
  messages: MessageCreateManyWithoutChannelInput
  participants: UserCreateManyWithoutChannelsInput
}

input ChannelsCreateWithoutMessagesInput {
  title: String!
  avatar: String
  type: ChannelType
  author: UserCreateOneWithoutMyChannelsInput!
  participants: UserCreateManyWithoutChannelsInput
}

input ChannelsCreateWithoutParticipantsInput {
  title: String!
  avatar: String
  type: ChannelType
  author: UserCreateOneWithoutMyChannelsInput!
  messages: MessageCreateManyWithoutChannelInput
}

"""
An edge in a connection.
"""
type ChannelsEdge {
  """
  The item at the end of the edge.
  """
  node: Channels!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ChannelsOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  avatar_ASC
  avatar_DESC
  type_ASC
  type_DESC
}

type ChannelsPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  avatar: String
  type: ChannelType
}

type ChannelsSubscriptionPayload {
  mutation: MutationType!
  node: Channels
  updatedFields: [String!]
  previousValues: ChannelsPreviousValues
}

input ChannelsSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ChannelsSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ChannelsSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ChannelsWhereInput
}

input ChannelsUpdateInput {
  title: String
  avatar: String
  type: ChannelType
  author: UserUpdateOneWithoutMyChannelsInput
  messages: MessageUpdateManyWithoutChannelInput
  participants: UserUpdateManyWithoutChannelsInput
}

input ChannelsUpdateManyWithoutAuthorInput {
  create: [ChannelsCreateWithoutAuthorInput!]
  connect: [ChannelsWhereUniqueInput!]
  disconnect: [ChannelsWhereUniqueInput!]
  delete: [ChannelsWhereUniqueInput!]
  update: [ChannelsUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [ChannelsUpsertWithWhereUniqueWithoutAuthorInput!]
}

input ChannelsUpdateManyWithoutParticipantsInput {
  create: [ChannelsCreateWithoutParticipantsInput!]
  connect: [ChannelsWhereUniqueInput!]
  disconnect: [ChannelsWhereUniqueInput!]
  delete: [ChannelsWhereUniqueInput!]
  update: [ChannelsUpdateWithWhereUniqueWithoutParticipantsInput!]
  upsert: [ChannelsUpsertWithWhereUniqueWithoutParticipantsInput!]
}

input ChannelsUpdateOneWithoutMessagesInput {
  create: ChannelsCreateWithoutMessagesInput
  connect: ChannelsWhereUniqueInput
  delete: Boolean
  update: ChannelsUpdateWithoutMessagesDataInput
  upsert: ChannelsUpsertWithoutMessagesInput
}

input ChannelsUpdateWithoutAuthorDataInput {
  title: String
  avatar: String
  type: ChannelType
  messages: MessageUpdateManyWithoutChannelInput
  participants: UserUpdateManyWithoutChannelsInput
}

input ChannelsUpdateWithoutMessagesDataInput {
  title: String
  avatar: String
  type: ChannelType
  author: UserUpdateOneWithoutMyChannelsInput
  participants: UserUpdateManyWithoutChannelsInput
}

input ChannelsUpdateWithoutParticipantsDataInput {
  title: String
  avatar: String
  type: ChannelType
  author: UserUpdateOneWithoutMyChannelsInput
  messages: MessageUpdateManyWithoutChannelInput
}

input ChannelsUpdateWithWhereUniqueWithoutAuthorInput {
  where: ChannelsWhereUniqueInput!
  data: ChannelsUpdateWithoutAuthorDataInput!
}

input ChannelsUpdateWithWhereUniqueWithoutParticipantsInput {
  where: ChannelsWhereUniqueInput!
  data: ChannelsUpdateWithoutParticipantsDataInput!
}

input ChannelsUpsertWithoutMessagesInput {
  update: ChannelsUpdateWithoutMessagesDataInput!
  create: ChannelsCreateWithoutMessagesInput!
}

input ChannelsUpsertWithWhereUniqueWithoutAuthorInput {
  where: ChannelsWhereUniqueInput!
  update: ChannelsUpdateWithoutAuthorDataInput!
  create: ChannelsCreateWithoutAuthorInput!
}

input ChannelsUpsertWithWhereUniqueWithoutParticipantsInput {
  where: ChannelsWhereUniqueInput!
  update: ChannelsUpdateWithoutParticipantsDataInput!
  create: ChannelsCreateWithoutParticipantsInput!
}

input ChannelsWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ChannelsWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ChannelsWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  title: String
  """
  All values that are not equal to given value.
  """
  title_not: String
  """
  All values that are contained in given list.
  """
  title_in: [String!]
  """
  All values that are not contained in given list.
  """
  title_not_in: [String!]
  """
  All values less than the given value.
  """
  title_lt: String
  """
  All values less than or equal the given value.
  """
  title_lte: String
  """
  All values greater than the given value.
  """
  title_gt: String
  """
  All values greater than or equal the given value.
  """
  title_gte: String
  """
  All values containing the given string.
  """
  title_contains: String
  """
  All values not containing the given string.
  """
  title_not_contains: String
  """
  All values starting with the given string.
  """
  title_starts_with: String
  """
  All values not starting with the given string.
  """
  title_not_starts_with: String
  """
  All values ending with the given string.
  """
  title_ends_with: String
  """
  All values not ending with the given string.
  """
  title_not_ends_with: String
  avatar: String
  """
  All values that are not equal to given value.
  """
  avatar_not: String
  """
  All values that are contained in given list.
  """
  avatar_in: [String!]
  """
  All values that are not contained in given list.
  """
  avatar_not_in: [String!]
  """
  All values less than the given value.
  """
  avatar_lt: String
  """
  All values less than or equal the given value.
  """
  avatar_lte: String
  """
  All values greater than the given value.
  """
  avatar_gt: String
  """
  All values greater than or equal the given value.
  """
  avatar_gte: String
  """
  All values containing the given string.
  """
  avatar_contains: String
  """
  All values not containing the given string.
  """
  avatar_not_contains: String
  """
  All values starting with the given string.
  """
  avatar_starts_with: String
  """
  All values not starting with the given string.
  """
  avatar_not_starts_with: String
  """
  All values ending with the given string.
  """
  avatar_ends_with: String
  """
  All values not ending with the given string.
  """
  avatar_not_ends_with: String
  type: ChannelType
  """
  All values that are not equal to given value.
  """
  type_not: ChannelType
  """
  All values that are contained in given list.
  """
  type_in: [ChannelType!]
  """
  All values that are not contained in given list.
  """
  type_not_in: [ChannelType!]
  author: UserWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  participants_every: UserWhereInput
  participants_some: UserWhereInput
  participants_none: UserWhereInput
}

input ChannelsWhereUniqueInput {
  id: ID
}

enum ChannelType {
  Group
  Direct
  Channel
}

"""
A connection to a list of items.
"""
type CommentConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  slug: String
  body: String!
  replies: CommentCreateManyInput
  article: ArticleCreateOneWithoutCommentsInput!
  author: UserCreateOneWithoutCommentsInput!
}

input CommentCreateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateManyWithoutArticleInput {
  create: [CommentCreateWithoutArticleInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateManyWithoutAuthorInput {
  create: [CommentCreateWithoutAuthorInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutArticleInput {
  slug: String
  body: String!
  replies: CommentCreateManyInput
  author: UserCreateOneWithoutCommentsInput!
}

input CommentCreateWithoutAuthorInput {
  slug: String
  body: String!
  replies: CommentCreateManyInput
  article: ArticleCreateOneWithoutCommentsInput!
}

"""
An edge in a connection.
"""
type CommentEdge {
  """
  The item at the end of the edge.
  """
  node: Comment!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  slug_ASC
  slug_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  body_ASC
  body_DESC
}

type CommentPreviousValues {
  id: ID!
  slug: String
  createdAt: DateTime!
  updatedAt: DateTime!
  body: String!
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CommentSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CommentSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
}

input CommentUpdateDataInput {
  slug: String
  body: String
  replies: CommentUpdateManyInput
  article: ArticleUpdateOneWithoutCommentsInput
  author: UserUpdateOneWithoutCommentsInput
}

input CommentUpdateInput {
  slug: String
  body: String
  replies: CommentUpdateManyInput
  article: ArticleUpdateOneWithoutCommentsInput
  author: UserUpdateOneWithoutCommentsInput
}

input CommentUpdateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  delete: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueNestedInput!]
  upsert: [CommentUpsertWithWhereUniqueNestedInput!]
}

input CommentUpdateManyWithoutArticleInput {
  create: [CommentCreateWithoutArticleInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  delete: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutArticleInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutArticleInput!]
}

input CommentUpdateManyWithoutAuthorInput {
  create: [CommentCreateWithoutAuthorInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  delete: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutAuthorInput!]
}

input CommentUpdateWithoutArticleDataInput {
  slug: String
  body: String
  replies: CommentUpdateManyInput
  author: UserUpdateOneWithoutCommentsInput
}

input CommentUpdateWithoutAuthorDataInput {
  slug: String
  body: String
  replies: CommentUpdateManyInput
  article: ArticleUpdateOneWithoutCommentsInput
}

input CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateDataInput!
}

input CommentUpdateWithWhereUniqueWithoutArticleInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutArticleDataInput!
}

input CommentUpdateWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutAuthorDataInput!
}

input CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateDataInput!
  create: CommentCreateInput!
}

input CommentUpsertWithWhereUniqueWithoutArticleInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutArticleDataInput!
  create: CommentCreateWithoutArticleInput!
}

input CommentUpsertWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutAuthorDataInput!
  create: CommentCreateWithoutAuthorInput!
}

input CommentWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CommentWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CommentWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  slug: String
  """
  All values that are not equal to given value.
  """
  slug_not: String
  """
  All values that are contained in given list.
  """
  slug_in: [String!]
  """
  All values that are not contained in given list.
  """
  slug_not_in: [String!]
  """
  All values less than the given value.
  """
  slug_lt: String
  """
  All values less than or equal the given value.
  """
  slug_lte: String
  """
  All values greater than the given value.
  """
  slug_gt: String
  """
  All values greater than or equal the given value.
  """
  slug_gte: String
  """
  All values containing the given string.
  """
  slug_contains: String
  """
  All values not containing the given string.
  """
  slug_not_contains: String
  """
  All values starting with the given string.
  """
  slug_starts_with: String
  """
  All values not starting with the given string.
  """
  slug_not_starts_with: String
  """
  All values ending with the given string.
  """
  slug_ends_with: String
  """
  All values not ending with the given string.
  """
  slug_not_ends_with: String
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  body: String
  """
  All values that are not equal to given value.
  """
  body_not: String
  """
  All values that are contained in given list.
  """
  body_in: [String!]
  """
  All values that are not contained in given list.
  """
  body_not_in: [String!]
  """
  All values less than the given value.
  """
  body_lt: String
  """
  All values less than or equal the given value.
  """
  body_lte: String
  """
  All values greater than the given value.
  """
  body_gt: String
  """
  All values greater than or equal the given value.
  """
  body_gte: String
  """
  All values containing the given string.
  """
  body_contains: String
  """
  All values not containing the given string.
  """
  body_not_contains: String
  """
  All values starting with the given string.
  """
  body_starts_with: String
  """
  All values not starting with the given string.
  """
  body_not_starts_with: String
  """
  All values ending with the given string.
  """
  body_ends_with: String
  """
  All values not ending with the given string.
  """
  body_not_ends_with: String
  replies_every: CommentWhereInput
  replies_some: CommentWhereInput
  replies_none: CommentWhereInput
  article: ArticleWhereInput
  author: UserWhereInput
}

input CommentWhereUniqueInput {
  id: ID
  slug: String
}

"""
A connection to a list of items.
"""
type ConnectConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ConnectEdge]!
  aggregate: AggregateConnect!
}

input ConnectCreateInput {
  status: Int
  to: UserCreateOneWithoutConnectToInput!
  from: UserCreateOneWithoutConnectFromInput!
}

input ConnectCreateManyWithoutFromInput {
  create: [ConnectCreateWithoutFromInput!]
  connect: [ConnectWhereUniqueInput!]
}

input ConnectCreateManyWithoutToInput {
  create: [ConnectCreateWithoutToInput!]
  connect: [ConnectWhereUniqueInput!]
}

input ConnectCreateWithoutFromInput {
  status: Int
  to: UserCreateOneWithoutConnectToInput!
}

input ConnectCreateWithoutToInput {
  status: Int
  from: UserCreateOneWithoutConnectFromInput!
}

"""
An edge in a connection.
"""
type ConnectEdge {
  """
  The item at the end of the edge.
  """
  node: Connect!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ConnectOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  status_ASC
  status_DESC
}

type ConnectPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: Int!
}

type ConnectSubscriptionPayload {
  mutation: MutationType!
  node: Connect
  updatedFields: [String!]
  previousValues: ConnectPreviousValues
}

input ConnectSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ConnectSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ConnectSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ConnectWhereInput
}

input ConnectUpdateInput {
  status: Int
  to: UserUpdateOneWithoutConnectToInput
  from: UserUpdateOneWithoutConnectFromInput
}

input ConnectUpdateManyWithoutFromInput {
  create: [ConnectCreateWithoutFromInput!]
  connect: [ConnectWhereUniqueInput!]
  disconnect: [ConnectWhereUniqueInput!]
  delete: [ConnectWhereUniqueInput!]
  update: [ConnectUpdateWithWhereUniqueWithoutFromInput!]
  upsert: [ConnectUpsertWithWhereUniqueWithoutFromInput!]
}

input ConnectUpdateManyWithoutToInput {
  create: [ConnectCreateWithoutToInput!]
  connect: [ConnectWhereUniqueInput!]
  disconnect: [ConnectWhereUniqueInput!]
  delete: [ConnectWhereUniqueInput!]
  update: [ConnectUpdateWithWhereUniqueWithoutToInput!]
  upsert: [ConnectUpsertWithWhereUniqueWithoutToInput!]
}

input ConnectUpdateWithoutFromDataInput {
  status: Int
  to: UserUpdateOneWithoutConnectToInput
}

input ConnectUpdateWithoutToDataInput {
  status: Int
  from: UserUpdateOneWithoutConnectFromInput
}

input ConnectUpdateWithWhereUniqueWithoutFromInput {
  where: ConnectWhereUniqueInput!
  data: ConnectUpdateWithoutFromDataInput!
}

input ConnectUpdateWithWhereUniqueWithoutToInput {
  where: ConnectWhereUniqueInput!
  data: ConnectUpdateWithoutToDataInput!
}

input ConnectUpsertWithWhereUniqueWithoutFromInput {
  where: ConnectWhereUniqueInput!
  update: ConnectUpdateWithoutFromDataInput!
  create: ConnectCreateWithoutFromInput!
}

input ConnectUpsertWithWhereUniqueWithoutToInput {
  where: ConnectWhereUniqueInput!
  update: ConnectUpdateWithoutToDataInput!
  create: ConnectCreateWithoutToInput!
}

input ConnectWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ConnectWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ConnectWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  status: Int
  """
  All values that are not equal to given value.
  """
  status_not: Int
  """
  All values that are contained in given list.
  """
  status_in: [Int!]
  """
  All values that are not contained in given list.
  """
  status_not_in: [Int!]
  """
  All values less than the given value.
  """
  status_lt: Int
  """
  All values less than or equal the given value.
  """
  status_lte: Int
  """
  All values greater than the given value.
  """
  status_gt: Int
  """
  All values greater than or equal the given value.
  """
  status_gte: Int
  to: UserWhereInput
  from: UserWhereInput
}

input ConnectWhereUniqueInput {
  id: ID
}

"""
A connection to a list of items.
"""
type CountryConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CountryEdge]!
  aggregate: AggregateCountry!
}

input CountryCreateInput {
  shortName: String!
  name: String!
  institutions: InstitutionsCreateManyWithoutCountryInput
  users: UserCreateManyWithoutCountryInput
}

input CountryCreateOneWithoutInstitutionsInput {
  create: CountryCreateWithoutInstitutionsInput
  connect: CountryWhereUniqueInput
}

input CountryCreateOneWithoutUsersInput {
  create: CountryCreateWithoutUsersInput
  connect: CountryWhereUniqueInput
}

input CountryCreateWithoutInstitutionsInput {
  shortName: String!
  name: String!
  users: UserCreateManyWithoutCountryInput
}

input CountryCreateWithoutUsersInput {
  shortName: String!
  name: String!
  institutions: InstitutionsCreateManyWithoutCountryInput
}

"""
An edge in a connection.
"""
type CountryEdge {
  """
  The item at the end of the edge.
  """
  node: Country!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CountryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  shortName_ASC
  shortName_DESC
  name_ASC
  name_DESC
}

type CountryPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  shortName: String!
  name: String!
}

type CountrySubscriptionPayload {
  mutation: MutationType!
  node: Country
  updatedFields: [String!]
  previousValues: CountryPreviousValues
}

input CountrySubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CountrySubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CountrySubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CountryWhereInput
}

input CountryUpdateInput {
  shortName: String
  name: String
  institutions: InstitutionsUpdateManyWithoutCountryInput
  users: UserUpdateManyWithoutCountryInput
}

input CountryUpdateOneWithoutInstitutionsInput {
  create: CountryCreateWithoutInstitutionsInput
  connect: CountryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CountryUpdateWithoutInstitutionsDataInput
  upsert: CountryUpsertWithoutInstitutionsInput
}

input CountryUpdateOneWithoutUsersInput {
  create: CountryCreateWithoutUsersInput
  connect: CountryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CountryUpdateWithoutUsersDataInput
  upsert: CountryUpsertWithoutUsersInput
}

input CountryUpdateWithoutInstitutionsDataInput {
  shortName: String
  name: String
  users: UserUpdateManyWithoutCountryInput
}

input CountryUpdateWithoutUsersDataInput {
  shortName: String
  name: String
  institutions: InstitutionsUpdateManyWithoutCountryInput
}

input CountryUpsertWithoutInstitutionsInput {
  update: CountryUpdateWithoutInstitutionsDataInput!
  create: CountryCreateWithoutInstitutionsInput!
}

input CountryUpsertWithoutUsersInput {
  update: CountryUpdateWithoutUsersDataInput!
  create: CountryCreateWithoutUsersInput!
}

input CountryWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CountryWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CountryWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  shortName: String
  """
  All values that are not equal to given value.
  """
  shortName_not: String
  """
  All values that are contained in given list.
  """
  shortName_in: [String!]
  """
  All values that are not contained in given list.
  """
  shortName_not_in: [String!]
  """
  All values less than the given value.
  """
  shortName_lt: String
  """
  All values less than or equal the given value.
  """
  shortName_lte: String
  """
  All values greater than the given value.
  """
  shortName_gt: String
  """
  All values greater than or equal the given value.
  """
  shortName_gte: String
  """
  All values containing the given string.
  """
  shortName_contains: String
  """
  All values not containing the given string.
  """
  shortName_not_contains: String
  """
  All values starting with the given string.
  """
  shortName_starts_with: String
  """
  All values not starting with the given string.
  """
  shortName_not_starts_with: String
  """
  All values ending with the given string.
  """
  shortName_ends_with: String
  """
  All values not ending with the given string.
  """
  shortName_not_ends_with: String
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  institutions_every: InstitutionsWhereInput
  institutions_some: InstitutionsWhereInput
  institutions_none: InstitutionsWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
}

input CountryWhereUniqueInput {
  id: ID
  shortName: String
  name: String
}

scalar DateTime

"""
A connection to a list of items.
"""
type DepartmentConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [DepartmentEdge]!
  aggregate: AggregateDepartment!
}

input DepartmentCreateInput {
  name: String!
  institution: InstitutionsCreateOneWithoutDepartmentsInput
  users: UserCreateManyWithoutDepartmentInput
}

input DepartmentCreateManyWithoutInstitutionInput {
  create: [DepartmentCreateWithoutInstitutionInput!]
  connect: [DepartmentWhereUniqueInput!]
}

input DepartmentCreateOneWithoutUsersInput {
  create: DepartmentCreateWithoutUsersInput
  connect: DepartmentWhereUniqueInput
}

input DepartmentCreateWithoutInstitutionInput {
  name: String!
  users: UserCreateManyWithoutDepartmentInput
}

input DepartmentCreateWithoutUsersInput {
  name: String!
  institution: InstitutionsCreateOneWithoutDepartmentsInput
}

"""
An edge in a connection.
"""
type DepartmentEdge {
  """
  The item at the end of the edge.
  """
  node: Department!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum DepartmentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type DepartmentPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

type DepartmentSubscriptionPayload {
  mutation: MutationType!
  node: Department
  updatedFields: [String!]
  previousValues: DepartmentPreviousValues
}

input DepartmentSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [DepartmentSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [DepartmentSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DepartmentWhereInput
}

input DepartmentUpdateInput {
  name: String
  institution: InstitutionsUpdateOneWithoutDepartmentsInput
  users: UserUpdateManyWithoutDepartmentInput
}

input DepartmentUpdateManyWithoutInstitutionInput {
  create: [DepartmentCreateWithoutInstitutionInput!]
  connect: [DepartmentWhereUniqueInput!]
  disconnect: [DepartmentWhereUniqueInput!]
  delete: [DepartmentWhereUniqueInput!]
  update: [DepartmentUpdateWithWhereUniqueWithoutInstitutionInput!]
  upsert: [DepartmentUpsertWithWhereUniqueWithoutInstitutionInput!]
}

input DepartmentUpdateOneWithoutUsersInput {
  create: DepartmentCreateWithoutUsersInput
  connect: DepartmentWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: DepartmentUpdateWithoutUsersDataInput
  upsert: DepartmentUpsertWithoutUsersInput
}

input DepartmentUpdateWithoutInstitutionDataInput {
  name: String
  users: UserUpdateManyWithoutDepartmentInput
}

input DepartmentUpdateWithoutUsersDataInput {
  name: String
  institution: InstitutionsUpdateOneWithoutDepartmentsInput
}

input DepartmentUpdateWithWhereUniqueWithoutInstitutionInput {
  where: DepartmentWhereUniqueInput!
  data: DepartmentUpdateWithoutInstitutionDataInput!
}

input DepartmentUpsertWithoutUsersInput {
  update: DepartmentUpdateWithoutUsersDataInput!
  create: DepartmentCreateWithoutUsersInput!
}

input DepartmentUpsertWithWhereUniqueWithoutInstitutionInput {
  where: DepartmentWhereUniqueInput!
  update: DepartmentUpdateWithoutInstitutionDataInput!
  create: DepartmentCreateWithoutInstitutionInput!
}

input DepartmentWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [DepartmentWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [DepartmentWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  institution: InstitutionsWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
}

input DepartmentWhereUniqueInput {
  id: ID
}

"""
A connection to a list of items.
"""
type FileConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  name: String!
  size: Int!
  secret: String!
  contentType: String!
  url: String!
}

input FileCreateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
}

"""
An edge in a connection.
"""
type FileEdge {
  """
  The item at the end of the edge.
  """
  node: File!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  size_ASC
  size_DESC
  secret_ASC
  secret_DESC
  contentType_ASC
  contentType_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  url_ASC
  url_DESC
}

type FilePreviousValues {
  id: ID!
  name: String!
  size: Int!
  secret: String!
  contentType: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  url: String!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [FileSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [FileSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FileWhereInput
}

input FileUpdateDataInput {
  name: String
  size: Int
  secret: String
  contentType: String
  url: String
}

input FileUpdateInput {
  name: String
  size: Int
  secret: String
  contentType: String
  url: String
}

input FileUpdateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [FileWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [FileWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  size: Int
  """
  All values that are not equal to given value.
  """
  size_not: Int
  """
  All values that are contained in given list.
  """
  size_in: [Int!]
  """
  All values that are not contained in given list.
  """
  size_not_in: [Int!]
  """
  All values less than the given value.
  """
  size_lt: Int
  """
  All values less than or equal the given value.
  """
  size_lte: Int
  """
  All values greater than the given value.
  """
  size_gt: Int
  """
  All values greater than or equal the given value.
  """
  size_gte: Int
  secret: String
  """
  All values that are not equal to given value.
  """
  secret_not: String
  """
  All values that are contained in given list.
  """
  secret_in: [String!]
  """
  All values that are not contained in given list.
  """
  secret_not_in: [String!]
  """
  All values less than the given value.
  """
  secret_lt: String
  """
  All values less than or equal the given value.
  """
  secret_lte: String
  """
  All values greater than the given value.
  """
  secret_gt: String
  """
  All values greater than or equal the given value.
  """
  secret_gte: String
  """
  All values containing the given string.
  """
  secret_contains: String
  """
  All values not containing the given string.
  """
  secret_not_contains: String
  """
  All values starting with the given string.
  """
  secret_starts_with: String
  """
  All values not starting with the given string.
  """
  secret_not_starts_with: String
  """
  All values ending with the given string.
  """
  secret_ends_with: String
  """
  All values not ending with the given string.
  """
  secret_not_ends_with: String
  contentType: String
  """
  All values that are not equal to given value.
  """
  contentType_not: String
  """
  All values that are contained in given list.
  """
  contentType_in: [String!]
  """
  All values that are not contained in given list.
  """
  contentType_not_in: [String!]
  """
  All values less than the given value.
  """
  contentType_lt: String
  """
  All values less than or equal the given value.
  """
  contentType_lte: String
  """
  All values greater than the given value.
  """
  contentType_gt: String
  """
  All values greater than or equal the given value.
  """
  contentType_gte: String
  """
  All values containing the given string.
  """
  contentType_contains: String
  """
  All values not containing the given string.
  """
  contentType_not_contains: String
  """
  All values starting with the given string.
  """
  contentType_starts_with: String
  """
  All values not starting with the given string.
  """
  contentType_not_starts_with: String
  """
  All values ending with the given string.
  """
  contentType_ends_with: String
  """
  All values not ending with the given string.
  """
  contentType_not_ends_with: String
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  url: String
  """
  All values that are not equal to given value.
  """
  url_not: String
  """
  All values that are contained in given list.
  """
  url_in: [String!]
  """
  All values that are not contained in given list.
  """
  url_not_in: [String!]
  """
  All values less than the given value.
  """
  url_lt: String
  """
  All values less than or equal the given value.
  """
  url_lte: String
  """
  All values greater than the given value.
  """
  url_gt: String
  """
  All values greater than or equal the given value.
  """
  url_gte: String
  """
  All values containing the given string.
  """
  url_contains: String
  """
  All values not containing the given string.
  """
  url_not_contains: String
  """
  All values starting with the given string.
  """
  url_starts_with: String
  """
  All values not starting with the given string.
  """
  url_not_starts_with: String
  """
  All values ending with the given string.
  """
  url_ends_with: String
  """
  All values not ending with the given string.
  """
  url_not_ends_with: String
}

input FileWhereUniqueInput {
  id: ID
  secret: String
  url: String
}

"""
A connection to a list of items.
"""
type InstitutionsConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [InstitutionsEdge]!
  aggregate: AggregateInstitutions!
}

input InstitutionsCreateInput {
  title: String!
  type: InstitutionType!
  country: CountryCreateOneWithoutInstitutionsInput
  users: UserCreateManyWithoutInstitutionInput
  departments: DepartmentCreateManyWithoutInstitutionInput
}

input InstitutionsCreateManyWithoutCountryInput {
  create: [InstitutionsCreateWithoutCountryInput!]
  connect: [InstitutionsWhereUniqueInput!]
}

input InstitutionsCreateOneWithoutDepartmentsInput {
  create: InstitutionsCreateWithoutDepartmentsInput
  connect: InstitutionsWhereUniqueInput
}

input InstitutionsCreateOneWithoutUsersInput {
  create: InstitutionsCreateWithoutUsersInput
  connect: InstitutionsWhereUniqueInput
}

input InstitutionsCreateWithoutCountryInput {
  title: String!
  type: InstitutionType!
  users: UserCreateManyWithoutInstitutionInput
  departments: DepartmentCreateManyWithoutInstitutionInput
}

input InstitutionsCreateWithoutDepartmentsInput {
  title: String!
  type: InstitutionType!
  country: CountryCreateOneWithoutInstitutionsInput
  users: UserCreateManyWithoutInstitutionInput
}

input InstitutionsCreateWithoutUsersInput {
  title: String!
  type: InstitutionType!
  country: CountryCreateOneWithoutInstitutionsInput
  departments: DepartmentCreateManyWithoutInstitutionInput
}

"""
An edge in a connection.
"""
type InstitutionsEdge {
  """
  The item at the end of the edge.
  """
  node: Institutions!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum InstitutionsOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  type_ASC
  type_DESC
}

type InstitutionsPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  type: InstitutionType!
}

type InstitutionsSubscriptionPayload {
  mutation: MutationType!
  node: Institutions
  updatedFields: [String!]
  previousValues: InstitutionsPreviousValues
}

input InstitutionsSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [InstitutionsSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [InstitutionsSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: InstitutionsWhereInput
}

input InstitutionsUpdateInput {
  title: String
  type: InstitutionType
  country: CountryUpdateOneWithoutInstitutionsInput
  users: UserUpdateManyWithoutInstitutionInput
  departments: DepartmentUpdateManyWithoutInstitutionInput
}

input InstitutionsUpdateManyWithoutCountryInput {
  create: [InstitutionsCreateWithoutCountryInput!]
  connect: [InstitutionsWhereUniqueInput!]
  disconnect: [InstitutionsWhereUniqueInput!]
  delete: [InstitutionsWhereUniqueInput!]
  update: [InstitutionsUpdateWithWhereUniqueWithoutCountryInput!]
  upsert: [InstitutionsUpsertWithWhereUniqueWithoutCountryInput!]
}

input InstitutionsUpdateOneWithoutDepartmentsInput {
  create: InstitutionsCreateWithoutDepartmentsInput
  connect: InstitutionsWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: InstitutionsUpdateWithoutDepartmentsDataInput
  upsert: InstitutionsUpsertWithoutDepartmentsInput
}

input InstitutionsUpdateOneWithoutUsersInput {
  create: InstitutionsCreateWithoutUsersInput
  connect: InstitutionsWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: InstitutionsUpdateWithoutUsersDataInput
  upsert: InstitutionsUpsertWithoutUsersInput
}

input InstitutionsUpdateWithoutCountryDataInput {
  title: String
  type: InstitutionType
  users: UserUpdateManyWithoutInstitutionInput
  departments: DepartmentUpdateManyWithoutInstitutionInput
}

input InstitutionsUpdateWithoutDepartmentsDataInput {
  title: String
  type: InstitutionType
  country: CountryUpdateOneWithoutInstitutionsInput
  users: UserUpdateManyWithoutInstitutionInput
}

input InstitutionsUpdateWithoutUsersDataInput {
  title: String
  type: InstitutionType
  country: CountryUpdateOneWithoutInstitutionsInput
  departments: DepartmentUpdateManyWithoutInstitutionInput
}

input InstitutionsUpdateWithWhereUniqueWithoutCountryInput {
  where: InstitutionsWhereUniqueInput!
  data: InstitutionsUpdateWithoutCountryDataInput!
}

input InstitutionsUpsertWithoutDepartmentsInput {
  update: InstitutionsUpdateWithoutDepartmentsDataInput!
  create: InstitutionsCreateWithoutDepartmentsInput!
}

input InstitutionsUpsertWithoutUsersInput {
  update: InstitutionsUpdateWithoutUsersDataInput!
  create: InstitutionsCreateWithoutUsersInput!
}

input InstitutionsUpsertWithWhereUniqueWithoutCountryInput {
  where: InstitutionsWhereUniqueInput!
  update: InstitutionsUpdateWithoutCountryDataInput!
  create: InstitutionsCreateWithoutCountryInput!
}

input InstitutionsWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [InstitutionsWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [InstitutionsWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  title: String
  """
  All values that are not equal to given value.
  """
  title_not: String
  """
  All values that are contained in given list.
  """
  title_in: [String!]
  """
  All values that are not contained in given list.
  """
  title_not_in: [String!]
  """
  All values less than the given value.
  """
  title_lt: String
  """
  All values less than or equal the given value.
  """
  title_lte: String
  """
  All values greater than the given value.
  """
  title_gt: String
  """
  All values greater than or equal the given value.
  """
  title_gte: String
  """
  All values containing the given string.
  """
  title_contains: String
  """
  All values not containing the given string.
  """
  title_not_contains: String
  """
  All values starting with the given string.
  """
  title_starts_with: String
  """
  All values not starting with the given string.
  """
  title_not_starts_with: String
  """
  All values ending with the given string.
  """
  title_ends_with: String
  """
  All values not ending with the given string.
  """
  title_not_ends_with: String
  type: InstitutionType
  """
  All values that are not equal to given value.
  """
  type_not: InstitutionType
  """
  All values that are contained in given list.
  """
  type_in: [InstitutionType!]
  """
  All values that are not contained in given list.
  """
  type_not_in: [InstitutionType!]
  country: CountryWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  departments_every: DepartmentWhereInput
  departments_some: DepartmentWhereInput
  departments_none: DepartmentWhereInput
}

input InstitutionsWhereUniqueInput {
  id: ID
}

enum InstitutionType {
  University
  College
}

"""
A connection to a list of items.
"""
type InterestConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [InterestEdge]!
  aggregate: AggregateInterest!
}

input InterestCreateInput {
  name: String!
  avatar: String!
  users: UserCreateManyWithoutInterestInput
}

input InterestCreateManyInput {
  create: [InterestCreateInput!]
  connect: [InterestWhereUniqueInput!]
}

input InterestCreateManyWithoutUsersInput {
  create: [InterestCreateWithoutUsersInput!]
  connect: [InterestWhereUniqueInput!]
}

input InterestCreateWithoutUsersInput {
  name: String!
  avatar: String!
}

"""
An edge in a connection.
"""
type InterestEdge {
  """
  The item at the end of the edge.
  """
  node: Interest!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum InterestOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  avatar_ASC
  avatar_DESC
}

type InterestPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  avatar: String!
}

type InterestSubscriptionPayload {
  mutation: MutationType!
  node: Interest
  updatedFields: [String!]
  previousValues: InterestPreviousValues
}

input InterestSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [InterestSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [InterestSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: InterestWhereInput
}

input InterestUpdateDataInput {
  name: String
  avatar: String
  users: UserUpdateManyWithoutInterestInput
}

input InterestUpdateInput {
  name: String
  avatar: String
  users: UserUpdateManyWithoutInterestInput
}

input InterestUpdateManyInput {
  create: [InterestCreateInput!]
  connect: [InterestWhereUniqueInput!]
  disconnect: [InterestWhereUniqueInput!]
  delete: [InterestWhereUniqueInput!]
  update: [InterestUpdateWithWhereUniqueNestedInput!]
  upsert: [InterestUpsertWithWhereUniqueNestedInput!]
}

input InterestUpdateManyWithoutUsersInput {
  create: [InterestCreateWithoutUsersInput!]
  connect: [InterestWhereUniqueInput!]
  disconnect: [InterestWhereUniqueInput!]
  delete: [InterestWhereUniqueInput!]
  update: [InterestUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [InterestUpsertWithWhereUniqueWithoutUsersInput!]
}

input InterestUpdateWithoutUsersDataInput {
  name: String
  avatar: String
}

input InterestUpdateWithWhereUniqueNestedInput {
  where: InterestWhereUniqueInput!
  data: InterestUpdateDataInput!
}

input InterestUpdateWithWhereUniqueWithoutUsersInput {
  where: InterestWhereUniqueInput!
  data: InterestUpdateWithoutUsersDataInput!
}

input InterestUpsertWithWhereUniqueNestedInput {
  where: InterestWhereUniqueInput!
  update: InterestUpdateDataInput!
  create: InterestCreateInput!
}

input InterestUpsertWithWhereUniqueWithoutUsersInput {
  where: InterestWhereUniqueInput!
  update: InterestUpdateWithoutUsersDataInput!
  create: InterestCreateWithoutUsersInput!
}

input InterestWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [InterestWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [InterestWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  avatar: String
  """
  All values that are not equal to given value.
  """
  avatar_not: String
  """
  All values that are contained in given list.
  """
  avatar_in: [String!]
  """
  All values that are not contained in given list.
  """
  avatar_not_in: [String!]
  """
  All values less than the given value.
  """
  avatar_lt: String
  """
  All values less than or equal the given value.
  """
  avatar_lte: String
  """
  All values greater than the given value.
  """
  avatar_gt: String
  """
  All values greater than or equal the given value.
  """
  avatar_gte: String
  """
  All values containing the given string.
  """
  avatar_contains: String
  """
  All values not containing the given string.
  """
  avatar_not_contains: String
  """
  All values starting with the given string.
  """
  avatar_starts_with: String
  """
  All values not starting with the given string.
  """
  avatar_not_starts_with: String
  """
  All values ending with the given string.
  """
  avatar_ends_with: String
  """
  All values not ending with the given string.
  """
  avatar_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
}

input InterestWhereUniqueInput {
  id: ID
  name: String
}

"""
A connection to a list of items.
"""
type LibraryConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [LibraryEdge]!
  aggregate: AggregateLibrary!
}

input LibraryCreateInput {
  name: String!
  description: String
  location: LocationCreateOneInput!
}

"""
An edge in a connection.
"""
type LibraryEdge {
  """
  The item at the end of the edge.
  """
  node: Library!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum LibraryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
}

type LibraryPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
}

type LibrarySubscriptionPayload {
  mutation: MutationType!
  node: Library
  updatedFields: [String!]
  previousValues: LibraryPreviousValues
}

input LibrarySubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LibrarySubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LibrarySubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LibraryWhereInput
}

input LibraryUpdateInput {
  name: String
  description: String
  location: LocationUpdateOneInput
}

input LibraryWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LibraryWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LibraryWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  description: String
  """
  All values that are not equal to given value.
  """
  description_not: String
  """
  All values that are contained in given list.
  """
  description_in: [String!]
  """
  All values that are not contained in given list.
  """
  description_not_in: [String!]
  """
  All values less than the given value.
  """
  description_lt: String
  """
  All values less than or equal the given value.
  """
  description_lte: String
  """
  All values greater than the given value.
  """
  description_gt: String
  """
  All values greater than or equal the given value.
  """
  description_gte: String
  """
  All values containing the given string.
  """
  description_contains: String
  """
  All values not containing the given string.
  """
  description_not_contains: String
  """
  All values starting with the given string.
  """
  description_starts_with: String
  """
  All values not starting with the given string.
  """
  description_not_starts_with: String
  """
  All values ending with the given string.
  """
  description_ends_with: String
  """
  All values not ending with the given string.
  """
  description_not_ends_with: String
  location: LocationWhereInput
}

input LibraryWhereUniqueInput {
  id: ID
}

"""
A connection to a list of items.
"""
type LocationConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  longitude: Float!
  latitude: Float!
  type: String!
}

input LocationCreateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
}

"""
An edge in a connection.
"""
type LocationEdge {
  """
  The item at the end of the edge.
  """
  node: Location!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  longitude_ASC
  longitude_DESC
  latitude_ASC
  latitude_DESC
  type_ASC
  type_DESC
}

type LocationPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  longitude: Float!
  latitude: Float!
  type: String!
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LocationSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LocationSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
}

input LocationUpdateDataInput {
  longitude: Float
  latitude: Float
  type: String
}

input LocationUpdateInput {
  longitude: Float
  latitude: Float
  type: String
}

input LocationUpdateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
  delete: Boolean
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LocationWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LocationWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  longitude: Float
  """
  All values that are not equal to given value.
  """
  longitude_not: Float
  """
  All values that are contained in given list.
  """
  longitude_in: [Float!]
  """
  All values that are not contained in given list.
  """
  longitude_not_in: [Float!]
  """
  All values less than the given value.
  """
  longitude_lt: Float
  """
  All values less than or equal the given value.
  """
  longitude_lte: Float
  """
  All values greater than the given value.
  """
  longitude_gt: Float
  """
  All values greater than or equal the given value.
  """
  longitude_gte: Float
  latitude: Float
  """
  All values that are not equal to given value.
  """
  latitude_not: Float
  """
  All values that are contained in given list.
  """
  latitude_in: [Float!]
  """
  All values that are not contained in given list.
  """
  latitude_not_in: [Float!]
  """
  All values less than the given value.
  """
  latitude_lt: Float
  """
  All values less than or equal the given value.
  """
  latitude_lte: Float
  """
  All values greater than the given value.
  """
  latitude_gt: Float
  """
  All values greater than or equal the given value.
  """
  latitude_gte: Float
  type: String
  """
  All values that are not equal to given value.
  """
  type_not: String
  """
  All values that are contained in given list.
  """
  type_in: [String!]
  """
  All values that are not contained in given list.
  """
  type_not_in: [String!]
  """
  All values less than the given value.
  """
  type_lt: String
  """
  All values less than or equal the given value.
  """
  type_lte: String
  """
  All values greater than the given value.
  """
  type_gt: String
  """
  All values greater than or equal the given value.
  """
  type_gte: String
  """
  All values containing the given string.
  """
  type_contains: String
  """
  All values not containing the given string.
  """
  type_not_contains: String
  """
  All values starting with the given string.
  """
  type_starts_with: String
  """
  All values not starting with the given string.
  """
  type_not_starts_with: String
  """
  All values ending with the given string.
  """
  type_ends_with: String
  """
  All values not ending with the given string.
  """
  type_not_ends_with: String
}

input LocationWhereUniqueInput {
  id: ID
}

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

"""
A connection to a list of items.
"""
type MessageConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  text: String!
  channel: ChannelsCreateOneWithoutMessagesInput!
  user: UserCreateOneInput!
}

input MessageCreateManyWithoutChannelInput {
  create: [MessageCreateWithoutChannelInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateOneInput {
  create: MessageCreateInput
  connect: MessageWhereUniqueInput
}

input MessageCreateWithoutChannelInput {
  text: String!
  user: UserCreateOneInput!
}

"""
An edge in a connection.
"""
type MessageEdge {
  """
  The item at the end of the edge.
  """
  node: Message!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  text_ASC
  text_DESC
}

type MessagePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [MessageSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [MessageSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
}

input MessageUpdateDataInput {
  text: String
  channel: ChannelsUpdateOneWithoutMessagesInput
  user: UserUpdateOneInput
}

input MessageUpdateInput {
  text: String
  channel: ChannelsUpdateOneWithoutMessagesInput
  user: UserUpdateOneInput
}

input MessageUpdateManyWithoutChannelInput {
  create: [MessageCreateWithoutChannelInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutChannelInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutChannelInput!]
}

input MessageUpdateOneInput {
  create: MessageCreateInput
  connect: MessageWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: MessageUpdateDataInput
  upsert: MessageUpsertNestedInput
}

input MessageUpdateWithoutChannelDataInput {
  text: String
  user: UserUpdateOneInput
}

input MessageUpdateWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutChannelDataInput!
}

input MessageUpsertNestedInput {
  update: MessageUpdateDataInput!
  create: MessageCreateInput!
}

input MessageUpsertWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutChannelDataInput!
  create: MessageCreateWithoutChannelInput!
}

input MessageWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [MessageWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [MessageWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  text: String
  """
  All values that are not equal to given value.
  """
  text_not: String
  """
  All values that are contained in given list.
  """
  text_in: [String!]
  """
  All values that are not contained in given list.
  """
  text_not_in: [String!]
  """
  All values less than the given value.
  """
  text_lt: String
  """
  All values less than or equal the given value.
  """
  text_lte: String
  """
  All values greater than the given value.
  """
  text_gt: String
  """
  All values greater than or equal the given value.
  """
  text_gte: String
  """
  All values containing the given string.
  """
  text_contains: String
  """
  All values not containing the given string.
  """
  text_not_contains: String
  """
  All values starting with the given string.
  """
  text_starts_with: String
  """
  All values not starting with the given string.
  """
  text_not_starts_with: String
  """
  All values ending with the given string.
  """
  text_ends_with: String
  """
  All values not ending with the given string.
  """
  text_not_ends_with: String
  channel: ChannelsWhereInput
  user: UserWhereInput
}

input MessageWhereUniqueInput {
  id: ID
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

"""
A connection to a list of items.
"""
type PostConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
}

"""
An edge in a connection.
"""
type PostEdge {
  """
  The item at the end of the edge.
  """
  node: Post!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PostSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PostSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PostWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PostWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  isPublished: Boolean
  """
  All values that are not equal to given value.
  """
  isPublished_not: Boolean
  title: String
  """
  All values that are not equal to given value.
  """
  title_not: String
  """
  All values that are contained in given list.
  """
  title_in: [String!]
  """
  All values that are not contained in given list.
  """
  title_not_in: [String!]
  """
  All values less than the given value.
  """
  title_lt: String
  """
  All values less than or equal the given value.
  """
  title_lte: String
  """
  All values greater than the given value.
  """
  title_gt: String
  """
  All values greater than or equal the given value.
  """
  title_gte: String
  """
  All values containing the given string.
  """
  title_contains: String
  """
  All values not containing the given string.
  """
  title_not_contains: String
  """
  All values starting with the given string.
  """
  title_starts_with: String
  """
  All values not starting with the given string.
  """
  title_not_starts_with: String
  """
  All values ending with the given string.
  """
  title_ends_with: String
  """
  All values not ending with the given string.
  """
  title_not_ends_with: String
  text: String
  """
  All values that are not equal to given value.
  """
  text_not: String
  """
  All values that are contained in given list.
  """
  text_in: [String!]
  """
  All values that are not contained in given list.
  """
  text_not_in: [String!]
  """
  All values less than the given value.
  """
  text_lt: String
  """
  All values less than or equal the given value.
  """
  text_lte: String
  """
  All values greater than the given value.
  """
  text_gt: String
  """
  All values greater than or equal the given value.
  """
  text_gte: String
  """
  All values containing the given string.
  """
  text_contains: String
  """
  All values not containing the given string.
  """
  text_not_contains: String
  """
  All values starting with the given string.
  """
  text_starts_with: String
  """
  All values not starting with the given string.
  """
  text_not_starts_with: String
  """
  All values ending with the given string.
  """
  text_ends_with: String
  """
  All values not ending with the given string.
  """
  text_not_ends_with: String
}

input PostWhereUniqueInput {
  id: ID
}

"""
A connection to a list of items.
"""
type UserConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  username: String
  password: String!
  firstname: String!
  lastname: String!
  gender: String!
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileCreateOneInput
  country: CountryCreateOneWithoutUsersInput
  institution: InstitutionsCreateOneWithoutUsersInput
  department: DepartmentCreateOneWithoutUsersInput
  interest: InterestCreateManyWithoutUsersInput
  messages: MessageCreateOneInput
  connectTo: ConnectCreateManyWithoutToInput
  connectFrom: ConnectCreateManyWithoutFromInput
  articles: ArticleCreateManyWithoutAuthorInput
  favourites: ArticleCreateManyWithoutUserFavouritedInput
  channels: ChannelsCreateManyWithoutParticipantsInput
  myChannels: ChannelsCreateManyWithoutAuthorInput
  likedArticles: ArticleCreateManyWithoutLikesInput
  comments: CommentCreateManyWithoutAuthorInput
}

input UserCreateManyWithoutChannelsInput {
  create: [UserCreateWithoutChannelsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutCountryInput {
  create: [UserCreateWithoutCountryInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutDepartmentInput {
  create: [UserCreateWithoutDepartmentInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFavouritesInput {
  create: [UserCreateWithoutFavouritesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutInstitutionInput {
  create: [UserCreateWithoutInstitutionInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutInterestInput {
  create: [UserCreateWithoutInterestInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutLikedArticlesInput {
  create: [UserCreateWithoutLikedArticlesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutArticlesInput {
  create: UserCreateWithoutArticlesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutConnectFromInput {
  create: UserCreateWithoutConnectFromInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutConnectToInput {
  create: UserCreateWithoutConnectToInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMyChannelsInput {
  create: UserCreateWithoutMyChannelsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutArticlesInput {
  email: String!
  username: String
  password: String!
  firstname: String!
  lastname: String!
  gender: String!
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileCreateOneInput
  country: CountryCreateOneWithoutUsersInput
  institution: InstitutionsCreateOneWithoutUsersInput
  department: DepartmentCreateOneWithoutUsersInput
  interest: InterestCreateManyWithoutUsersInput
  messages: MessageCreateOneInput
  connectTo: ConnectCreateManyWithoutToInput
  connectFrom: ConnectCreateManyWithoutFromInput
  favourites: ArticleCreateManyWithoutUserFavouritedInput
  channels: ChannelsCreateManyWithoutParticipantsInput
  myChannels: ChannelsCreateManyWithoutAuthorInput
  likedArticles: ArticleCreateManyWithoutLikesInput
  comments: CommentCreateManyWithoutAuthorInput
}

input UserCreateWithoutChannelsInput {
  email: String!
  username: String
  password: String!
  firstname: String!
  lastname: String!
  gender: String!
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileCreateOneInput
  country: CountryCreateOneWithoutUsersInput
  institution: InstitutionsCreateOneWithoutUsersInput
  department: DepartmentCreateOneWithoutUsersInput
  interest: InterestCreateManyWithoutUsersInput
  messages: MessageCreateOneInput
  connectTo: ConnectCreateManyWithoutToInput
  connectFrom: ConnectCreateManyWithoutFromInput
  articles: ArticleCreateManyWithoutAuthorInput
  favourites: ArticleCreateManyWithoutUserFavouritedInput
  myChannels: ChannelsCreateManyWithoutAuthorInput
  likedArticles: ArticleCreateManyWithoutLikesInput
  comments: CommentCreateManyWithoutAuthorInput
}

input UserCreateWithoutCommentsInput {
  email: String!
  username: String
  password: String!
  firstname: String!
  lastname: String!
  gender: String!
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileCreateOneInput
  country: CountryCreateOneWithoutUsersInput
  institution: InstitutionsCreateOneWithoutUsersInput
  department: DepartmentCreateOneWithoutUsersInput
  interest: InterestCreateManyWithoutUsersInput
  messages: MessageCreateOneInput
  connectTo: ConnectCreateManyWithoutToInput
  connectFrom: ConnectCreateManyWithoutFromInput
  articles: ArticleCreateManyWithoutAuthorInput
  favourites: ArticleCreateManyWithoutUserFavouritedInput
  channels: ChannelsCreateManyWithoutParticipantsInput
  myChannels: ChannelsCreateManyWithoutAuthorInput
  likedArticles: ArticleCreateManyWithoutLikesInput
}

input UserCreateWithoutConnectFromInput {
  email: String!
  username: String
  password: String!
  firstname: String!
  lastname: String!
  gender: String!
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileCreateOneInput
  country: CountryCreateOneWithoutUsersInput
  institution: InstitutionsCreateOneWithoutUsersInput
  department: DepartmentCreateOneWithoutUsersInput
  interest: InterestCreateManyWithoutUsersInput
  messages: MessageCreateOneInput
  connectTo: ConnectCreateManyWithoutToInput
  articles: ArticleCreateManyWithoutAuthorInput
  favourites: ArticleCreateManyWithoutUserFavouritedInput
  channels: ChannelsCreateManyWithoutParticipantsInput
  myChannels: ChannelsCreateManyWithoutAuthorInput
  likedArticles: ArticleCreateManyWithoutLikesInput
  comments: CommentCreateManyWithoutAuthorInput
}

input UserCreateWithoutConnectToInput {
  email: String!
  username: String
  password: String!
  firstname: String!
  lastname: String!
  gender: String!
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileCreateOneInput
  country: CountryCreateOneWithoutUsersInput
  institution: InstitutionsCreateOneWithoutUsersInput
  department: DepartmentCreateOneWithoutUsersInput
  interest: InterestCreateManyWithoutUsersInput
  messages: MessageCreateOneInput
  connectFrom: ConnectCreateManyWithoutFromInput
  articles: ArticleCreateManyWithoutAuthorInput
  favourites: ArticleCreateManyWithoutUserFavouritedInput
  channels: ChannelsCreateManyWithoutParticipantsInput
  myChannels: ChannelsCreateManyWithoutAuthorInput
  likedArticles: ArticleCreateManyWithoutLikesInput
  comments: CommentCreateManyWithoutAuthorInput
}

input UserCreateWithoutCountryInput {
  email: String!
  username: String
  password: String!
  firstname: String!
  lastname: String!
  gender: String!
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileCreateOneInput
  institution: InstitutionsCreateOneWithoutUsersInput
  department: DepartmentCreateOneWithoutUsersInput
  interest: InterestCreateManyWithoutUsersInput
  messages: MessageCreateOneInput
  connectTo: ConnectCreateManyWithoutToInput
  connectFrom: ConnectCreateManyWithoutFromInput
  articles: ArticleCreateManyWithoutAuthorInput
  favourites: ArticleCreateManyWithoutUserFavouritedInput
  channels: ChannelsCreateManyWithoutParticipantsInput
  myChannels: ChannelsCreateManyWithoutAuthorInput
  likedArticles: ArticleCreateManyWithoutLikesInput
  comments: CommentCreateManyWithoutAuthorInput
}

input UserCreateWithoutDepartmentInput {
  email: String!
  username: String
  password: String!
  firstname: String!
  lastname: String!
  gender: String!
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileCreateOneInput
  country: CountryCreateOneWithoutUsersInput
  institution: InstitutionsCreateOneWithoutUsersInput
  interest: InterestCreateManyWithoutUsersInput
  messages: MessageCreateOneInput
  connectTo: ConnectCreateManyWithoutToInput
  connectFrom: ConnectCreateManyWithoutFromInput
  articles: ArticleCreateManyWithoutAuthorInput
  favourites: ArticleCreateManyWithoutUserFavouritedInput
  channels: ChannelsCreateManyWithoutParticipantsInput
  myChannels: ChannelsCreateManyWithoutAuthorInput
  likedArticles: ArticleCreateManyWithoutLikesInput
  comments: CommentCreateManyWithoutAuthorInput
}

input UserCreateWithoutFavouritesInput {
  email: String!
  username: String
  password: String!
  firstname: String!
  lastname: String!
  gender: String!
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileCreateOneInput
  country: CountryCreateOneWithoutUsersInput
  institution: InstitutionsCreateOneWithoutUsersInput
  department: DepartmentCreateOneWithoutUsersInput
  interest: InterestCreateManyWithoutUsersInput
  messages: MessageCreateOneInput
  connectTo: ConnectCreateManyWithoutToInput
  connectFrom: ConnectCreateManyWithoutFromInput
  articles: ArticleCreateManyWithoutAuthorInput
  channels: ChannelsCreateManyWithoutParticipantsInput
  myChannels: ChannelsCreateManyWithoutAuthorInput
  likedArticles: ArticleCreateManyWithoutLikesInput
  comments: CommentCreateManyWithoutAuthorInput
}

input UserCreateWithoutInstitutionInput {
  email: String!
  username: String
  password: String!
  firstname: String!
  lastname: String!
  gender: String!
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileCreateOneInput
  country: CountryCreateOneWithoutUsersInput
  department: DepartmentCreateOneWithoutUsersInput
  interest: InterestCreateManyWithoutUsersInput
  messages: MessageCreateOneInput
  connectTo: ConnectCreateManyWithoutToInput
  connectFrom: ConnectCreateManyWithoutFromInput
  articles: ArticleCreateManyWithoutAuthorInput
  favourites: ArticleCreateManyWithoutUserFavouritedInput
  channels: ChannelsCreateManyWithoutParticipantsInput
  myChannels: ChannelsCreateManyWithoutAuthorInput
  likedArticles: ArticleCreateManyWithoutLikesInput
  comments: CommentCreateManyWithoutAuthorInput
}

input UserCreateWithoutInterestInput {
  email: String!
  username: String
  password: String!
  firstname: String!
  lastname: String!
  gender: String!
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileCreateOneInput
  country: CountryCreateOneWithoutUsersInput
  institution: InstitutionsCreateOneWithoutUsersInput
  department: DepartmentCreateOneWithoutUsersInput
  messages: MessageCreateOneInput
  connectTo: ConnectCreateManyWithoutToInput
  connectFrom: ConnectCreateManyWithoutFromInput
  articles: ArticleCreateManyWithoutAuthorInput
  favourites: ArticleCreateManyWithoutUserFavouritedInput
  channels: ChannelsCreateManyWithoutParticipantsInput
  myChannels: ChannelsCreateManyWithoutAuthorInput
  likedArticles: ArticleCreateManyWithoutLikesInput
  comments: CommentCreateManyWithoutAuthorInput
}

input UserCreateWithoutLikedArticlesInput {
  email: String!
  username: String
  password: String!
  firstname: String!
  lastname: String!
  gender: String!
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileCreateOneInput
  country: CountryCreateOneWithoutUsersInput
  institution: InstitutionsCreateOneWithoutUsersInput
  department: DepartmentCreateOneWithoutUsersInput
  interest: InterestCreateManyWithoutUsersInput
  messages: MessageCreateOneInput
  connectTo: ConnectCreateManyWithoutToInput
  connectFrom: ConnectCreateManyWithoutFromInput
  articles: ArticleCreateManyWithoutAuthorInput
  favourites: ArticleCreateManyWithoutUserFavouritedInput
  channels: ChannelsCreateManyWithoutParticipantsInput
  myChannels: ChannelsCreateManyWithoutAuthorInput
  comments: CommentCreateManyWithoutAuthorInput
}

input UserCreateWithoutMyChannelsInput {
  email: String!
  username: String
  password: String!
  firstname: String!
  lastname: String!
  gender: String!
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileCreateOneInput
  country: CountryCreateOneWithoutUsersInput
  institution: InstitutionsCreateOneWithoutUsersInput
  department: DepartmentCreateOneWithoutUsersInput
  interest: InterestCreateManyWithoutUsersInput
  messages: MessageCreateOneInput
  connectTo: ConnectCreateManyWithoutToInput
  connectFrom: ConnectCreateManyWithoutFromInput
  articles: ArticleCreateManyWithoutAuthorInput
  favourites: ArticleCreateManyWithoutUserFavouritedInput
  channels: ChannelsCreateManyWithoutParticipantsInput
  likedArticles: ArticleCreateManyWithoutLikesInput
  comments: CommentCreateManyWithoutAuthorInput
}

"""
An edge in a connection.
"""
type UserEdge {
  """
  The item at the end of the edge.
  """
  node: User!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  firstname_ASC
  firstname_DESC
  lastname_ASC
  lastname_DESC
  gender_ASC
  gender_DESC
  type_ASC
  type_DESC
  userType_ASC
  userType_DESC
  newConnectNot_ASC
  newConnectNot_DESC
  newCommentNot_ASC
  newCommentNot_DESC
  newMessageNot_ASC
  newMessageNot_DESC
  newProfileNot_ASC
  newProfileNot_DESC
  completedProfile_ASC
  completedProfile_DESC
  verified_ASC
  verified_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  username: String
  password: String!
  firstname: String!
  lastname: String!
  gender: String!
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  username: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileUpdateOneInput
  country: CountryUpdateOneWithoutUsersInput
  institution: InstitutionsUpdateOneWithoutUsersInput
  department: DepartmentUpdateOneWithoutUsersInput
  interest: InterestUpdateManyWithoutUsersInput
  messages: MessageUpdateOneInput
  connectTo: ConnectUpdateManyWithoutToInput
  connectFrom: ConnectUpdateManyWithoutFromInput
  articles: ArticleUpdateManyWithoutAuthorInput
  favourites: ArticleUpdateManyWithoutUserFavouritedInput
  channels: ChannelsUpdateManyWithoutParticipantsInput
  myChannels: ChannelsUpdateManyWithoutAuthorInput
  likedArticles: ArticleUpdateManyWithoutLikesInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  email: String
  username: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileUpdateOneInput
  country: CountryUpdateOneWithoutUsersInput
  institution: InstitutionsUpdateOneWithoutUsersInput
  department: DepartmentUpdateOneWithoutUsersInput
  interest: InterestUpdateManyWithoutUsersInput
  messages: MessageUpdateOneInput
  connectTo: ConnectUpdateManyWithoutToInput
  connectFrom: ConnectUpdateManyWithoutFromInput
  articles: ArticleUpdateManyWithoutAuthorInput
  favourites: ArticleUpdateManyWithoutUserFavouritedInput
  channels: ChannelsUpdateManyWithoutParticipantsInput
  myChannels: ChannelsUpdateManyWithoutAuthorInput
  likedArticles: ArticleUpdateManyWithoutLikesInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateManyWithoutChannelsInput {
  create: [UserCreateWithoutChannelsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutChannelsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutChannelsInput!]
}

input UserUpdateManyWithoutCountryInput {
  create: [UserCreateWithoutCountryInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutCountryInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutCountryInput!]
}

input UserUpdateManyWithoutDepartmentInput {
  create: [UserCreateWithoutDepartmentInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutDepartmentInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutDepartmentInput!]
}

input UserUpdateManyWithoutFavouritesInput {
  create: [UserCreateWithoutFavouritesInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFavouritesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFavouritesInput!]
}

input UserUpdateManyWithoutInstitutionInput {
  create: [UserCreateWithoutInstitutionInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutInstitutionInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutInstitutionInput!]
}

input UserUpdateManyWithoutInterestInput {
  create: [UserCreateWithoutInterestInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutInterestInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutInterestInput!]
}

input UserUpdateManyWithoutLikedArticlesInput {
  create: [UserCreateWithoutLikedArticlesInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutLikedArticlesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutLikedArticlesInput!]
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutArticlesInput {
  create: UserCreateWithoutArticlesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutArticlesDataInput
  upsert: UserUpsertWithoutArticlesInput
}

input UserUpdateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutCommentsDataInput
  upsert: UserUpsertWithoutCommentsInput
}

input UserUpdateOneWithoutConnectFromInput {
  create: UserCreateWithoutConnectFromInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutConnectFromDataInput
  upsert: UserUpsertWithoutConnectFromInput
}

input UserUpdateOneWithoutConnectToInput {
  create: UserCreateWithoutConnectToInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutConnectToDataInput
  upsert: UserUpsertWithoutConnectToInput
}

input UserUpdateOneWithoutMyChannelsInput {
  create: UserCreateWithoutMyChannelsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutMyChannelsDataInput
  upsert: UserUpsertWithoutMyChannelsInput
}

input UserUpdateWithoutArticlesDataInput {
  email: String
  username: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileUpdateOneInput
  country: CountryUpdateOneWithoutUsersInput
  institution: InstitutionsUpdateOneWithoutUsersInput
  department: DepartmentUpdateOneWithoutUsersInput
  interest: InterestUpdateManyWithoutUsersInput
  messages: MessageUpdateOneInput
  connectTo: ConnectUpdateManyWithoutToInput
  connectFrom: ConnectUpdateManyWithoutFromInput
  favourites: ArticleUpdateManyWithoutUserFavouritedInput
  channels: ChannelsUpdateManyWithoutParticipantsInput
  myChannels: ChannelsUpdateManyWithoutAuthorInput
  likedArticles: ArticleUpdateManyWithoutLikesInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutChannelsDataInput {
  email: String
  username: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileUpdateOneInput
  country: CountryUpdateOneWithoutUsersInput
  institution: InstitutionsUpdateOneWithoutUsersInput
  department: DepartmentUpdateOneWithoutUsersInput
  interest: InterestUpdateManyWithoutUsersInput
  messages: MessageUpdateOneInput
  connectTo: ConnectUpdateManyWithoutToInput
  connectFrom: ConnectUpdateManyWithoutFromInput
  articles: ArticleUpdateManyWithoutAuthorInput
  favourites: ArticleUpdateManyWithoutUserFavouritedInput
  myChannels: ChannelsUpdateManyWithoutAuthorInput
  likedArticles: ArticleUpdateManyWithoutLikesInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutCommentsDataInput {
  email: String
  username: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileUpdateOneInput
  country: CountryUpdateOneWithoutUsersInput
  institution: InstitutionsUpdateOneWithoutUsersInput
  department: DepartmentUpdateOneWithoutUsersInput
  interest: InterestUpdateManyWithoutUsersInput
  messages: MessageUpdateOneInput
  connectTo: ConnectUpdateManyWithoutToInput
  connectFrom: ConnectUpdateManyWithoutFromInput
  articles: ArticleUpdateManyWithoutAuthorInput
  favourites: ArticleUpdateManyWithoutUserFavouritedInput
  channels: ChannelsUpdateManyWithoutParticipantsInput
  myChannels: ChannelsUpdateManyWithoutAuthorInput
  likedArticles: ArticleUpdateManyWithoutLikesInput
}

input UserUpdateWithoutConnectFromDataInput {
  email: String
  username: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileUpdateOneInput
  country: CountryUpdateOneWithoutUsersInput
  institution: InstitutionsUpdateOneWithoutUsersInput
  department: DepartmentUpdateOneWithoutUsersInput
  interest: InterestUpdateManyWithoutUsersInput
  messages: MessageUpdateOneInput
  connectTo: ConnectUpdateManyWithoutToInput
  articles: ArticleUpdateManyWithoutAuthorInput
  favourites: ArticleUpdateManyWithoutUserFavouritedInput
  channels: ChannelsUpdateManyWithoutParticipantsInput
  myChannels: ChannelsUpdateManyWithoutAuthorInput
  likedArticles: ArticleUpdateManyWithoutLikesInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutConnectToDataInput {
  email: String
  username: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileUpdateOneInput
  country: CountryUpdateOneWithoutUsersInput
  institution: InstitutionsUpdateOneWithoutUsersInput
  department: DepartmentUpdateOneWithoutUsersInput
  interest: InterestUpdateManyWithoutUsersInput
  messages: MessageUpdateOneInput
  connectFrom: ConnectUpdateManyWithoutFromInput
  articles: ArticleUpdateManyWithoutAuthorInput
  favourites: ArticleUpdateManyWithoutUserFavouritedInput
  channels: ChannelsUpdateManyWithoutParticipantsInput
  myChannels: ChannelsUpdateManyWithoutAuthorInput
  likedArticles: ArticleUpdateManyWithoutLikesInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutCountryDataInput {
  email: String
  username: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileUpdateOneInput
  institution: InstitutionsUpdateOneWithoutUsersInput
  department: DepartmentUpdateOneWithoutUsersInput
  interest: InterestUpdateManyWithoutUsersInput
  messages: MessageUpdateOneInput
  connectTo: ConnectUpdateManyWithoutToInput
  connectFrom: ConnectUpdateManyWithoutFromInput
  articles: ArticleUpdateManyWithoutAuthorInput
  favourites: ArticleUpdateManyWithoutUserFavouritedInput
  channels: ChannelsUpdateManyWithoutParticipantsInput
  myChannels: ChannelsUpdateManyWithoutAuthorInput
  likedArticles: ArticleUpdateManyWithoutLikesInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutDepartmentDataInput {
  email: String
  username: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileUpdateOneInput
  country: CountryUpdateOneWithoutUsersInput
  institution: InstitutionsUpdateOneWithoutUsersInput
  interest: InterestUpdateManyWithoutUsersInput
  messages: MessageUpdateOneInput
  connectTo: ConnectUpdateManyWithoutToInput
  connectFrom: ConnectUpdateManyWithoutFromInput
  articles: ArticleUpdateManyWithoutAuthorInput
  favourites: ArticleUpdateManyWithoutUserFavouritedInput
  channels: ChannelsUpdateManyWithoutParticipantsInput
  myChannels: ChannelsUpdateManyWithoutAuthorInput
  likedArticles: ArticleUpdateManyWithoutLikesInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutFavouritesDataInput {
  email: String
  username: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileUpdateOneInput
  country: CountryUpdateOneWithoutUsersInput
  institution: InstitutionsUpdateOneWithoutUsersInput
  department: DepartmentUpdateOneWithoutUsersInput
  interest: InterestUpdateManyWithoutUsersInput
  messages: MessageUpdateOneInput
  connectTo: ConnectUpdateManyWithoutToInput
  connectFrom: ConnectUpdateManyWithoutFromInput
  articles: ArticleUpdateManyWithoutAuthorInput
  channels: ChannelsUpdateManyWithoutParticipantsInput
  myChannels: ChannelsUpdateManyWithoutAuthorInput
  likedArticles: ArticleUpdateManyWithoutLikesInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutInstitutionDataInput {
  email: String
  username: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileUpdateOneInput
  country: CountryUpdateOneWithoutUsersInput
  department: DepartmentUpdateOneWithoutUsersInput
  interest: InterestUpdateManyWithoutUsersInput
  messages: MessageUpdateOneInput
  connectTo: ConnectUpdateManyWithoutToInput
  connectFrom: ConnectUpdateManyWithoutFromInput
  articles: ArticleUpdateManyWithoutAuthorInput
  favourites: ArticleUpdateManyWithoutUserFavouritedInput
  channels: ChannelsUpdateManyWithoutParticipantsInput
  myChannels: ChannelsUpdateManyWithoutAuthorInput
  likedArticles: ArticleUpdateManyWithoutLikesInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutInterestDataInput {
  email: String
  username: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileUpdateOneInput
  country: CountryUpdateOneWithoutUsersInput
  institution: InstitutionsUpdateOneWithoutUsersInput
  department: DepartmentUpdateOneWithoutUsersInput
  messages: MessageUpdateOneInput
  connectTo: ConnectUpdateManyWithoutToInput
  connectFrom: ConnectUpdateManyWithoutFromInput
  articles: ArticleUpdateManyWithoutAuthorInput
  favourites: ArticleUpdateManyWithoutUserFavouritedInput
  channels: ChannelsUpdateManyWithoutParticipantsInput
  myChannels: ChannelsUpdateManyWithoutAuthorInput
  likedArticles: ArticleUpdateManyWithoutLikesInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutLikedArticlesDataInput {
  email: String
  username: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileUpdateOneInput
  country: CountryUpdateOneWithoutUsersInput
  institution: InstitutionsUpdateOneWithoutUsersInput
  department: DepartmentUpdateOneWithoutUsersInput
  interest: InterestUpdateManyWithoutUsersInput
  messages: MessageUpdateOneInput
  connectTo: ConnectUpdateManyWithoutToInput
  connectFrom: ConnectUpdateManyWithoutFromInput
  articles: ArticleUpdateManyWithoutAuthorInput
  favourites: ArticleUpdateManyWithoutUserFavouritedInput
  channels: ChannelsUpdateManyWithoutParticipantsInput
  myChannels: ChannelsUpdateManyWithoutAuthorInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutMyChannelsDataInput {
  email: String
  username: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type: String
  userType: String
  newConnectNot: Boolean
  newCommentNot: Boolean
  newMessageNot: Boolean
  newProfileNot: Boolean
  completedProfile: Int
  verified: Boolean
  avatar: FileUpdateOneInput
  country: CountryUpdateOneWithoutUsersInput
  institution: InstitutionsUpdateOneWithoutUsersInput
  department: DepartmentUpdateOneWithoutUsersInput
  interest: InterestUpdateManyWithoutUsersInput
  messages: MessageUpdateOneInput
  connectTo: ConnectUpdateManyWithoutToInput
  connectFrom: ConnectUpdateManyWithoutFromInput
  articles: ArticleUpdateManyWithoutAuthorInput
  favourites: ArticleUpdateManyWithoutUserFavouritedInput
  channels: ChannelsUpdateManyWithoutParticipantsInput
  likedArticles: ArticleUpdateManyWithoutLikesInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutChannelsDataInput!
}

input UserUpdateWithWhereUniqueWithoutCountryInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutCountryDataInput!
}

input UserUpdateWithWhereUniqueWithoutDepartmentInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutDepartmentDataInput!
}

input UserUpdateWithWhereUniqueWithoutFavouritesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFavouritesDataInput!
}

input UserUpdateWithWhereUniqueWithoutInstitutionInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutInstitutionDataInput!
}

input UserUpdateWithWhereUniqueWithoutInterestInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutInterestDataInput!
}

input UserUpdateWithWhereUniqueWithoutLikedArticlesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutLikedArticlesDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutArticlesInput {
  update: UserUpdateWithoutArticlesDataInput!
  create: UserCreateWithoutArticlesInput!
}

input UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput!
  create: UserCreateWithoutCommentsInput!
}

input UserUpsertWithoutConnectFromInput {
  update: UserUpdateWithoutConnectFromDataInput!
  create: UserCreateWithoutConnectFromInput!
}

input UserUpsertWithoutConnectToInput {
  update: UserUpdateWithoutConnectToDataInput!
  create: UserCreateWithoutConnectToInput!
}

input UserUpsertWithoutMyChannelsInput {
  update: UserUpdateWithoutMyChannelsDataInput!
  create: UserCreateWithoutMyChannelsInput!
}

input UserUpsertWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutChannelsDataInput!
  create: UserCreateWithoutChannelsInput!
}

input UserUpsertWithWhereUniqueWithoutCountryInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutCountryDataInput!
  create: UserCreateWithoutCountryInput!
}

input UserUpsertWithWhereUniqueWithoutDepartmentInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutDepartmentDataInput!
  create: UserCreateWithoutDepartmentInput!
}

input UserUpsertWithWhereUniqueWithoutFavouritesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFavouritesDataInput!
  create: UserCreateWithoutFavouritesInput!
}

input UserUpsertWithWhereUniqueWithoutInstitutionInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutInstitutionDataInput!
  create: UserCreateWithoutInstitutionInput!
}

input UserUpsertWithWhereUniqueWithoutInterestInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutInterestDataInput!
  create: UserCreateWithoutInterestInput!
}

input UserUpsertWithWhereUniqueWithoutLikedArticlesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutLikedArticlesDataInput!
  create: UserCreateWithoutLikedArticlesInput!
}

input UserWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  email: String
  """
  All values that are not equal to given value.
  """
  email_not: String
  """
  All values that are contained in given list.
  """
  email_in: [String!]
  """
  All values that are not contained in given list.
  """
  email_not_in: [String!]
  """
  All values less than the given value.
  """
  email_lt: String
  """
  All values less than or equal the given value.
  """
  email_lte: String
  """
  All values greater than the given value.
  """
  email_gt: String
  """
  All values greater than or equal the given value.
  """
  email_gte: String
  """
  All values containing the given string.
  """
  email_contains: String
  """
  All values not containing the given string.
  """
  email_not_contains: String
  """
  All values starting with the given string.
  """
  email_starts_with: String
  """
  All values not starting with the given string.
  """
  email_not_starts_with: String
  """
  All values ending with the given string.
  """
  email_ends_with: String
  """
  All values not ending with the given string.
  """
  email_not_ends_with: String
  username: String
  """
  All values that are not equal to given value.
  """
  username_not: String
  """
  All values that are contained in given list.
  """
  username_in: [String!]
  """
  All values that are not contained in given list.
  """
  username_not_in: [String!]
  """
  All values less than the given value.
  """
  username_lt: String
  """
  All values less than or equal the given value.
  """
  username_lte: String
  """
  All values greater than the given value.
  """
  username_gt: String
  """
  All values greater than or equal the given value.
  """
  username_gte: String
  """
  All values containing the given string.
  """
  username_contains: String
  """
  All values not containing the given string.
  """
  username_not_contains: String
  """
  All values starting with the given string.
  """
  username_starts_with: String
  """
  All values not starting with the given string.
  """
  username_not_starts_with: String
  """
  All values ending with the given string.
  """
  username_ends_with: String
  """
  All values not ending with the given string.
  """
  username_not_ends_with: String
  password: String
  """
  All values that are not equal to given value.
  """
  password_not: String
  """
  All values that are contained in given list.
  """
  password_in: [String!]
  """
  All values that are not contained in given list.
  """
  password_not_in: [String!]
  """
  All values less than the given value.
  """
  password_lt: String
  """
  All values less than or equal the given value.
  """
  password_lte: String
  """
  All values greater than the given value.
  """
  password_gt: String
  """
  All values greater than or equal the given value.
  """
  password_gte: String
  """
  All values containing the given string.
  """
  password_contains: String
  """
  All values not containing the given string.
  """
  password_not_contains: String
  """
  All values starting with the given string.
  """
  password_starts_with: String
  """
  All values not starting with the given string.
  """
  password_not_starts_with: String
  """
  All values ending with the given string.
  """
  password_ends_with: String
  """
  All values not ending with the given string.
  """
  password_not_ends_with: String
  firstname: String
  """
  All values that are not equal to given value.
  """
  firstname_not: String
  """
  All values that are contained in given list.
  """
  firstname_in: [String!]
  """
  All values that are not contained in given list.
  """
  firstname_not_in: [String!]
  """
  All values less than the given value.
  """
  firstname_lt: String
  """
  All values less than or equal the given value.
  """
  firstname_lte: String
  """
  All values greater than the given value.
  """
  firstname_gt: String
  """
  All values greater than or equal the given value.
  """
  firstname_gte: String
  """
  All values containing the given string.
  """
  firstname_contains: String
  """
  All values not containing the given string.
  """
  firstname_not_contains: String
  """
  All values starting with the given string.
  """
  firstname_starts_with: String
  """
  All values not starting with the given string.
  """
  firstname_not_starts_with: String
  """
  All values ending with the given string.
  """
  firstname_ends_with: String
  """
  All values not ending with the given string.
  """
  firstname_not_ends_with: String
  lastname: String
  """
  All values that are not equal to given value.
  """
  lastname_not: String
  """
  All values that are contained in given list.
  """
  lastname_in: [String!]
  """
  All values that are not contained in given list.
  """
  lastname_not_in: [String!]
  """
  All values less than the given value.
  """
  lastname_lt: String
  """
  All values less than or equal the given value.
  """
  lastname_lte: String
  """
  All values greater than the given value.
  """
  lastname_gt: String
  """
  All values greater than or equal the given value.
  """
  lastname_gte: String
  """
  All values containing the given string.
  """
  lastname_contains: String
  """
  All values not containing the given string.
  """
  lastname_not_contains: String
  """
  All values starting with the given string.
  """
  lastname_starts_with: String
  """
  All values not starting with the given string.
  """
  lastname_not_starts_with: String
  """
  All values ending with the given string.
  """
  lastname_ends_with: String
  """
  All values not ending with the given string.
  """
  lastname_not_ends_with: String
  gender: String
  """
  All values that are not equal to given value.
  """
  gender_not: String
  """
  All values that are contained in given list.
  """
  gender_in: [String!]
  """
  All values that are not contained in given list.
  """
  gender_not_in: [String!]
  """
  All values less than the given value.
  """
  gender_lt: String
  """
  All values less than or equal the given value.
  """
  gender_lte: String
  """
  All values greater than the given value.
  """
  gender_gt: String
  """
  All values greater than or equal the given value.
  """
  gender_gte: String
  """
  All values containing the given string.
  """
  gender_contains: String
  """
  All values not containing the given string.
  """
  gender_not_contains: String
  """
  All values starting with the given string.
  """
  gender_starts_with: String
  """
  All values not starting with the given string.
  """
  gender_not_starts_with: String
  """
  All values ending with the given string.
  """
  gender_ends_with: String
  """
  All values not ending with the given string.
  """
  gender_not_ends_with: String
  type: String
  """
  All values that are not equal to given value.
  """
  type_not: String
  """
  All values that are contained in given list.
  """
  type_in: [String!]
  """
  All values that are not contained in given list.
  """
  type_not_in: [String!]
  """
  All values less than the given value.
  """
  type_lt: String
  """
  All values less than or equal the given value.
  """
  type_lte: String
  """
  All values greater than the given value.
  """
  type_gt: String
  """
  All values greater than or equal the given value.
  """
  type_gte: String
  """
  All values containing the given string.
  """
  type_contains: String
  """
  All values not containing the given string.
  """
  type_not_contains: String
  """
  All values starting with the given string.
  """
  type_starts_with: String
  """
  All values not starting with the given string.
  """
  type_not_starts_with: String
  """
  All values ending with the given string.
  """
  type_ends_with: String
  """
  All values not ending with the given string.
  """
  type_not_ends_with: String
  userType: String
  """
  All values that are not equal to given value.
  """
  userType_not: String
  """
  All values that are contained in given list.
  """
  userType_in: [String!]
  """
  All values that are not contained in given list.
  """
  userType_not_in: [String!]
  """
  All values less than the given value.
  """
  userType_lt: String
  """
  All values less than or equal the given value.
  """
  userType_lte: String
  """
  All values greater than the given value.
  """
  userType_gt: String
  """
  All values greater than or equal the given value.
  """
  userType_gte: String
  """
  All values containing the given string.
  """
  userType_contains: String
  """
  All values not containing the given string.
  """
  userType_not_contains: String
  """
  All values starting with the given string.
  """
  userType_starts_with: String
  """
  All values not starting with the given string.
  """
  userType_not_starts_with: String
  """
  All values ending with the given string.
  """
  userType_ends_with: String
  """
  All values not ending with the given string.
  """
  userType_not_ends_with: String
  newConnectNot: Boolean
  """
  All values that are not equal to given value.
  """
  newConnectNot_not: Boolean
  newCommentNot: Boolean
  """
  All values that are not equal to given value.
  """
  newCommentNot_not: Boolean
  newMessageNot: Boolean
  """
  All values that are not equal to given value.
  """
  newMessageNot_not: Boolean
  newProfileNot: Boolean
  """
  All values that are not equal to given value.
  """
  newProfileNot_not: Boolean
  completedProfile: Int
  """
  All values that are not equal to given value.
  """
  completedProfile_not: Int
  """
  All values that are contained in given list.
  """
  completedProfile_in: [Int!]
  """
  All values that are not contained in given list.
  """
  completedProfile_not_in: [Int!]
  """
  All values less than the given value.
  """
  completedProfile_lt: Int
  """
  All values less than or equal the given value.
  """
  completedProfile_lte: Int
  """
  All values greater than the given value.
  """
  completedProfile_gt: Int
  """
  All values greater than or equal the given value.
  """
  completedProfile_gte: Int
  verified: Boolean
  """
  All values that are not equal to given value.
  """
  verified_not: Boolean
  avatar: FileWhereInput
  country: CountryWhereInput
  institution: InstitutionsWhereInput
  department: DepartmentWhereInput
  interest_every: InterestWhereInput
  interest_some: InterestWhereInput
  interest_none: InterestWhereInput
  messages: MessageWhereInput
  connectTo_every: ConnectWhereInput
  connectTo_some: ConnectWhereInput
  connectTo_none: ConnectWhereInput
  connectFrom_every: ConnectWhereInput
  connectFrom_some: ConnectWhereInput
  connectFrom_none: ConnectWhereInput
  articles_every: ArticleWhereInput
  articles_some: ArticleWhereInput
  articles_none: ArticleWhereInput
  favourites_every: ArticleWhereInput
  favourites_some: ArticleWhereInput
  favourites_none: ArticleWhereInput
  channels_every: ChannelsWhereInput
  channels_some: ChannelsWhereInput
  channels_none: ChannelsWhereInput
  myChannels_every: ChannelsWhereInput
  myChannels_some: ChannelsWhereInput
  myChannels_none: ChannelsWhereInput
  likedArticles_every: ArticleWhereInput
  likedArticles_some: ArticleWhereInput
  likedArticles_none: ArticleWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}

type Mutation {
  createFile(data: FileCreateInput!): File!
  createPost(data: PostCreateInput!): Post!
  createLibrary(data: LibraryCreateInput!): Library!
  createLocation(data: LocationCreateInput!): Location!
  createArticle(data: ArticleCreateInput!): Article!
  createComment(data: CommentCreateInput!): Comment!
  createCountry(data: CountryCreateInput!): Country!
  createInstitutions(data: InstitutionsCreateInput!): Institutions!
  createDepartment(data: DepartmentCreateInput!): Department!
  createInterest(data: InterestCreateInput!): Interest!
  createUser(data: UserCreateInput!): User!
  createConnect(data: ConnectCreateInput!): Connect!
  createChannels(data: ChannelsCreateInput!): Channels!
  createMessage(data: MessageCreateInput!): Message!
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateLibrary(data: LibraryUpdateInput!, where: LibraryWhereUniqueInput!): Library
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateArticle(data: ArticleUpdateInput!, where: ArticleWhereUniqueInput!): Article
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateCountry(data: CountryUpdateInput!, where: CountryWhereUniqueInput!): Country
  updateInstitutions(data: InstitutionsUpdateInput!, where: InstitutionsWhereUniqueInput!): Institutions
  updateDepartment(data: DepartmentUpdateInput!, where: DepartmentWhereUniqueInput!): Department
  updateInterest(data: InterestUpdateInput!, where: InterestWhereUniqueInput!): Interest
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateConnect(data: ConnectUpdateInput!, where: ConnectWhereUniqueInput!): Connect
  updateChannels(data: ChannelsUpdateInput!, where: ChannelsWhereUniqueInput!): Channels
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  deleteFile(where: FileWhereUniqueInput!): File
  deletePost(where: PostWhereUniqueInput!): Post
  deleteLibrary(where: LibraryWhereUniqueInput!): Library
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteArticle(where: ArticleWhereUniqueInput!): Article
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteCountry(where: CountryWhereUniqueInput!): Country
  deleteInstitutions(where: InstitutionsWhereUniqueInput!): Institutions
  deleteDepartment(where: DepartmentWhereUniqueInput!): Department
  deleteInterest(where: InterestWhereUniqueInput!): Interest
  deleteUser(where: UserWhereUniqueInput!): User
  deleteConnect(where: ConnectWhereUniqueInput!): Connect
  deleteChannels(where: ChannelsWhereUniqueInput!): Channels
  deleteMessage(where: MessageWhereUniqueInput!): Message
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertLibrary(where: LibraryWhereUniqueInput!, create: LibraryCreateInput!, update: LibraryUpdateInput!): Library!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  upsertArticle(where: ArticleWhereUniqueInput!, create: ArticleCreateInput!, update: ArticleUpdateInput!): Article!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  upsertCountry(where: CountryWhereUniqueInput!, create: CountryCreateInput!, update: CountryUpdateInput!): Country!
  upsertInstitutions(where: InstitutionsWhereUniqueInput!, create: InstitutionsCreateInput!, update: InstitutionsUpdateInput!): Institutions!
  upsertDepartment(where: DepartmentWhereUniqueInput!, create: DepartmentCreateInput!, update: DepartmentUpdateInput!): Department!
  upsertInterest(where: InterestWhereUniqueInput!, create: InterestCreateInput!, update: InterestUpdateInput!): Interest!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertConnect(where: ConnectWhereUniqueInput!, create: ConnectCreateInput!, update: ConnectUpdateInput!): Connect!
  upsertChannels(where: ChannelsWhereUniqueInput!, create: ChannelsCreateInput!, update: ChannelsUpdateInput!): Channels!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  updateManyFiles(data: FileUpdateInput!, where: FileWhereInput!): BatchPayload!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput!): BatchPayload!
  updateManyLibraries(data: LibraryUpdateInput!, where: LibraryWhereInput!): BatchPayload!
  updateManyLocations(data: LocationUpdateInput!, where: LocationWhereInput!): BatchPayload!
  updateManyArticles(data: ArticleUpdateInput!, where: ArticleWhereInput!): BatchPayload!
  updateManyComments(data: CommentUpdateInput!, where: CommentWhereInput!): BatchPayload!
  updateManyCountries(data: CountryUpdateInput!, where: CountryWhereInput!): BatchPayload!
  updateManyInstitutionses(data: InstitutionsUpdateInput!, where: InstitutionsWhereInput!): BatchPayload!
  updateManyDepartments(data: DepartmentUpdateInput!, where: DepartmentWhereInput!): BatchPayload!
  updateManyInterests(data: InterestUpdateInput!, where: InterestWhereInput!): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput!): BatchPayload!
  updateManyConnects(data: ConnectUpdateInput!, where: ConnectWhereInput!): BatchPayload!
  updateManyChannelses(data: ChannelsUpdateInput!, where: ChannelsWhereInput!): BatchPayload!
  updateManyMessages(data: MessageUpdateInput!, where: MessageWhereInput!): BatchPayload!
  deleteManyFiles(where: FileWhereInput!): BatchPayload!
  deleteManyPosts(where: PostWhereInput!): BatchPayload!
  deleteManyLibraries(where: LibraryWhereInput!): BatchPayload!
  deleteManyLocations(where: LocationWhereInput!): BatchPayload!
  deleteManyArticles(where: ArticleWhereInput!): BatchPayload!
  deleteManyComments(where: CommentWhereInput!): BatchPayload!
  deleteManyCountries(where: CountryWhereInput!): BatchPayload!
  deleteManyInstitutionses(where: InstitutionsWhereInput!): BatchPayload!
  deleteManyDepartments(where: DepartmentWhereInput!): BatchPayload!
  deleteManyInterests(where: InterestWhereInput!): BatchPayload!
  deleteManyUsers(where: UserWhereInput!): BatchPayload!
  deleteManyConnects(where: ConnectWhereInput!): BatchPayload!
  deleteManyChannelses(where: ChannelsWhereInput!): BatchPayload!
  deleteManyMessages(where: MessageWhereInput!): BatchPayload!
}

type Query {
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  libraries(where: LibraryWhereInput, orderBy: LibraryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Library]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  articles(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Article]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  countries(where: CountryWhereInput, orderBy: CountryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Country]!
  institutionses(where: InstitutionsWhereInput, orderBy: InstitutionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Institutions]!
  departments(where: DepartmentWhereInput, orderBy: DepartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Department]!
  interests(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interest]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  connects(where: ConnectWhereInput, orderBy: ConnectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Connect]!
  channelses(where: ChannelsWhereInput, orderBy: ChannelsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channels]!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  file(where: FileWhereUniqueInput!): File
  post(where: PostWhereUniqueInput!): Post
  library(where: LibraryWhereUniqueInput!): Library
  location(where: LocationWhereUniqueInput!): Location
  article(where: ArticleWhereUniqueInput!): Article
  comment(where: CommentWhereUniqueInput!): Comment
  country(where: CountryWhereUniqueInput!): Country
  institutions(where: InstitutionsWhereUniqueInput!): Institutions
  department(where: DepartmentWhereUniqueInput!): Department
  interest(where: InterestWhereUniqueInput!): Interest
  user(where: UserWhereUniqueInput!): User
  connect(where: ConnectWhereUniqueInput!): Connect
  channels(where: ChannelsWhereUniqueInput!): Channels
  message(where: MessageWhereUniqueInput!): Message
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  librariesConnection(where: LibraryWhereInput, orderBy: LibraryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LibraryConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  articlesConnection(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArticleConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  countriesConnection(where: CountryWhereInput, orderBy: CountryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CountryConnection!
  institutionsesConnection(where: InstitutionsWhereInput, orderBy: InstitutionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InstitutionsConnection!
  departmentsConnection(where: DepartmentWhereInput, orderBy: DepartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DepartmentConnection!
  interestsConnection(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InterestConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  connectsConnection(where: ConnectWhereInput, orderBy: ConnectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ConnectConnection!
  channelsesConnection(where: ChannelsWhereInput, orderBy: ChannelsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChannelsConnection!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}

type Subscription {
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  library(where: LibrarySubscriptionWhereInput): LibrarySubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  article(where: ArticleSubscriptionWhereInput): ArticleSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  country(where: CountrySubscriptionWhereInput): CountrySubscriptionPayload
  institutions(where: InstitutionsSubscriptionWhereInput): InstitutionsSubscriptionPayload
  department(where: DepartmentSubscriptionWhereInput): DepartmentSubscriptionPayload
  interest(where: InterestSubscriptionWhereInput): InterestSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  connect(where: ConnectSubscriptionWhereInput): ConnectSubscriptionPayload
  channels(where: ChannelsSubscriptionWhereInput): ChannelsSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
}
`

export type PostOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC'

export type Arcticletype = 
  'External' |
  'Internal'

export type InstitutionsOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'title_ASC' |
  'title_DESC' |
  'type_ASC' |
  'type_DESC'

export type CountryOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'shortName_ASC' |
  'shortName_DESC' |
  'name_ASC' |
  'name_DESC'

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'username_ASC' |
  'username_DESC' |
  'password_ASC' |
  'password_DESC' |
  'firstname_ASC' |
  'firstname_DESC' |
  'lastname_ASC' |
  'lastname_DESC' |
  'gender_ASC' |
  'gender_DESC' |
  'type_ASC' |
  'type_DESC' |
  'userType_ASC' |
  'userType_DESC' |
  'newConnectNot_ASC' |
  'newConnectNot_DESC' |
  'newCommentNot_ASC' |
  'newCommentNot_DESC' |
  'newMessageNot_ASC' |
  'newMessageNot_DESC' |
  'newProfileNot_ASC' |
  'newProfileNot_DESC' |
  'completedProfile_ASC' |
  'completedProfile_DESC' |
  'verified_ASC' |
  'verified_DESC'

export type FileOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'size_ASC' |
  'size_DESC' |
  'secret_ASC' |
  'secret_DESC' |
  'contentType_ASC' |
  'contentType_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'url_ASC' |
  'url_DESC'

export type InterestOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'avatar_ASC' |
  'avatar_DESC'

export type ConnectOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'status_ASC' |
  'status_DESC'

export type ArticleOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'body_ASC' |
  'body_DESC' |
  'type_ASC' |
  'type_DESC' |
  'link_ASC' |
  'link_DESC' |
  'description_ASC' |
  'description_DESC' |
  'viewCount_ASC' |
  'viewCount_DESC'

export type DepartmentOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC'

export type LocationOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'longitude_ASC' |
  'longitude_DESC' |
  'latitude_ASC' |
  'latitude_DESC' |
  'type_ASC' |
  'type_DESC'

export type InstitutionType = 
  'University' |
  'College'

export type ChannelType = 
  'Group' |
  'Direct' |
  'Channel'

export type LibraryOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export type MessageOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'text_ASC' |
  'text_DESC'

export type ChannelsOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'title_ASC' |
  'title_DESC' |
  'avatar_ASC' |
  'avatar_DESC' |
  'type_ASC' |
  'type_DESC'

export type CommentOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'body_ASC' |
  'body_DESC'

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput
  OR?: FileWhereInput[] | FileWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  size?: Int
  size_not?: Int
  size_in?: Int[] | Int
  size_not_in?: Int[] | Int
  size_lt?: Int
  size_lte?: Int
  size_gt?: Int
  size_gte?: Int
  secret?: String
  secret_not?: String
  secret_in?: String[] | String
  secret_not_in?: String[] | String
  secret_lt?: String
  secret_lte?: String
  secret_gt?: String
  secret_gte?: String
  secret_contains?: String
  secret_not_contains?: String
  secret_starts_with?: String
  secret_not_starts_with?: String
  secret_ends_with?: String
  secret_not_ends_with?: String
  contentType?: String
  contentType_not?: String
  contentType_in?: String[] | String
  contentType_not_in?: String[] | String
  contentType_lt?: String
  contentType_lte?: String
  contentType_gt?: String
  contentType_gte?: String
  contentType_contains?: String
  contentType_not_contains?: String
  contentType_starts_with?: String
  contentType_not_starts_with?: String
  contentType_ends_with?: String
  contentType_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
}

export interface InterestUpdateDataInput {
  name?: String
  avatar?: String
  users?: UserUpdateManyWithoutInterestInput
}

export interface ArticleWhereInput {
  AND?: ArticleWhereInput[] | ArticleWhereInput
  OR?: ArticleWhereInput[] | ArticleWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  body?: String
  body_not?: String
  body_in?: String[] | String
  body_not_in?: String[] | String
  body_lt?: String
  body_lte?: String
  body_gt?: String
  body_gte?: String
  body_contains?: String
  body_not_contains?: String
  body_starts_with?: String
  body_not_starts_with?: String
  body_ends_with?: String
  body_not_ends_with?: String
  type?: Arcticletype
  type_not?: Arcticletype
  type_in?: Arcticletype[] | Arcticletype
  type_not_in?: Arcticletype[] | Arcticletype
  link?: String
  link_not?: String
  link_in?: String[] | String
  link_not_in?: String[] | String
  link_lt?: String
  link_lte?: String
  link_gt?: String
  link_gte?: String
  link_contains?: String
  link_not_contains?: String
  link_starts_with?: String
  link_not_starts_with?: String
  link_ends_with?: String
  link_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  viewCount?: Int
  viewCount_not?: Int
  viewCount_in?: Int[] | Int
  viewCount_not_in?: Int[] | Int
  viewCount_lt?: Int
  viewCount_lte?: Int
  viewCount_gt?: Int
  viewCount_gte?: Int
  category_every?: InterestWhereInput
  category_some?: InterestWhereInput
  category_none?: InterestWhereInput
  author?: UserWhereInput
  likes_every?: UserWhereInput
  likes_some?: UserWhereInput
  likes_none?: UserWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
  userFavourited_every?: UserWhereInput
  userFavourited_some?: UserWhereInput
  userFavourited_none?: UserWhereInput
}

export interface UserUpdateManyWithoutInterestInput {
  create?: UserCreateWithoutInterestInput[] | UserCreateWithoutInterestInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutInterestInput[] | UserUpdateWithWhereUniqueWithoutInterestInput
  upsert?: UserUpsertWithWhereUniqueWithoutInterestInput[] | UserUpsertWithWhereUniqueWithoutInterestInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  username?: String
  username_not?: String
  username_in?: String[] | String
  username_not_in?: String[] | String
  username_lt?: String
  username_lte?: String
  username_gt?: String
  username_gte?: String
  username_contains?: String
  username_not_contains?: String
  username_starts_with?: String
  username_not_starts_with?: String
  username_ends_with?: String
  username_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  firstname?: String
  firstname_not?: String
  firstname_in?: String[] | String
  firstname_not_in?: String[] | String
  firstname_lt?: String
  firstname_lte?: String
  firstname_gt?: String
  firstname_gte?: String
  firstname_contains?: String
  firstname_not_contains?: String
  firstname_starts_with?: String
  firstname_not_starts_with?: String
  firstname_ends_with?: String
  firstname_not_ends_with?: String
  lastname?: String
  lastname_not?: String
  lastname_in?: String[] | String
  lastname_not_in?: String[] | String
  lastname_lt?: String
  lastname_lte?: String
  lastname_gt?: String
  lastname_gte?: String
  lastname_contains?: String
  lastname_not_contains?: String
  lastname_starts_with?: String
  lastname_not_starts_with?: String
  lastname_ends_with?: String
  lastname_not_ends_with?: String
  gender?: String
  gender_not?: String
  gender_in?: String[] | String
  gender_not_in?: String[] | String
  gender_lt?: String
  gender_lte?: String
  gender_gt?: String
  gender_gte?: String
  gender_contains?: String
  gender_not_contains?: String
  gender_starts_with?: String
  gender_not_starts_with?: String
  gender_ends_with?: String
  gender_not_ends_with?: String
  type?: String
  type_not?: String
  type_in?: String[] | String
  type_not_in?: String[] | String
  type_lt?: String
  type_lte?: String
  type_gt?: String
  type_gte?: String
  type_contains?: String
  type_not_contains?: String
  type_starts_with?: String
  type_not_starts_with?: String
  type_ends_with?: String
  type_not_ends_with?: String
  userType?: String
  userType_not?: String
  userType_in?: String[] | String
  userType_not_in?: String[] | String
  userType_lt?: String
  userType_lte?: String
  userType_gt?: String
  userType_gte?: String
  userType_contains?: String
  userType_not_contains?: String
  userType_starts_with?: String
  userType_not_starts_with?: String
  userType_ends_with?: String
  userType_not_ends_with?: String
  newConnectNot?: Boolean
  newConnectNot_not?: Boolean
  newCommentNot?: Boolean
  newCommentNot_not?: Boolean
  newMessageNot?: Boolean
  newMessageNot_not?: Boolean
  newProfileNot?: Boolean
  newProfileNot_not?: Boolean
  completedProfile?: Int
  completedProfile_not?: Int
  completedProfile_in?: Int[] | Int
  completedProfile_not_in?: Int[] | Int
  completedProfile_lt?: Int
  completedProfile_lte?: Int
  completedProfile_gt?: Int
  completedProfile_gte?: Int
  verified?: Boolean
  verified_not?: Boolean
  avatar?: FileWhereInput
  country?: CountryWhereInput
  institution?: InstitutionsWhereInput
  department?: DepartmentWhereInput
  interest_every?: InterestWhereInput
  interest_some?: InterestWhereInput
  interest_none?: InterestWhereInput
  messages?: MessageWhereInput
  connectTo_every?: ConnectWhereInput
  connectTo_some?: ConnectWhereInput
  connectTo_none?: ConnectWhereInput
  connectFrom_every?: ConnectWhereInput
  connectFrom_some?: ConnectWhereInput
  connectFrom_none?: ConnectWhereInput
  articles_every?: ArticleWhereInput
  articles_some?: ArticleWhereInput
  articles_none?: ArticleWhereInput
  favourites_every?: ArticleWhereInput
  favourites_some?: ArticleWhereInput
  favourites_none?: ArticleWhereInput
  channels_every?: ChannelsWhereInput
  channels_some?: ChannelsWhereInput
  channels_none?: ChannelsWhereInput
  myChannels_every?: ChannelsWhereInput
  myChannels_some?: ChannelsWhereInput
  myChannels_none?: ChannelsWhereInput
  likedArticles_every?: ArticleWhereInput
  likedArticles_some?: ArticleWhereInput
  likedArticles_none?: ArticleWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
}

export interface UserUpdateWithWhereUniqueWithoutInterestInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutInterestDataInput
}

export interface InstitutionsWhereInput {
  AND?: InstitutionsWhereInput[] | InstitutionsWhereInput
  OR?: InstitutionsWhereInput[] | InstitutionsWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  type?: InstitutionType
  type_not?: InstitutionType
  type_in?: InstitutionType[] | InstitutionType
  type_not_in?: InstitutionType[] | InstitutionType
  country?: CountryWhereInput
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
  departments_every?: DepartmentWhereInput
  departments_some?: DepartmentWhereInput
  departments_none?: DepartmentWhereInput
}

export interface UserUpdateWithoutInterestDataInput {
  email?: String
  username?: String
  password?: String
  firstname?: String
  lastname?: String
  gender?: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileUpdateOneInput
  country?: CountryUpdateOneWithoutUsersInput
  institution?: InstitutionsUpdateOneWithoutUsersInput
  department?: DepartmentUpdateOneWithoutUsersInput
  messages?: MessageUpdateOneInput
  connectTo?: ConnectUpdateManyWithoutToInput
  connectFrom?: ConnectUpdateManyWithoutFromInput
  articles?: ArticleUpdateManyWithoutAuthorInput
  favourites?: ArticleUpdateManyWithoutUserFavouritedInput
  channels?: ChannelsUpdateManyWithoutParticipantsInput
  myChannels?: ChannelsUpdateManyWithoutAuthorInput
  likedArticles?: ArticleUpdateManyWithoutLikesInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface DepartmentWhereInput {
  AND?: DepartmentWhereInput[] | DepartmentWhereInput
  OR?: DepartmentWhereInput[] | DepartmentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  institution?: InstitutionsWhereInput
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
}

export interface FileUpdateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FileUpdateDataInput
  upsert?: FileUpsertNestedInput
}

export interface ChannelsWhereInput {
  AND?: ChannelsWhereInput[] | ChannelsWhereInput
  OR?: ChannelsWhereInput[] | ChannelsWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  avatar?: String
  avatar_not?: String
  avatar_in?: String[] | String
  avatar_not_in?: String[] | String
  avatar_lt?: String
  avatar_lte?: String
  avatar_gt?: String
  avatar_gte?: String
  avatar_contains?: String
  avatar_not_contains?: String
  avatar_starts_with?: String
  avatar_not_starts_with?: String
  avatar_ends_with?: String
  avatar_not_ends_with?: String
  type?: ChannelType
  type_not?: ChannelType
  type_in?: ChannelType[] | ChannelType
  type_not_in?: ChannelType[] | ChannelType
  author?: UserWhereInput
  messages_every?: MessageWhereInput
  messages_some?: MessageWhereInput
  messages_none?: MessageWhereInput
  participants_every?: UserWhereInput
  participants_some?: UserWhereInput
  participants_none?: UserWhereInput
}

export interface FileUpdateDataInput {
  name?: String
  size?: Int
  secret?: String
  contentType?: String
  url?: String
}

export interface ConnectWhereInput {
  AND?: ConnectWhereInput[] | ConnectWhereInput
  OR?: ConnectWhereInput[] | ConnectWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  status?: Int
  status_not?: Int
  status_in?: Int[] | Int
  status_not_in?: Int[] | Int
  status_lt?: Int
  status_lte?: Int
  status_gt?: Int
  status_gte?: Int
  to?: UserWhereInput
  from?: UserWhereInput
}

export interface ChannelsCreateManyWithoutParticipantsInput {
  create?: ChannelsCreateWithoutParticipantsInput[] | ChannelsCreateWithoutParticipantsInput
  connect?: ChannelsWhereUniqueInput[] | ChannelsWhereUniqueInput
}

export interface CommentUpdateWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateWithoutAuthorDataInput
}

export interface ChannelsCreateWithoutParticipantsInput {
  title: String
  avatar?: String
  type?: ChannelType
  author: UserCreateOneWithoutMyChannelsInput
  messages?: MessageCreateManyWithoutChannelInput
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface MessageCreateManyWithoutChannelInput {
  create?: MessageCreateWithoutChannelInput[] | MessageCreateWithoutChannelInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
}

export interface MessageSubscriptionWhereInput {
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MessageWhereInput
}

export interface MessageCreateWithoutChannelInput {
  text: String
  user: UserCreateOneInput
}

export interface ChannelsSubscriptionWhereInput {
  AND?: ChannelsSubscriptionWhereInput[] | ChannelsSubscriptionWhereInput
  OR?: ChannelsSubscriptionWhereInput[] | ChannelsSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ChannelsWhereInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserCreateInput {
  email: String
  username?: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileCreateOneInput
  country?: CountryCreateOneWithoutUsersInput
  institution?: InstitutionsCreateOneWithoutUsersInput
  department?: DepartmentCreateOneWithoutUsersInput
  interest?: InterestCreateManyWithoutUsersInput
  messages?: MessageCreateOneInput
  connectTo?: ConnectCreateManyWithoutToInput
  connectFrom?: ConnectCreateManyWithoutFromInput
  articles?: ArticleCreateManyWithoutAuthorInput
  favourites?: ArticleCreateManyWithoutUserFavouritedInput
  channels?: ChannelsCreateManyWithoutParticipantsInput
  myChannels?: ChannelsCreateManyWithoutAuthorInput
  likedArticles?: ArticleCreateManyWithoutLikesInput
  comments?: CommentCreateManyWithoutAuthorInput
}

export interface DepartmentSubscriptionWhereInput {
  AND?: DepartmentSubscriptionWhereInput[] | DepartmentSubscriptionWhereInput
  OR?: DepartmentSubscriptionWhereInput[] | DepartmentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DepartmentWhereInput
}

export interface ChannelsCreateManyWithoutAuthorInput {
  create?: ChannelsCreateWithoutAuthorInput[] | ChannelsCreateWithoutAuthorInput
  connect?: ChannelsWhereUniqueInput[] | ChannelsWhereUniqueInput
}

export interface CountrySubscriptionWhereInput {
  AND?: CountrySubscriptionWhereInput[] | CountrySubscriptionWhereInput
  OR?: CountrySubscriptionWhereInput[] | CountrySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CountryWhereInput
}

export interface ChannelsCreateWithoutAuthorInput {
  title: String
  avatar?: String
  type?: ChannelType
  messages?: MessageCreateManyWithoutChannelInput
  participants?: UserCreateManyWithoutChannelsInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
}

export interface UserCreateManyWithoutChannelsInput {
  create?: UserCreateWithoutChannelsInput[] | UserCreateWithoutChannelsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ArticleSubscriptionWhereInput {
  AND?: ArticleSubscriptionWhereInput[] | ArticleSubscriptionWhereInput
  OR?: ArticleSubscriptionWhereInput[] | ArticleSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ArticleWhereInput
}

export interface UserCreateWithoutChannelsInput {
  email: String
  username?: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileCreateOneInput
  country?: CountryCreateOneWithoutUsersInput
  institution?: InstitutionsCreateOneWithoutUsersInput
  department?: DepartmentCreateOneWithoutUsersInput
  interest?: InterestCreateManyWithoutUsersInput
  messages?: MessageCreateOneInput
  connectTo?: ConnectCreateManyWithoutToInput
  connectFrom?: ConnectCreateManyWithoutFromInput
  articles?: ArticleCreateManyWithoutAuthorInput
  favourites?: ArticleCreateManyWithoutUserFavouritedInput
  myChannels?: ChannelsCreateManyWithoutAuthorInput
  likedArticles?: ArticleCreateManyWithoutLikesInput
  comments?: CommentCreateManyWithoutAuthorInput
}

export interface LibrarySubscriptionWhereInput {
  AND?: LibrarySubscriptionWhereInput[] | LibrarySubscriptionWhereInput
  OR?: LibrarySubscriptionWhereInput[] | LibrarySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LibraryWhereInput
}

export interface ArticleCreateManyWithoutLikesInput {
  create?: ArticleCreateWithoutLikesInput[] | ArticleCreateWithoutLikesInput
  connect?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FileWhereInput
}

export interface ArticleCreateWithoutLikesInput {
  slug?: String
  isPublished?: Boolean
  title: String
  body: String
  type?: Arcticletype
  link?: String
  description?: String
  viewCount?: Int
  tags?: ArticleCreatetagsInput
  category?: InterestCreateManyInput
  author: UserCreateOneWithoutArticlesInput
  comments?: CommentCreateManyWithoutArticleInput
  userFavourited?: UserCreateManyWithoutFavouritesInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface CommentCreateManyWithoutArticleInput {
  create?: CommentCreateWithoutArticleInput[] | CommentCreateWithoutArticleInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface LocationWhereUniqueInput {
  id?: ID_Input
}

export interface CommentCreateWithoutArticleInput {
  slug?: String
  body: String
  replies?: CommentCreateManyInput
  author: UserCreateOneWithoutCommentsInput
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
  slug?: String
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface InstitutionsWhereUniqueInput {
  id?: ID_Input
}

export interface CommentCreateInput {
  slug?: String
  body: String
  replies?: CommentCreateManyInput
  article: ArticleCreateOneWithoutCommentsInput
  author: UserCreateOneWithoutCommentsInput
}

export interface InterestWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface ArticleCreateOneWithoutCommentsInput {
  create?: ArticleCreateWithoutCommentsInput
  connect?: ArticleWhereUniqueInput
}

export interface ConnectWhereUniqueInput {
  id?: ID_Input
}

export interface ArticleCreateWithoutCommentsInput {
  slug?: String
  isPublished?: Boolean
  title: String
  body: String
  type?: Arcticletype
  link?: String
  description?: String
  viewCount?: Int
  tags?: ArticleCreatetagsInput
  category?: InterestCreateManyInput
  author: UserCreateOneWithoutArticlesInput
  likes?: UserCreateManyWithoutLikedArticlesInput
  userFavourited?: UserCreateManyWithoutFavouritesInput
}

export interface MessageWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateManyWithoutFavouritesInput {
  create?: UserCreateWithoutFavouritesInput[] | UserCreateWithoutFavouritesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ChannelsUpdateInput {
  title?: String
  avatar?: String
  type?: ChannelType
  author?: UserUpdateOneWithoutMyChannelsInput
  messages?: MessageUpdateManyWithoutChannelInput
  participants?: UserUpdateManyWithoutChannelsInput
}

export interface UserCreateWithoutFavouritesInput {
  email: String
  username?: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileCreateOneInput
  country?: CountryCreateOneWithoutUsersInput
  institution?: InstitutionsCreateOneWithoutUsersInput
  department?: DepartmentCreateOneWithoutUsersInput
  interest?: InterestCreateManyWithoutUsersInput
  messages?: MessageCreateOneInput
  connectTo?: ConnectCreateManyWithoutToInput
  connectFrom?: ConnectCreateManyWithoutFromInput
  articles?: ArticleCreateManyWithoutAuthorInput
  channels?: ChannelsCreateManyWithoutParticipantsInput
  myChannels?: ChannelsCreateManyWithoutAuthorInput
  likedArticles?: ArticleCreateManyWithoutLikesInput
  comments?: CommentCreateManyWithoutAuthorInput
}

export interface UserUpdateInput {
  email?: String
  username?: String
  password?: String
  firstname?: String
  lastname?: String
  gender?: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileUpdateOneInput
  country?: CountryUpdateOneWithoutUsersInput
  institution?: InstitutionsUpdateOneWithoutUsersInput
  department?: DepartmentUpdateOneWithoutUsersInput
  interest?: InterestUpdateManyWithoutUsersInput
  messages?: MessageUpdateOneInput
  connectTo?: ConnectUpdateManyWithoutToInput
  connectFrom?: ConnectUpdateManyWithoutFromInput
  articles?: ArticleUpdateManyWithoutAuthorInput
  favourites?: ArticleUpdateManyWithoutUserFavouritedInput
  channels?: ChannelsUpdateManyWithoutParticipantsInput
  myChannels?: ChannelsUpdateManyWithoutAuthorInput
  likedArticles?: ArticleUpdateManyWithoutLikesInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface CommentCreateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[] | CommentCreateWithoutAuthorInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface DepartmentUpdateInput {
  name?: String
  institution?: InstitutionsUpdateOneWithoutDepartmentsInput
  users?: UserUpdateManyWithoutDepartmentInput
}

export interface CommentCreateWithoutAuthorInput {
  slug?: String
  body: String
  replies?: CommentCreateManyInput
  article: ArticleCreateOneWithoutCommentsInput
}

export interface CountryUpdateInput {
  shortName?: String
  name?: String
  institutions?: InstitutionsUpdateManyWithoutCountryInput
  users?: UserUpdateManyWithoutCountryInput
}

export interface UserCreateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput
  connect?: UserWhereUniqueInput
}

export interface InterestUpsertWithWhereUniqueNestedInput {
  where: InterestWhereUniqueInput
  update: InterestUpdateDataInput
  create: InterestCreateInput
}

export interface UserCreateWithoutCommentsInput {
  email: String
  username?: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileCreateOneInput
  country?: CountryCreateOneWithoutUsersInput
  institution?: InstitutionsCreateOneWithoutUsersInput
  department?: DepartmentCreateOneWithoutUsersInput
  interest?: InterestCreateManyWithoutUsersInput
  messages?: MessageCreateOneInput
  connectTo?: ConnectCreateManyWithoutToInput
  connectFrom?: ConnectCreateManyWithoutFromInput
  articles?: ArticleCreateManyWithoutAuthorInput
  favourites?: ArticleCreateManyWithoutUserFavouritedInput
  channels?: ChannelsCreateManyWithoutParticipantsInput
  myChannels?: ChannelsCreateManyWithoutAuthorInput
  likedArticles?: ArticleCreateManyWithoutLikesInput
}

export interface CountryUpsertWithoutUsersInput {
  update: CountryUpdateWithoutUsersDataInput
  create: CountryCreateWithoutUsersInput
}

export interface CountryCreateInput {
  shortName: String
  name: String
  institutions?: InstitutionsCreateManyWithoutCountryInput
  users?: UserCreateManyWithoutCountryInput
}

export interface UserUpsertWithWhereUniqueWithoutInstitutionInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutInstitutionDataInput
  create: UserCreateWithoutInstitutionInput
}

export interface InstitutionsCreateInput {
  title: String
  type: InstitutionType
  country?: CountryCreateOneWithoutInstitutionsInput
  users?: UserCreateManyWithoutInstitutionInput
  departments?: DepartmentCreateManyWithoutInstitutionInput
}

export interface InstitutionsUpsertWithoutDepartmentsInput {
  update: InstitutionsUpdateWithoutDepartmentsDataInput
  create: InstitutionsCreateWithoutDepartmentsInput
}

export interface DepartmentCreateInput {
  name: String
  institution?: InstitutionsCreateOneWithoutDepartmentsInput
  users?: UserCreateManyWithoutDepartmentInput
}

export interface UserUpsertWithWhereUniqueWithoutCountryInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutCountryDataInput
  create: UserCreateWithoutCountryInput
}

export interface ConnectCreateInput {
  status?: Int
  to: UserCreateOneWithoutConnectToInput
  from: UserCreateOneWithoutConnectFromInput
}

export interface DepartmentUpsertWithWhereUniqueWithoutInstitutionInput {
  where: DepartmentWhereUniqueInput
  update: DepartmentUpdateWithoutInstitutionDataInput
  create: DepartmentCreateWithoutInstitutionInput
}

export interface ChannelsCreateInput {
  title: String
  avatar?: String
  type?: ChannelType
  author: UserCreateOneWithoutMyChannelsInput
  messages?: MessageCreateManyWithoutChannelInput
  participants?: UserCreateManyWithoutChannelsInput
}

export interface MessageUpsertNestedInput {
  update: MessageUpdateDataInput
  create: MessageCreateInput
}

export interface FileUpdateInput {
  name?: String
  size?: Int
  secret?: String
  contentType?: String
  url?: String
}

export interface UserUpsertWithoutMyChannelsInput {
  update: UserUpdateWithoutMyChannelsDataInput
  create: UserCreateWithoutMyChannelsInput
}

export interface ArticleUpsertWithoutCommentsInput {
  update: ArticleUpdateWithoutCommentsDataInput
  create: ArticleCreateWithoutCommentsInput
}

export interface UserUpsertWithoutConnectFromInput {
  update: UserUpdateWithoutConnectFromDataInput
  create: UserCreateWithoutConnectFromInput
}

export interface LibraryUpdateInput {
  name?: String
  description?: String
  location?: LocationUpdateOneInput
}

export interface UserUpsertWithWhereUniqueWithoutLikedArticlesInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutLikedArticlesDataInput
  create: UserCreateWithoutLikedArticlesInput
}

export interface LocationUpdateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
  delete?: Boolean
  update?: LocationUpdateDataInput
  upsert?: LocationUpsertNestedInput
}

export interface UserUpsertWithoutConnectToInput {
  update: UserUpdateWithoutConnectToDataInput
  create: UserCreateWithoutConnectToInput
}

export interface LocationUpdateDataInput {
  longitude?: Float
  latitude?: Float
  type?: String
}

export interface UserUpsertWithoutArticlesInput {
  update: UserUpdateWithoutArticlesDataInput
  create: UserCreateWithoutArticlesInput
}

export interface LocationUpsertNestedInput {
  update: LocationUpdateDataInput
  create: LocationCreateInput
}

export interface MessageUpsertWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutChannelDataInput
  create: MessageCreateWithoutChannelInput
}

export interface LocationUpdateInput {
  longitude?: Float
  latitude?: Float
  type?: String
}

export interface ChannelsUpsertWithWhereUniqueWithoutAuthorInput {
  where: ChannelsWhereUniqueInput
  update: ChannelsUpdateWithoutAuthorDataInput
  create: ChannelsCreateWithoutAuthorInput
}

export interface ArticleUpdateInput {
  slug?: String
  isPublished?: Boolean
  title?: String
  body?: String
  type?: Arcticletype
  link?: String
  description?: String
  viewCount?: Int
  tags?: ArticleUpdatetagsInput
  category?: InterestUpdateManyInput
  author?: UserUpdateOneWithoutArticlesInput
  likes?: UserUpdateManyWithoutLikedArticlesInput
  comments?: CommentUpdateManyWithoutArticleInput
  userFavourited?: UserUpdateManyWithoutFavouritesInput
}

export interface ArticleUpsertWithWhereUniqueWithoutLikesInput {
  where: ArticleWhereUniqueInput
  update: ArticleUpdateWithoutLikesDataInput
  create: ArticleCreateWithoutLikesInput
}

export interface ArticleUpdatetagsInput {
  set?: String[] | String
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface InterestUpdateManyInput {
  create?: InterestCreateInput[] | InterestCreateInput
  connect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  disconnect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  delete?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  update?: InterestUpdateWithWhereUniqueNestedInput[] | InterestUpdateWithWhereUniqueNestedInput
  upsert?: InterestUpsertWithWhereUniqueNestedInput[] | InterestUpsertWithWhereUniqueNestedInput
}

export interface UserUpdateWithoutCommentsDataInput {
  email?: String
  username?: String
  password?: String
  firstname?: String
  lastname?: String
  gender?: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileUpdateOneInput
  country?: CountryUpdateOneWithoutUsersInput
  institution?: InstitutionsUpdateOneWithoutUsersInput
  department?: DepartmentUpdateOneWithoutUsersInput
  interest?: InterestUpdateManyWithoutUsersInput
  messages?: MessageUpdateOneInput
  connectTo?: ConnectUpdateManyWithoutToInput
  connectFrom?: ConnectUpdateManyWithoutFromInput
  articles?: ArticleUpdateManyWithoutAuthorInput
  favourites?: ArticleUpdateManyWithoutUserFavouritedInput
  channels?: ChannelsUpdateManyWithoutParticipantsInput
  myChannels?: ChannelsUpdateManyWithoutAuthorInput
  likedArticles?: ArticleUpdateManyWithoutLikesInput
}

export interface InterestUpdateWithWhereUniqueNestedInput {
  where: InterestWhereUniqueInput
  data: InterestUpdateDataInput
}

export interface FileCreateInput {
  name: String
  size: Int
  secret: String
  contentType: String
  url: String
}

export interface InterestWhereInput {
  AND?: InterestWhereInput[] | InterestWhereInput
  OR?: InterestWhereInput[] | InterestWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  avatar?: String
  avatar_not?: String
  avatar_in?: String[] | String
  avatar_not_in?: String[] | String
  avatar_lt?: String
  avatar_lte?: String
  avatar_gt?: String
  avatar_gte?: String
  avatar_contains?: String
  avatar_not_contains?: String
  avatar_starts_with?: String
  avatar_not_starts_with?: String
  avatar_ends_with?: String
  avatar_not_ends_with?: String
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
}

export interface LibraryCreateInput {
  name: String
  description?: String
  location: LocationCreateOneInput
}

export interface CountryWhereInput {
  AND?: CountryWhereInput[] | CountryWhereInput
  OR?: CountryWhereInput[] | CountryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  shortName?: String
  shortName_not?: String
  shortName_in?: String[] | String
  shortName_not_in?: String[] | String
  shortName_lt?: String
  shortName_lte?: String
  shortName_gt?: String
  shortName_gte?: String
  shortName_contains?: String
  shortName_not_contains?: String
  shortName_starts_with?: String
  shortName_not_starts_with?: String
  shortName_ends_with?: String
  shortName_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  institutions_every?: InstitutionsWhereInput
  institutions_some?: InstitutionsWhereInput
  institutions_none?: InstitutionsWhereInput
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
}

export interface LocationCreateInput {
  longitude: Float
  latitude: Float
  type: String
}

export interface UserUpsertWithWhereUniqueWithoutFavouritesInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutFavouritesDataInput
  create: UserCreateWithoutFavouritesInput
}

export interface ArticleCreatetagsInput {
  set?: String[] | String
}

export interface MessageWhereInput {
  AND?: MessageWhereInput[] | MessageWhereInput
  OR?: MessageWhereInput[] | MessageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  channel?: ChannelsWhereInput
  user?: UserWhereInput
}

export interface InterestCreateInput {
  name: String
  avatar: String
  users?: UserCreateManyWithoutInterestInput
}

export interface CommentUpsertWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateWithoutAuthorDataInput
  create: CommentCreateWithoutAuthorInput
}

export interface UserCreateWithoutInterestInput {
  email: String
  username?: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileCreateOneInput
  country?: CountryCreateOneWithoutUsersInput
  institution?: InstitutionsCreateOneWithoutUsersInput
  department?: DepartmentCreateOneWithoutUsersInput
  messages?: MessageCreateOneInput
  connectTo?: ConnectCreateManyWithoutToInput
  connectFrom?: ConnectCreateManyWithoutFromInput
  articles?: ArticleCreateManyWithoutAuthorInput
  favourites?: ArticleCreateManyWithoutUserFavouritedInput
  channels?: ChannelsCreateManyWithoutParticipantsInput
  myChannels?: ChannelsCreateManyWithoutAuthorInput
  likedArticles?: ArticleCreateManyWithoutLikesInput
  comments?: CommentCreateManyWithoutAuthorInput
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | CommentWhereInput
  OR?: CommentWhereInput[] | CommentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  body?: String
  body_not?: String
  body_in?: String[] | String
  body_not_in?: String[] | String
  body_lt?: String
  body_lte?: String
  body_gt?: String
  body_gte?: String
  body_contains?: String
  body_not_contains?: String
  body_starts_with?: String
  body_not_starts_with?: String
  body_ends_with?: String
  body_not_ends_with?: String
  replies_every?: CommentWhereInput
  replies_some?: CommentWhereInput
  replies_none?: CommentWhereInput
  article?: ArticleWhereInput
  author?: UserWhereInput
}

export interface CountryCreateOneWithoutUsersInput {
  create?: CountryCreateWithoutUsersInput
  connect?: CountryWhereUniqueInput
}

export interface CommentUpdateWithoutAuthorDataInput {
  slug?: String
  body?: String
  replies?: CommentUpdateManyInput
  article?: ArticleUpdateOneWithoutCommentsInput
}

export interface InstitutionsCreateManyWithoutCountryInput {
  create?: InstitutionsCreateWithoutCountryInput[] | InstitutionsCreateWithoutCountryInput
  connect?: InstitutionsWhereUniqueInput[] | InstitutionsWhereUniqueInput
}

export interface CountryUpdateOneWithoutUsersInput {
  create?: CountryCreateWithoutUsersInput
  connect?: CountryWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CountryUpdateWithoutUsersDataInput
  upsert?: CountryUpsertWithoutUsersInput
}

export interface UserCreateManyWithoutInstitutionInput {
  create?: UserCreateWithoutInstitutionInput[] | UserCreateWithoutInstitutionInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface CountryUpdateWithoutUsersDataInput {
  shortName?: String
  name?: String
  institutions?: InstitutionsUpdateManyWithoutCountryInput
}

export interface DepartmentCreateOneWithoutUsersInput {
  create?: DepartmentCreateWithoutUsersInput
  connect?: DepartmentWhereUniqueInput
}

export interface InstitutionsUpdateManyWithoutCountryInput {
  create?: InstitutionsCreateWithoutCountryInput[] | InstitutionsCreateWithoutCountryInput
  connect?: InstitutionsWhereUniqueInput[] | InstitutionsWhereUniqueInput
  disconnect?: InstitutionsWhereUniqueInput[] | InstitutionsWhereUniqueInput
  delete?: InstitutionsWhereUniqueInput[] | InstitutionsWhereUniqueInput
  update?: InstitutionsUpdateWithWhereUniqueWithoutCountryInput[] | InstitutionsUpdateWithWhereUniqueWithoutCountryInput
  upsert?: InstitutionsUpsertWithWhereUniqueWithoutCountryInput[] | InstitutionsUpsertWithWhereUniqueWithoutCountryInput
}

export interface InstitutionsCreateOneWithoutDepartmentsInput {
  create?: InstitutionsCreateWithoutDepartmentsInput
  connect?: InstitutionsWhereUniqueInput
}

export interface InstitutionsUpdateWithWhereUniqueWithoutCountryInput {
  where: InstitutionsWhereUniqueInput
  data: InstitutionsUpdateWithoutCountryDataInput
}

export interface CountryCreateOneWithoutInstitutionsInput {
  create?: CountryCreateWithoutInstitutionsInput
  connect?: CountryWhereUniqueInput
}

export interface InstitutionsUpdateWithoutCountryDataInput {
  title?: String
  type?: InstitutionType
  users?: UserUpdateManyWithoutInstitutionInput
  departments?: DepartmentUpdateManyWithoutInstitutionInput
}

export interface UserCreateManyWithoutCountryInput {
  create?: UserCreateWithoutCountryInput[] | UserCreateWithoutCountryInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserUpdateManyWithoutInstitutionInput {
  create?: UserCreateWithoutInstitutionInput[] | UserCreateWithoutInstitutionInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutInstitutionInput[] | UserUpdateWithWhereUniqueWithoutInstitutionInput
  upsert?: UserUpsertWithWhereUniqueWithoutInstitutionInput[] | UserUpsertWithWhereUniqueWithoutInstitutionInput
}

export interface InstitutionsCreateOneWithoutUsersInput {
  create?: InstitutionsCreateWithoutUsersInput
  connect?: InstitutionsWhereUniqueInput
}

export interface UserUpdateWithWhereUniqueWithoutInstitutionInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutInstitutionDataInput
}

export interface DepartmentCreateManyWithoutInstitutionInput {
  create?: DepartmentCreateWithoutInstitutionInput[] | DepartmentCreateWithoutInstitutionInput
  connect?: DepartmentWhereUniqueInput[] | DepartmentWhereUniqueInput
}

export interface UserUpdateWithoutInstitutionDataInput {
  email?: String
  username?: String
  password?: String
  firstname?: String
  lastname?: String
  gender?: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileUpdateOneInput
  country?: CountryUpdateOneWithoutUsersInput
  department?: DepartmentUpdateOneWithoutUsersInput
  interest?: InterestUpdateManyWithoutUsersInput
  messages?: MessageUpdateOneInput
  connectTo?: ConnectUpdateManyWithoutToInput
  connectFrom?: ConnectUpdateManyWithoutFromInput
  articles?: ArticleUpdateManyWithoutAuthorInput
  favourites?: ArticleUpdateManyWithoutUserFavouritedInput
  channels?: ChannelsUpdateManyWithoutParticipantsInput
  myChannels?: ChannelsUpdateManyWithoutAuthorInput
  likedArticles?: ArticleUpdateManyWithoutLikesInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface UserCreateManyWithoutDepartmentInput {
  create?: UserCreateWithoutDepartmentInput[] | UserCreateWithoutDepartmentInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface DepartmentUpdateOneWithoutUsersInput {
  create?: DepartmentCreateWithoutUsersInput
  connect?: DepartmentWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: DepartmentUpdateWithoutUsersDataInput
  upsert?: DepartmentUpsertWithoutUsersInput
}

export interface InterestCreateManyWithoutUsersInput {
  create?: InterestCreateWithoutUsersInput[] | InterestCreateWithoutUsersInput
  connect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
}

export interface DepartmentUpdateWithoutUsersDataInput {
  name?: String
  institution?: InstitutionsUpdateOneWithoutDepartmentsInput
}

export interface MessageCreateOneInput {
  create?: MessageCreateInput
  connect?: MessageWhereUniqueInput
}

export interface InstitutionsUpdateOneWithoutDepartmentsInput {
  create?: InstitutionsCreateWithoutDepartmentsInput
  connect?: InstitutionsWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: InstitutionsUpdateWithoutDepartmentsDataInput
  upsert?: InstitutionsUpsertWithoutDepartmentsInput
}

export interface ChannelsCreateOneWithoutMessagesInput {
  create?: ChannelsCreateWithoutMessagesInput
  connect?: ChannelsWhereUniqueInput
}

export interface InstitutionsUpdateWithoutDepartmentsDataInput {
  title?: String
  type?: InstitutionType
  country?: CountryUpdateOneWithoutInstitutionsInput
  users?: UserUpdateManyWithoutInstitutionInput
}

export interface UserCreateOneWithoutMyChannelsInput {
  create?: UserCreateWithoutMyChannelsInput
  connect?: UserWhereUniqueInput
}

export interface CountryUpdateOneWithoutInstitutionsInput {
  create?: CountryCreateWithoutInstitutionsInput
  connect?: CountryWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CountryUpdateWithoutInstitutionsDataInput
  upsert?: CountryUpsertWithoutInstitutionsInput
}

export interface ConnectCreateManyWithoutToInput {
  create?: ConnectCreateWithoutToInput[] | ConnectCreateWithoutToInput
  connect?: ConnectWhereUniqueInput[] | ConnectWhereUniqueInput
}

export interface CountryUpdateWithoutInstitutionsDataInput {
  shortName?: String
  name?: String
  users?: UserUpdateManyWithoutCountryInput
}

export interface UserCreateOneWithoutConnectFromInput {
  create?: UserCreateWithoutConnectFromInput
  connect?: UserWhereUniqueInput
}

export interface UserUpdateManyWithoutCountryInput {
  create?: UserCreateWithoutCountryInput[] | UserCreateWithoutCountryInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutCountryInput[] | UserUpdateWithWhereUniqueWithoutCountryInput
  upsert?: UserUpsertWithWhereUniqueWithoutCountryInput[] | UserUpsertWithWhereUniqueWithoutCountryInput
}

export interface ArticleCreateManyWithoutAuthorInput {
  create?: ArticleCreateWithoutAuthorInput[] | ArticleCreateWithoutAuthorInput
  connect?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
}

export interface UserUpdateWithWhereUniqueWithoutCountryInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutCountryDataInput
}

export interface UserCreateManyWithoutLikedArticlesInput {
  create?: UserCreateWithoutLikedArticlesInput[] | UserCreateWithoutLikedArticlesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserUpdateWithoutCountryDataInput {
  email?: String
  username?: String
  password?: String
  firstname?: String
  lastname?: String
  gender?: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileUpdateOneInput
  institution?: InstitutionsUpdateOneWithoutUsersInput
  department?: DepartmentUpdateOneWithoutUsersInput
  interest?: InterestUpdateManyWithoutUsersInput
  messages?: MessageUpdateOneInput
  connectTo?: ConnectUpdateManyWithoutToInput
  connectFrom?: ConnectUpdateManyWithoutFromInput
  articles?: ArticleUpdateManyWithoutAuthorInput
  favourites?: ArticleUpdateManyWithoutUserFavouritedInput
  channels?: ChannelsUpdateManyWithoutParticipantsInput
  myChannels?: ChannelsUpdateManyWithoutAuthorInput
  likedArticles?: ArticleUpdateManyWithoutLikesInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface ConnectCreateManyWithoutFromInput {
  create?: ConnectCreateWithoutFromInput[] | ConnectCreateWithoutFromInput
  connect?: ConnectWhereUniqueInput[] | ConnectWhereUniqueInput
}

export interface InstitutionsUpdateOneWithoutUsersInput {
  create?: InstitutionsCreateWithoutUsersInput
  connect?: InstitutionsWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: InstitutionsUpdateWithoutUsersDataInput
  upsert?: InstitutionsUpsertWithoutUsersInput
}

export interface UserCreateOneWithoutConnectToInput {
  create?: UserCreateWithoutConnectToInput
  connect?: UserWhereUniqueInput
}

export interface InstitutionsUpdateWithoutUsersDataInput {
  title?: String
  type?: InstitutionType
  country?: CountryUpdateOneWithoutInstitutionsInput
  departments?: DepartmentUpdateManyWithoutInstitutionInput
}

export interface ArticleCreateManyWithoutUserFavouritedInput {
  create?: ArticleCreateWithoutUserFavouritedInput[] | ArticleCreateWithoutUserFavouritedInput
  connect?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
}

export interface DepartmentUpdateManyWithoutInstitutionInput {
  create?: DepartmentCreateWithoutInstitutionInput[] | DepartmentCreateWithoutInstitutionInput
  connect?: DepartmentWhereUniqueInput[] | DepartmentWhereUniqueInput
  disconnect?: DepartmentWhereUniqueInput[] | DepartmentWhereUniqueInput
  delete?: DepartmentWhereUniqueInput[] | DepartmentWhereUniqueInput
  update?: DepartmentUpdateWithWhereUniqueWithoutInstitutionInput[] | DepartmentUpdateWithWhereUniqueWithoutInstitutionInput
  upsert?: DepartmentUpsertWithWhereUniqueWithoutInstitutionInput[] | DepartmentUpsertWithWhereUniqueWithoutInstitutionInput
}

export interface UserCreateOneWithoutArticlesInput {
  create?: UserCreateWithoutArticlesInput
  connect?: UserWhereUniqueInput
}

export interface DepartmentUpdateWithWhereUniqueWithoutInstitutionInput {
  where: DepartmentWhereUniqueInput
  data: DepartmentUpdateWithoutInstitutionDataInput
}

export interface LocationWhereInput {
  AND?: LocationWhereInput[] | LocationWhereInput
  OR?: LocationWhereInput[] | LocationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  longitude?: Float
  longitude_not?: Float
  longitude_in?: Float[] | Float
  longitude_not_in?: Float[] | Float
  longitude_lt?: Float
  longitude_lte?: Float
  longitude_gt?: Float
  longitude_gte?: Float
  latitude?: Float
  latitude_not?: Float
  latitude_in?: Float[] | Float
  latitude_not_in?: Float[] | Float
  latitude_lt?: Float
  latitude_lte?: Float
  latitude_gt?: Float
  latitude_gte?: Float
  type?: String
  type_not?: String
  type_in?: String[] | String
  type_not_in?: String[] | String
  type_lt?: String
  type_lte?: String
  type_gt?: String
  type_gte?: String
  type_contains?: String
  type_not_contains?: String
  type_starts_with?: String
  type_not_starts_with?: String
  type_ends_with?: String
  type_not_ends_with?: String
}

export interface DepartmentUpdateWithoutInstitutionDataInput {
  name?: String
  users?: UserUpdateManyWithoutDepartmentInput
}

export interface ConnectSubscriptionWhereInput {
  AND?: ConnectSubscriptionWhereInput[] | ConnectSubscriptionWhereInput
  OR?: ConnectSubscriptionWhereInput[] | ConnectSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ConnectWhereInput
}

export interface UserUpdateManyWithoutDepartmentInput {
  create?: UserCreateWithoutDepartmentInput[] | UserCreateWithoutDepartmentInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutDepartmentInput[] | UserUpdateWithWhereUniqueWithoutDepartmentInput
  upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput[] | UserUpsertWithWhereUniqueWithoutDepartmentInput
}

export interface InstitutionsSubscriptionWhereInput {
  AND?: InstitutionsSubscriptionWhereInput[] | InstitutionsSubscriptionWhereInput
  OR?: InstitutionsSubscriptionWhereInput[] | InstitutionsSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: InstitutionsWhereInput
}

export interface UserUpdateWithWhereUniqueWithoutDepartmentInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutDepartmentDataInput
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface UserUpdateWithoutDepartmentDataInput {
  email?: String
  username?: String
  password?: String
  firstname?: String
  lastname?: String
  gender?: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileUpdateOneInput
  country?: CountryUpdateOneWithoutUsersInput
  institution?: InstitutionsUpdateOneWithoutUsersInput
  interest?: InterestUpdateManyWithoutUsersInput
  messages?: MessageUpdateOneInput
  connectTo?: ConnectUpdateManyWithoutToInput
  connectFrom?: ConnectUpdateManyWithoutFromInput
  articles?: ArticleUpdateManyWithoutAuthorInput
  favourites?: ArticleUpdateManyWithoutUserFavouritedInput
  channels?: ChannelsUpdateManyWithoutParticipantsInput
  myChannels?: ChannelsUpdateManyWithoutAuthorInput
  likedArticles?: ArticleUpdateManyWithoutLikesInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface LibraryWhereUniqueInput {
  id?: ID_Input
}

export interface InterestUpdateManyWithoutUsersInput {
  create?: InterestCreateWithoutUsersInput[] | InterestCreateWithoutUsersInput
  connect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  disconnect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  delete?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  update?: InterestUpdateWithWhereUniqueWithoutUsersInput[] | InterestUpdateWithWhereUniqueWithoutUsersInput
  upsert?: InterestUpsertWithWhereUniqueWithoutUsersInput[] | InterestUpsertWithWhereUniqueWithoutUsersInput
}

export interface CountryWhereUniqueInput {
  id?: ID_Input
  shortName?: String
  name?: String
}

export interface InterestUpdateWithWhereUniqueWithoutUsersInput {
  where: InterestWhereUniqueInput
  data: InterestUpdateWithoutUsersDataInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
  username?: String
}

export interface InterestUpdateWithoutUsersDataInput {
  name?: String
  avatar?: String
}

export interface MessageUpdateInput {
  text?: String
  channel?: ChannelsUpdateOneWithoutMessagesInput
  user?: UserUpdateOneInput
}

export interface InterestUpsertWithWhereUniqueWithoutUsersInput {
  where: InterestWhereUniqueInput
  update: InterestUpdateWithoutUsersDataInput
  create: InterestCreateWithoutUsersInput
}

export interface InterestUpdateInput {
  name?: String
  avatar?: String
  users?: UserUpdateManyWithoutInterestInput
}

export interface MessageUpdateOneInput {
  create?: MessageCreateInput
  connect?: MessageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: MessageUpdateDataInput
  upsert?: MessageUpsertNestedInput
}

export interface CommentUpdateInput {
  slug?: String
  body?: String
  replies?: CommentUpdateManyInput
  article?: ArticleUpdateOneWithoutCommentsInput
  author?: UserUpdateOneWithoutCommentsInput
}

export interface MessageUpdateDataInput {
  text?: String
  channel?: ChannelsUpdateOneWithoutMessagesInput
  user?: UserUpdateOneInput
}

export interface InstitutionsUpsertWithWhereUniqueWithoutCountryInput {
  where: InstitutionsWhereUniqueInput
  update: InstitutionsUpdateWithoutCountryDataInput
  create: InstitutionsCreateWithoutCountryInput
}

export interface ChannelsUpdateOneWithoutMessagesInput {
  create?: ChannelsCreateWithoutMessagesInput
  connect?: ChannelsWhereUniqueInput
  delete?: Boolean
  update?: ChannelsUpdateWithoutMessagesDataInput
  upsert?: ChannelsUpsertWithoutMessagesInput
}

export interface CountryUpsertWithoutInstitutionsInput {
  update: CountryUpdateWithoutInstitutionsDataInput
  create: CountryCreateWithoutInstitutionsInput
}

export interface ChannelsUpdateWithoutMessagesDataInput {
  title?: String
  avatar?: String
  type?: ChannelType
  author?: UserUpdateOneWithoutMyChannelsInput
  participants?: UserUpdateManyWithoutChannelsInput
}

export interface UserUpsertWithWhereUniqueWithoutDepartmentInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutDepartmentDataInput
  create: UserCreateWithoutDepartmentInput
}

export interface UserUpdateOneWithoutMyChannelsInput {
  create?: UserCreateWithoutMyChannelsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutMyChannelsDataInput
  upsert?: UserUpsertWithoutMyChannelsInput
}

export interface ConnectUpsertWithWhereUniqueWithoutToInput {
  where: ConnectWhereUniqueInput
  update: ConnectUpdateWithoutToDataInput
  create: ConnectCreateWithoutToInput
}

export interface UserUpdateWithoutMyChannelsDataInput {
  email?: String
  username?: String
  password?: String
  firstname?: String
  lastname?: String
  gender?: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileUpdateOneInput
  country?: CountryUpdateOneWithoutUsersInput
  institution?: InstitutionsUpdateOneWithoutUsersInput
  department?: DepartmentUpdateOneWithoutUsersInput
  interest?: InterestUpdateManyWithoutUsersInput
  messages?: MessageUpdateOneInput
  connectTo?: ConnectUpdateManyWithoutToInput
  connectFrom?: ConnectUpdateManyWithoutFromInput
  articles?: ArticleUpdateManyWithoutAuthorInput
  favourites?: ArticleUpdateManyWithoutUserFavouritedInput
  channels?: ChannelsUpdateManyWithoutParticipantsInput
  likedArticles?: ArticleUpdateManyWithoutLikesInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface ConnectUpsertWithWhereUniqueWithoutFromInput {
  where: ConnectWhereUniqueInput
  update: ConnectUpdateWithoutFromDataInput
  create: ConnectCreateWithoutFromInput
}

export interface ConnectUpdateManyWithoutToInput {
  create?: ConnectCreateWithoutToInput[] | ConnectCreateWithoutToInput
  connect?: ConnectWhereUniqueInput[] | ConnectWhereUniqueInput
  disconnect?: ConnectWhereUniqueInput[] | ConnectWhereUniqueInput
  delete?: ConnectWhereUniqueInput[] | ConnectWhereUniqueInput
  update?: ConnectUpdateWithWhereUniqueWithoutToInput[] | ConnectUpdateWithWhereUniqueWithoutToInput
  upsert?: ConnectUpsertWithWhereUniqueWithoutToInput[] | ConnectUpsertWithWhereUniqueWithoutToInput
}

export interface ChannelsUpsertWithWhereUniqueWithoutParticipantsInput {
  where: ChannelsWhereUniqueInput
  update: ChannelsUpdateWithoutParticipantsDataInput
  create: ChannelsCreateWithoutParticipantsInput
}

export interface ConnectUpdateWithWhereUniqueWithoutToInput {
  where: ConnectWhereUniqueInput
  data: ConnectUpdateWithoutToDataInput
}

export interface UserUpsertWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutChannelsDataInput
  create: UserCreateWithoutChannelsInput
}

export interface ConnectUpdateWithoutToDataInput {
  status?: Int
  from?: UserUpdateOneWithoutConnectFromInput
}

export interface UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput
  create: UserCreateWithoutCommentsInput
}

export interface UserUpdateOneWithoutConnectFromInput {
  create?: UserCreateWithoutConnectFromInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutConnectFromDataInput
  upsert?: UserUpsertWithoutConnectFromInput
}

export interface PostCreateInput {
  isPublished?: Boolean
  title: String
  text: String
}

export interface UserUpdateWithoutConnectFromDataInput {
  email?: String
  username?: String
  password?: String
  firstname?: String
  lastname?: String
  gender?: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileUpdateOneInput
  country?: CountryUpdateOneWithoutUsersInput
  institution?: InstitutionsUpdateOneWithoutUsersInput
  department?: DepartmentUpdateOneWithoutUsersInput
  interest?: InterestUpdateManyWithoutUsersInput
  messages?: MessageUpdateOneInput
  connectTo?: ConnectUpdateManyWithoutToInput
  articles?: ArticleUpdateManyWithoutAuthorInput
  favourites?: ArticleUpdateManyWithoutUserFavouritedInput
  channels?: ChannelsUpdateManyWithoutParticipantsInput
  myChannels?: ChannelsUpdateManyWithoutAuthorInput
  likedArticles?: ArticleUpdateManyWithoutLikesInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface ArticleCreateInput {
  slug?: String
  isPublished?: Boolean
  title: String
  body: String
  type?: Arcticletype
  link?: String
  description?: String
  viewCount?: Int
  tags?: ArticleCreatetagsInput
  category?: InterestCreateManyInput
  author: UserCreateOneWithoutArticlesInput
  likes?: UserCreateManyWithoutLikedArticlesInput
  comments?: CommentCreateManyWithoutArticleInput
  userFavourited?: UserCreateManyWithoutFavouritesInput
}

export interface ArticleUpdateManyWithoutAuthorInput {
  create?: ArticleCreateWithoutAuthorInput[] | ArticleCreateWithoutAuthorInput
  connect?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
  disconnect?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
  delete?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
  update?: ArticleUpdateWithWhereUniqueWithoutAuthorInput[] | ArticleUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: ArticleUpsertWithWhereUniqueWithoutAuthorInput[] | ArticleUpsertWithWhereUniqueWithoutAuthorInput
}

export interface UserCreateManyWithoutInterestInput {
  create?: UserCreateWithoutInterestInput[] | UserCreateWithoutInterestInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ArticleUpdateWithWhereUniqueWithoutAuthorInput {
  where: ArticleWhereUniqueInput
  data: ArticleUpdateWithoutAuthorDataInput
}

export interface CountryCreateWithoutUsersInput {
  shortName: String
  name: String
  institutions?: InstitutionsCreateManyWithoutCountryInput
}

export interface ArticleUpdateWithoutAuthorDataInput {
  slug?: String
  isPublished?: Boolean
  title?: String
  body?: String
  type?: Arcticletype
  link?: String
  description?: String
  viewCount?: Int
  tags?: ArticleUpdatetagsInput
  category?: InterestUpdateManyInput
  likes?: UserUpdateManyWithoutLikedArticlesInput
  comments?: CommentUpdateManyWithoutArticleInput
  userFavourited?: UserUpdateManyWithoutFavouritesInput
}

export interface UserCreateWithoutInstitutionInput {
  email: String
  username?: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileCreateOneInput
  country?: CountryCreateOneWithoutUsersInput
  department?: DepartmentCreateOneWithoutUsersInput
  interest?: InterestCreateManyWithoutUsersInput
  messages?: MessageCreateOneInput
  connectTo?: ConnectCreateManyWithoutToInput
  connectFrom?: ConnectCreateManyWithoutFromInput
  articles?: ArticleCreateManyWithoutAuthorInput
  favourites?: ArticleCreateManyWithoutUserFavouritedInput
  channels?: ChannelsCreateManyWithoutParticipantsInput
  myChannels?: ChannelsCreateManyWithoutAuthorInput
  likedArticles?: ArticleCreateManyWithoutLikesInput
  comments?: CommentCreateManyWithoutAuthorInput
}

export interface UserUpdateManyWithoutLikedArticlesInput {
  create?: UserCreateWithoutLikedArticlesInput[] | UserCreateWithoutLikedArticlesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutLikedArticlesInput[] | UserUpdateWithWhereUniqueWithoutLikedArticlesInput
  upsert?: UserUpsertWithWhereUniqueWithoutLikedArticlesInput[] | UserUpsertWithWhereUniqueWithoutLikedArticlesInput
}

export interface InstitutionsCreateWithoutDepartmentsInput {
  title: String
  type: InstitutionType
  country?: CountryCreateOneWithoutInstitutionsInput
  users?: UserCreateManyWithoutInstitutionInput
}

export interface UserUpdateWithWhereUniqueWithoutLikedArticlesInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutLikedArticlesDataInput
}

export interface UserCreateWithoutCountryInput {
  email: String
  username?: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileCreateOneInput
  institution?: InstitutionsCreateOneWithoutUsersInput
  department?: DepartmentCreateOneWithoutUsersInput
  interest?: InterestCreateManyWithoutUsersInput
  messages?: MessageCreateOneInput
  connectTo?: ConnectCreateManyWithoutToInput
  connectFrom?: ConnectCreateManyWithoutFromInput
  articles?: ArticleCreateManyWithoutAuthorInput
  favourites?: ArticleCreateManyWithoutUserFavouritedInput
  channels?: ChannelsCreateManyWithoutParticipantsInput
  myChannels?: ChannelsCreateManyWithoutAuthorInput
  likedArticles?: ArticleCreateManyWithoutLikesInput
  comments?: CommentCreateManyWithoutAuthorInput
}

export interface UserUpdateWithoutLikedArticlesDataInput {
  email?: String
  username?: String
  password?: String
  firstname?: String
  lastname?: String
  gender?: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileUpdateOneInput
  country?: CountryUpdateOneWithoutUsersInput
  institution?: InstitutionsUpdateOneWithoutUsersInput
  department?: DepartmentUpdateOneWithoutUsersInput
  interest?: InterestUpdateManyWithoutUsersInput
  messages?: MessageUpdateOneInput
  connectTo?: ConnectUpdateManyWithoutToInput
  connectFrom?: ConnectUpdateManyWithoutFromInput
  articles?: ArticleUpdateManyWithoutAuthorInput
  favourites?: ArticleUpdateManyWithoutUserFavouritedInput
  channels?: ChannelsUpdateManyWithoutParticipantsInput
  myChannels?: ChannelsUpdateManyWithoutAuthorInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface DepartmentCreateWithoutInstitutionInput {
  name: String
  users?: UserCreateManyWithoutDepartmentInput
}

export interface ConnectUpdateManyWithoutFromInput {
  create?: ConnectCreateWithoutFromInput[] | ConnectCreateWithoutFromInput
  connect?: ConnectWhereUniqueInput[] | ConnectWhereUniqueInput
  disconnect?: ConnectWhereUniqueInput[] | ConnectWhereUniqueInput
  delete?: ConnectWhereUniqueInput[] | ConnectWhereUniqueInput
  update?: ConnectUpdateWithWhereUniqueWithoutFromInput[] | ConnectUpdateWithWhereUniqueWithoutFromInput
  upsert?: ConnectUpsertWithWhereUniqueWithoutFromInput[] | ConnectUpsertWithWhereUniqueWithoutFromInput
}

export interface InterestCreateWithoutUsersInput {
  name: String
  avatar: String
}

export interface ConnectUpdateWithWhereUniqueWithoutFromInput {
  where: ConnectWhereUniqueInput
  data: ConnectUpdateWithoutFromDataInput
}

export interface ChannelsCreateWithoutMessagesInput {
  title: String
  avatar?: String
  type?: ChannelType
  author: UserCreateOneWithoutMyChannelsInput
  participants?: UserCreateManyWithoutChannelsInput
}

export interface ConnectUpdateWithoutFromDataInput {
  status?: Int
  to?: UserUpdateOneWithoutConnectToInput
}

export interface ConnectCreateWithoutToInput {
  status?: Int
  from: UserCreateOneWithoutConnectFromInput
}

export interface UserUpdateOneWithoutConnectToInput {
  create?: UserCreateWithoutConnectToInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutConnectToDataInput
  upsert?: UserUpsertWithoutConnectToInput
}

export interface ArticleCreateWithoutAuthorInput {
  slug?: String
  isPublished?: Boolean
  title: String
  body: String
  type?: Arcticletype
  link?: String
  description?: String
  viewCount?: Int
  tags?: ArticleCreatetagsInput
  category?: InterestCreateManyInput
  likes?: UserCreateManyWithoutLikedArticlesInput
  comments?: CommentCreateManyWithoutArticleInput
  userFavourited?: UserCreateManyWithoutFavouritesInput
}

export interface UserUpdateWithoutConnectToDataInput {
  email?: String
  username?: String
  password?: String
  firstname?: String
  lastname?: String
  gender?: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileUpdateOneInput
  country?: CountryUpdateOneWithoutUsersInput
  institution?: InstitutionsUpdateOneWithoutUsersInput
  department?: DepartmentUpdateOneWithoutUsersInput
  interest?: InterestUpdateManyWithoutUsersInput
  messages?: MessageUpdateOneInput
  connectFrom?: ConnectUpdateManyWithoutFromInput
  articles?: ArticleUpdateManyWithoutAuthorInput
  favourites?: ArticleUpdateManyWithoutUserFavouritedInput
  channels?: ChannelsUpdateManyWithoutParticipantsInput
  myChannels?: ChannelsUpdateManyWithoutAuthorInput
  likedArticles?: ArticleUpdateManyWithoutLikesInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface ConnectCreateWithoutFromInput {
  status?: Int
  to: UserCreateOneWithoutConnectToInput
}

export interface ArticleUpdateManyWithoutUserFavouritedInput {
  create?: ArticleCreateWithoutUserFavouritedInput[] | ArticleCreateWithoutUserFavouritedInput
  connect?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
  disconnect?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
  delete?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
  update?: ArticleUpdateWithWhereUniqueWithoutUserFavouritedInput[] | ArticleUpdateWithWhereUniqueWithoutUserFavouritedInput
  upsert?: ArticleUpsertWithWhereUniqueWithoutUserFavouritedInput[] | ArticleUpsertWithWhereUniqueWithoutUserFavouritedInput
}

export interface ArticleCreateWithoutUserFavouritedInput {
  slug?: String
  isPublished?: Boolean
  title: String
  body: String
  type?: Arcticletype
  link?: String
  description?: String
  viewCount?: Int
  tags?: ArticleCreatetagsInput
  category?: InterestCreateManyInput
  author: UserCreateOneWithoutArticlesInput
  likes?: UserCreateManyWithoutLikedArticlesInput
  comments?: CommentCreateManyWithoutArticleInput
}

export interface ArticleUpdateWithWhereUniqueWithoutUserFavouritedInput {
  where: ArticleWhereUniqueInput
  data: ArticleUpdateWithoutUserFavouritedDataInput
}

export interface LibraryWhereInput {
  AND?: LibraryWhereInput[] | LibraryWhereInput
  OR?: LibraryWhereInput[] | LibraryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  location?: LocationWhereInput
}

export interface ArticleUpdateWithoutUserFavouritedDataInput {
  slug?: String
  isPublished?: Boolean
  title?: String
  body?: String
  type?: Arcticletype
  link?: String
  description?: String
  viewCount?: Int
  tags?: ArticleUpdatetagsInput
  category?: InterestUpdateManyInput
  author?: UserUpdateOneWithoutArticlesInput
  likes?: UserUpdateManyWithoutLikedArticlesInput
  comments?: CommentUpdateManyWithoutArticleInput
}

export interface CommentSubscriptionWhereInput {
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CommentWhereInput
}

export interface UserUpdateOneWithoutArticlesInput {
  create?: UserCreateWithoutArticlesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutArticlesDataInput
  upsert?: UserUpsertWithoutArticlesInput
}

export interface FileWhereUniqueInput {
  id?: ID_Input
  secret?: String
  url?: String
}

export interface UserUpdateWithoutArticlesDataInput {
  email?: String
  username?: String
  password?: String
  firstname?: String
  lastname?: String
  gender?: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileUpdateOneInput
  country?: CountryUpdateOneWithoutUsersInput
  institution?: InstitutionsUpdateOneWithoutUsersInput
  department?: DepartmentUpdateOneWithoutUsersInput
  interest?: InterestUpdateManyWithoutUsersInput
  messages?: MessageUpdateOneInput
  connectTo?: ConnectUpdateManyWithoutToInput
  connectFrom?: ConnectUpdateManyWithoutFromInput
  favourites?: ArticleUpdateManyWithoutUserFavouritedInput
  channels?: ChannelsUpdateManyWithoutParticipantsInput
  myChannels?: ChannelsUpdateManyWithoutAuthorInput
  likedArticles?: ArticleUpdateManyWithoutLikesInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface DepartmentWhereUniqueInput {
  id?: ID_Input
}

export interface ChannelsUpdateManyWithoutParticipantsInput {
  create?: ChannelsCreateWithoutParticipantsInput[] | ChannelsCreateWithoutParticipantsInput
  connect?: ChannelsWhereUniqueInput[] | ChannelsWhereUniqueInput
  disconnect?: ChannelsWhereUniqueInput[] | ChannelsWhereUniqueInput
  delete?: ChannelsWhereUniqueInput[] | ChannelsWhereUniqueInput
  update?: ChannelsUpdateWithWhereUniqueWithoutParticipantsInput[] | ChannelsUpdateWithWhereUniqueWithoutParticipantsInput
  upsert?: ChannelsUpsertWithWhereUniqueWithoutParticipantsInput[] | ChannelsUpsertWithWhereUniqueWithoutParticipantsInput
}

export interface ConnectUpdateInput {
  status?: Int
  to?: UserUpdateOneWithoutConnectToInput
  from?: UserUpdateOneWithoutConnectFromInput
}

export interface ChannelsUpdateWithWhereUniqueWithoutParticipantsInput {
  where: ChannelsWhereUniqueInput
  data: ChannelsUpdateWithoutParticipantsDataInput
}

export interface UserUpsertWithWhereUniqueWithoutInterestInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutInterestDataInput
  create: UserCreateWithoutInterestInput
}

export interface ChannelsUpdateWithoutParticipantsDataInput {
  title?: String
  avatar?: String
  type?: ChannelType
  author?: UserUpdateOneWithoutMyChannelsInput
  messages?: MessageUpdateManyWithoutChannelInput
}

export interface InstitutionsUpsertWithoutUsersInput {
  update: InstitutionsUpdateWithoutUsersDataInput
  create: InstitutionsCreateWithoutUsersInput
}

export interface MessageUpdateManyWithoutChannelInput {
  create?: MessageCreateWithoutChannelInput[] | MessageCreateWithoutChannelInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  update?: MessageUpdateWithWhereUniqueWithoutChannelInput[] | MessageUpdateWithWhereUniqueWithoutChannelInput
  upsert?: MessageUpsertWithWhereUniqueWithoutChannelInput[] | MessageUpsertWithWhereUniqueWithoutChannelInput
}

export interface ArticleUpsertWithWhereUniqueWithoutAuthorInput {
  where: ArticleWhereUniqueInput
  update: ArticleUpdateWithoutAuthorDataInput
  create: ArticleCreateWithoutAuthorInput
}

export interface MessageUpdateWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutChannelDataInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface MessageUpdateWithoutChannelDataInput {
  text?: String
  user?: UserUpdateOneInput
}

export interface UserUpdateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutCommentsDataInput
  upsert?: UserUpsertWithoutCommentsInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface InterestCreateManyInput {
  create?: InterestCreateInput[] | InterestCreateInput
  connect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
}

export interface UserUpdateDataInput {
  email?: String
  username?: String
  password?: String
  firstname?: String
  lastname?: String
  gender?: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileUpdateOneInput
  country?: CountryUpdateOneWithoutUsersInput
  institution?: InstitutionsUpdateOneWithoutUsersInput
  department?: DepartmentUpdateOneWithoutUsersInput
  interest?: InterestUpdateManyWithoutUsersInput
  messages?: MessageUpdateOneInput
  connectTo?: ConnectUpdateManyWithoutToInput
  connectFrom?: ConnectUpdateManyWithoutFromInput
  articles?: ArticleUpdateManyWithoutAuthorInput
  favourites?: ArticleUpdateManyWithoutUserFavouritedInput
  channels?: ChannelsUpdateManyWithoutParticipantsInput
  myChannels?: ChannelsUpdateManyWithoutAuthorInput
  likedArticles?: ArticleUpdateManyWithoutLikesInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface InstitutionsCreateWithoutCountryInput {
  title: String
  type: InstitutionType
  users?: UserCreateManyWithoutInstitutionInput
  departments?: DepartmentCreateManyWithoutInstitutionInput
}

export interface ChannelsUpdateManyWithoutAuthorInput {
  create?: ChannelsCreateWithoutAuthorInput[] | ChannelsCreateWithoutAuthorInput
  connect?: ChannelsWhereUniqueInput[] | ChannelsWhereUniqueInput
  disconnect?: ChannelsWhereUniqueInput[] | ChannelsWhereUniqueInput
  delete?: ChannelsWhereUniqueInput[] | ChannelsWhereUniqueInput
  update?: ChannelsUpdateWithWhereUniqueWithoutAuthorInput[] | ChannelsUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: ChannelsUpsertWithWhereUniqueWithoutAuthorInput[] | ChannelsUpsertWithWhereUniqueWithoutAuthorInput
}

export interface CountryCreateWithoutInstitutionsInput {
  shortName: String
  name: String
  users?: UserCreateManyWithoutCountryInput
}

export interface ChannelsUpdateWithWhereUniqueWithoutAuthorInput {
  where: ChannelsWhereUniqueInput
  data: ChannelsUpdateWithoutAuthorDataInput
}

export interface UserCreateWithoutDepartmentInput {
  email: String
  username?: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileCreateOneInput
  country?: CountryCreateOneWithoutUsersInput
  institution?: InstitutionsCreateOneWithoutUsersInput
  interest?: InterestCreateManyWithoutUsersInput
  messages?: MessageCreateOneInput
  connectTo?: ConnectCreateManyWithoutToInput
  connectFrom?: ConnectCreateManyWithoutFromInput
  articles?: ArticleCreateManyWithoutAuthorInput
  favourites?: ArticleCreateManyWithoutUserFavouritedInput
  channels?: ChannelsCreateManyWithoutParticipantsInput
  myChannels?: ChannelsCreateManyWithoutAuthorInput
  likedArticles?: ArticleCreateManyWithoutLikesInput
  comments?: CommentCreateManyWithoutAuthorInput
}

export interface ChannelsUpdateWithoutAuthorDataInput {
  title?: String
  avatar?: String
  type?: ChannelType
  messages?: MessageUpdateManyWithoutChannelInput
  participants?: UserUpdateManyWithoutChannelsInput
}

export interface UserCreateWithoutMyChannelsInput {
  email: String
  username?: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileCreateOneInput
  country?: CountryCreateOneWithoutUsersInput
  institution?: InstitutionsCreateOneWithoutUsersInput
  department?: DepartmentCreateOneWithoutUsersInput
  interest?: InterestCreateManyWithoutUsersInput
  messages?: MessageCreateOneInput
  connectTo?: ConnectCreateManyWithoutToInput
  connectFrom?: ConnectCreateManyWithoutFromInput
  articles?: ArticleCreateManyWithoutAuthorInput
  favourites?: ArticleCreateManyWithoutUserFavouritedInput
  channels?: ChannelsCreateManyWithoutParticipantsInput
  likedArticles?: ArticleCreateManyWithoutLikesInput
  comments?: CommentCreateManyWithoutAuthorInput
}

export interface UserUpdateManyWithoutChannelsInput {
  create?: UserCreateWithoutChannelsInput[] | UserCreateWithoutChannelsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutChannelsInput[] | UserUpdateWithWhereUniqueWithoutChannelsInput
  upsert?: UserUpsertWithWhereUniqueWithoutChannelsInput[] | UserUpsertWithWhereUniqueWithoutChannelsInput
}

export interface UserCreateWithoutLikedArticlesInput {
  email: String
  username?: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileCreateOneInput
  country?: CountryCreateOneWithoutUsersInput
  institution?: InstitutionsCreateOneWithoutUsersInput
  department?: DepartmentCreateOneWithoutUsersInput
  interest?: InterestCreateManyWithoutUsersInput
  messages?: MessageCreateOneInput
  connectTo?: ConnectCreateManyWithoutToInput
  connectFrom?: ConnectCreateManyWithoutFromInput
  articles?: ArticleCreateManyWithoutAuthorInput
  favourites?: ArticleCreateManyWithoutUserFavouritedInput
  channels?: ChannelsCreateManyWithoutParticipantsInput
  myChannels?: ChannelsCreateManyWithoutAuthorInput
  comments?: CommentCreateManyWithoutAuthorInput
}

export interface UserUpdateWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutChannelsDataInput
}

export interface UserCreateWithoutArticlesInput {
  email: String
  username?: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileCreateOneInput
  country?: CountryCreateOneWithoutUsersInput
  institution?: InstitutionsCreateOneWithoutUsersInput
  department?: DepartmentCreateOneWithoutUsersInput
  interest?: InterestCreateManyWithoutUsersInput
  messages?: MessageCreateOneInput
  connectTo?: ConnectCreateManyWithoutToInput
  connectFrom?: ConnectCreateManyWithoutFromInput
  favourites?: ArticleCreateManyWithoutUserFavouritedInput
  channels?: ChannelsCreateManyWithoutParticipantsInput
  myChannels?: ChannelsCreateManyWithoutAuthorInput
  likedArticles?: ArticleCreateManyWithoutLikesInput
  comments?: CommentCreateManyWithoutAuthorInput
}

export interface UserUpdateWithoutChannelsDataInput {
  email?: String
  username?: String
  password?: String
  firstname?: String
  lastname?: String
  gender?: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileUpdateOneInput
  country?: CountryUpdateOneWithoutUsersInput
  institution?: InstitutionsUpdateOneWithoutUsersInput
  department?: DepartmentUpdateOneWithoutUsersInput
  interest?: InterestUpdateManyWithoutUsersInput
  messages?: MessageUpdateOneInput
  connectTo?: ConnectUpdateManyWithoutToInput
  connectFrom?: ConnectUpdateManyWithoutFromInput
  articles?: ArticleUpdateManyWithoutAuthorInput
  favourites?: ArticleUpdateManyWithoutUserFavouritedInput
  myChannels?: ChannelsUpdateManyWithoutAuthorInput
  likedArticles?: ArticleUpdateManyWithoutLikesInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface LocationSubscriptionWhereInput {
  AND?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  OR?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LocationWhereInput
}

export interface ArticleUpdateManyWithoutLikesInput {
  create?: ArticleCreateWithoutLikesInput[] | ArticleCreateWithoutLikesInput
  connect?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
  disconnect?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
  delete?: ArticleWhereUniqueInput[] | ArticleWhereUniqueInput
  update?: ArticleUpdateWithWhereUniqueWithoutLikesInput[] | ArticleUpdateWithWhereUniqueWithoutLikesInput
  upsert?: ArticleUpsertWithWhereUniqueWithoutLikesInput[] | ArticleUpsertWithWhereUniqueWithoutLikesInput
}

export interface ChannelsWhereUniqueInput {
  id?: ID_Input
}

export interface ArticleUpdateWithWhereUniqueWithoutLikesInput {
  where: ArticleWhereUniqueInput
  data: ArticleUpdateWithoutLikesDataInput
}

export interface DepartmentUpsertWithoutUsersInput {
  update: DepartmentUpdateWithoutUsersDataInput
  create: DepartmentCreateWithoutUsersInput
}

export interface ArticleUpdateWithoutLikesDataInput {
  slug?: String
  isPublished?: Boolean
  title?: String
  body?: String
  type?: Arcticletype
  link?: String
  description?: String
  viewCount?: Int
  tags?: ArticleUpdatetagsInput
  category?: InterestUpdateManyInput
  author?: UserUpdateOneWithoutArticlesInput
  comments?: CommentUpdateManyWithoutArticleInput
  userFavourited?: UserUpdateManyWithoutFavouritesInput
}

export interface ArticleUpsertWithWhereUniqueWithoutUserFavouritedInput {
  where: ArticleWhereUniqueInput
  update: ArticleUpdateWithoutUserFavouritedDataInput
  create: ArticleCreateWithoutUserFavouritedInput
}

export interface CommentUpdateManyWithoutArticleInput {
  create?: CommentCreateWithoutArticleInput[] | CommentCreateWithoutArticleInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueWithoutArticleInput[] | CommentUpdateWithWhereUniqueWithoutArticleInput
  upsert?: CommentUpsertWithWhereUniqueWithoutArticleInput[] | CommentUpsertWithWhereUniqueWithoutArticleInput
}

export interface LocationCreateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
}

export interface CommentUpdateWithWhereUniqueWithoutArticleInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateWithoutArticleDataInput
}

export interface DepartmentCreateWithoutUsersInput {
  name: String
  institution?: InstitutionsCreateOneWithoutDepartmentsInput
}

export interface CommentUpdateWithoutArticleDataInput {
  slug?: String
  body?: String
  replies?: CommentUpdateManyInput
  author?: UserUpdateOneWithoutCommentsInput
}

export interface MessageCreateInput {
  text: String
  channel: ChannelsCreateOneWithoutMessagesInput
  user: UserCreateOneInput
}

export interface CommentUpdateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueNestedInput[] | CommentUpdateWithWhereUniqueNestedInput
  upsert?: CommentUpsertWithWhereUniqueNestedInput[] | CommentUpsertWithWhereUniqueNestedInput
}

export interface UserCreateWithoutConnectToInput {
  email: String
  username?: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileCreateOneInput
  country?: CountryCreateOneWithoutUsersInput
  institution?: InstitutionsCreateOneWithoutUsersInput
  department?: DepartmentCreateOneWithoutUsersInput
  interest?: InterestCreateManyWithoutUsersInput
  messages?: MessageCreateOneInput
  connectFrom?: ConnectCreateManyWithoutFromInput
  articles?: ArticleCreateManyWithoutAuthorInput
  favourites?: ArticleCreateManyWithoutUserFavouritedInput
  channels?: ChannelsCreateManyWithoutParticipantsInput
  myChannels?: ChannelsCreateManyWithoutAuthorInput
  likedArticles?: ArticleCreateManyWithoutLikesInput
  comments?: CommentCreateManyWithoutAuthorInput
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateDataInput
}

export interface ArticleWhereUniqueInput {
  id?: ID_Input
  slug?: String
  link?: String
}

export interface CommentUpdateDataInput {
  slug?: String
  body?: String
  replies?: CommentUpdateManyInput
  article?: ArticleUpdateOneWithoutCommentsInput
  author?: UserUpdateOneWithoutCommentsInput
}

export interface ChannelsUpsertWithoutMessagesInput {
  update: ChannelsUpdateWithoutMessagesDataInput
  create: ChannelsCreateWithoutMessagesInput
}

export interface ArticleUpdateOneWithoutCommentsInput {
  create?: ArticleCreateWithoutCommentsInput
  connect?: ArticleWhereUniqueInput
  delete?: Boolean
  update?: ArticleUpdateWithoutCommentsDataInput
  upsert?: ArticleUpsertWithoutCommentsInput
}

export interface FileCreateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
}

export interface ArticleUpdateWithoutCommentsDataInput {
  slug?: String
  isPublished?: Boolean
  title?: String
  body?: String
  type?: Arcticletype
  link?: String
  description?: String
  viewCount?: Int
  tags?: ArticleUpdatetagsInput
  category?: InterestUpdateManyInput
  author?: UserUpdateOneWithoutArticlesInput
  likes?: UserUpdateManyWithoutLikedArticlesInput
  userFavourited?: UserUpdateManyWithoutFavouritesInput
}

export interface UserCreateWithoutConnectFromInput {
  email: String
  username?: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileCreateOneInput
  country?: CountryCreateOneWithoutUsersInput
  institution?: InstitutionsCreateOneWithoutUsersInput
  department?: DepartmentCreateOneWithoutUsersInput
  interest?: InterestCreateManyWithoutUsersInput
  messages?: MessageCreateOneInput
  connectTo?: ConnectCreateManyWithoutToInput
  articles?: ArticleCreateManyWithoutAuthorInput
  favourites?: ArticleCreateManyWithoutUserFavouritedInput
  channels?: ChannelsCreateManyWithoutParticipantsInput
  myChannels?: ChannelsCreateManyWithoutAuthorInput
  likedArticles?: ArticleCreateManyWithoutLikesInput
  comments?: CommentCreateManyWithoutAuthorInput
}

export interface CommentUpdateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[] | CommentCreateWithoutAuthorInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueWithoutAuthorInput[] | CommentUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput[] | CommentUpsertWithWhereUniqueWithoutAuthorInput
}

export interface UserUpdateWithoutFavouritesDataInput {
  email?: String
  username?: String
  password?: String
  firstname?: String
  lastname?: String
  gender?: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
  avatar?: FileUpdateOneInput
  country?: CountryUpdateOneWithoutUsersInput
  institution?: InstitutionsUpdateOneWithoutUsersInput
  department?: DepartmentUpdateOneWithoutUsersInput
  interest?: InterestUpdateManyWithoutUsersInput
  messages?: MessageUpdateOneInput
  connectTo?: ConnectUpdateManyWithoutToInput
  connectFrom?: ConnectUpdateManyWithoutFromInput
  articles?: ArticleUpdateManyWithoutAuthorInput
  channels?: ChannelsUpdateManyWithoutParticipantsInput
  myChannels?: ChannelsUpdateManyWithoutAuthorInput
  likedArticles?: ArticleUpdateManyWithoutLikesInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface UserUpdateWithWhereUniqueWithoutFavouritesInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutFavouritesDataInput
}

export interface UserUpdateManyWithoutFavouritesInput {
  create?: UserCreateWithoutFavouritesInput[] | UserCreateWithoutFavouritesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutFavouritesInput[] | UserUpdateWithWhereUniqueWithoutFavouritesInput
  upsert?: UserUpsertWithWhereUniqueWithoutFavouritesInput[] | UserUpsertWithWhereUniqueWithoutFavouritesInput
}

export interface InterestSubscriptionWhereInput {
  AND?: InterestSubscriptionWhereInput[] | InterestSubscriptionWhereInput
  OR?: InterestSubscriptionWhereInput[] | InterestSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: InterestWhereInput
}

export interface InstitutionsCreateWithoutUsersInput {
  title: String
  type: InstitutionType
  country?: CountryCreateOneWithoutInstitutionsInput
  departments?: DepartmentCreateManyWithoutInstitutionInput
}

export interface CommentUpsertWithWhereUniqueWithoutArticleInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateWithoutArticleDataInput
  create: CommentCreateWithoutArticleInput
}

export interface InstitutionsUpdateInput {
  title?: String
  type?: InstitutionType
  country?: CountryUpdateOneWithoutInstitutionsInput
  users?: UserUpdateManyWithoutInstitutionInput
  departments?: DepartmentUpdateManyWithoutInstitutionInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface MessagePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

export interface Article extends Node {
  id: ID_Output
  slug?: String
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  body: String
  tags?: String[]
  category?: Interest[]
  type?: Arcticletype
  link?: String
  description?: String
  author: User
  viewCount?: Int
  likes?: User[]
  comments?: Comment[]
  userFavourited?: User[]
}

export interface BatchPayload {
  count: Long
}

export interface Location extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  longitude: Float
  latitude: Float
  type: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface ConnectPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  status: Int
}

export interface Library extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  location: Location
  name: String
  description?: String
}

export interface AggregateMessage {
  count: Int
}

export interface MessageSubscriptionPayload {
  mutation: MutationType
  node?: Message
  updatedFields?: String[]
  previousValues?: MessagePreviousValues
}

export interface AggregateChannels {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface MessageEdge {
  node: Message
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ChannelsConnection {
  pageInfo: PageInfo
  edges: ChannelsEdge[]
  aggregate: AggregateChannels
}

export interface Interest extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  avatar: String
  users?: User[]
}

/*
 * An edge in a connection.

 */
export interface ConnectEdge {
  node: Connect
  cursor: String
}

export interface ChannelsPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title: String
  avatar?: String
  type?: ChannelType
}

export interface AggregateUser {
  count: Int
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface FilePreviousValues {
  id: ID_Output
  name: String
  size: Int
  secret: String
  contentType: String
  createdAt: DateTime
  updatedAt: DateTime
  url: String
}

/*
 * An edge in a connection.

 */
export interface InterestEdge {
  node: Interest
  cursor: String
}

export interface Comment extends Node {
  id: ID_Output
  slug?: String
  createdAt: DateTime
  updatedAt: DateTime
  body: String
  replies?: Comment[]
  article: Article
  author: User
}

export interface AggregateDepartment {
  count: Int
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface DepartmentConnection {
  pageInfo: PageInfo
  edges: DepartmentEdge[]
  aggregate: AggregateDepartment
}

export interface PostPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
}

/*
 * An edge in a connection.

 */
export interface InstitutionsEdge {
  node: Institutions
  cursor: String
}

export interface ChannelsSubscriptionPayload {
  mutation: MutationType
  node?: Channels
  updatedFields?: String[]
  previousValues?: ChannelsPreviousValues
}

export interface AggregateCountry {
  count: Int
}

export interface LibrarySubscriptionPayload {
  mutation: MutationType
  node?: Library
  updatedFields?: String[]
  previousValues?: LibraryPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CountryConnection {
  pageInfo: PageInfo
  edges: CountryEdge[]
  aggregate: AggregateCountry
}

export interface LibraryPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface File extends Node {
  id: ID_Output
  name: String
  size: Int
  secret: String
  contentType: String
  createdAt: DateTime
  updatedAt: DateTime
  url: String
}

export interface AggregateArticle {
  count: Int
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location
  updatedFields?: String[]
  previousValues?: LocationPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ArticleConnection {
  pageInfo: PageInfo
  edges: ArticleEdge[]
  aggregate: AggregateArticle
}

export interface LocationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  longitude: Float
  latitude: Float
  type: String
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location
  cursor: String
}

export interface Connect extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  to: User
  from: User
  status: Int
}

export interface AggregateLibrary {
  count: Int
}

export interface ArticleSubscriptionPayload {
  mutation: MutationType
  node?: Article
  updatedFields?: String[]
  previousValues?: ArticlePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface LibraryConnection {
  pageInfo: PageInfo
  edges: LibraryEdge[]
  aggregate: AggregateLibrary
}

export interface ArticlePreviousValues {
  id: ID_Output
  slug?: String
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  body: String
  tags?: String[]
  type?: Arcticletype
  link?: String
  description?: String
  viewCount?: Int
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface Channels extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title: String
  avatar?: String
  author: User
  type?: ChannelType
  messages?: Message[]
  participants?: User[]
}

export interface AggregateFile {
  count: Int
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment
  updatedFields?: String[]
  previousValues?: CommentPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface MessageConnection {
  pageInfo: PageInfo
  edges: MessageEdge[]
  aggregate: AggregateMessage
}

export interface CommentPreviousValues {
  id: ID_Output
  slug?: String
  createdAt: DateTime
  updatedAt: DateTime
  body: String
}

export interface AggregateConnect {
  count: Int
}

export interface Message extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  channel: Channels
  text: String
  user: User
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface CountrySubscriptionPayload {
  mutation: MutationType
  node?: Country
  updatedFields?: String[]
  previousValues?: CountryPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface InterestConnection {
  pageInfo: PageInfo
  edges: InterestEdge[]
  aggregate: AggregateInterest
}

export interface CountryPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  shortName: String
  name: String
}

export interface AggregateInstitutions {
  count: Int
}

export interface Department extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  institution?: Institutions
  users?: User[]
}

/*
 * An edge in a connection.

 */
export interface CountryEdge {
  node: Country
  cursor: String
}

export interface InstitutionsSubscriptionPayload {
  mutation: MutationType
  node?: Institutions
  updatedFields?: String[]
  previousValues?: InstitutionsPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: CommentEdge[]
  aggregate: AggregateComment
}

export interface InstitutionsPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title: String
  type: InstitutionType
}

export interface AggregateLocation {
  count: Int
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  username?: String
  avatar?: File
  password: String
  firstname: String
  lastname: String
  gender: String
  country?: Country
  institution?: Institutions
  department?: Department
  interest?: Interest[]
  messages?: Message
  connectTo?: Connect[]
  connectFrom?: Connect[]
  type?: String
  userType?: String
  articles?: Article[]
  favourites?: Article[]
  channels?: Channels[]
  myChannels?: Channels[]
  likedArticles?: Article[]
  comments?: Comment[]
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
}

/*
 * An edge in a connection.

 */
export interface LibraryEdge {
  node: Library
  cursor: String
}

export interface DepartmentSubscriptionPayload {
  mutation: MutationType
  node?: Department
  updatedFields?: String[]
  previousValues?: DepartmentPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface DepartmentPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
}

/*
 * An edge in a connection.

 */
export interface ChannelsEdge {
  node: Channels
  cursor: String
}

export interface Institutions extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title: String
  type: InstitutionType
  country?: Country
  users?: User[]
  departments?: Department[]
}

export interface AggregateInterest {
  count: Int
}

export interface InterestSubscriptionPayload {
  mutation: MutationType
  node?: Interest
  updatedFields?: String[]
  previousValues?: InterestPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface InstitutionsConnection {
  pageInfo: PageInfo
  edges: InstitutionsEdge[]
  aggregate: AggregateInstitutions
}

export interface InterestPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  avatar: String
}

/*
 * An edge in a connection.

 */
export interface ArticleEdge {
  node: Article
  cursor: String
}

export interface Post extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
}

export interface AggregatePost {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface ConnectConnection {
  pageInfo: PageInfo
  edges: ConnectEdge[]
  aggregate: AggregateConnect
}

export interface ConnectSubscriptionPayload {
  mutation: MutationType
  node?: Connect
  updatedFields?: String[]
  previousValues?: ConnectPreviousValues
}

export interface Country extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  shortName: String
  name: String
  institutions?: Institutions[]
  users?: User[]
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  username?: String
  password: String
  firstname: String
  lastname: String
  gender: String
  type?: String
  userType?: String
  newConnectNot?: Boolean
  newCommentNot?: Boolean
  newMessageNot?: Boolean
  newProfileNot?: Boolean
  completedProfile?: Int
  verified?: Boolean
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface DepartmentEdge {
  node: Department
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo: PageInfo
  edges: LocationEdge[]
  aggregate: AggregateLocation
}

export interface AggregateComment {
  count: Int
}

/*
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  files: (args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<File[]>
  posts: (args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Post[]>
  libraries: (args: { where?: LibraryWhereInput, orderBy?: LibraryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Library[]>
  locations: (args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Location[]>
  articles: (args: { where?: ArticleWhereInput, orderBy?: ArticleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Article[]>
  comments: (args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Comment[]>
  countries: (args: { where?: CountryWhereInput, orderBy?: CountryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Country[]>
  institutionses: (args: { where?: InstitutionsWhereInput, orderBy?: InstitutionsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Institutions[]>
  departments: (args: { where?: DepartmentWhereInput, orderBy?: DepartmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Department[]>
  interests: (args: { where?: InterestWhereInput, orderBy?: InterestOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Interest[]>
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  connects: (args: { where?: ConnectWhereInput, orderBy?: ConnectOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Connect[]>
  channelses: (args: { where?: ChannelsWhereInput, orderBy?: ChannelsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Channels[]>
  messages: (args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Message[]>
  file: (args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<File | null>
  post: (args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Post | null>
  library: (args: { where: LibraryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Library | null>
  location: (args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Location | null>
  article: (args: { where: ArticleWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Article | null>
  comment: (args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Comment | null>
  country: (args: { where: CountryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Country | null>
  institutions: (args: { where: InstitutionsWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Institutions | null>
  department: (args: { where: DepartmentWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Department | null>
  interest: (args: { where: InterestWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Interest | null>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  connect: (args: { where: ConnectWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Connect | null>
  channels: (args: { where: ChannelsWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Channels | null>
  message: (args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Message | null>
  filesConnection: (args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<FileConnection>
  postsConnection: (args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<PostConnection>
  librariesConnection: (args: { where?: LibraryWhereInput, orderBy?: LibraryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<LibraryConnection>
  locationsConnection: (args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<LocationConnection>
  articlesConnection: (args: { where?: ArticleWhereInput, orderBy?: ArticleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ArticleConnection>
  commentsConnection: (args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CommentConnection>
  countriesConnection: (args: { where?: CountryWhereInput, orderBy?: CountryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CountryConnection>
  institutionsesConnection: (args: { where?: InstitutionsWhereInput, orderBy?: InstitutionsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<InstitutionsConnection>
  departmentsConnection: (args: { where?: DepartmentWhereInput, orderBy?: DepartmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<DepartmentConnection>
  interestsConnection: (args: { where?: InterestWhereInput, orderBy?: InterestOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<InterestConnection>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  connectsConnection: (args: { where?: ConnectWhereInput, orderBy?: ConnectOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ConnectConnection>
  channelsesConnection: (args: { where?: ChannelsWhereInput, orderBy?: ChannelsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ChannelsConnection>
  messagesConnection: (args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<MessageConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createFile: (args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string) => Promise<File>
  createPost: (args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Post>
  createLibrary: (args: { data: LibraryCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Library>
  createLocation: (args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Location>
  createArticle: (args: { data: ArticleCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Article>
  createComment: (args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Comment>
  createCountry: (args: { data: CountryCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Country>
  createInstitutions: (args: { data: InstitutionsCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Institutions>
  createDepartment: (args: { data: DepartmentCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Department>
  createInterest: (args: { data: InterestCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Interest>
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  createConnect: (args: { data: ConnectCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Connect>
  createChannels: (args: { data: ChannelsCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Channels>
  createMessage: (args: { data: MessageCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Message>
  updateFile: (args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<File | null>
  updatePost: (args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Post | null>
  updateLibrary: (args: { data: LibraryUpdateInput, where: LibraryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Library | null>
  updateLocation: (args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Location | null>
  updateArticle: (args: { data: ArticleUpdateInput, where: ArticleWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Article | null>
  updateComment: (args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Comment | null>
  updateCountry: (args: { data: CountryUpdateInput, where: CountryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Country | null>
  updateInstitutions: (args: { data: InstitutionsUpdateInput, where: InstitutionsWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Institutions | null>
  updateDepartment: (args: { data: DepartmentUpdateInput, where: DepartmentWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Department | null>
  updateInterest: (args: { data: InterestUpdateInput, where: InterestWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Interest | null>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateConnect: (args: { data: ConnectUpdateInput, where: ConnectWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Connect | null>
  updateChannels: (args: { data: ChannelsUpdateInput, where: ChannelsWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Channels | null>
  updateMessage: (args: { data: MessageUpdateInput, where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Message | null>
  deleteFile: (args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<File | null>
  deletePost: (args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Post | null>
  deleteLibrary: (args: { where: LibraryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Library | null>
  deleteLocation: (args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Location | null>
  deleteArticle: (args: { where: ArticleWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Article | null>
  deleteComment: (args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Comment | null>
  deleteCountry: (args: { where: CountryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Country | null>
  deleteInstitutions: (args: { where: InstitutionsWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Institutions | null>
  deleteDepartment: (args: { where: DepartmentWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Department | null>
  deleteInterest: (args: { where: InterestWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Interest | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteConnect: (args: { where: ConnectWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Connect | null>
  deleteChannels: (args: { where: ChannelsWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Channels | null>
  deleteMessage: (args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Message | null>
  upsertFile: (args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<File>
  upsertPost: (args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Post>
  upsertLibrary: (args: { where: LibraryWhereUniqueInput, create: LibraryCreateInput, update: LibraryUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Library>
  upsertLocation: (args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Location>
  upsertArticle: (args: { where: ArticleWhereUniqueInput, create: ArticleCreateInput, update: ArticleUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Article>
  upsertComment: (args: { where: CommentWhereUniqueInput, create: CommentCreateInput, update: CommentUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Comment>
  upsertCountry: (args: { where: CountryWhereUniqueInput, create: CountryCreateInput, update: CountryUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Country>
  upsertInstitutions: (args: { where: InstitutionsWhereUniqueInput, create: InstitutionsCreateInput, update: InstitutionsUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Institutions>
  upsertDepartment: (args: { where: DepartmentWhereUniqueInput, create: DepartmentCreateInput, update: DepartmentUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Department>
  upsertInterest: (args: { where: InterestWhereUniqueInput, create: InterestCreateInput, update: InterestUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Interest>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  upsertConnect: (args: { where: ConnectWhereUniqueInput, create: ConnectCreateInput, update: ConnectUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Connect>
  upsertChannels: (args: { where: ChannelsWhereUniqueInput, create: ChannelsCreateInput, update: ChannelsUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Channels>
  upsertMessage: (args: { where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Message>
  updateManyFiles: (args: { data: FileUpdateInput, where: FileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyPosts: (args: { data: PostUpdateInput, where: PostWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyLibraries: (args: { data: LibraryUpdateInput, where: LibraryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyLocations: (args: { data: LocationUpdateInput, where: LocationWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyArticles: (args: { data: ArticleUpdateInput, where: ArticleWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyComments: (args: { data: CommentUpdateInput, where: CommentWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyCountries: (args: { data: CountryUpdateInput, where: CountryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyInstitutionses: (args: { data: InstitutionsUpdateInput, where: InstitutionsWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyDepartments: (args: { data: DepartmentUpdateInput, where: DepartmentWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyInterests: (args: { data: InterestUpdateInput, where: InterestWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyUsers: (args: { data: UserUpdateInput, where: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyConnects: (args: { data: ConnectUpdateInput, where: ConnectWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyChannelses: (args: { data: ChannelsUpdateInput, where: ChannelsWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyMessages: (args: { data: MessageUpdateInput, where: MessageWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyFiles: (args: { where: FileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyPosts: (args: { where: PostWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyLibraries: (args: { where: LibraryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyLocations: (args: { where: LocationWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyArticles: (args: { where: ArticleWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyComments: (args: { where: CommentWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyCountries: (args: { where: CountryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyInstitutionses: (args: { where: InstitutionsWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyDepartments: (args: { where: DepartmentWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyInterests: (args: { where: InterestWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyConnects: (args: { where: ConnectWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyChannelses: (args: { where: ChannelsWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyMessages: (args: { where: MessageWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  file: (args: { where?: FileSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<FileSubscriptionPayload>>
  post: (args: { where?: PostSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<PostSubscriptionPayload>>
  library: (args: { where?: LibrarySubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<LibrarySubscriptionPayload>>
  location: (args: { where?: LocationSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<LocationSubscriptionPayload>>
  article: (args: { where?: ArticleSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ArticleSubscriptionPayload>>
  comment: (args: { where?: CommentSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<CommentSubscriptionPayload>>
  country: (args: { where?: CountrySubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<CountrySubscriptionPayload>>
  institutions: (args: { where?: InstitutionsSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<InstitutionsSubscriptionPayload>>
  department: (args: { where?: DepartmentSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<DepartmentSubscriptionPayload>>
  interest: (args: { where?: InterestSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<InterestSubscriptionPayload>>
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
  connect: (args: { where?: ConnectSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ConnectSubscriptionPayload>>
  channels: (args: { where?: ChannelsSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ChannelsSubscriptionPayload>>
  message: (args: { where?: MessageSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<MessageSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    File: (where: FileWhereInput): Promise<boolean> => super.existsDelegate('query', 'files', { where }, {}, '{ id }'),
    Post: (where: PostWhereInput): Promise<boolean> => super.existsDelegate('query', 'posts', { where }, {}, '{ id }'),
    Library: (where: LibraryWhereInput): Promise<boolean> => super.existsDelegate('query', 'libraries', { where }, {}, '{ id }'),
    Location: (where: LocationWhereInput): Promise<boolean> => super.existsDelegate('query', 'locations', { where }, {}, '{ id }'),
    Article: (where: ArticleWhereInput): Promise<boolean> => super.existsDelegate('query', 'articles', { where }, {}, '{ id }'),
    Comment: (where: CommentWhereInput): Promise<boolean> => super.existsDelegate('query', 'comments', { where }, {}, '{ id }'),
    Country: (where: CountryWhereInput): Promise<boolean> => super.existsDelegate('query', 'countries', { where }, {}, '{ id }'),
    Institutions: (where: InstitutionsWhereInput): Promise<boolean> => super.existsDelegate('query', 'institutionses', { where }, {}, '{ id }'),
    Department: (where: DepartmentWhereInput): Promise<boolean> => super.existsDelegate('query', 'departments', { where }, {}, '{ id }'),
    Interest: (where: InterestWhereInput): Promise<boolean> => super.existsDelegate('query', 'interests', { where }, {}, '{ id }'),
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }'),
    Connect: (where: ConnectWhereInput): Promise<boolean> => super.existsDelegate('query', 'connects', { where }, {}, '{ id }'),
    Channels: (where: ChannelsWhereInput): Promise<boolean> => super.existsDelegate('query', 'channelses', { where }, {}, '{ id }'),
    Message: (where: MessageWhereInput): Promise<boolean> => super.existsDelegate('query', 'messages', { where }, {}, '{ id }')
  }

  query: Query = {
    files: (args, info): Promise<File[]> => super.delegate('query', 'files', args, {}, info),
    posts: (args, info): Promise<Post[]> => super.delegate('query', 'posts', args, {}, info),
    libraries: (args, info): Promise<Library[]> => super.delegate('query', 'libraries', args, {}, info),
    locations: (args, info): Promise<Location[]> => super.delegate('query', 'locations', args, {}, info),
    articles: (args, info): Promise<Article[]> => super.delegate('query', 'articles', args, {}, info),
    comments: (args, info): Promise<Comment[]> => super.delegate('query', 'comments', args, {}, info),
    countries: (args, info): Promise<Country[]> => super.delegate('query', 'countries', args, {}, info),
    institutionses: (args, info): Promise<Institutions[]> => super.delegate('query', 'institutionses', args, {}, info),
    departments: (args, info): Promise<Department[]> => super.delegate('query', 'departments', args, {}, info),
    interests: (args, info): Promise<Interest[]> => super.delegate('query', 'interests', args, {}, info),
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    connects: (args, info): Promise<Connect[]> => super.delegate('query', 'connects', args, {}, info),
    channelses: (args, info): Promise<Channels[]> => super.delegate('query', 'channelses', args, {}, info),
    messages: (args, info): Promise<Message[]> => super.delegate('query', 'messages', args, {}, info),
    file: (args, info): Promise<File | null> => super.delegate('query', 'file', args, {}, info),
    post: (args, info): Promise<Post | null> => super.delegate('query', 'post', args, {}, info),
    library: (args, info): Promise<Library | null> => super.delegate('query', 'library', args, {}, info),
    location: (args, info): Promise<Location | null> => super.delegate('query', 'location', args, {}, info),
    article: (args, info): Promise<Article | null> => super.delegate('query', 'article', args, {}, info),
    comment: (args, info): Promise<Comment | null> => super.delegate('query', 'comment', args, {}, info),
    country: (args, info): Promise<Country | null> => super.delegate('query', 'country', args, {}, info),
    institutions: (args, info): Promise<Institutions | null> => super.delegate('query', 'institutions', args, {}, info),
    department: (args, info): Promise<Department | null> => super.delegate('query', 'department', args, {}, info),
    interest: (args, info): Promise<Interest | null> => super.delegate('query', 'interest', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    connect: (args, info): Promise<Connect | null> => super.delegate('query', 'connect', args, {}, info),
    channels: (args, info): Promise<Channels | null> => super.delegate('query', 'channels', args, {}, info),
    message: (args, info): Promise<Message | null> => super.delegate('query', 'message', args, {}, info),
    filesConnection: (args, info): Promise<FileConnection> => super.delegate('query', 'filesConnection', args, {}, info),
    postsConnection: (args, info): Promise<PostConnection> => super.delegate('query', 'postsConnection', args, {}, info),
    librariesConnection: (args, info): Promise<LibraryConnection> => super.delegate('query', 'librariesConnection', args, {}, info),
    locationsConnection: (args, info): Promise<LocationConnection> => super.delegate('query', 'locationsConnection', args, {}, info),
    articlesConnection: (args, info): Promise<ArticleConnection> => super.delegate('query', 'articlesConnection', args, {}, info),
    commentsConnection: (args, info): Promise<CommentConnection> => super.delegate('query', 'commentsConnection', args, {}, info),
    countriesConnection: (args, info): Promise<CountryConnection> => super.delegate('query', 'countriesConnection', args, {}, info),
    institutionsesConnection: (args, info): Promise<InstitutionsConnection> => super.delegate('query', 'institutionsesConnection', args, {}, info),
    departmentsConnection: (args, info): Promise<DepartmentConnection> => super.delegate('query', 'departmentsConnection', args, {}, info),
    interestsConnection: (args, info): Promise<InterestConnection> => super.delegate('query', 'interestsConnection', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    connectsConnection: (args, info): Promise<ConnectConnection> => super.delegate('query', 'connectsConnection', args, {}, info),
    channelsesConnection: (args, info): Promise<ChannelsConnection> => super.delegate('query', 'channelsesConnection', args, {}, info),
    messagesConnection: (args, info): Promise<MessageConnection> => super.delegate('query', 'messagesConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createFile: (args, info): Promise<File> => super.delegate('mutation', 'createFile', args, {}, info),
    createPost: (args, info): Promise<Post> => super.delegate('mutation', 'createPost', args, {}, info),
    createLibrary: (args, info): Promise<Library> => super.delegate('mutation', 'createLibrary', args, {}, info),
    createLocation: (args, info): Promise<Location> => super.delegate('mutation', 'createLocation', args, {}, info),
    createArticle: (args, info): Promise<Article> => super.delegate('mutation', 'createArticle', args, {}, info),
    createComment: (args, info): Promise<Comment> => super.delegate('mutation', 'createComment', args, {}, info),
    createCountry: (args, info): Promise<Country> => super.delegate('mutation', 'createCountry', args, {}, info),
    createInstitutions: (args, info): Promise<Institutions> => super.delegate('mutation', 'createInstitutions', args, {}, info),
    createDepartment: (args, info): Promise<Department> => super.delegate('mutation', 'createDepartment', args, {}, info),
    createInterest: (args, info): Promise<Interest> => super.delegate('mutation', 'createInterest', args, {}, info),
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    createConnect: (args, info): Promise<Connect> => super.delegate('mutation', 'createConnect', args, {}, info),
    createChannels: (args, info): Promise<Channels> => super.delegate('mutation', 'createChannels', args, {}, info),
    createMessage: (args, info): Promise<Message> => super.delegate('mutation', 'createMessage', args, {}, info),
    updateFile: (args, info): Promise<File | null> => super.delegate('mutation', 'updateFile', args, {}, info),
    updatePost: (args, info): Promise<Post | null> => super.delegate('mutation', 'updatePost', args, {}, info),
    updateLibrary: (args, info): Promise<Library | null> => super.delegate('mutation', 'updateLibrary', args, {}, info),
    updateLocation: (args, info): Promise<Location | null> => super.delegate('mutation', 'updateLocation', args, {}, info),
    updateArticle: (args, info): Promise<Article | null> => super.delegate('mutation', 'updateArticle', args, {}, info),
    updateComment: (args, info): Promise<Comment | null> => super.delegate('mutation', 'updateComment', args, {}, info),
    updateCountry: (args, info): Promise<Country | null> => super.delegate('mutation', 'updateCountry', args, {}, info),
    updateInstitutions: (args, info): Promise<Institutions | null> => super.delegate('mutation', 'updateInstitutions', args, {}, info),
    updateDepartment: (args, info): Promise<Department | null> => super.delegate('mutation', 'updateDepartment', args, {}, info),
    updateInterest: (args, info): Promise<Interest | null> => super.delegate('mutation', 'updateInterest', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    updateConnect: (args, info): Promise<Connect | null> => super.delegate('mutation', 'updateConnect', args, {}, info),
    updateChannels: (args, info): Promise<Channels | null> => super.delegate('mutation', 'updateChannels', args, {}, info),
    updateMessage: (args, info): Promise<Message | null> => super.delegate('mutation', 'updateMessage', args, {}, info),
    deleteFile: (args, info): Promise<File | null> => super.delegate('mutation', 'deleteFile', args, {}, info),
    deletePost: (args, info): Promise<Post | null> => super.delegate('mutation', 'deletePost', args, {}, info),
    deleteLibrary: (args, info): Promise<Library | null> => super.delegate('mutation', 'deleteLibrary', args, {}, info),
    deleteLocation: (args, info): Promise<Location | null> => super.delegate('mutation', 'deleteLocation', args, {}, info),
    deleteArticle: (args, info): Promise<Article | null> => super.delegate('mutation', 'deleteArticle', args, {}, info),
    deleteComment: (args, info): Promise<Comment | null> => super.delegate('mutation', 'deleteComment', args, {}, info),
    deleteCountry: (args, info): Promise<Country | null> => super.delegate('mutation', 'deleteCountry', args, {}, info),
    deleteInstitutions: (args, info): Promise<Institutions | null> => super.delegate('mutation', 'deleteInstitutions', args, {}, info),
    deleteDepartment: (args, info): Promise<Department | null> => super.delegate('mutation', 'deleteDepartment', args, {}, info),
    deleteInterest: (args, info): Promise<Interest | null> => super.delegate('mutation', 'deleteInterest', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteConnect: (args, info): Promise<Connect | null> => super.delegate('mutation', 'deleteConnect', args, {}, info),
    deleteChannels: (args, info): Promise<Channels | null> => super.delegate('mutation', 'deleteChannels', args, {}, info),
    deleteMessage: (args, info): Promise<Message | null> => super.delegate('mutation', 'deleteMessage', args, {}, info),
    upsertFile: (args, info): Promise<File> => super.delegate('mutation', 'upsertFile', args, {}, info),
    upsertPost: (args, info): Promise<Post> => super.delegate('mutation', 'upsertPost', args, {}, info),
    upsertLibrary: (args, info): Promise<Library> => super.delegate('mutation', 'upsertLibrary', args, {}, info),
    upsertLocation: (args, info): Promise<Location> => super.delegate('mutation', 'upsertLocation', args, {}, info),
    upsertArticle: (args, info): Promise<Article> => super.delegate('mutation', 'upsertArticle', args, {}, info),
    upsertComment: (args, info): Promise<Comment> => super.delegate('mutation', 'upsertComment', args, {}, info),
    upsertCountry: (args, info): Promise<Country> => super.delegate('mutation', 'upsertCountry', args, {}, info),
    upsertInstitutions: (args, info): Promise<Institutions> => super.delegate('mutation', 'upsertInstitutions', args, {}, info),
    upsertDepartment: (args, info): Promise<Department> => super.delegate('mutation', 'upsertDepartment', args, {}, info),
    upsertInterest: (args, info): Promise<Interest> => super.delegate('mutation', 'upsertInterest', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    upsertConnect: (args, info): Promise<Connect> => super.delegate('mutation', 'upsertConnect', args, {}, info),
    upsertChannels: (args, info): Promise<Channels> => super.delegate('mutation', 'upsertChannels', args, {}, info),
    upsertMessage: (args, info): Promise<Message> => super.delegate('mutation', 'upsertMessage', args, {}, info),
    updateManyFiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyFiles', args, {}, info),
    updateManyPosts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyPosts', args, {}, info),
    updateManyLibraries: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyLibraries', args, {}, info),
    updateManyLocations: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyLocations', args, {}, info),
    updateManyArticles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyArticles', args, {}, info),
    updateManyComments: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyComments', args, {}, info),
    updateManyCountries: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyCountries', args, {}, info),
    updateManyInstitutionses: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyInstitutionses', args, {}, info),
    updateManyDepartments: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyDepartments', args, {}, info),
    updateManyInterests: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyInterests', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    updateManyConnects: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyConnects', args, {}, info),
    updateManyChannelses: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyChannelses', args, {}, info),
    updateManyMessages: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyMessages', args, {}, info),
    deleteManyFiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyFiles', args, {}, info),
    deleteManyPosts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyPosts', args, {}, info),
    deleteManyLibraries: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyLibraries', args, {}, info),
    deleteManyLocations: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyLocations', args, {}, info),
    deleteManyArticles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyArticles', args, {}, info),
    deleteManyComments: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyComments', args, {}, info),
    deleteManyCountries: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyCountries', args, {}, info),
    deleteManyInstitutionses: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyInstitutionses', args, {}, info),
    deleteManyDepartments: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyDepartments', args, {}, info),
    deleteManyInterests: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyInterests', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info),
    deleteManyConnects: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyConnects', args, {}, info),
    deleteManyChannelses: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyChannelses', args, {}, info),
    deleteManyMessages: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyMessages', args, {}, info)
  }

  subscription: Subscription = {
    file: (args, infoOrQuery): Promise<AsyncIterator<FileSubscriptionPayload>> => super.delegateSubscription('file', args, {}, infoOrQuery),
    post: (args, infoOrQuery): Promise<AsyncIterator<PostSubscriptionPayload>> => super.delegateSubscription('post', args, {}, infoOrQuery),
    library: (args, infoOrQuery): Promise<AsyncIterator<LibrarySubscriptionPayload>> => super.delegateSubscription('library', args, {}, infoOrQuery),
    location: (args, infoOrQuery): Promise<AsyncIterator<LocationSubscriptionPayload>> => super.delegateSubscription('location', args, {}, infoOrQuery),
    article: (args, infoOrQuery): Promise<AsyncIterator<ArticleSubscriptionPayload>> => super.delegateSubscription('article', args, {}, infoOrQuery),
    comment: (args, infoOrQuery): Promise<AsyncIterator<CommentSubscriptionPayload>> => super.delegateSubscription('comment', args, {}, infoOrQuery),
    country: (args, infoOrQuery): Promise<AsyncIterator<CountrySubscriptionPayload>> => super.delegateSubscription('country', args, {}, infoOrQuery),
    institutions: (args, infoOrQuery): Promise<AsyncIterator<InstitutionsSubscriptionPayload>> => super.delegateSubscription('institutions', args, {}, infoOrQuery),
    department: (args, infoOrQuery): Promise<AsyncIterator<DepartmentSubscriptionPayload>> => super.delegateSubscription('department', args, {}, infoOrQuery),
    interest: (args, infoOrQuery): Promise<AsyncIterator<InterestSubscriptionPayload>> => super.delegateSubscription('interest', args, {}, infoOrQuery),
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery),
    connect: (args, infoOrQuery): Promise<AsyncIterator<ConnectSubscriptionPayload>> => super.delegateSubscription('connect', args, {}, infoOrQuery),
    channels: (args, infoOrQuery): Promise<AsyncIterator<ChannelsSubscriptionPayload>> => super.delegateSubscription('channels', args, {}, infoOrQuery),
    message: (args, infoOrQuery): Promise<AsyncIterator<MessageSubscriptionPayload>> => super.delegateSubscription('message', args, {}, infoOrQuery)
  }
}