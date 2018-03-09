import { getUserId, Context } from '../../utils';

export const user = {
  // tslint:disable-next-line:typedef
  async addProfile(parent, { photoId, countryId, institutionId, departmentId }, ctx: Context, info) {
    const userId = getUserId(ctx);
    return ctx.db.mutation.updateUser(
      {
        where: {
          id: userId
        },
        data: {
          avatar: {
            connect: {
              id: photoId
            }
          },
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

  // tslint:disable-next-line:typedef
  async addInterest(parent, { interests }, ctx: Context, info) {
    const userId = getUserId(ctx);
    let temp = [];

    // tslint:disable-next-line:no-console
    console.log('====================================');
    // tslint:disable-next-line:no-console
    console.log(interests);
    // tslint:disable-next-line:no-console
    console.log('====================================');

    // tslint:disable-next-line:no-shadowed-variable
    interests.map(interest => {
      if ( interest !== '1') {
        let tmp = {id: interest};
        temp.push(tmp);
      }
    });

    return ctx.db.mutation.updateUser(
      {
        where: {
          id: userId
        },
        data: {
          completedProfile: 3,
          interest: {
            connect: [...temp]
          }
        }
      },
      info
    );
    
  },
};
