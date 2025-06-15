import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { ModalProps } from '@heroui/modal'
import { ReactNode } from 'react'

import { ZUSTAND } from '@/constants/zustand'

type Modal = {
  //   isOpen?: boolean
  //   /** Whether the overlay is open by default (uncontrolled). */
  //   defaultOpen?: boolean
  //   /** Handler that is called when the overlay's open state changes. */
  callBackAfter?: () => any
  showBtnClose?: boolean
  children?: ReactNode
  //   placement?: 'center' | 'auto' | 'top' | 'top-center' | 'bottom' | 'bottom-center' | undefined
} & ModalProps

interface ModalState {
  [ZUSTAND.Modal]: Modal
  openModal: (nextModalAdmin: Modal) => void
  closeModal: (isIconClose?: boolean) => void
}
export const modal = create<ModalState>()(
  devtools(
    (set, get) => ({
      [ZUSTAND.Modal]: {
        open: false,
      },
      openModal: (param: Modal) => {
        set({
          [ZUSTAND.Modal]: {
            showBtnClose: true,
            placement: 'center',
            ...param,
            isOpen: true,
          },
        })
      },
      closeModal: () => {
        const modal = get()[ZUSTAND.Modal]

        modal.callBackAfter && modal.callBackAfter()
        const init = {
          [ZUSTAND.Modal]: {
            isOpen: false,
          },
        }

        set(init as any)
      },
    }),
    {
      name: 'modal-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)
