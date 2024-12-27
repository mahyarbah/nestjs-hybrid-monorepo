import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import microservicesConfig from '@common/configs/microservices.config';
import { NetworkingModule } from '@core/networking/networking.module';

import { ProfileController } from './profile.controller';
import { profileService } from './profile.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [microservicesConfig],
    }),
    NetworkingModule,
  ],
  controllers: [ProfileController],
  providers: [profileService],
})
export class ProfileModule {}
