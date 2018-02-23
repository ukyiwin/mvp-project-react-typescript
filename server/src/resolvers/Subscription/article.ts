import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Context } from '../../utils';

export const auth = {
  async updatedFeeds(parent, args, ctx: Context, info) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    });

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    };
  },

  async newFeeds(parent, args, ctx: Context, info) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    });

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    };
  },
};
