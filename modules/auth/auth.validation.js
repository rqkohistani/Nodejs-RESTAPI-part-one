import { loginSchema,logoutSchema } from './schemas';
import { validateJsonSchema } from '../../utils/validation.util';

const login = (req, res, next) => {
  const user = {
    ...req.body,
  };
  validateJsonSchema(loginSchema, user);
  req.body = user;
  next();
};

const logout = (req, res, next) => {
  const user = {
    ...req.body,
  };
  validateJsonSchema(logoutSchema, user);
  req.body = user;
  next();
};

const authValidators = {
  login,
  logout,
};

export default authValidators;
export { login, logout };
