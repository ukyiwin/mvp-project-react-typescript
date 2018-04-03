import { QueryUser } from './user';
import { QueryChannels } from './channel';
import { QueryConnection } from './connection';
import { QueryLibrary } from './library';
import { QueryMessage } from './message';
import { QuerySearch } from './search';
import { QueryArticle } from './article';

export default {
  ...QueryArticle,
  ...QueryChannels,
  ...QueryUser,
  ...QueryConnection,
  ...QueryLibrary,
  ...QueryMessage,
  ...QuerySearch
};