import React from 'react'
import { Input, InputProps } from '@heroui/input'

import { cn } from '@/utils/tailwind'

const MyInput = ({ ...props }: InputProps) => {
  return (
    <Input
      {...props}
      // className={cn('data-[has-label=true]:mt-[30px]', props?.className)}
      classNames={{
        ...props?.classNames,
        label: cn('!text-black font-bold text-base top-6 z-[2] ', props?.classNames?.label),
        input: cn('!text-black', props?.classNames?.input),
        inputWrapper: cn(
          '!ring-0  border-[1px] border-gray-300 !bg-gray-50 !text-black !ring-transparent',
          'group-data-[focus-visible=true]:bg-gray-50',
          'group-data-[focus=true]:!bg-gray-50',
          'group-data-[hover=true]:!bg-gray-50',
          props?.classNames?.inputWrapper
        ),
      }}
      labelPlacement={props?.labelPlacement ?? 'outside'}
    />
  )
}

export default MyInput
