import fs from 'fs';
import defaultData from './user.default.data';

const getAllUsers = () => {
  return defaultData.userData;
};

// TODO: validate req.body
const getUser = (id) => {
  const user = defaultData.userData.find((user) => user.id === id);
  return user;
};
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
  // TODO: keep this validation in the service layer until the validation is implemented.
  if (user) {
    const data = fs.readFileSync('./modules/user/user.default.data.json');
    const users = JSON.parse(data);
    const newUserData = users.userData.filter((user) => user.id !== id);
    fs.writeFileSync('./modules/user/user.default.data.json', JSON.stringify({ userData: newUserData }));
  }
  return user;
};

// TODO: validate req.body
const updateUser = (id, updateUser) => {
  const oldUser = defaultData.userData.find((user) => user.id === id);
  if (oldUser) {
    const data = fs.readFileSync('./modules/user/user.default.data.json');
    const users = JSON.parse(data);
    const newUserData = users.userData.map((user) => {
      if (user.id === id) {
        return {
          id: user.id,
          ...user,
          ...updateUser,
        };
      }
      return user;
    });
    fs.writeFileSync('./modules/user/user.default.data.json', JSON.stringify({ userData: newUserData }));
  }
  return oldUser;
};

const userService = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};

export default userService;
