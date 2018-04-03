import { getUserId, Context } from '../../utils';

export const QueryMessage = {

  getMessages(parent, {channelId}, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.messages({
      where: {
        channel: {
          id: channelId
        }
      }
    },                           info);
  },

};
