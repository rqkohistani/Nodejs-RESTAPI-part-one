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

const getAdmin = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const admin = adminService.getAdmin(id);
    if (!admin) throw new HttpError(404, 'Admin not found.');
    res.status(200).send(admin);
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

const deleteAdmin = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const admin = adminService.deleteAdmin(id);
    if (!admin) throw new HttpError(404, 'Admin not found.');
    res.status(200).send(admin);
  } catch (error) {
    next(error);
  }
};

const updateAdmin = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const getAdmin = adminService.getAdmin(id);
    if (!getAdmin) throw new HttpError(404, 'Admin not found.');
    const admin = adminService.updateAdmin(id, req.body);
    if (!admin) throw new HttpError(404, 'Admin not found.');
    res.status(200).json({message: 'Admin updated successfully.', data: adminService.getAdmin(id)});
  } catch (error) {
    next(error);
  }
};

const adminController = {
  getAllAdmins,
  getAdmin,
  createAdmin,
  deleteAdmin,
  updateAdmin,
};

export default adminController;

export { getAllAdmins, getAdmin, createAdmin, deleteAdmin, updateAdmin };
