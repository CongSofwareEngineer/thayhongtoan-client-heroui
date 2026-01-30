import BaseAPI from '../BaseAPI'

import { IRegister, IRegisterFilter } from './type'

class RegisterAPI extends BaseAPI {
  static getAll(query?: IRegisterFilter) {
    return this.get('/register', query)
  }

  static getById(id: string) {
    return this.get(`/register/${id}`, {})
  }

  static create(body: Partial<IRegister>) {
    return this.post('/register', body)
  }

  static update(id: string, body: Partial<IRegister>) {
    return this.patch(`/register/${id}`, body)
  }

  static delete(id: string) {
    return this.deleteData(`/register/${id}`)
  }
}

export default RegisterAPI
