import { GET_ALL_TASKS, TESTING } from '../../constants/endpoint'
import { fetcher } from '../config'

export const AuthService = {
  testing: async (): Promise<{ message: string }> => {
    const res = await fetcher(TESTING)
    return res.data
  },
  getAllTasks: async (): Promise<any> => {
    const res = await fetcher(GET_ALL_TASKS)
    return res.data
  },
}
