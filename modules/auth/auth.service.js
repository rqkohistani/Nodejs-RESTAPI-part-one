import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { HttpError } from '../../errors';
import userService, { getUserByEmail } from '../user/user.service';
import { AUTH_DURATION_MS } from '../../constants';
const APPSETTING_JWT_SECRET = 'secretkey';
// FIXME: user env variable for secret key

// FIXME: When user logs in the second time, status 500 with message data and has arguments required.

const login = async (email, password) => {
  try {
    const user = getUserByEmail(email);
    if (!user) throw new HttpError(404, 'User not found.');
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) throw new HttpError(400, 'Invalid email or password');
    delete user.password;
    // FIXME: user env variable for secret key

    const token = jwt.sign({ id: user.id }, APPSETTING_JWT_SECRET, {
      expiresIn: AUTH_DURATION_MS,
    });
    return { token, user };
  } catch (error) {
    throw new HttpError(500, error.message);
  }
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

const getUserFromAuthToken = async (authToken) => {
  try {
    const token = authToken?.split('Bearer ').pop();
    if (!token) throw new HttpError(401, 'No token provided');
    const { userId } = jwt.verify(token, APPSETTING_JWT_SECRET);
    console.log('userId', userId);
    const user = userService.getUser(userId);
    console.log('user', user);
    if (!user) throw new HttpError(401, 'Invalid token11');
    return user;
  } catch (err) {
    throw new HttpError(401, 'Invalid token112');
  }
};

const authService = {
  login,
  logout,
  getUserFromAuthToken,
};

export default authService;
