import defaultData from '../../dataBaseJson/default.data.json';

const getAllAdmins = () => {
  const admins = defaultData.user;
  return admins;
};

const getAdmin = (id) => {
  const admin = defaultData.user.find((admin) => admin.id === id);
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
  fs.writeFileSync('./dataBaseJson/default.data.json', JSON.stringify({ ...users, user: [...users.user, newAdmin] }));
  return newAdmin;
};
