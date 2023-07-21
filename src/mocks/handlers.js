// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.post('http://localhost:4000/api/v1/login', (req, res, ctx) => res(
    // Respond with a 200 status code
    ctx.status(200),
    ctx.json({
      authentication_token: '123456fdgdgdf',
      user_id: 1,
      name: 'John Doe',
      email: 'john@mail.com',
      role: 'user',
      username: 'john',
    }),
  )),

  rest.post('http://localhost:4000/api/v1/register', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      authentication_token: '123456fdgdgdf',
      user_id: 1,
      name: 'John Doe',
      email: 'john@mail.com',
      role: 'user',
      username: 'john',
    }),
  )),
];
