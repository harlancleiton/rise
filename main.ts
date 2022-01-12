import Fastify from 'fastify';

import { PrismaContainer } from '~/common';

async function bootstrap() {
  const prisma = PrismaContainer.getInstance();
  await prisma.$connect();

  const fastify = Fastify({
    logger: true
  });

  fastify.addHook('onClose', async (instance, done) => {
    await prisma.$disconnect();

    done();
  });

  fastify.register(import('./start/routes'));

  fastify.listen(3333, '0.0.0.0', err => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });
}

bootstrap();
