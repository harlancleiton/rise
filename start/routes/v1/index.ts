import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export default function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) {
  fastify.register(import('./users'), { ...opts, prefix: 'users' });

  fastify.register(import('./movements'), {
    ...opts,
    prefix: 'movements'
  });

  fastify.register(import('./balance'), {
    ...opts,
    prefix: 'balance'
  });

  fastify.register(import('./transfer-funds-between-internal-accounts'), {
    ...opts,
    prefix: 'transfer-funds-between-internal-accounts'
  });

  done();
}
