import { getUserId, Context } from '../../utils';

export const article = {
  // tslint:disable-next-line:typedef
  async createArticle(parent, { title, body, tags, category }, ctx: Context, info) {
    const userId = getUserId(ctx);

    let temp = [];
    // tslint:disable-next-line:no-shadowed-variable
    category.map(interest => {
      if ( interest !== '1') {
        let tmp = {id: interest};
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
          body: body,
          title: title,
          category: {
            connect: [...temp]
          },
          tags: tags,
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

    return ctx.db.mutation.updateArticle(
      {
        where: {
          id: id
        },
        data: {
          isPublished: true
        }
      },
      info
    );
  },

};
