import authService from '../../modules/auth/auth.service';

const verifyToken = async (req, res, next) => {
  try {
    const user = await authService.getUserFromAuthToken(req.headers?.authorization);
    req.currentUser = user;

    console.log('user', user);
    return next();
  } catch (error) {
    return next(error);
  }
};

// export default verifyToken;
// function verifyToken(req, res, next) {
//   // Get auth header value
//   const bearerHeader = req.headers['authorization'];
//   // Check if bearer is undefined
//   if (typeof bearerHeader !== 'undefined') {
//     // Split at the space
//     const bearer = bearerHeader.split(' ');
//     // Get token from array
//     const bearerToken = bearer[1];
//     // Set the token
//     req.token = bearerToken;
//     // Next middleware
//     next();
//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }
// }

export default verifyToken;
