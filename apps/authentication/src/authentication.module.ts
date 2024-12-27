import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import microservicesConfig from '@common/configs/microservices.config';
import { NetworkingModule } from '@core/networking/networking.module';

import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [microservicesConfig],
    }),
    NetworkingModule,
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}