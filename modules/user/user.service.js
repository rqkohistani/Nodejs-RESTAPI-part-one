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
    // TODO: validate user.
    // This Id is not unique. Since we are using a default data file length. This is not a problem. This is just a reminder.
    // This will be handled in when we implement the validation. Or database. FOR NOW, let's just use the length of the array.
    id: defaultData.userData.length + 1,
    ...user,
  };
  const data = fs.readFileSync('./modules/user/user.default.data.json');
  const users = JSON.parse(data);
  const newUserData = [...users.userData, newUser];
  fs.writeFileSync('./modules/user/user.default.data.json', JSON.stringify({ userData: newUserData }));
  return newUser;
};

const deleteUser = (id) => {
  const user = defaultData.userData.find((user) => user.id === id);
  if (!user) {
    throw new Error('User not found user.service');
  } else {
    defaultData.userData = defaultData.userData.filter((user) => user.id !== id);
    return user;
  }
}

const updateUser = (id, user) => {
  const userToUpdate = defaultData.userData.find((user) => user.id === id);
  if (!userToUpdate) {
    throw new Error('User not found user.service');
  } else {
    userToUpdate.name = user.name;
    userToUpdate.email = user.email;
    return userToUpdate;
  }
}


const userService = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};

export default userService;
