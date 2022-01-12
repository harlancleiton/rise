import { PrismaContainer } from '~/common';

import { UserRepository } from '../../data';
import { PrismaUserRepository } from '../../infra';

export function makePrismaUserRepository(): UserRepository {
  return new PrismaUserRepository(PrismaContainer.getInstance());
}
