import React from 'react'
import { Input, InputProps } from '@heroui/input'

import { cn } from '@/utils/tailwind'

const MyInput = ({ ...props }: InputProps) => {
  return (
    <Input
      {...props}
      classNames={{
        ...props?.classNames,
        label: '!text-black font-bold text-base',
        input: '!text-black',
        inputWrapper: cn(
          // '!ring-0  border-[1px] border-gray-300 !bg-white !text-black !ring-transparent',
          '!ring-0  border-[1px] border-gray-300 !bg-white !text-black !ring-transparent',
          'group-data-[focus-visible=true]:!bg-white',
          'group-data-[focus=true]:!bg-white',
          'group-data-[hover=true]:!bg-white',
          props?.classNames?.inputWrapper
        ),
      }}
      labelPlacement={props?.labelPlacement ?? 'outside'}
    />
  )
}

export default MyInput
