import { create } from 'zustand'

export type StatusType = 'success' | 'error' | 'info'

interface AlertType {
  isOpen: boolean
  description: string
  status: StatusType
  duration: number
  showAlert: (
    description: string,
    status: 'success' | 'error' | 'info',
    duration: number
  ) => void
  hideAlert: () => void
}

const useAlertStore = create<AlertType>((set) => {
  let timeOut: ReturnType<typeof setTimeout> | null = null

  return {
    isOpen: false,
    description: '',
    status: 'info',
    duration: 3000,
    showAlert: (description, status, duration) => {
      set({
        isOpen: true,
        description,
        status,
        duration,
      })

      if (timeOut) {
        clearTimeout(timeOut)
      }

      timeOut = setTimeout(() => {
        set({
          isOpen: false,
        })
      }, duration)
    },
    hideAlert: () => {
      set({
        isOpen: false,
      })

      if (timeOut) {
        clearTimeout(timeOut)
        timeOut = null
      }
    },
  }
})

export default useAlertStore
