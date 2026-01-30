export interface ITeacher {
  _id?: string
  name: string
  sdt: string
  email?: string
  password?: string
  isAdmin: boolean
  age: number
  sex: boolean // true: male, false: female
  image?: string
}

export interface ITeacherFilter {
  name?: string
  sdt?: string
  page?: number
  limit?: number
}
