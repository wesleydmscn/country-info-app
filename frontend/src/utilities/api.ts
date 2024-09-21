import { env } from "@/env";

export function api(path: string, init?: RequestInit) {
  const baseURL = env.API_BASE_URL;
  const url = new URL(path, baseURL);

  return fetch(url, init);
}