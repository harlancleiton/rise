import { createUserFactory } from './create-user.factory';
import { userFactory } from './user.factory';

export const usersFactories = {
  createUser: createUserFactory,
  user: userFactory
};
