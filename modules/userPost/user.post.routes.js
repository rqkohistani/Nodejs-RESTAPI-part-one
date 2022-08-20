import express from 'express';

import { createPost, getPostByUserId, deletePost, updatePost } from './user.post.controller';

import userPostValidators from './userPost.validation';
import securityMiddleware from '../../middleware/security';

const routes = () => {
  const userPostRouter = express.Router();
  userPostRouter.get('/', securityMiddleware, getPostByUserId);
  userPostRouter.post('/', securityMiddleware, userPostValidators.createUserPost, createPost);
  userPostRouter.delete('/', securityMiddleware, deletePost);
  // userPostRouter.delete('/', securityMiddleware,userPostValidators.deletePost, deletePost);
  userPostRouter.patch('/', securityMiddleware, updatePost);
  // userPostRouter.patch('/', securityMiddleware, userPostValidators.updateUserPost, updatePost);

  // TODO: Add VALIDATION to the DELETE and UPDATE routes.
  return userPostRouter;
};

export default routes;
