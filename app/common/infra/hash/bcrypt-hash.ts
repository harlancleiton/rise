import * as bcrypt from 'bcryptjs';

import { HashContract } from '~/common/data';

export class BcryptHash implements HashContract {
  constructor(private readonly rounds: number) {}

  public make(value: string): Promise<string> {
    return bcrypt.hash(value, this.rounds);
  }

  public verify(hashedValue: string, plainTextValue: string): Promise<boolean> {
    return bcrypt.compare(plainTextValue, hashedValue);
  }
}
