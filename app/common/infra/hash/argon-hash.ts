import * as argon from 'argon2';

import { HashContract } from '~/common/data';
import { HashConfigContract } from '~/config/hash';

export class ArgonHash implements HashContract {
  constructor(private readonly options: HashConfigContract.ArgonConfig) {}

  public make(value: string): Promise<string> {
    const { iterations, memory, parallelism, saltSize, variant } = this.options;

    return argon.hash(value, {
      type: argon[variant],
      memoryCost: memory,
      parallelism,
      saltLength: saltSize,
      timeCost: iterations
    });
  }

  public verify(hashedValue: string, plainTextValue: string): Promise<boolean> {
    return argon.verify(hashedValue, plainTextValue);
  }
}
