import React from 'react'
import { Textarea, TextAreaProps } from '@heroui/input'

import { cn } from '@/utils/tailwind'

const MyInputArea = ({ ...props }: TextAreaProps) => {
  return (
    <Textarea
      {...props}
      classNames={{
        ...props?.classNames,
        inputWrapper: cn('!ring-0 !ring-transparent', props?.classNames?.inputWrapper),
      }}
      labelPlacement={props?.labelPlacement ?? 'outside'}
      minRows={props?.minRows || 3}
    />
  )
}

export default MyInputArea
