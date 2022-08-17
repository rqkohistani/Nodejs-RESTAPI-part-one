import authorization from './authorization.middleware';
// import authentication from './authentication.middleware';

const securityMiddleware = [authorization];
// const securityMiddleware = [authorization, authentication];

export default securityMiddleware;