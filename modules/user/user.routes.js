import express from 'express';
import { getAllUsers, getUser, createUser, deleteUser, updateUser } from './user.controller';
import userValidators from './user.validation';
import securityMiddleware from '../../middleware/security';

const routes = () => {
  const userRouter = express.Router();

  userRouter.get('/',securityMiddleware, getAllUsers);
  userRouter.get('/:id', securityMiddleware,getUser);
  userRouter.post('/', securityMiddleware,userValidators.createUser,createUser);
  userRouter.delete('/:id', securityMiddleware,userValidators.deleteUser, deleteUser);
  userRouter.patch('/:id', securityMiddleware,userValidators.updateUser,updateUser);

  return userRouter;
};

export default routes;
