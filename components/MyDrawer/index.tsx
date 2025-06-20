import React, { useEffect } from 'react'
import { Drawer, DrawerContent, DrawerHeader, DrawerBody } from '@heroui/drawer'

import { drawer as drawerZustand } from '@/zustand/drawer'
import { cn } from '@/utils/tailwind'

const MyDrawer = () => {
  const { drawer, closeDrawer } = drawerZustand((state) => state)

  useEffect(() => {
    if (drawer?.isOpen) {
      document.documentElement.style.scrollbarGutter = ''

      document.documentElement.style.removeProperty('scrollbar-gutter')
    }
  }, [drawer])

  return (
    <Drawer
      {...drawer}
      key={`drawer-${drawer?.isOpen}`}
      className='Drawer'
      onOpenChange={(open) => {
        if (open === false) {
          closeDrawer()
          document.body.style.removeProperty('overflow')
        } else {
          document.body.style.overflow = 'hidden'
        }
      }}
    >
      <DrawerContent
        className={cn('w-[70vw]', drawer?.placement === 'bottom' || drawer?.placement === 'top' ? ' ' : 'rounded-none', drawer?.classNames?.base)}
      >
        {drawer?.title && <DrawerHeader className='flex flex-col gap-1'>{drawer?.title}</DrawerHeader>}
        <DrawerBody className={cn('overflow-hidden  ')}>{drawer?.children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default MyDrawer
