import express from 'express';
import path from 'path';
import errorHandler from './errorHandler';

import routes, { notFoundRoute } from './routes';

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const __dirname = path.resolve();

// Main page route handler function - GET request
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use('/api/v1', routes());
app.use('*', notFoundRoute);
app.use(errorHandler);

// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
