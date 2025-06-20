import React from 'react'
import { NumberInput, NumberInputProps } from '@heroui/number-input'

import { cn } from '@/utils/tailwind'

type Props = Omit<NumberInputProps, 'onChange'> & {
  onChange?: (value: number) => void
}
const MyInputNumber = ({ ...props }: Props) => {
  return (
    <NumberInput
      {...props}
      classNames={{
        ...props?.classNames,
        label: cn('!text-black font-bold text-base top-6 z-[2]', props?.classNames?.label),
        input: cn('!text-black', props?.classNames?.input),
        inputWrapper: cn(
          // '!ring-0  border-[1px] border-gray-300 !bg-white !text-black !ring-transparent',
          '!ring-0  border-[1px] border-gray-300 !bg-gray-50 !text-black !ring-transparent',
          'group-data-[focus-visible=true]:!bg-gray-50',
          'group-data-[focus=true]:!bg-gray-50',
          'group-data-[hover=true]:!bg-gray-50',
          props?.classNames?.inputWrapper
        ),
      }}
      hideStepper={typeof props?.hideStepper === 'boolean' ? props?.hideStepper : true}
      labelPlacement={props?.labelPlacement ?? 'outside'}
      step={props?.step || 0}
      onChange={(e: any) => {
        const value: any = e?.target?.value

        props?.onChange?.(value)
      }}
    />
  )
}

export default MyInputNumber
