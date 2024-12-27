import { Injectable } from '@nestjs/common';

@Injectable()
export class profileService {
  getHello(): string {
    return 'Hello World!';
  }
}
