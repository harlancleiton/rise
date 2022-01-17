import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import { makeTransferFundsBetweenInternalAccountsController } from '~/modules/movements/main';
import { fastifyAdaptRoute } from '~/start/adapters';

export default function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) {
  fastify.post(
    '/',
    opts,
    fastifyAdaptRoute(makeTransferFundsBetweenInternalAccountsController())
  );

  done();
}
