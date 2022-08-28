import { validateJsonSchema } from '../../utils/validation.util';
import { createUserSchema, updateUserSchema, deleteUserSchema } from './schemas';
import { HttpError } from '../../errors';

const createUser = (req, res, next) => {
  const user = {
    ...req.body,
  };
  validateJsonSchema(createUserSchema, user);
  req.body = user; // req.body is the data sent to the server in the request body. req.body is a property on the request object.
  // req.body.user = user; // req.body.user is a property on the request object.
  next();
};

const updateUser = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const user = {
    ...req.body,
    id,
  };
  validateJsonSchema(updateUserSchema, user);
  delete user.id;
  req.body = user;
  next();
};

const deleteUser = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const secret = req.body.secret;
  if (secretProvided(secret)) {
    const user = {
      ...req.body,
      id,
    };
    validateJsonSchema(deleteUserSchema, user);
    req.body = user;
    next();
  } else {
    throw new HttpError(401, ` Unauthorized: Secret is not provided`);
  }
};

/**
 * TODO: Add secret to the environment variables or validate that only admin can delete a user
 * or delete a user only if the user is inactive for a certain period of time
 * or remove this function
 */

const secretProvided = (secret) => {
  if (secret === 'secret') {
    return true;
  } else {
    return false;
  }
};

export { createUser, updateUser, deleteUser };

const userValidators = {
  createUser,
  updateUser,
  deleteUser,
};

export default userValidators;
