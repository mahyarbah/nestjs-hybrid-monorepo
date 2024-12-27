import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ProfileModule } from './profile.module';

async function bootstrap() {
  const app = await NestFactory.create(ProfileModule);

  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: process.env.MICROSERVICES_TCP_AUTHENTICATION_HOST || 'localhost',
      port:
        parseInt(process.env.MICROSERVICES_TCP_AUTHENTICATION_PORT, 10) || 3003,
    },
  };

  app.connectMicroservice(microserviceOptions);

  await app.startAllMicroservices();

  console.log(`Application profile is running on port 3003`);
}
bootstrap();
