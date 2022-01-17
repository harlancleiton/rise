import {
  CreateMovementInput,
  MovementRepository
} from '~/modules/movements/data';
import { MovementModel } from '~/modules/movements/domain';
import { factories } from '~/tests/factories';

export class MockMovementRepository implements MovementRepository {
  public create(input: CreateMovementInput): Promise<MovementModel> {
    return Promise.resolve(factories.movements.movement.build(input));
  }

  public findByUserId(): Promise<MovementModel[]> {
    const movementsLength = factories.faker.datatype.number({
      min: 0,
      max: 100
    });

    return Promise.resolve(
      factories.movements.movement.buildList(movementsLength)
    );
  }
}
