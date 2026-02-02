import BaseAPI from '../BaseAPI'

import { IRegister, IRegisterFilter } from './type'

class RegisterBase extends BaseAPI<IRegister, IRegisterFilter> {
  router = '/register'

  register = async (data: IRegister) => {
    return this.create(data)
  }
}

const RegisterAPI = new RegisterBase()

export default RegisterAPI
