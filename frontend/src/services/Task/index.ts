import { GET_ALL_TASKS, TASK, TESTING } from '../../constants/endpoint'
import { AllTasksType, BaseResponseType, ListTaskType } from '../../types'
import { fetcher } from '../config'

export const TaskService = {
  testing: async (): Promise<{ message: string }> => {
    const res = await fetcher(TESTING)
    return res.data
  },
  getAllTasks: async (): Promise<BaseResponseType<AllTasksType>> => {
    try {
      const res = await fetcher(GET_ALL_TASKS)
      return res.data
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
}
