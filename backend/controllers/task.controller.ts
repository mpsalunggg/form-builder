import { Request, Response } from 'express'
import { getAllTasks } from '../services/task.service'

export const getTasks = (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page as string) || 1
    const pageSize = Number(req.query.pageSize as string) || 10
    const limit = Number(req.query.limit as string) || 10
    const { tasks, total } = getAllTasks(page, pageSize, limit)
    res.json({ tasks, total, page, pageSize, limit })
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}
