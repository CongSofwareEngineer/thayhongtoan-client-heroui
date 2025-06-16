import React from 'react'
import { Input, InputProps } from '@heroui/input'

import { cn } from '@/utils/tailwind'

const MyInput = ({ ...props }: InputProps) => {
  return (
    <Input
      {...props}
      classNames={{
        ...props?.classNames,
        inputWrapper: cn('!ring-0 !ring-transparent', props?.classNames?.inputWrapper),
      }}
      labelPlacement={props?.labelPlacement ?? 'outside'}
    />
  )
}

export default MyInput
