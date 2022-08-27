import authService from '../../modules/auth/auth.service';

const verifyToken = async (req, res, next) => {
  try {
    const user = await authService.getUserFromAuthToken(req.headers?.authorization);
    req.currentUser = user;

    return next();
  } catch (error) {
    return next(error);
  }
};

export default verifyToken;
