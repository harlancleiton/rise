import { UserModel } from '../../domain';
import { CreateUserInput } from '../inputs';

export interface UserRepository {
  create(input: CreateUserInput): Promise<UserModel>;
  findByCpf(cpf: string): Promise<UserModel | null>;
  findByEmail(email: string): Promise<UserModel | null>;
}
