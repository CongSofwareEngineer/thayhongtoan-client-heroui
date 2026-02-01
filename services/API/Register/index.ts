import BaseAPI from '../BaseAPI'

import { IRegister, IRegisterFilter } from './type'

class RegisterBase extends BaseAPI<IRegister, IRegisterFilter> {
  router = '/register'
}

const RegisterAPI = new RegisterBase()

export default RegisterAPI
