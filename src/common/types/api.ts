import { DeepReadonly, IUnknownRecord } from './base';

export interface IFetchOptions<T> {
  method?: string;
  headers?: DeepReadonly<T>;
  body?: IUnknownRecord;
  token?: string;
}

export interface IApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}
