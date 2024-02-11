export interface BeResponse<T> {
  code: number,
  message: string,
  data: T
}