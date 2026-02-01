import BaseAPI from '../BaseAPI'

import { IClass, IClassFilter } from './type'

class ClassBase extends BaseAPI<IClass, IClassFilter> {
  router = '/class'
}

const ClassAPI = new ClassBase()

export default ClassAPI
