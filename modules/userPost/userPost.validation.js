import { validateJsonSchema } from '../../utils/validation.util';
import { createUserPostSchema } from './schemas';

const createUserPost = (req, res, next) => {
  const user = {
    ...req.body,
  };
  validateJsonSchema(createUserPostSchema, user);
  req.body = user; // req.body is the data sent to the server in the request body. req.body is a property on the request object.
  // req.body.user = user; // req.body.user is a property on the request object.
  next();
};

export { createUserPost };

const userValidators = {
  createUserPost,
};

export default userValidators;
