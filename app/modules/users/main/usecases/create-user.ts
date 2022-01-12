import { makeHash } from '~/common';

import { DbCreateUser } from '../../data';
import { CreateUser } from '../../domain';
import { makePrismaUserRepository } from '../repositories';

export function makeDbCreateUser(): CreateUser {
  return new DbCreateUser(makePrismaUserRepository(), makeHash());
}
