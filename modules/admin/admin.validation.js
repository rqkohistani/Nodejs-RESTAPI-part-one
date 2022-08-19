import { validateJsonSchema } from '../../utils/validation.util';
import { createAdminSchema,updateAdminSchema } from './schemas';
const createAdmin = (req, res, next) => {
  const admin = {
    ...req.body,
  };
  validateJsonSchema(createAdminSchema, admin);
  req.body = admin;
  next();
};

const updateAdmin = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const admin = {
    ...req.body,
    id,
  };
  validateJsonSchema(updateAdminSchema, admin);
  delete admin.id;
  req.body = admin;
  next();
};
export { createAdmin };

const adminValidators = {
  createAdmin,
  updateAdmin,
};

export default adminValidators;
