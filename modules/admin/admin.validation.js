import { validateJsonSchema } from '../../utils/validation.util';
import { createAdminSchema } from './schemas';
const createAdmin = (req, res, next) => {
  const admin = {
    ...req.body,
  };
  validateJsonSchema(createAdminSchema, admin);
  req.body = admin;
  next();
};

export { createAdmin };

const adminValidators = {
  createAdmin,
};

export default adminValidators;
