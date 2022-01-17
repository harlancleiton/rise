import {
  TransferFundsBetweenInternalAccounts,
  TransferFundsBetweenInternalAccountsModel
} from '~/modules/movements/domain';

export class DbTransferFundsBetweenInternalAccounts
  implements TransferFundsBetweenInternalAccounts
{
  public execute(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    payload: TransferFundsBetweenInternalAccountsModel
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
