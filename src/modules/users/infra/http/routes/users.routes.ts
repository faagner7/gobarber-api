import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersRespository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const usersRespository = new UsersRespository();
  const createUser = new CreateUserService(usersRespository);

  const user = await createUser.execute({
    name,
    email,
    password,
  });

  // delete user.password;
  user.password = '';

  return response.json(user);
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const usersRespository = new UsersRespository();
    const userId = request.user!;
    const updateUserAvatar = new UpdateUserAvatarService(usersRespository);
    const user = await updateUserAvatar.execute({
      user_id: userId,
      avatarFilename: request.file.filename,
    });
    return response.json(user);
  },
);

export default usersRouter;
