import { HashContract } from '~/common/data';
import { ArgonHash, BcryptHash } from '~/common/infra';
import { hashConfig, HashConfigContract } from '~/config/hash';

export function makeHash(
  _driver?: keyof HashConfigContract.HashDrivers
): HashContract {
  const driver = _driver || hashConfig.default;

  if (driver === 'bcrypt')
    return new BcryptHash(hashConfig.drivers.bcrypt.rounds);

  return new ArgonHash(hashConfig.drivers.argon);
}
