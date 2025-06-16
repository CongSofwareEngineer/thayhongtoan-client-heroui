import React from 'react'
import { NumberInput, NumberInputProps } from '@heroui/number-input'

import { cn } from '@/utils/tailwind'

const MyInputNumber = ({ ...props }: NumberInputProps) => {
  return (
    <NumberInput
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
      hideStepper={typeof props?.hideStepper === 'boolean' ? props?.hideStepper : true}
      labelPlacement={props?.labelPlacement ?? 'outside'}
      step={props?.step || 0}
    />
  )
}

export default MyInputNumber
