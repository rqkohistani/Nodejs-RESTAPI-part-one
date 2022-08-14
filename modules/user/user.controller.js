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
