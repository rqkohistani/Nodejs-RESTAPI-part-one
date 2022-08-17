import bcrypt from 'bcrypt';

import userService, { getUserByEmail } from '../user/user.service';
import { HttpError } from '../../errors';

const login = async (email, password) => {
  const user = getUserByEmail(email);
  if (!user) throw new HttpError(404, 'User not found.');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new HttpError(400, 'Invalid email or password');
  console.log(`${user.name} logged successfully`);

  delete user.password; // removes password from response body for security reasons

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    accessToken: 'fake-jwt-token',
    message: 'Login successful',
  };
};

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

const getUserFromAuthToken = async (authToken, email) => {
  try {
    const token = authToken?.split('Bearer').pop();
    if (!token) throw new HttpError(401, 'Unauthorized: No token provided');
    // const user = await userService.getUserByToken(token);
    const user = getUserByEmail(email);
    if (!user) throw new HttpError(401, 'Unauthorized: Invalid token');
    return user;
  } catch (error) {
    throw new HttpError(401, 'Unauthorized: Invalid token');
  }
};

const authService = {
  login,
  logout,
  getUserFromAuthToken,
};

export default authService;
