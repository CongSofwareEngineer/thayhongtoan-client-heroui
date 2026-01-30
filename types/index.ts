// import { ValidationErrors } from '@react-types/shared'
import { SVGProps } from 'react'

import { InfoTeacher } from '@/services/ClientApi/type'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

// export type ErrorForm = ValidationErrors
export type ErrorForm<T> = Partial<Record<keyof T, string>>

export interface User extends InfoTeacher {
  password?: string
  token?: string
  TokenRefresh?: string
}

export interface Query {
  queryKey: any[]
  pageParam: number
}
