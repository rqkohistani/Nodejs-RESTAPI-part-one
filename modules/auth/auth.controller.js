import { HttpError } from '../../errors';
import authService from './auth.service';
import adminService from '../admin/admin.service';

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const admin = await adminService.getAdminByEmail(email);
    console.log('admin', admin);
    console.log('password', admin.password);
    if (!admin) throw new HttpError(401, 'Invalid email or password');
    const isPasswordValid = await authService.comparePassword(password, admin.password);
    console.log('isPasswordValid', isPasswordValid);
    if (!isPasswordValid) throw new HttpError(401, 'Invalid email or password');
    const token = await authService.generateToken(admin);
    return res.status(201).json({ token, admin });
  } catch (error) {
    next(error);
  }
};

const getUserFromAuthToken = async (req, res, next) => {
  try {
    const user = await authService.getUserFromAuthToken(req.headers?.authorization);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

const authController = {
  login,
  getUserFromAuthToken,
};

export default authController;

export { login, getUserFromAuthToken };
