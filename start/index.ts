import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export default function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) {
  fastify.register(import('./routes'), opts);

  done();
}
