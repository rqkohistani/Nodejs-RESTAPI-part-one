/**
 * Extends the Error class to provide additional information about the error.
 * @param {string} message - The error message.
 * @param {number} status - The HTTP status code.
 * @param {string} code - The error code.
 * @param {string} field - The field that caused the error.
 * @class
 * @extends Error
 * @example
 * throw new HttpError(statusCode, message);
 * 
 * It ensures that the error is an instance of the HttpError class.
 * Makes Stack trace  alittle easier to read.
 * @see {@link https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript}
 */
export default class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.name = this.constructor.name;
    this.data = {
      status,
      message,
    };
    

    Error.captureStackTrace(this, this.constructor);
  }
}
