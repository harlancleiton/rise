import Fastify from 'fastify';

async function bootstrap() {
  const fastify = Fastify({
    logger: true
  });

  fastify.get('/', (request, reply) => {
    reply.send({ message: 'Hello world' });
  });

  fastify.listen(3333, '0.0.0.0', err => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });
}

bootstrap();
