import { IClass } from '../Class/type'
import { IStudent } from '../Student/type'
import { ITeacher } from '../Teacher/type'

export interface IPayment {
  _id?: string
  idStudent: string | IStudent
  idClass: string | IClass
  amount: number
  month: number
  year: number
  status: 'paid' | 'partial' | 'unpaid'
  idTeacher: string | ITeacher
  note?: string
}

export interface IPaymentFilter {
  idStudent?: string
  idClass?: string
  month?: number
  year?: number
  status?: 'paid' | 'partial' | 'unpaid'
  page?: number
  limit?: number
}
