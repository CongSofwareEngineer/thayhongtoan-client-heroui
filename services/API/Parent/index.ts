import BaseAPI from '../BaseAPI'

import { IParent, IParentFilter } from './type'

class ParentBase extends BaseAPI<IParent, IParentFilter> {
  router = '/parent'
}

const ParentAPI = new ParentBase()

export default ParentAPI
