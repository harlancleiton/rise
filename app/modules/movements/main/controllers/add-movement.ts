import { ControllerContract, MockedRequestValidator } from '~/common';

import { AddMovementController } from '../../presentation';
import { makeAddMovementStrategy } from '../usecases';

export function makeAddMovementController(): ControllerContract {
  return new AddMovementController(
    makeAddMovementStrategy(),
    new MockedRequestValidator()
  );
}
