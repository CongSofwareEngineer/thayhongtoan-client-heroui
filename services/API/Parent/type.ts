export interface IParent {
  _id?: string
  name: string
  phone: string
  address?: string
  note?: string
}

export interface IParentFilter {
  name?: string
  phone?: string
  page?: number
  limit?: number
}
