import express from 'express';

import userRoutes from './modules/user/user.routes';


const routes = () => {
  const router = express.Router();

  router.use('/users', userRoutes());

  return router;
};

export const notFoundRoute = (req, res) => {
  return res.status(404).send('routeNotFoundMessage');
};

export default routes;
