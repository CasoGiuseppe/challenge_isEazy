import { Server, Response } from 'miragejs';
import USER from '@/server/__mocks__/users';
import MESSAGES from '@/server/__mocks__/messages';
import { randomTiming, uuid } from '@shared/helpers';

const mockServer = new Server({
  seeds(server) {
    server.db.loadData({
      users: USER,
      messages: MESSAGES
    });
  },

  routes() {
    this.namespace = import.meta.env.VITE_APP_API_NAMESPACE;

    // get users info
    this.get(`/user`, (schema, request) => {
      const result = schema.db.users.where({ email: request?.queryParams?.email, password: request?.queryParams?.password })
      return result.length > 0 ? result[0] : new Response(400, { some: 'header' }, { errors: '400' })
    }, { timing: randomTiming(1500, 4000) });

    // get messages
    this.get(`/messages`, (schema) => schema.db.messages, { timing: randomTiming(1500, 4000) })

    // post message
    this.post('/messages/create', (schema, request) => {
      const message = JSON.parse(request.requestBody);
      message.id = uuid()
      return [...schema.db.messages, message];
    }, { timing: randomTiming(1500, 4000) })
  },
});

export { mockServer };