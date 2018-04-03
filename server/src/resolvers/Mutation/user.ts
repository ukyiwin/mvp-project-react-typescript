import * as _ from 'lodash';
import { getUserId, Context, getUser } from '../../utils';

export const user = {

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

  async addInterest(parent, { interests }, ctx: Context, info) {
    const userId = getUserId(ctx);
    const temp = [];

    interests.map((interest) => {
      if (interest !== '1') {
        const tmp = {id: interest};
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

  async finishSignup(parent, args, ctx: Context, info) {
    const userId = getUserId(ctx);
    const temp = [];

    const currentUser = await getUser(userId, ctx, info);

    const deptStudents = await ctx.db.query.users({
      where: {
        id_not: userId,
        type: 'student',
        userType: 'student',
        department: {
          id: currentUser.department.id
        }
      }
    },                                            info);

    const deptLecturers = await ctx.db.query.users({
      where: {
        id_not: userId,
        type: 'lecturer',
        userType: 'lecturer',
        department: {
          id: currentUser.department.id
        }
      }
    },                                             info);
    
    const studentsId = _.map(deptStudents, 'id');
    const lecturersId = _.map(deptLecturers, 'id');

    return ctx.db.mutation.updateUser(
      {
        where: {
          id: userId
        },
        data: {
          connectTo: {
            
          }
        },
      },
      info
    );
    
  },

};
