import { RouteHandlerMethod } from 'fastify';

import {
  ControllerContract,
  FastifyRequestAdapter,
  FastifyReplyAdapter
} from '~/common';

export function fastifyAdaptRoute(
  controller: ControllerContract
): RouteHandlerMethod {
  return function (request, reply) {
    controller.handle({
      request: new FastifyRequestAdapter(request),
      response: new FastifyReplyAdapter(reply)
    });
  };
}
