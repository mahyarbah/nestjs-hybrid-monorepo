import { Controller, Get } from '@nestjs/common';
import { profileService } from './profile.service';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: profileService) {}

  @Get()
  getHello(): string {
    return this.profileService.getHello();
  }
}
