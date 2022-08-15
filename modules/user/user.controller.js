import { HttpError } from '../../errors';
import userService from './user.service';

const getAllUsers = (req, res, next) => {
  try {
    const users = userService.getAllUsers();
    if (!users?.length) throw new HttpError(404, 'No users found in the file');

    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

const getUser = (req, res, next) => {
  // TODO: validate req.body
  try {
    const id = parseInt(req.params.id, 10);
    const user = userService.getUser(id);
    if (!user) throw new HttpError(404, 'User not found.');
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

const createUser = (req, res, next) => {
  try {
    // TODO: validate req.body
    const user = userService.createUser(req.body);
    if (!user) throw new HttpError(404, 'User not created controller');
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
    // TODO: next(error); extend error object with status code
  }
};
// TODO
// TODO: validate req.body
const deleteUser = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = userService.deleteUser(id);
    if (!user) throw new HttpError(404, 'User not found.');
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

// TODO: validate req.body
const updateUser = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = userService.updateUser(id, req.body);
    if (!user) throw new HttpError(404, 'User not found.');
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const userController = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};

export default userController;

export { getAllUsers, getUser, createUser, deleteUser, updateUser };
