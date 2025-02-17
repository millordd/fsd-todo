export interface IResponse<T> {
  code: number;
  message: string;
  payload: T;
}
