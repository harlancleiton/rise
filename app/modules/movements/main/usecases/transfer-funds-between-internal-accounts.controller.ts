import { makeAddMovementStrategy } from '.';

import { DbTransferFundsBetweenInternalAccounts } from '../../data';
import { TransferFundsBetweenInternalAccounts } from '../../domain';

export function makeDbTransferFundsBetweenInternalAccounts(): TransferFundsBetweenInternalAccounts {
  return new DbTransferFundsBetweenInternalAccounts(makeAddMovementStrategy());
}
