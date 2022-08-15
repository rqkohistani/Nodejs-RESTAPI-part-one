/**
 * Extends the Error class to provide additional information about the error.
 * @param {string} validationErrors - The error message.
 * @param {number} status - The HTTP status code.
 * @extends Error
 * throw new HttpError(statusCode, validationErrors);
 * 
 * it ensures that the error is an instance of the HttpError class.
 * makes Stack trace  alittle easier to read.
 * @see {@link https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript}
 * 
 * Override the toString method to return the error message.
 */

export default class ValidatorError extends Error {
  constructor(status, validationErrors) {
    super(validationErrors);

    this.name = this.constructor.name;
    this.data = {
      status,
      validationErrors,
    };

    Error.captureStackTrace(this, this.constructor);
  }
}
