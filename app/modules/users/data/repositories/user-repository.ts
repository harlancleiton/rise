import { UserModel } from '../../domain';
import { CreateUserInput } from '../inputs';

export interface UserRepository {
  create(input: CreateUserInput): Promise<UserModel>;
}
