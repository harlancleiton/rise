import { ControllerContract } from '~/common';

import { ShowBalanceController } from '../../presentation';
import { makeDbCalculateBalance } from '../usecases';

export function makeShowBalanceController(): ControllerContract {
  return new ShowBalanceController(makeDbCalculateBalance());
}
