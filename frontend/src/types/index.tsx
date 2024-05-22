import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  href?: string
  className?: string
  startIcon?: ReactNode
}

export interface TaskModalProps {
  isOpen: boolean
  onDismiss: () => void
  modalBody: ReactNode
  title: string
}

export interface ListTaskType {
  id: number
  title: string
  description: string
}

export interface ModalBodyProps {
  buttonText?: string
  data?: ListTaskType
}

export interface BaseResponseType<T> {
  code: number
  message: string
  data?: T
}

export interface MetaType {
  total: number
  page: number
  pageSize: number
  limit: number
}

export interface AllTasksType {
  tasks: ListTaskType[]
  meta: MetaType
}
