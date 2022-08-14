import express from 'express';
import { getAllUsers, getUser, createUser } from './user.controller';

const routes = () => {
  const userRouter = express.Router();

  userRouter.get('/', getAllUsers);
  userRouter.get('/:id', getUser);
  userRouter.post('/', createUser);

  return userRouter;
};

export default routes;
