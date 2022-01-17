import * as faker from 'faker';
import { Factory } from 'fishery';

import { MovementModel } from '~/modules/movements/domain';

export const movementFactory = Factory.define<MovementModel>(() => ({
  id: faker.datatype.uuid(),
  valueCents: (faker.datatype.number() * 100).toString(),
  createdAt: new Date(),
  updatedAt: new Date()
}));
