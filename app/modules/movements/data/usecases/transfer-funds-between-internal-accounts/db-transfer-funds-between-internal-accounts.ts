import {
  AddMovement,
  TransferFundsBetweenInternalAccounts,
  TransferFundsBetweenInternalAccountsModel
} from '~/modules/movements/domain';

export class DbTransferFundsBetweenInternalAccounts
  implements TransferFundsBetweenInternalAccounts
{
  constructor(private readonly addMovement: AddMovement) {}

  public async execute(
    payload: TransferFundsBetweenInternalAccountsModel
  ): Promise<void> {
    const creditDestinationAccountPromise = this.addMovement.execute({
      userId: payload.destinationAccount,
      valueCents: payload.valueCents
    });

    const negativeValueCents = `-${payload.valueCents}`;
    const debitSourceAccountPromise = this.addMovement.execute({
      userId: payload.sourceAccount,
      valueCents: negativeValueCents
    });

    await Promise.all([
      creditDestinationAccountPromise,
      debitSourceAccountPromise
    ]);
  }
}
