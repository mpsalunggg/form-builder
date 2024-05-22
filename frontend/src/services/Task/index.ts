import { TESTING } from '../../constants/endpoint'
import { fetcher } from '../config'

export const AuthService = {
  testing: async (): Promise<{ message: string }> => {
    const res = await fetcher(TESTING)
    return res.data
  },
}
