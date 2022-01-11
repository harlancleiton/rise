import { DbCreateUser } from '~/modules/users/data';

describe('DbCreateUser', () => {
  let sut: DbCreateUser;

  beforeEach(() => {
    sut = new DbCreateUser();
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });
});
