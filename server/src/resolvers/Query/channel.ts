import { getUserId, Context } from '../../utils';

export const QueryChannels = {

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
  }

};
