import express from 'express';
import { getAllUsers, getUser } from './user.controller';

const routes = () => {
  const userRouter = express.Router();

  userRouter.get('/', getAllUsers);
  userRouter.get('/:id', getUser);

  return userRouter;
};

export default routes;
