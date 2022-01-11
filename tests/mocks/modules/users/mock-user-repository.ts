import { CreateUserInput, UserRepository } from '~/modules/users/data';
import { UserModel } from '~/modules/users/domain';
import { factories } from '~/tests/factories';

export class MockUserRepository implements UserRepository {
  public async create(input: CreateUserInput): Promise<UserModel> {
    return factories.users.user.build(input);
  }
}
