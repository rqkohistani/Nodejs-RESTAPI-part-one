import { HttpError } from '../../errors';
import adminService from './admin.service';
const getAllAdmins = (req, res, next) => {
  try {
    const admins = adminService.getAllAdmins();
    if (!admins?.length) throw new HttpError(404, 'No admins found in the file');

    res.status(200).send(admins);
  } catch (error) {
    next(error);
  }
};
const createAdmin = (req, res, next) => {
  try {
    const admin = adminService.createAdmin(req.body);
    if (!admin) throw new HttpError(404, 'Admin not created controller');
    res.status(201).send(admin);
  } catch (error) {
    next(error);
  }
};
