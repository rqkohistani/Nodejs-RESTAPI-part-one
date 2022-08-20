import fs from 'fs';
import bcrypt from 'bcrypt';
import defaultData from '../../dataBaseJson/default.data.json';

const getAllAdmins = () => {
  const admins = defaultData.adminsAndUsersLists;
  return admins;
};

const getAdmin = (id) => {
  const admin = defaultData.adminsAndUsersLists.find((admin) => admin.id === id);
  return admin;
};

const createAdmin = (admin) => {
  const newAdmin = {
    id: new Date().getTime(),
    ...admin,
    password: bcrypt.hashSync(admin.password, 10),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  const data = fs.readFileSync('./dataBaseJson/default.data.json');
  const users = JSON.parse(data);
  fs.writeFileSync(
    './dataBaseJson/default.data.json',
    JSON.stringify({ ...users, adminsAndUsersLists: [...users.adminsAndUsersLists, newAdmin] })
  );
  return newAdmin;
};

const deleteAdmin = (id) => {
  const admin = defaultData.adminsAndUsersLists.find((admin) => admin.id === id);
  if (admin) {
    const data = fs.readFileSync('./dataBaseJson/default.data.json');
    const admins = JSON.parse(data);
    const newAdminData = admins.adminsAndUsersLists.filter((admin) => admin.id !== id);
    fs.writeFileSync(
      './dataBaseJson/default.data.json',
      JSON.stringify({ adminsAndUsersLists: newAdminData, userDataLists: [...defaultData.userDataLists] })
    );
  }
  return admin;
};

// FIXME: It does update the user but it does not return to the user the updated user in postman body response.
// FIXME: if user is not found, it returns {}- in postman body response.
const updateAdmin = async (id, newAdmin) => {
  const oldAdmin = defaultData.adminsAndUsersLists.find((admin) => admin.id === id);
  if (oldAdmin) {
    const data = fs.readFileSync('./dataBaseJson/default.data.json');
    const admins = JSON.parse(data);
    const newAdminData = admins.adminsAndUsersLists.map((admin) => {
      if (admin.id === id) {
        return {
          id: admin.id,
          ...admin,
          ...newAdmin,
          password: bcrypt.hashSync(admin.password, 10),
          updatedAt: new Date().toISOString(),
        };
      }
      return admin;
    });
    fs.writeFileSync(
      './dataBaseJson/default.data.json',
      JSON.stringify({ adminsAndUsersLists: newAdminData, userDataLists: [...defaultData.userDataLists] })
    );
    return oldAdmin;
  }
};

const adminService = {
  createAdmin,
  getAllAdmins,
  getAdmin,
  deleteAdmin,
  updateAdmin,
};

export default adminService;
