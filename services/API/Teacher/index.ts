import BaseAPI from '../BaseAPI'

import { ITeacher, ITeacherFilter } from './type'

class TeacherAPI extends BaseAPI {
  // static baseUrl = `${process.env.NEXT_PUBLIC_API_APP}/teacher`

  static login(body: Pick<ITeacher, 'sdt' | 'password'>) {
    return this.post('/auth/login', body)
  }

  static getProfile() {
    return this.get('/teacher/profile', {})
  }

  static updateProfile(body: Partial<ITeacher>) {
    return this.patch('/teacher/profile', body)
  }

  static getAllTeachers(query?: ITeacherFilter) {
    return this.get('/teacher', query)
  }

  static getById(id: string) {
    return this.get(`/teacher/${id}`)
  }

  static create(body: Omit<ITeacher, '_id'>) {
    return this.post('/teacher', body)
  }

  static delete(id: string) {
    return this.deleteData(`/teacher/${id}`)
  }
}

export default TeacherAPI
