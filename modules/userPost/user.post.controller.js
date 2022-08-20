import { HttpError } from '../../errors';
import userPostService from './user.post.service';

const getPostByUserId = async (req, res, next) => {
  try {
    const userId = parseInt(req.baseUrl.split('/')[4], 10); // get the user id from the url
    const userPost = await userPostService.getPostByUserId(userId);
    if (userPost.length > 0) {
      return res.status(200).json(userPost);
    }
    return res.status(404).json({ message: 'userPostNotFound' });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};
const createPost = async (req, res, next) => {
  try {
    const userId = parseInt(req.baseUrl.split('/')[4], 10); // get the user id from the url
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
};

export default userPostController;
export {createPost };
