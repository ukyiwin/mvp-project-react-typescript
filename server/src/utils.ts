import * as jwt from 'jsonwebtoken';
import { Prisma } from './generated/prisma';

export interface Context {
  db: Prisma;
  request: any;
}

// tslint:disable-next-line:only-arrow-functions
export function getUserId(ctx: Context) {
  const Authorization = ctx.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string };
    return userId;
  }

  throw new AuthError();
}

// tslint:disable-next-line:only-arrow-functions
export function getUser(id, ctx: Context, info) {
  const user = ctx.db.query.user({where: {id}}, info);
  
  if (user) {
    return user;
  }

  throw new AuthError();
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}