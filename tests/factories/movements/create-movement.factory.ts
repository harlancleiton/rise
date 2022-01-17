import * as faker from 'faker';
import { Factory } from 'fishery';

import { CreateMovementModel } from '~/modules/movements/domain';

export const createMovementFactory = Factory.define<CreateMovementModel>(
  () => ({
    userId: faker.datatype.uuid(),
    valueCents: (faker.datatype.number() * 100).toString()
  })
);
