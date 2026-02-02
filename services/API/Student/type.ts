import { IClass } from '../Class/type'
import { IParent } from '../Parent/type'

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
  status: StudentStatus
  idParent?: IParent
}

export interface IStudentFilter {
  name?: string
  idClass?: string
  status?: StudentStatus
  page?: number
  limit?: number
}
