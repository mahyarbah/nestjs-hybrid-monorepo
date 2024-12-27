import { User } from '@common/entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  private users: User[] = [];

  public register(user: User): User {
    this.users.push(user);
    return user;
  }
}
