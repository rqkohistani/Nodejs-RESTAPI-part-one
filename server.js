/**
 * https://www.youtube.com/watch?v=Ud5xKCYQTjM
 * https://www.youtube.com/watch?v=mbsmsi7l3r4
 */

const express = require('express');
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/api/users', (req, res) => {
  res.json(userData);
});
app.get('/api/users/:id', (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = userData.find((user) => user.id === id);
    if (!user) {
      res.status(404).send('User not found');
    } else {
      console.log(user);
      res.json(user);
    }
  } catch (err) {
    res.status(404).json({ message: 'User not found' });
  }
});
app.post('/api/users', (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      res.status(400).json({ message: 'Please provide name and password' });
    } else {
      const newUser = {
        id: userData.length + 1,
        name,
        password,
        hashedPassword: null,
      };
      userData.push(newUser);
      res.json(newUser);
    }
  } catch (error) {
    res.status(400).json({ message: 'User not created' });
  }
});
app.patch('/api/users/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    const { name, password } = req.body;
    const user = userData.find((user) => user.id === id);
    if (!user) {
      res.status(404).send('User not found');
    } else {
      console.log(user);
      user.name = name;
      user.password = password;
      console.log(user);
      res.json(user);
    }
  } catch (err) {
    res.status(404).json({ message: 'User not found' });
  }
});
app.delete('/api/users/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = userData.find((user) => user.id === id);
    if (!user) {
      res.status(404).send('User not found');
    } else {
      userData.splice(userData.indexOf(user), 1);
      res.json({ message: 'User deleted' });
    }
  } catch (err) {
    res.status(404).json({ message: 'User not found' });
  }
});
// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
