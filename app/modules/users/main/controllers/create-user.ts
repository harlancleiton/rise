import { ControllerContract, MockedRequestValidator } from '~/common';

import { CreateUserController } from '../../presentation';
import { makeDbCreateUser } from '../usecases';

export function makeCreateUserController(): ControllerContract {
  return new CreateUserController(
    makeDbCreateUser(),
    new MockedRequestValidator()
  );
}
