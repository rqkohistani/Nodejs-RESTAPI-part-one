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

import { createUserSchema } from './schemas';
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

// TODO: add the validation to the user validation middleware
// const createUserSchema = {
//   "type": "object",
//   "properties": {
//     "id": {
//       "type": "integer",
//       "description": "The id of the user"
//     },
//     "name": { "type": "string", "minLength": 1 },
//     "email": { "type": "string", "format": "email" },
//     "password": { "type": "string", "minLength": 8 },
//     "userRole": { "enum": ["admin", "user"] },
//     "createdAt": { "type": "string", "format": "date-time" },
//     "updatedAt": { "type": "string", "format": "date-time" }
//   },
//   "additionalProperties": false,
//   "required": ["name", "email", "password", "userRole"]
// }


const createUser = (req, res, next) => {
  const valid = validateJsonSchema(createUserSchema, req.body);

  next();
};

const validateJsonSchema = (schema, data) => {
  const validate = ajv.compile(schema);
  console.log('valid: ', validate);

  if (!validate(data)) throw new HttpError(404, 'Invalid user data');
};
