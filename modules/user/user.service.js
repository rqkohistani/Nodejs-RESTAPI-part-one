import defaultData from './user.default.data';

const getAllUsers = () => {
  return defaultData.userData;
};

const getUser = (id) => {
  const user = defaultData.userData.find((user) => user.id === id);
  if (!user) {
    throw new Error('User not found user.service');
  } else {
    return user;
  }
}


const userService = {
  getAllUsers,
  getUser,
};

export default userService;
