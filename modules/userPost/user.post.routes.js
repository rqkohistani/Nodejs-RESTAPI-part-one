import express from 'express';

import { createPost, getPostByUserId, deletePost, updatePost } from './user.post.controller';

import userPostValidators from './userPost.validation';
import securityMiddleware from '../../middleware/security';

const routes = () => {
  const userPostRouter = express.Router();
  userPostRouter.get('/:userId', securityMiddleware, getPostByUserId);
  userPostRouter.post('/', securityMiddleware, userPostValidators.createUserPost, createPost);
  userPostRouter.delete('/:postId', securityMiddleware, deletePost);
  userPostRouter.patch('/:postId', securityMiddleware, updatePost);
  // TODO: Add VALIDATION to the GETPOSTBYUSERID, DELETE and UPDATE routes. check out part two github repo for more info.
  return userPostRouter;
};

export default routes;
