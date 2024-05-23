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

export interface MetaType {
  total: number
  page: number
  pageSize: number
}

export const ResponseMeta = (
  total: number,
  page: number,
  pageSize: number
): MetaType => {
  return {
    total,
    page,
    pageSize,
  }
}
