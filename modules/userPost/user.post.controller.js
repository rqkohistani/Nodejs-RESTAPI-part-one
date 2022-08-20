import { HttpError } from '../../errors';
import userPostService from './user.post.service';

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
