import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { makeShowBalanceController } from '~/modules/movements/main';
import { fastifyAdaptRoute } from '~/start/adapters';

export default function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) {
  fastify.get(
    '/:accountId',
    opts,
    fastifyAdaptRoute(makeShowBalanceController())
  );

  done();
}
