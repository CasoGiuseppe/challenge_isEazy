import type { IHttpRequestService } from "./http.interface";

const controller = new AbortController()
const signal = controller.signal;
export class HTTPService implements IHttpRequestService {
  async get<T>(url: string, params: Record<string, any>): Promise<T> {
    const response = await fetch(`${url}?${new URLSearchParams(params)}`, { signal });
    const parsedResponse = await response.json()
    if (!response.ok) {
      const { code, status } = parsedResponse
      return Promise.reject({ code, status })
    };
    return parsedResponse;
  }
}