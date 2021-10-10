import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import { join } from 'path';

import './database';
import { routes } from './routes';
import { errorHandler } from './errors/handler';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/files', express.static(join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333, () => {
  console.log('Server Started at http://localhost:3333');
});
