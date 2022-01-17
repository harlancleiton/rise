import { createMovementFactory } from './create-movement.factory';
import { movementFactory } from './movement.factory';
import { transferFundsBetweenInternalAccountsFactory } from './transfer-founds-beetwen-internal-account.factory';

export const movementsFactory = {
  createMovement: createMovementFactory,
  movement: movementFactory,
  transferFundsBetweenInternalAccounts:
    transferFundsBetweenInternalAccountsFactory
};
