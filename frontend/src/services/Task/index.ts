import { GET_ALL_TASKS, TASK, TESTING } from '../../constants/endpoint'
import { BaseResponseType, ListTaskType } from '../../types'
import { fetcher } from '../config'

export const TaskService = {
  testing: async (): Promise<{ message: string }> => {
    const res = await fetcher(TESTING)
    return res.data
  },
  getAllTasks: async (pageSize: number): Promise<ListTaskType[]> => {
    try {
      const res = await fetcher(GET_ALL_TASKS + `?pageSize=${pageSize}`)
      return res.data.data.tasks
    } catch (err: any) {
      return err
    }
  },
  createTasks: async (
    data: ListTaskType
  ): Promise<BaseResponseType<ListTaskType>> => {
    try {
      const res = await fetcher.post(TASK, data)
      return res.data
    } catch (err: any) {
      return err
    }
  },
  editTasks: async (
    id: number,
    data: ListTaskType
  ): Promise<BaseResponseType<ListTaskType>> => {
    try {
      const res = await fetcher.put(TASK + `/${id}`, data)
      return res.data
    } catch (err: any) {
      return err
    }
  },
  deleteTask: async (id: number): Promise<BaseResponseType<ListTaskType>> => {
    try {
      const res = await fetcher.delete(TASK + `/${id}`)
      return res.data
    } catch (err: any) {
      return err
    }
  },
}
