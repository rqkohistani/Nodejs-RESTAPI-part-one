import express from 'express';
import { login, getUserFromAuthToken } from './auth.controller';
import authValidators from './auth.validation';

const routes = () => {
  const authRouter = express.Router();

  authRouter.post('/login', authValidators.login, login);
  authRouter.get('/me', getUserFromAuthToken);

  return authRouter;
};

export default routes;
