import { RegisterRequest } from '@common/requests/register.request';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  public readonly email!: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  public readonly password!: string;

  @IsString()
  @IsNotEmpty()
  public readonly fullName!: string;

  constructor(email: string, password: string, fullName: string) {
    this.email = email;
    this.password = password;
    this.fullName = fullName;
  }

  static fromRequest(request: RegisterRequest): RegisterDto {
    return new RegisterDto(request.email, request.password, request.fullName);
  }
}
