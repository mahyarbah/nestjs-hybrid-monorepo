import { Body, Controller, Post } from '@nestjs/common';

import { RegisterRequest } from '@common/requests/register.request';

import { AuthenticationService } from './authentication.service';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly service: AuthenticationService) {}

  @Post('register')
  async register(@Body() request: RegisterRequest) {
    this.service.register(request);
  }

  @Post('login')
  async login() {
    this.service.login();
  }
}
