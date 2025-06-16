import React from 'react'
import { Textarea, TextAreaProps } from '@heroui/input'

import { cn } from '@/utils/tailwind'

const MyInputArea = ({ ...props }: TextAreaProps) => {
  return (
    <Textarea
      {...props}
      classNames={{
        ...props?.classNames,
        label: '!text-black font-bold text-lg',
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
      minRows={props?.minRows || 3}
    />
  )
}

export default MyInputArea
