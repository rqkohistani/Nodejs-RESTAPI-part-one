import { loginSchema } from './schemas';
import { validateJsonSchema } from '../../utils/validation.util';

const login = (req, res, next) => {
  const user = {
    ...req.body,
  };
  validateJsonSchema(loginSchema, user);
  req.body = user;
  next();
};

const authValidators = {
  login,
};

export default authValidators;
export { login };
