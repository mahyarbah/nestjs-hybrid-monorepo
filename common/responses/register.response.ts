import { User } from '@common/entities/user.entity';

export class RegisterResponse {
  constructor(
    public email: string,
    public fullName: string,
  ) {}

  static fromRegisteredUser(user: User): RegisterResponse {
    return new RegisterResponse(user.email, user.fullName);
  }
}
