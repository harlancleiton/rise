import {
  AddMovement,
  CreateMovementModel,
  MovementModel
} from '~/modules/movements/domain';

import { MovementRepository } from '../../repositories';

export class DbCreditAccount implements AddMovement {
  constructor(private readonly movementRepository: MovementRepository) {}

  public async execute(payload: CreateMovementModel): Promise<MovementModel> {
    const parsedValueCents = Number(payload.valueCents);

    if (parsedValueCents <= 0) throw new Error('Operação não suportada');

    const movement = await this.movementRepository.create(payload);

    return movement;
  }
}
