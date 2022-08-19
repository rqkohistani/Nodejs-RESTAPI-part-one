import authentication from './authentication.middleware';
import authorization from './authorization.middleware';

const securityMiddleware = [authentication, authorization];

export default securityMiddleware;
