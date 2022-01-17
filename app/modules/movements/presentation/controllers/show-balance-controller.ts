import { ControllerContract, HttpContextContract } from '~/common';

import { CalculateBalance } from '../../domain';

export class ShowBalanceController implements ControllerContract {
  constructor(private readonly calculateBalance: CalculateBalance) {}

  public async handle({
    request,
    response
  }: HttpContextContract): Promise<void> {
    const { accountId } = request.params();

    try {
      const balance = await this.calculateBalance.execute(accountId);
      response.ok({ balance });
    } catch (error) {
      response.badRequest({ error: error.message });
    }
  }
}
