import { MovementModel } from '../../domain';
import { CreateMovementInput } from '../inputs';

export interface MovementRepository {
  create(input: CreateMovementInput): Promise<MovementModel>;
  findByUserId(userId: string): Promise<MovementModel[]>;
}
