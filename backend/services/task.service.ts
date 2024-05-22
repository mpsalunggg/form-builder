import { ApiError } from '../helpers/error'
import { randomId } from '../helpers/format'
import { Tasks, TaskType } from '../models/task.model'

export const getAllTasksService = (
  page: number,
  pageSize: number,
  limit: number
): { tasks: TaskType[]; total: number } => {
  if (page <= 0 || pageSize <= 0) {
    throw new ApiError(
      'Page and page size that must be greater than zero!',
      400
    )
  }
  if (Tasks.length === 0) {
    throw new ApiError('Opsss, you dont have a task!', 404)
  }

  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + Math.min(pageSize, limit)
  const paginatedTasks = Tasks.slice(startIndex, endIndex)

  return { tasks: paginatedTasks, total: Tasks.length }
}

export const createTaskService = (
  title: string,
  description: string
): TaskType => {
  if (!title || !description) {
    throw new ApiError('Title or description are required!', 400)
  }

  const newTask: TaskType = {
    id: randomId(),
    title,
    description,
  }

  Tasks.push(newTask)
  return newTask
}

export const editTaskService = (
  id: number,
  title: string,
  description: string
): TaskType => {
  const taskIdx = Tasks.findIndex((task) => task.id === id)
  if (taskIdx === -1) {
    throw new ApiError('Task not found!', 404)
  }
  if (!title || !description) {
    throw new ApiError('Title or description are required!', 400)
  }

  Tasks[taskIdx].title = title
  Tasks[taskIdx].description = description

  return Tasks[taskIdx]
}

export const deleteTaskService = (id: number): TaskType | null => {
  const taskIdx = Tasks.findIndex((task) => task.id === id)
  if (taskIdx === -1) {
    throw new ApiError('Task not found!', 404)
  }
  const deletedTask = Tasks.splice(taskIdx, 1)[0]
  return deletedTask
}
