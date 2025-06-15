import React, { useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image, { ImageProps } from 'next/image'

import { cn } from '@/utils/tailwind'
import { images } from '@/config/images'

const MyImage = ({ ...props }: ImageProps) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      ref={ref}
      fill
      draggable={false}
      {...props}
      className={cn('!relative overflow-hidden', props?.className)}
      src={inView ? props.src : 'https://res.cloudinary.com/tc-store/image/upload/w_100/v1734883048/tc-store/bgWhiteBlur_yxlqi7.png'}
      style={{
        filter: loaded ? 'none' : 'blur(20px)',
        transition: 'filter 0.08s ease-out',
        ...props.style,
      }}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null
        currentTarget.src = images.icons.avatarDefault
      }}
      onLoad={() => {
        setLoaded(true)
      }}
    />
  )
}

export default MyImage
