import { PrismaClient } from '@prisma/client';

export class PrismaContainer {
  private static prisma: PrismaClient;

  private constructor() {}

  public static getInstance(): PrismaClient {
    if (!this.prisma) this.prisma = new PrismaClient();

    return this.prisma;
  }
}
