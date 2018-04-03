import { getUserId, Context } from '../../utils';

export const chat = {
  // tslint:disable-next-line:typedef
  async createChannel(parent, { name }, ctx: Context, info) {
    const userId = getUserId(ctx);
    return ctx.db.mutation.createChannels({
        data: {
          author: {
            connect: {
              id: userId
            }
          },
          title: name,
          participants: {
            connect: {
              id: userId
            }
          },
          type: 'Channel'
        }
      },
                                          info
    );
  },

  // tslint:disable-next-line:typedef
  async createDirect(parent, { userId }, ctx: Context, info) {
    const id = getUserId(ctx);
    const chatName = id + '_' + userId;
    return ctx.db.mutation.createChannels({
        data: {
          author: {
            connect: {
              id: userId
            }
          },
          participants: {
            connect: [{
              id
            }, {
              id: userId
            }]
          },
          title: chatName,
          type: 'Direct'
        }
      },
                                          info
    );
  },

  async createMessage(parent, { channelId, text }, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.mutation.createMessage({
      data: {
        text,
        user: {
          connect: {
            id
          }
        },
        channel: {
          connect: {
            id: channelId
          }
        }
      }
    });
  }

};
