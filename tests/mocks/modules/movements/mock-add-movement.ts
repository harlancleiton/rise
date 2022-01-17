import {
  AddMovement,
  CreateMovementModel,
  MovementModel
} from '~/modules/movements/domain';
import { factories } from '~/tests/factories';

export class MockAddMovement implements AddMovement {
  public execute(payload: CreateMovementModel): Promise<MovementModel> {
    return Promise.resolve(factories.movements.movement.build(payload));
  }
}
