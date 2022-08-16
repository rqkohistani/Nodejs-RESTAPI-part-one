/**
 * ajvOptions: {
 * allErrors: true, // return all errors, not just the first one
 * removeAdditional: true, // remove additional properties from the validated data
 * multipleOfPrecision: 12 // the precision used when converting floating point numbers to string
 * }
 *
 * addFormat: {
 * 'date-time': dateTimeFormat,
 * 'date': dateFormat,
 * 'time': timeFormat,
 *
 *
 * ajv.addKeyword function to add a custom keyword to the ajv instance.
 * The keyword is added to the ajv instance when ajv-formats is used without options or with option keywords: true.
 * These keywords apply only to strings. If the data is not a string, the validation succeeds. npm i ajv-formats
 *
 */

import { createUserSchema, updateUserSchema,deleteUserSchema } from './schemas';
import { HttpError } from '../../errors';
import addFormats from 'ajv-formats';

const ajvOptions = { allErrors: true, removeAdditional: true, multipleOfPrecision: 12 };
const ajv = new Ajv(ajvOptions);

import Ajv from 'ajv';
addFormats(ajv);

ajv.addKeyword({
  keyword: 'example',
  errors: false,
});

const createUser = (req, res, next) => {
  const valid = validateJsonSchema(createUserSchema, req.body);

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
  /**
   * id is not allowed to be updated and is therefore removed from the score object.
   * It is only used for validation. The id is taken from the url. This is done to prevent the id from being updated.
   * or updateUserSchema.properties remove it    "id": { "type": "integer" }, However, this is not recommended.
   */
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

// TODO: Make validationJsonSchema a generic function
const validateJsonSchemaNew = (schema, data) => {
  const validate = ajv.compile(schema);
  if (!validate(data))
    throw new HttpError(404, `${validate.errors[0].message}. Required fields ${deleteUserSchema.required.join(', ')} `);
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
