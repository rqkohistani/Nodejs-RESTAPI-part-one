import rolesAndPermission from '../../roles.json';

const checkPermission = async (req, res, next) => {
  const role = req.user?.role?.name;
  if (['admin'].includes(role)) return next(); // admin can access all given routes

  const requiredPersmission = `{req.method} ${req.baseUrl}${req.route.path}`; // get the required permission from the request object

  const hasPermission = rolesAndPermission[role].includes(requiredPersmission); // check if the role has the required permission

  if (hasPermission) {
    return next();
  } else {
    throw new HttpError(403, `Forbidden: You don't have permission to access this route`);
  }
};

export default checkPermission;
