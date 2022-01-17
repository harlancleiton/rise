import {
  AddMovement,
  CalculateBalance,
  CreateMovementModel,
  MovementModel
} from '~/modules/movements/domain';

import { MovementRepository } from '../../repositories';

export class DbDebitAccount implements AddMovement {
  constructor(
    private readonly movementRepository: MovementRepository,
    private readonly calculateBalance: CalculateBalance
  ) {}

  public async execute(payload: CreateMovementModel): Promise<MovementModel> {
    const parsedValueCents = Number(payload.valueCents);

    if (parsedValueCents >= 0) throw new Error('Operação não suportada');

    const balance = await this.calculateBalance.execute(payload.userId);
    const parsedBalance = Number(balance);

    if (parsedBalance === 0)
      throw new Error('Transação não aprovada. Saldo insuficiente.');

    const balanceMinusValueCents = parsedBalance - parsedValueCents;

    if (balanceMinusValueCents < 0)
      throw new Error('Transação não aprovada. Saldo insuficiente.');

    const movement = await this.movementRepository.create(payload);

    return movement;
  }
}
