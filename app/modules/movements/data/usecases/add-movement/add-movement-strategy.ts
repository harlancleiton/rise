import {
  AddMovement,
  CreateMovementModel,
  MovementModel
} from '~/modules/movements/domain';

import { DbCreditAccount } from './db-credit-account';
import { DbDebitAccount } from './db-debit-account';

export class AddMovementStrategy implements AddMovement {
  constructor(
    private readonly creditAccount: DbCreditAccount,
    private readonly debitAccount: DbDebitAccount
  ) {}

  public execute(payload: CreateMovementModel): Promise<MovementModel> {
    const parsedValueCents = Number(payload.valueCents);
    const valueIsPositive = parsedValueCents > 0;

    if (valueIsPositive) return this.creditAccount.execute(payload);

    return this.debitAccount.execute(payload);
  }
}
