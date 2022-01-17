import {
  ControllerContract,
  HttpContextContract,
  RequestValidatorContract
} from '~/common';

import { AddMovement } from '../../domain';

export class AddMovementController implements ControllerContract {
  constructor(
    private readonly addMovement: AddMovement,
    private readonly validation: RequestValidatorContract
  ) {}

  public async handle({
    request,
    response
  }: HttpContextContract): Promise<void> {
    const { errors, payload } = await this.validation.validate(request);

    if (errors.length) return response.badRequest({ errors });

    try {
      const movement = await this.addMovement.execute(payload);
      response.created(movement);
    } catch (error) {
      response.badRequest({ error: error.message });
    }
  }
}
