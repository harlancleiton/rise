import { DbTransferFundsBetweenInternalAccounts } from '~/modules/movements/data';
import { AddMovement } from '~/modules/movements/domain';
import { factories } from '~/tests/factories';
import { MockAddMovement } from '~/tests/mocks';

describe('DbTransferFundsBetweenInternalAccounts', () => {
  let addMovement: AddMovement;
  let sut: DbTransferFundsBetweenInternalAccounts;

  beforeEach(() => {
    addMovement = new MockAddMovement();
    sut = new DbTransferFundsBetweenInternalAccounts(addMovement);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should calls addMovement.execute with correct values', async () => {
    const payload =
      factories.movements.transferFundsBetweenInternalAccounts.build();

    jest.spyOn(addMovement, 'execute');

    await sut.execute(payload);

    expect(addMovement.execute).toBeCalledWith({
      userId: payload.destinationAccount,
      valueCents: payload.valueCents
    });
    expect(addMovement.execute).toBeCalledWith({
      userId: payload.sourceAccount,
      valueCents: payload.valueCents
    });
  });
});