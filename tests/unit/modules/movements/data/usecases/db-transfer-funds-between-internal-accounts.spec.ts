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

    const negativeValueCents = `-${payload.valueCents}`;

    expect(addMovement.execute).toBeCalledWith({
      userId: payload.sourceAccount,
      valueCents: negativeValueCents
    });
  });

  it("should throw if valueCents isn't positive", async () => {
    const valueCentsNumber = factories.faker.datatype.number({
      min: -99999,
      max: 0
    });
    const payload =
      factories.movements.transferFundsBetweenInternalAccounts.build({
        valueCents: valueCentsNumber.toString()
      });

    jest.spyOn(addMovement, 'execute');

    await expect(sut.execute(payload)).rejects.toThrow();

    expect(addMovement.execute).not.toBeCalled();
  });
});
