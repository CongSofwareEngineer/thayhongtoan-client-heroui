import { Button, ButtonProps } from '@heroui/button'
import React, { MouseEventHandler } from 'react'

type props = {
  onClick?: MouseEventHandler<HTMLButtonElement>
} & ButtonProps

const MyButton = ({ ...props }: props) => {
  return <Button color='default' {...props} />
}

export default MyButton
