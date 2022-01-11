import * as faker from 'faker';
import { Factory } from 'fishery';

import { UserModel } from '~/modules/users/domain';

export const userFactory = Factory.define<UserModel>(() => ({
  id: faker.datatype.uuid(),
  cpf: '12227624043',
  email: faker.internet.email(),
  name: faker.name.lastName(),
  password: faker.internet.password(),
  createdAt: new Date(),
  updatedAt: new Date()
}));
