import * as faker from 'faker';

import { movementsFactory } from './movements';
import { usersFactories } from './users';

export const factories = {
  faker,
  movements: movementsFactory,
  users: usersFactories
};
