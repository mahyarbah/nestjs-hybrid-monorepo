import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AuthenticationModule } from './authentication.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthenticationModule);

  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: process.env.MICROSERVICES_TCP_AUTHENTICATION_HOST || 'localhost',
      port:
        parseInt(process.env.MICROSERVICES_TCP_AUTHENTICATION_PORT, 10) || 3001,
    },
  };

  app.connectMicroservice(microserviceOptions);

  await app.startAllMicroservices();

  console.log(`Application authentication is running on port 3001`);
}
bootstrap();
