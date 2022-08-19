import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { HttpError } from '../../errors';
import userService, { getUserByEmail } from '../user/user.service';
import { AUTH_DURATION_MS } from '../../constants';

const login = async (email, password) => {
  try {
    const user = getUserByEmail(email);
    if (!user) throw new HttpError(404, 'User not found.');
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) throw new HttpError(400, 'Invalid email or password');
    delete user.password;

    const token = jwt.sign({ id: user.id }, process.env.APPSETTING_JWT_SECRET, {
      expiresIn: AUTH_DURATION_MS,
    });
    return { token, user };
  } catch (error) {
    throw new HttpError(500, error.message);
  }
};

// TODO: logout function is not implemented yet with JWT
const logout = async (email) => {
  const user = getUserByEmail(email);
  if (!user) throw new HttpError(404, 'User not found.');
  console.log(`${user.name} Logout successfully`);

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    accessToken: 'fake-jwt-token',
    message: 'Logout successful',
  };
};

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

const authService = {
  login,
  logout,
  getUserFromAuthToken,
};

export default authService;
