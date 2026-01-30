import BaseAPI from '../BaseAPI'

import { IClass, IClassFilter } from './type'

class ClassAPI extends BaseAPI {
  static getAll(query?: IClassFilter) {
    return this.get('/class', query)
  }

  static getById(id: string) {
    return this.get(`/class/${id}`)
  }

  static create(body: Partial<IClass>) {
    return this.post('/class', body)
  }

  static update(id: string, body: Partial<IClass>) {
    return this.patch(`/class/${id}`, body)
  }

  static delete(id: string) {
    return this.deleteData(`/class/${id}`)
  }
}

export default ClassAPI
