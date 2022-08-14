const getAllUsers = (req, res, next) => {
  try {
    const users = userService.getAllUsers();
    if (!users) res.status(404).send('No users found');

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
    // TODO: next(error);
  }
};

const getUser = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = userService.getUser(id);
    if (!user) throw new Error('User not found controller');
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
    // TODO: next(error);
  }
};
