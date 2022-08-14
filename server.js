/**
 * https://www.youtube.com/watch?v=Ud5xKCYQTjM
 * https://www.youtube.com/watch?v=mbsmsi7l3r4
 */

import express from 'express';

const app = express();
app.use(express.json());


const port = process.env.PORT || 3000;

import { userDataJs } from './modules/user/user.data.js';
// import userData from './modules/user/user.default.data.json';
import path from 'path';
const __dirname = path.resolve();

// Main page route handler function - GET request
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use('/api/v1', routes());
app.use('*', notFoundRoute);

  app.patch('/api/users/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      const { name, password } = req.body;
      const user = userDataJs.find((user) => user.id === id);
      if (!user) {
        throw new Error('User not found');
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
      const user = userDataJs.find((user) => user.id === id);
      if (!user) {
        throw new Error('User not found');
      } else {
        userDataJs.splice(userDataJs.indexOf(user), 1);
        res.json({ message: 'User deleted' });
      }
    } catch (err) {
      res.status(404).json({ message: 'User not found' });
    }
  });
} else {
  app.get('/api/users', (req, res) => {
    res.json("userDataJson will be handled here");
  });
}

// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
