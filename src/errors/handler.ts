import { Request, Response, NextFunction } from 'express';

export function errorHandler(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message
    });
  }

  console.log(err);

  return response.status(500).json({
    message: 'Internal Server Error'
  });
}
