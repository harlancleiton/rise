import { RequestContract } from './RequestContract';
import { ResponseContract } from './ResponseContract';

export interface HttpContextContract {
  request: RequestContract;
  response: ResponseContract;
}
