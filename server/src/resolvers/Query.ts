import { getUserId, Context } from '../utils'

export const Query = {
  feed(parent, args, ctx: Context, info) {
    return ctx.db.query.posts({ where: { isPublished: true } }, info)
  },

  drafts(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.posts({ where }, info);
  },

  post(parent, { id }, ctx: Context, info) {
    return ctx.db.query.post({ where: { id: id } }, info);
  },

  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  },

  async userExist(parent, { email }, ctx: Context, info) {
    const user = await ctx.db.exists.User({email: email});

    if (user) {
      return true;
    } else {
      return false;
    }
  },

  articles(parent, args, ctx: Context, info) {
    return ctx.db.query.articles({}, info);
  },

  getArticleBySlug(parent, { slug }, ctx: Context, info) {
    return ctx.db.query.article({where: {
      id: slug
    }}, info);
  },

  getArticleById(parent, { id }, ctx: Context, info) {
    return ctx.db.query.article({where: {
      id: id
    }}, info);
  },

  getDepartment(parent, { idInstitution }, ctx: Context, info) {
    return ctx.db.query.departments({ where: {
      institution: {
        id: idInstitution
      }
    }}, info);
  },
  getInstitution(parent, { idCountry }, ctx: Context, info) {
    return ctx.db.query.institutionses({ where: {
      country: {
        id: idCountry
      }
    }}, info);
  },

  getCountry(parent, args, ctx: Context, info) {
    return ctx.db.query.countries({}, info);
  },

  allInterest(parent, args, ctx: Context, info) {
    return ctx.db.query.interests({}, info);
  },

  getChannelChat(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.channelses({
      where: {
        participants_every: {
          id
        },
        type: 'Channel'
      }
    }, info);
  },

  getDirectChat(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.channelses({
      where: {
        participants_every: {
          id
        },
        type: 'Direct'
      }
    }, info);
  },

  getAllChat(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.channelses({
      where: {
        participants_every: {
          id
        },
      }
    }, info);
  },

  getMessages(parent, {channelId}, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.messages({
      where: {
        cahnnel: {
          id: channelId
        }
      }
    }, info);
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
