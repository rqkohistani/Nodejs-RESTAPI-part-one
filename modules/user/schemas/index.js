/**
 * https://www.npmjs.com/package/ajv
 * Ajv JSON schema validator
 * The fastest JSON validator for Node.js and browser.
 * @version 5.0.0-beta.0
 * @license MIT
 * @author Vladimir Dzhuvinov
 * @see
 * https://www.npmjs.com/package/ajv-formats
 * These keywords allow to define minimum/maximum constraints when the format keyword defines ordering (compare function in format definition).
 * These keywords are added to ajv instance when ajv-formats is used without options or with option keywords: true.
 * These keywords apply only to strings. If the data is not a string, the validation succeeds.
 * npm i ajv-formats
 */
import createUserSchema from './createUser.schema.json';
import updateUserSchema from './updateUser.schema.json';
export { createUserSchema, updateUserSchema };
