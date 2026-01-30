export interface IRegister {
  _id?: string
  phoneNumber: string
  name?: string
  nameStudent?: string
  gmail?: string
  idChildren: string[]
  address?: string
  price: number
  note?: string
}

export interface IRegisterFilter {
  phoneNumber?: string
  name?: string
  page?: number
  limit?: number
}
