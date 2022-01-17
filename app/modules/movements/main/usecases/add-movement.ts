import {
  AddMovementStrategy,
  DbCreditAccount,
  DbDebitAccount
} from '../../data';
import { AddMovement } from '../../domain';
import { makePrismaMovementRepository } from '../repositories';
import { makeDbCalculateBalance } from './calculate-balance';

export function makeAddMovementStrategy(): AddMovement {
  const movementRepository = makePrismaMovementRepository();

  return new AddMovementStrategy(
    new DbCreditAccount(movementRepository),
    new DbDebitAccount(movementRepository, makeDbCalculateBalance())
  );
}
