import { create } from 'zustand'

interface ModalState {
  isOpen: boolean
  type: string
  title: string
  data?: any
  modalBody: React.ReactNode
  openModal: (
    title: string,
    body: React.ReactNode,
    type: string,
    data?: any
  ) => void
  closeModal: () => void
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  type: '',
  title: '',
  data: null,
  modalBody: null,
  openModal: (title, body, type, data) =>
    set({ isOpen: true, title, modalBody: body, type, data }),
  closeModal: () => set({ isOpen: false }),
}))

export default useModalStore
