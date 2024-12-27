import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PaymentModule } from './payment.module';

async function bootstrap() {
  const app = await NestFactory.create(PaymentModule);

  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: process.env.MICROSERVICES_TCP_AUTHENTICATION_HOST || 'localhost',
      port:
        parseInt(process.env.MICROSERVICES_TCP_AUTHENTICATION_PORT, 10) || 3002,
    },
  };

  app.connectMicroservice(microserviceOptions);

  await app.startAllMicroservices();

  console.log(`Application payment is running on port 3002`);
}
bootstrap();
