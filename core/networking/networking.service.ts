import { Microservice } from '@common/enums/microservice.enum';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class NetworkingService {
  constructor(
    @Inject(Microservice.AUTHENTICATION)
    private readonly authClient: ClientProxy,
    @Inject(Microservice.PAYMENT) private readonly paymentClient: ClientProxy,
    @Inject(Microservice.PROFILE) private readonly profileClient: ClientProxy,
  ) {}

  async send<T>(
    microservice: Microservice,
    pattern: string,
    payload: any,
  ): Promise<T> {
    const client = this.getClient(microservice);
    if (!client) {
      throw new Error(`Client for microservice ${microservice} not registered`);
    }
    return client.send<T>(pattern, payload).toPromise();
  }

  private getClient(microservice: Microservice): ClientProxy | null {
    switch (microservice) {
      case Microservice.AUTHENTICATION:
        return this.authClient;
      case Microservice.PAYMENT:
        return this.paymentClient;
      case Microservice.PROFILE:
        return this.profileClient;
      default:
        return null;
    }
  }
}
