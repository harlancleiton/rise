import { CreateUser, CreateUserModel, UserModel } from '~/modules/users/domain';

import { UserRepository } from '../../repositories';

export class DbCreateUser implements CreateUser {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(payload: CreateUserModel): Promise<UserModel> {
    await this.userRepository.create(payload);

    return {
      ...payload,
      id: 'id',
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }
}
