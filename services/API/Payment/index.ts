import BaseAPI from '../BaseAPI'

import { IPayment, IPaymentFilter } from './type'

class PaymentAPI extends BaseAPI {
  static getAll(query?: IPaymentFilter) {
    return this.get('/payment', query)
  }

  static getById(id: string) {
    return this.get(`/payment/${id}`)
  }

  static getByStudent(idStudent: string) {
    return this.get('/payment/student', { idStudent })
  }

  static getByClass(idClass: string, month: number, year: number) {
    return this.get('/payment/class', { idClass, month, year })
  }

  static create(body: Partial<IPayment>) {
    return this.post('/payment', body)
  }

  static update(id: string, body: Partial<IPayment>) {
    return this.patch(`/payment/${id}`, body)
  }

  static delete(id: string) {
    return this.deleteData(`/payment/${id}`)
  }
}

export default PaymentAPI
