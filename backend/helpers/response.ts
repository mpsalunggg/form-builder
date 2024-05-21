export interface ResponseType {
  code: number
  message: string
  data: any
}

export const ResponseApi = (
  code: number,
  message: string,
  data: any = null
): ResponseType => {
  return {
    code,
    message,
    data,
  }
}
