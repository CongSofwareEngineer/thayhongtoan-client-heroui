import { ITeacher } from '../Teacher/type'

export interface IClass {
  _id?: string
  name: string
  price: number
  numberStudent: number
  note?: string
  idTeacher?: string | ITeacher
  attributes?: {
    time?: string
    dateStart?: string | Date
    dateEnd?: string | Date
  }
}

export interface IClassFilter {
  name?: string
  startTime?: string | Date
  endTime?: string | Date
  page?: number
  limit?: number
}
