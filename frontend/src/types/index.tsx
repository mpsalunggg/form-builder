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
