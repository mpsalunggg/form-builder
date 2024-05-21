import { NextFunction, Request, Response } from 'express'
import { ResponseMeta } from '../helpers/meta'
import { ResponseApi } from '../helpers/response'
import {
  createTaskService,
  deleteTaskService,
  editTaskService,
  getAllTasksService,
} from '../services/task.service'

export const getTasks = (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = Number(req.query.page as string) || 1
    const pageSize = Number(req.query.pageSize as string) || 10
    const limit = Number(req.query.limit as string) || 10
    const { tasks, total } = getAllTasksService(page, pageSize, limit)
    res.status(200).json(
      ResponseApi(200, 'Get all tasks success!', {
        tasks,
        meta: ResponseMeta(total, page, pageSize, limit),
      })
    )
  } catch (error) {
    next(error)
  }
}

export const createTask = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description } = req.body
    console.log({ title, description })
    const newTask = createTaskService(title, description)
    res.status(201).json(ResponseApi(201, 'Task created!', newTask))
  } catch (error) {
    next(error)
  }
}

export const editTask = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { title, description } = req.body
    const updatedTask = editTaskService(Number(id), title, description)
    res.status(200).json(ResponseApi(200, 'Task updated!', updatedTask))
  } catch (error) {
    next(error)
  }
}

export const deleteTask = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const deletedTask = deleteTaskService(Number(id))
    res.status(200).json(ResponseApi(200, 'Task deleted!', deletedTask))
  } catch (error) {
    next(error)
  }
}
