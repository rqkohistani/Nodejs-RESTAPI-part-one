import express from 'express';
import { getAllUsers, getUser, createUser, deleteUser, updateUser } from './user.controller';

const routes = () => {
  const userRouter = express.Router();

  userRouter.get('/', getAllUsers);
  userRouter.get('/:id', getUser);
  userRouter.post('/', createUser);
  userRouter.delete('/:id', deleteUser);
  userRouter.patch('/:id', updateUser);

  return userRouter;
};

export default routes;
