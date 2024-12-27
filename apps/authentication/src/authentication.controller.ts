import { RegisterDto } from '@common/dtos/register.dto';
import { User } from '@common/entities/user.entity';
import { Action } from '@common/enums/action.enum';
import { Route } from '@common/enums/route.enum';
import { RegisterResponse } from '@common/responses/register.response';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthenticationService } from './authentication.service';

@Controller()
export class AuthenticationController {
  constructor(private readonly service: AuthenticationService) {}

  @MessagePattern(`${Route.USERS}.${Action.REGISTER}`)
  private async register(
    @Payload() payload: RegisterDto,
  ): Promise<RegisterResponse> {
    const user = User.fromRegistration(payload);
    const registeredUser = await this.service.register(user);

    return RegisterResponse.fromRegisteredUser(registeredUser);
  }

  @MessagePattern(`${Route.USERS}.${Action.LOGIN}`)
  private async login(): Promise<string> {
    console.log(`login was called`);
    return `login was called`;
  }
}
