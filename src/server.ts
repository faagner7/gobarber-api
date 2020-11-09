/* eslint-disable no-console */
import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './shared/routes';
import uploadConfig from './config/upload';
import AppError from './shared/errors/AppError';

import './shared/database';

const app = express();

app.use(cors()); // apenas para requisições feitas na web;
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

// Global errors precisam necessariamente ser depois das rotas
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(3337, () => {
  console.log('🚀 Server started on port 3337');
});
