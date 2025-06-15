import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/modal'
import React, { useEffect } from 'react'

import useModal from '@/hooks/useModal'
import { cn } from '@/utils/tailwind'

const MyModal = () => {
  const { modal, closeModal } = useModal()

  useEffect(() => {
    if (modal?.isOpen) {
      document.documentElement.style.scrollbarGutter = ''

      document.documentElement.style.removeProperty('scrollbar-gutter')
    }
  }, [modal])

  return (
    <Modal
      {...modal}
      onOpenChange={(open) => {
        if (open === false) {
          closeModal()
          document.body.style.removeProperty('overflow')
        } else {
          document.body.style.overflow = 'hidden'
        }
      }}
    >
      <ModalContent>
        {modal?.title && <ModalHeader className={cn('flex flex-col gap-1', modal.classNames?.header)}>{modal?.title}</ModalHeader>}
        <ModalBody className={cn(modal.classNames?.body)}>{modal?.children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default MyModal
