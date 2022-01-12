import { RequestContract } from './RequestContract';
import { ValidationResultContract } from './ValidationResultContract';

export interface RequestValidatorContract {
  validate(request: RequestContract): Promise<ValidationResultContract>;
}
