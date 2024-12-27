import { RegisterDto } from '@common/dtos/register.dto';

export class User {
  constructor(
    public email: string,
    public password: string,
    public fullName: string,
  ) {}

  static fromRegistration(payload: RegisterDto): User {
    return new User(payload.email, payload.password, payload.fullName);
  }
}
