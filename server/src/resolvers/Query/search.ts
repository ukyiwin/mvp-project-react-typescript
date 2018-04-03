import { getUserId, Context } from '../../utils';

export const QuerySearch = {

  searchByTags(parent, {text}, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.messages({
      where: {
        channel: {
          id: text
        }
      }
    },                           info);
  },

  searchInterest(parent, {text}, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.interests({
      where: {
        name_contains: text
      },
      orderBy: 'name_ASC'
    },                            info);
  },

  searchLibrary(parent, {text}, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.libraries({
      where: {
        name_contains: text,
        OR: {
          description_contains: text
        }
      }
    },                            info);
  },

  searchArticle(parent, {text}, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.articles({
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
    },                           info);
  },

  searchUser(parent, {text}, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.users({
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
    },                        info);
  },

  async search(parent, {text}, ctx: Context, info) {
    const id = getUserId(ctx);

    const articles = await ctx.db.query.articles({
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
    },                                           info);

    const users = await ctx.db.query.users({
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
    },                                     info);

    const interest = await ctx.db.query.interests({
      where: {
        name_contains: text
      },
      orderBy: 'name_ASC'
    },                                            info);

    const libraries = await ctx.db.query.libraries({
      where: {
        name_contains: text,
        OR: {
          description_contains: text
        }
      }
    },                                             info);

    return {
      articles,
      users,
      interest,
      libraries
    };
  }
};
