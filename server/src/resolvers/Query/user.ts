import { getUserId, Context } from '../../utils';

export const QueryUser = {

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

};
