// import { ValidationErrors } from '@react-types/shared'
import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

// export type ErrorForm = ValidationErrors
export type ErrorForm<T> = Partial<Record<keyof T, string>>
