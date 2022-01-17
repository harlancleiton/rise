import { PrismaClient } from '@prisma/client';

import { CreateUserInput, UserRepository } from '~/modules/users/data';
import { UserModel } from '~/modules/users/domain';

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  public create(input: CreateUserInput): Promise<UserModel> {
    return this.prismaClient.user.create({ data: input });
  }

  public findByCpf(cpf: string): Promise<UserModel | null> {
    return this.prismaClient.user.findUnique({ where: { cpf } });
  }

  public findByEmail(email: string): Promise<UserModel | null> {
    return this.prismaClient.user.findUnique({ where: { email } });
  }
}
