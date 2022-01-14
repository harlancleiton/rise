import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export default async function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) {
  await fastify.register(import('./routes'), opts);

  done();
}
