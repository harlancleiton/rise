import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export default async function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) {
  await fastify.register(import('./users'), { ...opts, prefix: 'users' });

  await fastify.register(import('./movements'), {
    ...opts,
    prefix: 'movements'
  });

  await fastify.register(import('./balance'), {
    ...opts,
    prefix: 'balance'
  });

  await fastify.register(import('./transfer-funds-between-internal-accounts'), {
    ...opts,
    prefix: 'transfer-funds-between-internal-accounts'
  });

  done();
}
