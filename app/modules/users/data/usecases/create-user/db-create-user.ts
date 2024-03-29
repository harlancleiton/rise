import { HashContract } from '~/common';
import { CreateUser, CreateUserModel, UserModel } from '~/modules/users/domain';

import { UserRepository } from '../../repositories';

export class DbCreateUser implements CreateUser {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hash: HashContract
  ) {}

  public async execute(payload: CreateUserModel): Promise<UserModel> {
    const hashedPassword = await this.hash.make(payload.password);
    payload.password = hashedPassword;

    const findUserEmail = await this.userRepository.findByEmail(payload.email);
    if (findUserEmail) throw new Error('Email já cadastrado');

    const findUserCpf = await this.userRepository.findByCpf(payload.cpf);
    if (findUserCpf) throw new Error('CPF já cadastrado');

    const user = await this.userRepository.create(payload);
    return user;
  }
}
