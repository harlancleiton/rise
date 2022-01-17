import { PrismaContainer } from '~/common';

import { MovementRepository } from '../../data';
import { PrismaMovementRepository } from '../../infra';

export function makePrismaMovementRepository(): MovementRepository {
  return new PrismaMovementRepository(PrismaContainer.getInstance());
}
