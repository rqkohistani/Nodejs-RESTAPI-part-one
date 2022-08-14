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

const createUser = (user) => {
  const newUser = {
    id: defaultData.userData.length + 1,
    ...user,
  };
  defaultData.userData.push(newUser);
  return newUser;
}

const deleteUser = (id) => {
  const user = defaultData.userData.find((user) => user.id === id);
  if (!user) {
    throw new Error('User not found user.service');
  } else {
    defaultData.userData = defaultData.userData.filter((user) => user.id !== id);
    return user;
  }
}


const userService = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
};

export default userService;
