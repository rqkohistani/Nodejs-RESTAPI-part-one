import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { HttpError } from '../../errors';
import userService from '../user/user.service';
import { AUTH_DURATION_MS } from '../../constants';


const getUserFromAuthToken = async (authToken) => {
  try {
    const token = authToken?.split('Bearer ').pop();
    if (!token) throw new HttpError(401, 'No token provided');
    const { id } = jwt.verify(token, process.env.APPSETTING_JWT_SECRET);
    const user = userService.getAdminUser(id);
    if (!user) throw new HttpError(401, 'Invalid token');
    return user;
  } catch (err) {
    throw new HttpError(401, 'Invalid token');
  }
};

const comparePassword = async (password, hash) => bcrypt.compareSync(password, hash);

const generateToken = async (admin) => {
  const token = jwt.sign({ id: admin.id }, process.env.APPSETTING_JWT_SECRET, {
    expiresIn: AUTH_DURATION_MS,
  });
  return token;
};

const authService = {
  getUserFromAuthToken,
  comparePassword,
  generateToken,
};

export default authService;
