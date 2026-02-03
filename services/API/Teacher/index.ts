import BaseAPI from '../BaseAPI'

import { ITeacher, ITeacherFilter } from './type'

class TeacherBase extends BaseAPI<ITeacher, ITeacherFilter> {
  router = '/teacher'

  login(body: Pick<ITeacher, 'sdt' | 'password'>) {
    return this.post('/login', body, { noRefreshToken: true })
  }

  infoMe() {
    return this.post('/info-me')
    // return axios.post('/api/info-me')
  }
  logout() {
    return this.post('/logout')
  }
}

const TeacherAPI = new TeacherBase()

export default TeacherAPI
