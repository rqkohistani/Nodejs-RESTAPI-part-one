import rolesAndPermissions from '../../roles.json';

const checkPermission = async (req, res, next) => {
  const role = req.currentUser?.userRole;
  if (['superAdmin', 'admin'].includes(role)) return next(); // superAdmin and admin have access to all routes

  const requiredPermission = `${req.method}${req.baseUrl}${req.route?.path}`;

  const permissionsForUser = rolesAndPermissions[role]?.routes;

  if (!permissionsForUser?.includes(requiredPermission)) return res.status(403).send({ message: 'No permission' });

  return next();
};

export default checkPermission;
