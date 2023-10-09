export interface IHttpRequestService {
  get<T>(url: string, params?: Record<string, any>): Promise<T>
}