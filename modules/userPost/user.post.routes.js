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
  // userPostRouter.get('/:userId', securityMiddleware, userPostValidators.getPostByUserId,getPostByUserId);
  // userPostRouter.delete('/:postId', securityMiddleware,userPostValidators.deletePost, deletePost);
  // userPostRouter.patch('/:postId', securityMiddleware, userPostValidators.updateUserPost, updatePost);

  // TODO: Add VALIDATION to the GETPOSTBYUSERID, DELETE and UPDATE routes.
  return userPostRouter;
};

export default routes;
