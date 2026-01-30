import { ITeacher } from '../Teacher/type'

export interface IClass {
  _id?: string
  name: string
  price: number
  startTime?: string | Date
  endTime?: string | Date
  numberStudent: number
  note?: string
  idTeacher?: string | ITeacher
  attributes?: Record<string, any>
}

export interface IClassFilter {
  name?: string
  startTime?: string | Date
  endTime?: string | Date
  page?: number
  limit?: number
}
