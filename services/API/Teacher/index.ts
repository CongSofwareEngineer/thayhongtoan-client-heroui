import BaseAPI from '../BaseAPI'

import { ITeacher, ITeacherFilter } from './type'

class TeacherBase extends BaseAPI<ITeacher, ITeacherFilter> {
  router = '/teacher'

  login(body: Pick<ITeacher, 'sdt' | 'password'>) {
    return this.post('/auth/login', body)
  }
}

const TeacherAPI = new TeacherBase()

export default TeacherAPI
