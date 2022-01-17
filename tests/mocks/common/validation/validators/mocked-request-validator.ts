import {
  RequestContract,
  RequestValidatorContract,
  ValidationResultContract
} from '~/common/presentation';

export class MockedRequestValidator implements RequestValidatorContract {
  public validate(request: RequestContract): Promise<ValidationResultContract> {
    return Promise.resolve({ payload: request.body(), errors: [] });
  }
}
