import { DEFAULT_ERROR } from './constants';

const errorHandler = (error, req, res, next) => {
  if (!error) return next();

  let errorData = error?.data;

  // Non-custom errors will not contain error.data
  if (!errorData) errorData = getDerivedError(error);

  if (process.env.NODE_ENV !== 'production') {
    logError(error, errorData);
  }

  return res?.status(errorData.status || 500).send(errorData);
};
/**
 * Returns custom message based on known errors.
 * @param {} error
 * @returns
 */
const getDerivedError = (error) => {
  if (error.type === 'entity.parse.failed') return { status: 400, message: 'Request body contains invalid JSON' };

  let errorData = {
    status: error.status,
    message: error?.message,
  };
  return DEFAULT_ERROR;
};
const logError = (error, errorData) => {
  if (Object.prototype.hasOwnProperty.call(errorData, 'validationErrors')) {
    console.error(`status: ${errorData.status}, validationErrors:`);
    console.dir(errorData.validationErrors);
  } else {
    console.error(error);
  }
};
export default errorHandler;
