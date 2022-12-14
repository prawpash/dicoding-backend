import { server as _server } from '@hapi/hapi';
// eslint-disable-next-line import/extensions
import routes from './routes.js';

const init = async () => {
  const server = _server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  // eslint-disable-next-line no-console
  console.log(`Application running on ${server.info.uri}`);
};

init();
