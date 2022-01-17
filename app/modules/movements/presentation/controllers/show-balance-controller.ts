import { ControllerContract, HttpContextContract } from '~/common';

import { CalculateBalance } from '../../domain';

export class ShowBalanceController implements ControllerContract {
  constructor(private readonly calculateBalance: CalculateBalance) {}

  public async handle({
    request,
    response
  }: HttpContextContract): Promise<void> {
    const { accountId } = request.params();

    const balance = await this.calculateBalance.execute(accountId);

    response.ok({ balance });
  }
}
