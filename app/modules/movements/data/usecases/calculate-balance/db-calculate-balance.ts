import { CalculateBalance } from '~/modules/movements/domain';

import { MovementRepository } from '../../repositories';

export class DbCalculateBalance implements CalculateBalance {
  constructor(private readonly movementRepository: MovementRepository) {}

  public async execute(userId: string): Promise<string> {
    const movements = await this.movementRepository.findByUserId(userId);

    const balance = movements.reduce((acc, movement) => {
      const parsedValueCents = Number(movement.valueCents);
      return acc + parsedValueCents;
    }, 0);

    return balance.toString();
  }
}
