import { CreateMovementModel, MovementModel } from '../models';

export interface CreditAccount {
  execute(payload: CreateMovementModel): Promise<MovementModel>;
}
