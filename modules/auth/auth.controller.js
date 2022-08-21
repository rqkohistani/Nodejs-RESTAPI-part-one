import { HttpError } from '../../errors';
import authService from './auth.service';

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const {token, user} = await authService.login(email, password);
    res.status(201).send({token, user});
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await authService.logout(email);
    if (!user) throw new HttpError(404, 'User not found.');
    res.status(200).send(user);
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
  logout,
  getUserFromAuthToken,
};

export default authController;

export { login, logout, getUserFromAuthToken };
