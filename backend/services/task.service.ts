import { Tasks, TaskType } from '../models/task.model'

export const getAllTasks = (
  page: number,
  pageSize: number,
  limit: number
): { tasks: TaskType[]; total: number } => {
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + Math.min(pageSize, limit)
  const paginatedTasks = Tasks.slice(startIndex, endIndex)

  return { tasks: paginatedTasks, total: Tasks.length }
}
