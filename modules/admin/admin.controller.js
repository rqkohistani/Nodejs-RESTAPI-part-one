import { HttpError } from '../../errors';
import adminService from './admin.service';
const createAdmin = (req, res, next) => {
  try {
    const admin = adminService.createAdmin(req.body);
    if (!admin) throw new HttpError(404, 'Admin not created controller');
    res.status(201).send(admin);
  } catch (error) {
    next(error);
  }
};
