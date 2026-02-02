export interface Parent {
  _id?: string
  name: string
  phone: string
  address?: string
  note?: string
}

export enum StudentStatus {
  active = 'active',
  inactive = 'inactive',
}

export interface Student {
  _id?: string
  image?: string
  name: string
  age: number
  idClass?: string
  idParent?: string
  status?: StudentStatus
}

export interface IRegister {
  parent: Parent
  students: Student[]
}

export interface IRegisterFilter {
  phoneNumber?: string
  name?: string
  page?: number
  limit?: number
}
