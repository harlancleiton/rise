import {
  ControllerContract,
  HttpContextContract,
  RequestValidatorContract
} from '~/common';

import { CreateUser } from '../../domain';

export class CreateUserController implements ControllerContract {
  constructor(
    private readonly createUser: CreateUser,
    private readonly validation: RequestValidatorContract
  ) {}

  public async handle({
    request,
    response
  }: HttpContextContract): Promise<void> {
    const { errors, payload } = await this.validation.validate(request);

    if (errors.length) return response.badRequest({ errors });

    try {
      const user = await this.createUser.execute(payload);
      response.created(user);
    } catch (error) {
      response.badRequest({ error: error.message });
    }
  }
}
