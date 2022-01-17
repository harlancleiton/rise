import { DbCalculateBalance } from '../../data';
import { CalculateBalance } from '../../domain';
import { makePrismaMovementRepository } from '../repositories';

export function makeDbCalculateBalance(): CalculateBalance {
  return new DbCalculateBalance(makePrismaMovementRepository());
}
