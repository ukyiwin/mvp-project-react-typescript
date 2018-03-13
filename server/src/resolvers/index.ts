import { Query } from './Query';
import { auth } from './Mutation/auth';
import { post } from './Mutation/post';
import { user } from './Mutation/user';
import { chat } from './Mutation/chat';
import { article } from './Mutation/article';
import { AuthPayload } from './AuthPayload';

export default {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...user,
    ...chat,
    ...article
  },
  AuthPayload,
};
