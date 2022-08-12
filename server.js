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
});
// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
