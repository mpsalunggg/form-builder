import { FieldType } from '../types'

export const saveInput = (data: FieldType[]) => {
  return localStorage.setItem('optionalForm', JSON.stringify(data))
}

export const getInput = (): string | null => {
  return localStorage.getItem('optionalForm')
}
