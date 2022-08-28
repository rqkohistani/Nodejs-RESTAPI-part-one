import { HttpError } from '../../errors';
import userPostService from './user.post.service';

const getPostByUserId = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const userPost = await userPostService.getPostByUserId(userId);
    if (userPost.length > 0) {
      return res.status(200).json(userPost);
    }
    return res.status(404).json({ message: 'user Post Not Found' });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};
const updatePost = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const postId = parseInt(req.params.postId, 10);
    const postData = req.body;
    const userPost = await userPostService.updatePost(userId, postId, postData);
    if (userPost) {
      return res.status(200).json(userPost);
    }
    return res.status(404).json({ message: 'user Post Not Found' });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const postId = parseInt(req.params.postId, 10);
    const userPost = await userPostService.deletePost(userId, postId);
    if (userPost) {
      return res.status(200).json(userPost);
    }
    return res.status(404).json({ message: 'user Post Not Found' });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

const createPost = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const { title, body } = req.body;
    const postData = { userId, title, body };
    const post = await userPostService.createPost(userId, postData);
    if (!post) throw new HttpError(404, 'User not found.');
    return res.status(201).json(post);
  } catch (error) {
    return next(error);
  }
};

const userPostController = {
  createPost,
  getPostByUserId,
  deletePost,
  updatePost,
};

export default userPostController;
export { createPost, getPostByUserId, deletePost, updatePost };
