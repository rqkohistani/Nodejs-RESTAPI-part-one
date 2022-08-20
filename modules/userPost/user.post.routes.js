import express from 'express';

import { createPost } from './user.post.controller';

import userPostValidators from './userPost.validation'
import securityMiddleware from '../../middleware/security';

const routes = () => {
  const userPostRouter = express.Router();
  userPostRouter.post('/', securityMiddleware, userPostValidators.createUserPost, createPost);
  return userPostRouter;
};

export default routes;
