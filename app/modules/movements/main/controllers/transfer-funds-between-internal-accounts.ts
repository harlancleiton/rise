import { ControllerContract, MockedRequestValidator } from '~/common';

import { TransferFundsBetweenInternalAccountsController } from '../../presentation';
import { makeDbTransferFundsBetweenInternalAccounts } from '../usecases';

export function makeTransferFundsBetweenInternalAccountsController(): ControllerContract {
  return new TransferFundsBetweenInternalAccountsController(
    makeDbTransferFundsBetweenInternalAccounts(),
    new MockedRequestValidator()
  );
}
