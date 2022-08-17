import bcrypt from 'bcrypt';
import { HttpError } from '../../errors';
import authService from './auth.service';
import userService, { getUserByEmail } from './../user/user.service';
let currentUser = "";
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await authService.login(email, password);
    currentUser = user;
    if (!user) throw new HttpError(404, 'User not found.');
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await authService.logout(email);
    // currentUser = 'Loging please';
    req.headers.authorization = '';
    currentUser = '';

    //  user = await authService.getUserFromAuthToken(req.headers?.authorization, email);

    if (!user) throw new HttpError(404, 'User not found.');
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

const getUserFromAuthToken = async (req, res, next) => {
  try {
     currentUser = currentUser?.email;
    if (!currentUser) throw new HttpError(401, 'Unauthorized: Invalid token');
    const user = await authService.getUserFromAuthToken(req.headers?.authorization, currentUser);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

const authController = {
  login,
  logout,
  getUserFromAuthToken,
};

export default authController;

export { login, logout, getUserFromAuthToken };
