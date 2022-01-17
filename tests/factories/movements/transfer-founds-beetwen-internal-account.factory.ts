import * as faker from 'faker';
import { Factory } from 'fishery';

import { TransferFundsBetweenInternalAccountsModel } from '~/modules/movements/domain';

export const transferFundsBetweenInternalAccountsFactory =
  Factory.define<TransferFundsBetweenInternalAccountsModel>(() => ({
    sourceAccount: faker.datatype.uuid(),
    destinationAccount: faker.datatype.uuid(),
    valueCents: (faker.datatype.number() * 100).toString()
  }));
