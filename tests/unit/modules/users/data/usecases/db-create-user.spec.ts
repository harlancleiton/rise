import { HashContract } from '~/common';
import { DbCreateUser, UserRepository } from '~/modules/users/data';
import { factories } from '~/tests/factories';
import { MockHash, MockUserRepository } from '~/tests/mocks';

describe('DbCreateUser', () => {
  let userRepository: UserRepository;
  let hash: HashContract;
  let sut: DbCreateUser;

  beforeEach(() => {
    userRepository = new MockUserRepository();
    hash = new MockHash();
    sut = new DbCreateUser(userRepository, hash);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should calls usersRepository.create with correct values', async () => {
    const createUser = factories.users.createUser.build();

    jest.spyOn(userRepository, 'create');

    await sut.execute(createUser);

    expect(userRepository.create).toBeCalledWith(createUser);
  });

  it('should throw if usersRepository.create throws', async () => {
    const createUser = factories.users.createUser.build();

    jest.spyOn(userRepository, 'create').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(sut.execute(createUser)).rejects.toThrowError();
  });

  it('should calls hash.make with correct values', async () => {
    const createUser = factories.users.createUser.build();
    const expectedPassword = String(createUser.password);

    jest.spyOn(hash, 'make');

    await sut.execute(createUser);

    expect(hash.make).toBeCalledWith(expectedPassword);
  });

  it('should throw if hash.make throws', async () => {
    const createUser = factories.users.createUser.build();

    jest.spyOn(hash, 'make').mockImplementationOnce(() => {
      throw new Error();
    });

    jest.spyOn(userRepository, 'create');

    await expect(sut.execute(createUser)).rejects.toThrowError();

    expect(userRepository.create).not.toBeCalled();
  });

  it('should return a new user', async () => {
    const createUser = factories.users.createUser.build();

    const mockedUser = factories.users.user.build();

    jest
      .spyOn(userRepository, 'create')
      .mockReturnValueOnce(Promise.resolve(mockedUser));

    const user = await sut.execute(createUser);

    expect(user).toEqual(mockedUser);
  });
});
