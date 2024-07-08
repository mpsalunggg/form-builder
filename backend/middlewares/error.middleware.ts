import { Request, Response, NextFunction } from 'express'
import { ApiError } from '../helpers/error'
import { ResponseError } from '../helpers/error'

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    res.status(err.code).json(ResponseError(err.code, err.message))
  } else {
    res.status(500).json(ResponseError(500, 'Internal Server Error'))
  }
}
