import express from 'express';
import { getAllAdmins, getAdmin, createAdmin, deleteAdmin, updateAdmin } from './admin.controller';
import adminValidators from './admin.validation';
import securityMiddleware from '../../middleware/security';

const routes = () => {
  const adminRouter = express.Router();
  adminRouter.get('/',securityMiddleware, getAllAdmins);
  adminRouter.get('/:id', securityMiddleware,getAdmin);
  adminRouter.post('/', securityMiddleware,adminValidators.createAdmin,createAdmin);
  return adminRouter;
};

export default routes;
