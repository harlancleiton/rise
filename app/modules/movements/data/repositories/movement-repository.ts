import { MovementModel } from '../../domain/models';

export interface MovementRepository {
  findByUserId(userId: string): Promise<MovementModel[]>;
}
