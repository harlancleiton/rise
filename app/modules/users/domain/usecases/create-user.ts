import { CreateUserModel, UserModel } from '../models';

export interface CreateUser {
  execute(payload: CreateUserModel): Promise<UserModel>;
}
