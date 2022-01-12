import { HttpContextContract } from './HttpContextContract';

export interface ControllerContract {
  handle(context: HttpContextContract): Promise<void>;
}
