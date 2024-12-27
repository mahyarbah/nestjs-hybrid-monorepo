import { RegisterDto } from '@common/dtos/register.dto';
import { Action } from '@common/enums/action.enum';
import { Microservice } from '@common/enums/microservice.enum';
import { Route } from '@common/enums/route.enum';
import { RegisterRequest } from '@common/requests/register.request';
import { NetworkingService } from '@core/networking/networking.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  constructor(private readonly networking: NetworkingService) {}

  async register(request: RegisterRequest) {
    const payload = RegisterDto.fromRequest(request);

    this.networking.send(
      Microservice.AUTHENTICATION,
      `${Route.USERS}.${Action.REGISTER}`,
      payload,
    );
  }

  async login() {
    this.networking.send(
      Microservice.AUTHENTICATION,
      `${Route.USERS}.${Action.LOGIN}`,
      {},
    );
  }
}
