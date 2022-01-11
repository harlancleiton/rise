import * as faker from 'faker';
import { Factory } from 'fishery';

import { CreateUserModel } from '~/modules/users/domain';

export const createUserFactory = Factory.define<CreateUserModel>(() => ({
  cpf: '12227624043',
  email: faker.internet.email(),
  name: faker.name.lastName(),
  password: faker.internet.password()
}));
