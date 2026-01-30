import { IClass } from '../Class/type'
import { IStudent } from '../Student/type'

export enum AttendanceStatus {
  OFF = 'off',
  LATE = 'late',
  PRESENT = 'present',
}

export interface IAttendance {
  _id?: string
  idStudent: string | IStudent
  idClass: string | IClass
  status: AttendanceStatus
  day: string | Date
}

export interface IAttendanceFilter {
  idStudent?: string
  idClass?: string
  day?: string | Date
  status?: AttendanceStatus
  page?: number
  limit?: number
}
