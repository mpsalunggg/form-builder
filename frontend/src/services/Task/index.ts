import { GET_ALL_TASKS, TESTING } from '../../constants/endpoint'
import { AllTasksType, BaseResponseType } from '../../types'
import { fetcher } from '../config'

export const AuthService = {
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
}
