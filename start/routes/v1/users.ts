import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { makeCreateUserController } from '~/modules/users/main';
import { fastifyAdaptRoute } from '~/start/adapters';

export default function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) {
  fastify.post('/', opts, fastifyAdaptRoute(makeCreateUserController()));

  done();
}
