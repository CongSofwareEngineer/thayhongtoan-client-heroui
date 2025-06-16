import React from 'react'
import { NumberInput, NumberInputProps } from '@heroui/number-input'

import { cn } from '@/utils/tailwind'

const MyInputNumber = ({ ...props }: NumberInputProps) => {
  return (
    <NumberInput
      {...props}
      classNames={{
        ...props?.classNames,
        inputWrapper: cn('!ring-0 !ring-transparent', props?.classNames?.inputWrapper),
      }}
      hideStepper={typeof props?.hideStepper === 'boolean' ? props?.hideStepper : true}
      labelPlacement={props?.labelPlacement ?? 'outside'}
      step={props?.step || 0}
    />
  )
}

export default MyInputNumber
