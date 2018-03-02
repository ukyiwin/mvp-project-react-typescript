import { getUserId, Context } from '../../utils';

export const post = {
  // tslint:disable-next-line:typedef
  async addProfile(parent, { countryId, institutionId, departmentId }, ctx: Context, info) {
    const userId = getUserId(ctx);
    return ctx.db.mutation.updateUser(
      {
        where: {
          id: userId
        },
        data: {
          country: {
            connect: {
              id: countryId
            }
          },
          institution: {
            connect: {
              id: institutionId
            }
          },
          department: {
            connect: {
              id: departmentId
            }
          },
          completedProfile: 2
        }
      },
      info
    );
  },
};
