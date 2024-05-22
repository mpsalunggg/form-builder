import { useQuery } from '@tanstack/react-query'
import { AuthService } from '../../../services/Task'

export const useTesting = () => {
  return useQuery({
    queryKey: ['tasksService.testing'],
    queryFn: async () => await AuthService.testing(),
  })
}
