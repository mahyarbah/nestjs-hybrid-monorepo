import { CONFIG_TOKEN } from '@common/constants/config.constant';
import { registerAs } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

export default registerAs(CONFIG_TOKEN.MICROSERVICES, () => {
  return {
    tcp: {
      transport: Transport.TCP,
      authenticationOptions: {
        host: 'localhost',
        port: 3001,
      },
      paymentOptions: {
        host: 'localhost',
        port: 3002,
      },
      profileOptions: {
        host: 'localhost',
        port: 3003,
      },
    },
  };
});
