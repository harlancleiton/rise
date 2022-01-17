import {
  HttpContextContract,
  MockedRequestValidator,
  RequestValidatorContract
} from '~/common';
import { TransferFundsBetweenInternalAccounts } from '~/modules/movements/domain';
import { TransferFundsBetweenInternalAccountsController } from '~/modules/movements/presentation';
import { factories } from '~/tests/factories';
import { MockTransferFundsBetweenInternalAccounts } from '~/tests/mocks';

describe('TransferFundsBetweenInternalAccountsController', () => {
  let transferFundsBetweenInternalAccounts: TransferFundsBetweenInternalAccounts;
  let requestValidator: RequestValidatorContract;
  let sut: TransferFundsBetweenInternalAccountsController;

  beforeEach(() => {
    transferFundsBetweenInternalAccounts =
      new MockTransferFundsBetweenInternalAccounts();
    requestValidator = new MockedRequestValidator();
    sut = new TransferFundsBetweenInternalAccountsController(
      transferFundsBetweenInternalAccounts,
      requestValidator
    );
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should calls requestValidator.validate with correct values', async () => {
    const payload =
      factories.movements.transferFundsBetweenInternalAccounts.build();

    jest.spyOn(requestValidator, 'validate');

    // TODO add HttpContext factory
    const context: HttpContextContract = {
      // @ts-ignore
      request: { body: () => payload },
      // @ts-ignore
      response: { noContent: jest.fn() }
    };

    await sut.handle(context);

    expect(requestValidator.validate).toBeCalledWith(context.request);
  });

  it('should throw if requestValidator.validate throws', async () => {
    const payload =
      factories.movements.transferFundsBetweenInternalAccounts.build();

    jest.spyOn(requestValidator, 'validate').mockImplementationOnce(() => {
      throw new Error();
    });

    // TODO add HttpContext factory
    const context: HttpContextContract = {
      // @ts-ignore
      request: { body: () => payload },
      // @ts-ignore
      response: { noContent: jest.fn() }
    };

    await expect(sut.handle(context)).rejects.toThrow();
  });

  it('should calls transferFundsBetweenInternalAccounts.execute with correct values', async () => {
    const payload =
      factories.movements.transferFundsBetweenInternalAccounts.build();

    jest.spyOn(transferFundsBetweenInternalAccounts, 'execute');

    // TODO add HttpContext factory
    const context: HttpContextContract = {
      // @ts-ignore
      request: { body: () => payload },
      // @ts-ignore
      response: { noContent: jest.fn() }
    };

    await sut.handle(context);

    expect(transferFundsBetweenInternalAccounts.execute).toBeCalledWith(
      payload
    );
  });

  it('should throw if transferFundsBetweenInternalAccounts.execute throws', async () => {
    const payload =
      factories.movements.transferFundsBetweenInternalAccounts.build();

    jest
      .spyOn(transferFundsBetweenInternalAccounts, 'execute')
      .mockImplementationOnce(() => {
        throw new Error();
      });

    // TODO add HttpContext factory
    const context: HttpContextContract = {
      // @ts-ignore
      request: { body: () => payload },
      // @ts-ignore
      response: { noContent: jest.fn() }
    };

    await expect(sut.handle(context)).rejects.toThrow();
  });
});
