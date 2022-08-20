import express from 'express';

import userRoutes from './modules/user/user.routes';
import authRouter from './modules/auth/auth.routes';
import adminRouter from './modules/admin/admin.routes';
import userPostRouter from './modules/userPost/user.post.routes';

const routes = () => {
  const router = express.Router();

  router.use('/auth', authRouter());
  router.use('/users', userRoutes());
  router.use('/admins', adminRouter());
  router.use('/posts/:userId', userPostRouter());

  return router;
};

// TODO: Add Routes NOT FOUND
export const notFoundRoute = (req, res) => {
  return res.status(404).send('routeNotFoundMessage');
};

export default routes;
