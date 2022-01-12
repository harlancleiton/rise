export const hashConfig: HashConfig = {
  default: 'argon',

  drivers: {
    argon: {
      driver: 'argon2',
      variant: 'argon2id',
      memory: 4096,
      iterations: 3,
      parallelism: 1,
      saltSize: 16
    },

    bcrypt: {
      driver: 'bcrypt',
      rounds: 10
    }
  }
};

export declare namespace HashConfigContract {
  type BcryptConfig = {
    driver: 'bcrypt';
    rounds: number;
  };

  type ArgonConfig = {
    driver: 'argon2';
    variant: 'argon2d' | 'argon2i' | 'argon2id';
    memory: number;
    iterations: number;
    parallelism: number;
    saltSize: number;
  };

  interface HashDrivers {
    argon: {
      config: ArgonConfig;
    };
    bcrypt: {
      config: BcryptConfig;
    };
  }
}

export interface HashConfig {
  default: keyof HashConfigContract.HashDrivers;
  drivers: {
    [P in keyof HashConfigContract.HashDrivers]: HashConfigContract.HashDrivers[P]['config'];
  };
}
