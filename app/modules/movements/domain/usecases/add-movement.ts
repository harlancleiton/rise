import { CreateMovementModel, MovementModel } from '../models';

export interface AddMovement {
  execute(payload: CreateMovementModel): Promise<MovementModel>;
}
