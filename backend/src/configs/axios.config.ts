import axios from 'axios';
import type { COUNTRY_INFO_API_URL, COUNTRY_LIST_API_URL } from './general.config';

export const api = (baseURL: COUNTRY_LIST_API_URL | COUNTRY_INFO_API_URL) =>
  axios.create({
    baseURL,
  });
