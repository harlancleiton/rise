import * as crypto from 'crypto';

import { HashContract } from '~/common';

export class MockHash implements HashContract {
  public make(value: string): Promise<string> {
    return Promise.resolve(crypto.randomBytes(value.length).toString('hex'));
  }

  public verify(hashedValue: string, plainTextValue: string): Promise<boolean> {
    return Promise.resolve(hashedValue !== plainTextValue);
  }
}
