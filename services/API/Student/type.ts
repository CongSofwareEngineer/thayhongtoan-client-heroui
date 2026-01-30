import { IClass } from '../Class/type'
import { IRegister } from '../Register/type'

export enum StudentStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export interface IStudent {
  _id?: string
  image?: string
  name: string
  age: number
  idClass: string | IClass
  idRegister?: string | IRegister
  status: StudentStatus
  numberPhoneParent: string
}

export interface IStudentFilter {
  name?: string
  idClass?: string
  status?: StudentStatus
  page?: number
  limit?: number
}
