import { Router } from 'express';

import UsersRespository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const usersRespository = new UsersRespository();
  const authenticateUserService = new AuthenticateUserService(usersRespository);

  const { user, token } = await authenticateUserService.execute({
    email,
    password,
  });

  user.password = '';
  // delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
