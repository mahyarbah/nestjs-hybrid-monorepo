import { CONFIG_TOKEN } from '@common/constants/config.constant';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';

import { Microservice } from '@common/enums/microservice.enum';
import { NetworkingService } from './networking.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: Microservice.AUTHENTICATION,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
          const microservicesConfig = configService.get(
            CONFIG_TOKEN.MICROSERVICES,
          );

          return {
            transport: microservicesConfig.tcp.transport,
            options: microservicesConfig.tcp.authenticationOptions,
          };
        },
      },
      {
        name: Microservice.PAYMENT,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
          const microservicesConfig = configService.get(
            CONFIG_TOKEN.MICROSERVICES,
          );

          return {
            transport: microservicesConfig.tcp.transport,
            options: microservicesConfig.tcp.paymentOptions,
          };
        },
      },
      {
        name: Microservice.PROFILE,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
          const microservicesConfig = configService.get(
            CONFIG_TOKEN.MICROSERVICES,
          );

          return {
            transport: microservicesConfig.tcp.transport,
            options: microservicesConfig.tcp.profileOptions,
          };
        },
      },
    ]),
  ],
  providers: [NetworkingService],
  exports: [NetworkingService],
})
export class NetworkingModule {}
