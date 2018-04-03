import { getUserId, Context } from '../../utils';

export const QueryArticle = {
  feed(parent, args, ctx: Context, info) {
    return ctx.db.query.posts({ where: { isPublished: true } }, info);
  },

  drafts(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);

    const where = {
      isPublished: false,
      author: {
        id
      }
    };

    return ctx.db.query.posts({ where }, info);
  },

  post(parent, { id }, ctx: Context, info) {
    return ctx.db.query.post({ where: { id } }, info);
  },

  articles(parent, args, ctx: Context, info) {
    return ctx.db.query.articles({}, info);
  },

  getArticleBySlug(parent, { slug }, ctx: Context, info) {
    return ctx.db.query.article({where: {
      id: slug
    }},                         info);
  },

  getArticleById(parent, { id }, ctx: Context, info) {
    return ctx.db.query.article({where: {
      id
    }},                         info);
  },

  getArticlesByInterest(parent, { text }, ctx: Context, info) {
    return ctx.db.query.articles({where: {
      category_every: text
    }},                          info);
  },

  getArticlesByTags(parent, { text }, ctx: Context, info) {
    return ctx.db.query.articles({where: {
      category_every: text
    }},                          info);
  },

  comments(parent, { articleId }, ctx: Context, info) {
    return ctx.db.query.comments({where: {
      article: {
        id: articleId
      }
    }},                          info);
  },

  /*
  getLibrary(parent, {channelId}, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.messages({
      where: {
        cahnnel: {
          id: channelId
        }
      }
    }, info);
  },

  getConnections(parent, {channelId}, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.messages({
      where: {
        cahnnel: {
          id: channelId
        }
      }
    }, info);
  }
  */
};
