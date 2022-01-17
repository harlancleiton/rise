import {
  ControllerContract,
  HttpContextContract,
  RequestValidatorContract
} from '~/common';

import { TransferFundsBetweenInternalAccounts } from '../../domain';

export class TransferFundsBetweenInternalAccountsController
  implements ControllerContract
{
  constructor(
    private readonly transferFundsBetweenInternalAccounts: TransferFundsBetweenInternalAccounts,
    private readonly validation: RequestValidatorContract
  ) {}

  public async handle({
    request,
    response
  }: HttpContextContract): Promise<void> {
    const { errors, payload } = await this.validation.validate(request);

    if (errors.length) return response.badRequest({ errors });

    try {
      await this.transferFundsBetweenInternalAccounts.execute(payload);
      response.noContent();
    } catch (error) {
      response.badRequest({ error: error.message });
    }
  }
}
