import express from 'express';
import { getAllUsers, getUser, createUser, deleteUser, updateUser } from './user.controller';
import userValidators from './user.validation';

const routes = () => {
  const userRouter = express.Router();

  userRouter.get('/', getAllUsers);
  userRouter.get('/:id', getUser);
  userRouter.post('/', userValidators.createUser,createUser);
  userRouter.delete('/:id', deleteUser);
  userRouter.patch('/:id', userValidators.updateUser,updateUser);

  return userRouter;
};

export default routes;
