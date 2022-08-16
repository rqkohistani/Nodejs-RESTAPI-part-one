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
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { ValidatorError } from '../errors';

const ajvOptions = { allErrors: true, removeAdditional: true, multipleOfPrecision: 12 };
const ajv = new Ajv(ajvOptions);

addFormats(ajv);
ajv.addKeyword({
  keyword: 'example',
  errors: false,
});

export const validateJsonSchema = (schema, data) => {
  const validate = ajv.compile(schema);
  validate(data); // returns true or false depending on the data passed in and the schema

  if (validate.errors) {
    throw new ValidatorError(400, validate.errors);
  }
};
