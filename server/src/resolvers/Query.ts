import { getUserId, Context } from '../utils'

export const Query = {
  feed(parent, args, ctx: Context, info) {
    return ctx.db.query.posts({ where: { isPublished: true } }, info)
  },

  drafts(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.posts({ where }, info)
  },

  post(parent, { id }, ctx: Context, info) {
    return ctx.db.query.post({ where: { id: id } }, info)
  },

  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },

  async userExist(parent, { email }, ctx: Context, info) {
    const user = await ctx.db.exists.User({email: email})

    if (user) {
      return true;
    } else {
      return false;
    }
  },

  articles(parent, args, ctx: Context, info) {
    return ctx.db.query.articles({ where: { 
        isPublished: true
      } 
    }, info);
  },

  getDepartment(parent, { idInstitution }, ctx: Context, info) {
    return ctx.db.query.departments({ where: {
      institution: {
        id: idInstitution
      }
    }}, info)
  },
  getInstitution(parent, { idCountry }, ctx: Context, info) {
    return ctx.db.query.institutionses({ where: {
      country: {
        id: idCountry
      }
    }}, info)
  },

  getCountry(parent, args, ctx: Context, info) {
    return ctx.db.query.institutionses({}, info)
  },

};
