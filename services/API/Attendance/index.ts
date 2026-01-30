import BaseAPI from '../BaseAPI'

import { IAttendance, IAttendanceFilter } from './type'

class AttendanceAPI extends BaseAPI {
  static getAll(query?: IAttendanceFilter) {
    return this.get('/attendance', query)
  }

  static getByClassAndDate(idClass: string, day: string | Date) {
    return this.get('/attendance/class-date', { idClass, day })
  }

  static getById(id: string) {
    return this.get(`/attendance/${id}`)
  }

  static create(body: Partial<IAttendance>) {
    return this.post('/attendance', body)
  }

  static takeAttendance(body: { attendances: Partial<IAttendance>[] }) {
    return this.post('/attendance/bulk', body)
  }

  static update(id: string, body: Partial<IAttendance>) {
    return this.patch(`/attendance/${id}`, body)
  }

  static delete(id: string) {
    return this.deleteData(`/attendance/${id}`)
  }
}

export default AttendanceAPI
