import { Button, ButtonProps } from '@heroui/button'
import React from 'react'

type props = {
  onClick?: (value?: any) => any
} & ButtonProps
const MyButton = ({ onClick = () => {}, ...props }: props) => {
  return (
    <Button
      {...props}
      color='default'
      onPress={(e) => {
        if (props?.onPress) {
          props?.onPress(e)
        }
        onClick()
      }}
    />
  )
}

export default MyButton
