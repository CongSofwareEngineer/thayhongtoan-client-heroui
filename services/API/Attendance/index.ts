import BaseAPI from '../BaseAPI'

import { IAttendance, IAttendanceFilter } from './type'

class AttendanceBase extends BaseAPI<IAttendance, IAttendanceFilter> {
  router = '/attendance'

  getByClassAndDate(idClass: string, day: string | Date) {
    return this.get('/class-date', { idClass, day })
  }

  takeAttendance(body: { attendances: Partial<IAttendance>[] }) {
    return this.post('/bulk', body)
  }
}

const AttendanceAPI = new AttendanceBase()

export default AttendanceAPI
