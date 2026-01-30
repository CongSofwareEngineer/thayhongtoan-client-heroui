import { REQUEST_TYPE, OBSERVER_KEY } from '@/constants/app'
import { fetchData, ClientAPITypeParam } from '@/config/fetchConfig'
import ObserverService from '@/services/observer'

class BaseAPI {
  static baseUrl: string = process.env.NEXT_PUBLIC_API_APP || ''

  static refreshPromise: Promise<any> | null = null

  static async request(
    method: REQUEST_TYPE,
    url: string,
    body?: any,
    config?: Partial<ClientAPITypeParam>
  ): Promise<{ data: any; error?: any; messages: any }> {
    const response = await fetchData({
      ...config,
      url,
      body,
      method,
      baseURL: this.baseUrl,
    })

    if ((response?.error?.response?.status === 401 || response?.messages === 'unauthorized') && url !== '/auth/refresh') {
      if (!BaseAPI.refreshPromise) {
        BaseAPI.refreshPromise = this.post('/auth/refresh').finally(() => {
          BaseAPI.refreshPromise = null
        })
      }

      const refreshRes = await BaseAPI.refreshPromise

      if (refreshRes?.messages === 'success') {
        return this.request(method, url, body, config)
      } else {
        ObserverService.emit(OBSERVER_KEY.LogOut, false)
      }
    }

    return response
  }

  static get(url: string, body?: any, config?: Partial<ClientAPITypeParam>) {
    return this.request(REQUEST_TYPE.GET, url, body, config)
  }

  static post(url: string, body?: any, config?: Partial<ClientAPITypeParam>) {
    return this.request(REQUEST_TYPE.POST, url, body, config)
  }

  static put(url: string, body?: any, config?: Partial<ClientAPITypeParam>) {
    return this.request(REQUEST_TYPE.PUT, url, body, config)
  }

  static patch(url: string, body?: any, config?: Partial<ClientAPITypeParam>) {
    return this.request(REQUEST_TYPE.PATCH, url, body, config)
  }

  static deleteData(url: string, body?: any, config?: Partial<ClientAPITypeParam>) {
    return this.request(REQUEST_TYPE.DELETE, url, body, config)
  }
}

export default BaseAPI
