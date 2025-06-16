import React from 'react'
import { Form, FormProps } from '@heroui/form'

import { cn } from '@/utils/tailwind'

const MyForm = ({ ...props }: FormProps) => {
  return (
    <Form
      {...props}
      className={cn('overflow-hidden', props?.className)}
      onSubmit={(e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.currentTarget))

        console.log({ data })
        if (props?.onSubmit) {
          props?.onSubmit(data)
        }
      }}
    >
      {props?.children}
    </Form>
  )
}

export default MyForm
