import { ValidationError } from '../errors';

export interface ValidationResultContract<T = any> {
  payload: T;
  errors: ValidationError[];
}
