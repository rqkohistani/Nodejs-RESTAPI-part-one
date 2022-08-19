import { validateJsonSchema } from '../../utils/validation.util';
import { createAdminSchema,updateAdminSchema, deleteAdminSchema } from './schemas';
import { HttpError } from '../../errors';

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

const deleteAdmin = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const secret = req.body.secret;
  if (secretProvided(secret)) {
    const admin = {
      ...req.body,
      id,
    };
    validateJsonSchema(deleteAdminSchema, admin);
    req.body = admin;
    next();
  } else {
    throw new HttpError(401, ` Unauthorized: Secret is not provided`);
  }
};

const secretProvided = (secret) => {
  if (secret === 'secret') {
    return true;
  } else {
    return false;
  }
};

export { createAdmin };

const adminValidators = {
  createAdmin,
  updateAdmin,
  deleteAdmin,
};

export default adminValidators;
