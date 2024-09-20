import type { Request } from 'express';

export const COUNTRY_LIST_API_URL = 'https://date.nager.at/api/v3/';
export const COUNTRY_INFO_API_URL = 'https://countriesnow.space/api/v0.1/';

export type COUNTRY_LIST_API_URL = typeof COUNTRY_LIST_API_URL;
export type COUNTRY_INFO_API_URL = typeof COUNTRY_INFO_API_URL;

export interface CustomRequest<T> extends Request {
  body: T;
}
