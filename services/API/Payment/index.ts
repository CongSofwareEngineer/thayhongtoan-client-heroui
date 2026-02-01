import BaseAPI from '../BaseAPI'

import { IPayment, IPaymentFilter } from './type'

class PaymentBase extends BaseAPI<IPayment, IPaymentFilter> {
  router = '/payment'

  getByStudent(idStudent: string) {
    return this.get('/student', { idStudent })
  }

  getByClass(idClass: string, month: number, year: number) {
    return this.get('/class', { idClass, month, year })
  }
}

const PaymentAPI = new PaymentBase()

export default PaymentAPI
