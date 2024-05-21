export class ApiError extends Error {
  public code: number

  constructor(message: string, code: number = 500) {
    super(message)
    this.code = code
  }
}

export interface ErrorType {
  code: number
  message: string
}

export const ResponseError = (code: number, message: string): ErrorType => {
  return {
    code,
    message,
  }
}
