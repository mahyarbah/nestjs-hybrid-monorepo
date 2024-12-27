import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import microservicesConfig from '@common/configs/microservices.config';
import { NetworkingModule } from '@core/networking/networking.module';

import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [microservicesConfig],
    }),
    NetworkingModule,
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
