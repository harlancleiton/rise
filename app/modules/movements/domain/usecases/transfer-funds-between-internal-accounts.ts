import { TransferFundsBetweenInternalAccountsModel } from '../models';

export interface TransferFundsBetweenInternalAccounts {
  execute(payload: TransferFundsBetweenInternalAccountsModel): Promise<void>;
}
