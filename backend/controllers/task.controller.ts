import { NextFunction, Request, Response } from 'express'
import { ResponseMeta } from '../helpers/meta'
import { ResponseApi } from '../helpers/response'
import { getAllTasks } from '../services/task.service'

export const getTasks = (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = Number(req.query.page as string) || 1
    const pageSize = Number(req.query.pageSize as string) || 10
    const limit = Number(req.query.limit as string) || 10
    const { tasks, total } = getAllTasks(page, pageSize, limit)
    res.json(
      ResponseApi(200, 'Get all tasks success', {
        tasks,
        meta: ResponseMeta(total, page, pageSize, limit),
      })
    )
  } catch (error) {
    next(error)
  }
}
