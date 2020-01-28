import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { HOST } from "./constants"
let api: any = null

class ApiService {
  private instance: AxiosInstance

  constructor(host = process.env.HOST) {
    this.instance = axios.create({
      baseURL: HOST
    })
  }

  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance
      .get(url, config)
      .then((res: AxiosResponse<T>) => res.data)
  }

  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance
      .post(url, data, config)
      .then((res: AxiosResponse<T>) => res.data)
  }
}

export default new ApiService()
