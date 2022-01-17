import { PrismaClient } from '@prisma/client';

import {
  CreateMovementInput,
  MovementRepository
} from '~/modules/movements/data';
import { MovementModel } from '~/modules/movements/domain';

export class PrismaMovementRepository implements MovementRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  public create(input: CreateMovementInput): Promise<MovementModel> {
    return this.prismaClient.movement.create({ data: input });
  }

  public findByUserId(userId: string): Promise<MovementModel[]> {
    return this.prismaClient.movement.findMany({ where: { userId } });
  }
}
