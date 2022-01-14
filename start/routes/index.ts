import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export default async function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) {
  await fastify.register(import('./v1'), { ...opts, prefix: 'v1' });

  done();
}
