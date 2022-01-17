import { DbTransferFundsBetweenInternalAccounts } from '~/modules/movements/data';

describe('DbTransferFundsBetweenInternalAccounts', () => {
  let sut: DbTransferFundsBetweenInternalAccounts;

  beforeEach(() => {
    sut = new DbTransferFundsBetweenInternalAccounts();
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });
});
