import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import useAlertStore from '../../../hooks/useAlertStore'
import useModalStore from '../../../hooks/useModalStore'
import { TaskService } from '../../../services/Task'
import { ListTaskType } from '../../../types'

export const useTesting = () => {
  return useQuery({
    queryKey: ['tasksService.testing'],
    queryFn: async () => await TaskService.testing(),
  })
}

export const useGetAllTasks = () => {
  return useQuery({
    queryKey: ['tasksService.getAllTasks'],
    queryFn: async () => {
      const response = await TaskService.getAllTasks()
      return response
    },
  })
}

export const useCreateTask = () => {
  const queryClient = useQueryClient()
  const { closeModal } = useModalStore()
  const { showAlert } = useAlertStore()
  return useMutation({
    mutationFn: async (values: ListTaskType) =>
      await TaskService.createTasks(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['tasksService.getAllTasks'],
      })
      showAlert(data?.message, 'success', 3000)
      closeModal()
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })
}

export const useEditTask = () => {
  const queryClient = useQueryClient()
  const { closeModal } = useModalStore()
  const { showAlert } = useAlertStore()
  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: ListTaskType }) =>
      await TaskService.editTasks(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['tasksService.getAllTasks'],
      })
      showAlert(data?.message, 'success', 3000)
      closeModal()
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })
}

export const useDeleteTask = () => {
  const queryClient = useQueryClient()
  const { closeModal } = useModalStore()
  const { showAlert } = useAlertStore()
  return useMutation({
    mutationFn: async (id: number) => await TaskService.deleteTask(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['tasksService.getAllTasks'],
      })
      showAlert(data?.message, 'success', 3000)
      closeModal()
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })
}
