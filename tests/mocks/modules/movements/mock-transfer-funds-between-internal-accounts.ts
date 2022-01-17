import { TransferFundsBetweenInternalAccounts } from '~/modules/movements/domain';

export class MockTransferFundsBetweenInternalAccounts
  implements TransferFundsBetweenInternalAccounts
{
  public execute(): Promise<void> {
    return Promise.resolve();
  }
}
