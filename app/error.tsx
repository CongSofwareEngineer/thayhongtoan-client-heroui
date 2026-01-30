'use client'

import { useEffect } from 'react'

import MyButton from '@/components/MyButton'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <MyButton color='primary' onClick={() => reset()}>
        Try again
      </MyButton>
    </div>
  )
}
