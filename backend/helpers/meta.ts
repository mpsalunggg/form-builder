export interface MetaType {
  total: number
  page: number
  pageSize: number
  limit: number
}

export const ResponseMeta = (
  total: number,
  page: number,
  pageSize: number,
  limit: number
): MetaType => {
  return {
    total,
    page,
    pageSize,
    limit,
  }
}
