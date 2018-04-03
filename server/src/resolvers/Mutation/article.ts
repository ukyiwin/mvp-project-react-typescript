import { getUserId, Context } from '../../utils';

export const article = {
  // tslint:disable-next-line:typedef
  async createArticle(parent, { title, body, tags, category }, ctx: Context, info) {
    const userId = getUserId(ctx);

    const temp = [];
    category.map((interest) => {
      if (interest !== '1') {
        const tmp = {id: interest};
        temp.push(tmp);
      }
    });

    return ctx.db.mutation.createArticle(
      {
        data: {
          author: {
            connect: {
              id: userId
            }
          },
          body,
          title,
          category: {
            connect: [...temp]
          },
          tags,
          type: 'Internal',
          isPublished: true
        }
      },
      info
    );
  },

  // tslint:disable-next-line:typedef
  async publishArticle(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);

    const dataExists = await ctx.db.exists.Article({
      id,
      author: {
        id: userId
      }
    });

    if (!dataExists) {
      throw new Error(`Article not found or you are not the author`);
    }
    return ctx.db.mutation.updateArticle(
      {
        where: {
          id
        },
        data: {
          isPublished: true
        }
      },
      info
    );
  },

  // tslint:disable-next-line:typedef
  async likeArticle(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);

    const dataExists = await ctx.db.exists.Article({
      id,
      likes_some: {
        id: userId
      }
    });

    if (!dataExists) {
      throw new Error(`Article not found or you're already liked it`);
    }
    return ctx.db.mutation.updateArticle(
      {
        where: {
          id
        },
        data: {
          likes: {
            connect: {
              id: userId
            }
          }
        }
      },
      info
    );
  },

  // tslint:disable-next-line:typedef
  async unLikeArticle(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);

    const dataExists = await ctx.db.exists.Article({
      id,
      likes_some: {
        id: userId
      }
    });

    if (!dataExists) {
      throw new Error(`Article not found or you're you've not liked it`);
    }

    return ctx.db.mutation.updateArticle(
      {
        where: {
          id
        },
        data: {
          likes: {
            disconnect: {
              id: userId
            }
          }
        }
      },
      info
    );
  },

  // tslint:disable-next-line:typedef
  async commentArticle(parent, { articleId, text }, ctx: Context, info) {
    const userId = getUserId(ctx);

    return ctx.db.mutation.createComment(
      {
        data: {
          article: {
            connect: {
              id: articleId
            }
          },
          author: {
            connect: {
              id: userId
            }
          },
          body: text
        }
      },
      info
    );
  },

  async deleteArticle(parent, { id, text }, ctx: Context, info) {
    const userId = getUserId(ctx);

    const dataExists = await ctx.db.exists.Article({
      id,
      author: {
        id: userId
      }
    });

    if (!dataExists) {
      throw new Error(`Article not found or you're not the author`);
    }

    const deleted = ctx.db.mutation.deleteArticle(
      {
        where: {
          id 
        }
      },
      info
    );

    return {
      success: true
    };
  },

  async deleteComment(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);

    const dataExists = await ctx.db.exists.Comment({
      id,
      author: {
        id: userId
      }
    });

    if (!dataExists) {
      throw new Error(`Comment not found or you're not the author`);
    }

    const deleted = ctx.db.mutation.deleteComment(
      {
        where: {
          id,
        }
      },
      info
    );

    return {
      success: true
    };

  },

  async favourite(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);

    const dataExists = await ctx.db.exists.Article({
      likes_some: {
        id: userId
      }
    });

    if (!dataExists) {
      throw new Error(`Article not found or is already favourited`);
    }

    const favourite = await ctx.db.mutation.updateUser(
      {
        where: {
          id: userId,
        },
        data: {
          favourites: {
            connect: {
              id
            }
          }
        }
      },
      info
    );

    return dataExists;
  },

  async unFavourite(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);

    const dataExists = await ctx.db.exists.Article({
      id
    });

    if (!dataExists) {
      throw new Error(`Article not found`);
    }

    const isFavourited = await ctx.db.exists.Article({
      userFavourited_every: {
        id: userId
      }
    });

    if (!isFavourited) {
      throw new Error(`Article is already favourited`);
    }

    const favourite = await ctx.db.mutation.updateUser(
      {
        where: {
          id: userId,
        },
        data: {
          favourites: {
            disconnect: {
              id
            }
          }
        }
      },
      info
    );

    return ctx.db.query.article({
      where: {
        id
      }
    });
  },
};
