import { ApiError } from '../helpers/error'
import { Tasks, TaskType } from '../models/task.model'

export const getAllTasks = (
  page: number,
  pageSize: number,
  limit: number
): { tasks: TaskType[]; total: number } => {
  if (page <= 0 || pageSize <= 0) {
    throw new ApiError('Page and page size that must be greater than zero', 400)
  }

  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + Math.min(pageSize, limit)
  const paginatedTasks = Tasks.slice(startIndex, endIndex)

  return { tasks: paginatedTasks, total: Tasks.length }
}
