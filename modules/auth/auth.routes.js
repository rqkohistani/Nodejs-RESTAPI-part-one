import express from 'express';
import { login, logout } from './auth.controller';

const routes = () => {
  const authRouter = express.Router();

  authRouter.post('/login', login);
  authRouter.post('/logout', logout);

  return authRouter;
};

export default routes;
