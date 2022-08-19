import defaultData from '../../dataBaseJson/default.data.json';

const getAllAdmins = () => {
  const admins = defaultData.user;
  return admins;
};

const getAdmin = (id) => {
  const admin = defaultData.user.find((admin) => admin.id === id);
  return admin;
};

