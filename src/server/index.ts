import { Server, Response } from 'miragejs';
import USER from '@/server/__mocks__/users';
import MESSAGES from '@/server/__mocks__/messages';
import ATTACHES from '@/server/__mocks__/attaches';
import { randomTiming, uuid } from '@shared/helpers';

const mockServer = new Server({
  seeds(server) {
    server.db.loadData({
      users: USER,
      messages: MESSAGES,
      attaches: ATTACHES
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

    // get attaches
    this.get(`/attaches`, (schema) => schema.db.attaches, { timing: randomTiming(1500, 4000) });

    // post attach
    this.post('/attaches/create', (schema, request) => {
      const attach = JSON.parse(request.requestBody);
      return [...schema.db.attaches, attach];
    }, { timing: randomTiming(1500, 4000) })
  },
});

export { mockServer };