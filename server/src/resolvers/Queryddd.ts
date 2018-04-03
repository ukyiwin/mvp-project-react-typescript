import { getUserId, Context } from '../utils';

export const Query = {
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

  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  },

  async userExist(parent, { email }, ctx: Context, info) {
    const user = await ctx.db.exists.User({email});

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
    }},                         info);
  },

  getArticleById(parent, { id }, ctx: Context, info) {
    return ctx.db.query.article({where: {
      id
    }},                         info);
  },

  getDepartment(parent, { idInstitution }, ctx: Context, info) {
    return ctx.db.query.departments({ where: {
      institution: {
        id: idInstitution
      }
    }},                             info);
  },
  getInstitution(parent, { idCountry }, ctx: Context, info) {
    return ctx.db.query.institutionses({ where: {
      country: {
        id: idCountry
      }
    }},                                info);
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
    },                             info);
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
    },                             info);
  },

  getAllChat(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.channelses({
      where: {
        participants_every: {
          id
        },
      }
    },                             info);
  },

  getMessages(parent, {channelId}, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.messages({
      where: {
        cahnnel: {
          id: channelId
        }
      }
    },                           info);
  },

  searchByTags(parent, {channelId}, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.messages({
      where: {
        cahnnel: {
          id: channelId
        }
      }
    },                           info);
  },

  searchByInterest(parent, {channelId}, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.messages({
      where: {
        cahnnel: {
          id: channelId
        }
      }
    },                           info);
  },

  searchByArticle(parent, {channelId}, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.messages({
      where: {
        cahnnel: {
          id: channelId
        }
      }
    },                           info);
  },

  searchByUser(parent, {text}, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.messages({
      where: {
        cahnnel: {
          id: text
        }
      }
    },                           info);
  },

  search(parent, {text}, ctx: Context, info) {
    const id = getUserId(ctx);
    const articles = ctx.db.query.articles({
      where: {
        OR: {
          body_contains: text,
          OR: {
            slug_contains: text,
            OR: {
              title_contains: text,
              OR: {
                description_contains: text
              }
            }
          }
        }
      },
      orderBy: 'viewCount_DESC'
    },                                     info);

    const users = ctx.db.query.users({
      where: {
        id_not: id,
        OR: {
          firstname_contains: text,
          OR: {
            lastname_contains: text,
            OR: {
              username_contains: text,
              OR: {
                email_contains: text
              }
            }
          }
        }
      },
      orderBy: 'username_ASC'
    },                               info);

    const interest = ctx.db.query.interests({
      where: {
        name_contains: text
      },
      orderBy: 'name_ASC'
    },                                      info);

    const libraries = ctx.db.query.libraries({
      where: {
        name_contains: text,
        OR: {
          description_contains: text
        }
      }
    },                                       info);

    return {
      articles,
      users,
      interest,
      libraries
    };
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
