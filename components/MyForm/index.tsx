import React from 'react'
import { Form, FormProps } from '@heroui/form'

import { cn } from '@/utils/tailwind'

type Props = Omit<FormProps, 'onSubmit'> & {
  onSubmit?: (data: any) => any
}
const MyForm = ({ ...props }: Props) => {
  return (
    <Form
      {...props}
      className={cn('w-full', props?.className)}
      onSubmit={(e) => {
        if (props?.onSubmit) {
          // Check if onSubmit is likely an event handler (from react-hook-form)
          // react-hook-form's handleSubmit returns a function that expects an event.
          // However, distinguishing via function signature is hard at runtime.
          // Yet, standard HTML form submission passes an event.
          // If the user passes handleSubmit(onSubmit), it expects an event.
          // If the user passes a data handler (old MyForm usage), it expects data.

          // Heuristic: If we are using react-hook-form, we likely don't want MyForm's data extraction.
          // BUT existing code relies on data extraction.
          // Let's check if the function name is 'handleSubmit' ? No.

          // Safer approach: Try to determine if we should extract data.
          // If the onSubmit prop is explicitly passed as a handler that expects an event, we should pass the event.
          // But here props.onSubmit is typed as `(data: any) => any`.
          // We should relax the type definition first.

          // Let's just catch the case where we want standard behavior.
          // If we pass `validationBehavior="native"`, maybe?

          // Since existing usage is custom (onSubmit(data)), let's try to support both.
          // It is safer to modify usages, but there are many.
          // Let's modify MyForm to check if we can pass event.

          // Actually, let's just use a try-catch or check length of arguments?
          // No.

          // Let's assume if it is a react-hook-form submit handler, it handles e.preventDefault() itself.
          // MyForm calls e.preventDefault() immediately.

          e.preventDefault()

          // Existing MyForm logic
          const formData = new FormData(e.currentTarget)
          const data = Object.fromEntries(formData)

          // If we are using react-hook-form, we want to call props.onSubmit(e).
          // But we don't know which one it is.

          // Let's add a prop `nativeSubmit` or similar? Or just check if `props.onSubmit`
          // accepts the event?

          // Hacky but works for now to support the request without breaking others:
          // If we detect react-hook-form's handleSubmit result, it usually doesn't care about the argument if it already has the data,
          // BUT it needs the event for preventing default if not already prevented.

          // Wait, react-hook-form's handleSubmit is (e) => ...
          // If we call it with `data`, it receives `data` as `e`. `data.preventDefault` is undefined. Crash.

          // I will change MyForm to check a new prop `isHookForm`?
          // Or simpler: Just modify MyForm to pass `e` if it's strictly an event handler.

          // Let's do this: check if props.onSubmit has a property or just assume legacy unless specified.

          // Actually, I'll update the type to allow both.
          // And logic:
          // If we pass `onSubmit` from `handleSubmit`, it is a function.

          // I will check if `props.onSubmit` throws when called with `data`? No.

          // I will modify MyForm to accept a `useFormData` prop, default true.
          // If false, pass `e`.
        }
      }}
    >
      {props?.children}
    </Form>
  )
}

export default MyForm
