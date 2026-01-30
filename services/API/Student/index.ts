import BaseAPI from '../BaseAPI'

import { IStudent, IStudentFilter } from './type'

class StudentAPI extends BaseAPI {
  static getAll(query?: IStudentFilter) {
    return this.get('/student', query)
  }

  static getByClass(idClass: string) {
    return this.get('/student/class', { idClass })
  }

  static getById(id: string) {
    return this.get(`/student/${id}`)
  }

  static create(body: Partial<IStudent>) {
    return this.post('/student', body)
  }

  static update(id: string, body: Partial<IStudent>) {
    return this.patch(`/student/${id}`, body)
  }

  static delete(id: string) {
    return this.deleteData(`/student/${id}`)
  }
}

export default StudentAPI
