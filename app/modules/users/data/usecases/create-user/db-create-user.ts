import { CreateUser, CreateUserModel, UserModel } from '~/modules/users/domain';

export class DbCreateUser implements CreateUser {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public execute(payload: CreateUserModel): Promise<UserModel> {
    throw new Error('Method not implemented.');
  }
}
