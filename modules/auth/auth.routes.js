import express from 'express';
import { login, logout } from './auth.controller';
import authValidators from './auth.validation';

const routes = () => {
  const authRouter = express.Router();

  authRouter.post('/login', authValidators.login, login);
  authRouter.post('/logout', authValidators.logout, logout);

  return authRouter;
};

export default routes;
