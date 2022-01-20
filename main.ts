import Fastify from 'fastify';

import { PrismaContainer } from '~/common';

import { appConfig } from './config/app';

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

  fastify.listen(appConfig.port, appConfig.address, err => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });
}

bootstrap();
