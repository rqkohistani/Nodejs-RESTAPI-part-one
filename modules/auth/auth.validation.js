import { loginSchema,logoutSchema } from './schemas';
import { validateJsonSchema } from '../../utils/validation.util';

const login = (req, res, next) => {
  const credentials = {
    email: req.body.email,
    password: req.body.password,
  };
  validateJsonSchema(loginSchema, credentials);
  req.body = credentials;
  next();
};

const logout = (req, res, next) => {
  const credentials = {
    email: req.body.email,
  };
  validateJsonSchema(logoutSchema, credentials);
  req.body = credentials;
  next();
};

const authValidators = {
  login,
  logout,
};

export default authValidators;
export { login, logout };
