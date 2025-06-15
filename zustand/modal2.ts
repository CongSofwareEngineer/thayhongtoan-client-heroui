import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { ZUSTAND } from '@/constants/zustand'

interface Modal2 {
  open?: boolean
  body?: React.ReactNode
  className?: string
  classNameContent?: string
  width?: string
  height?: string
  callBackAfter?: (param?: any) => any
  title?: React.ReactNode
  showBtnClose?: boolean
  overClickClose?: boolean
  position?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

interface ModalState {
  [ZUSTAND.Modal2]: Modal2
  openModal: (nextModalAdmin: Modal2) => void
  closeModal: (isIconClose?: boolean) => void
}
export const modal2 = create<ModalState>()(
  devtools(
    (set) => ({
      [ZUSTAND.Modal2]: {
        open: false,
      },
      openModal: (param: Modal2) => {
        set({
          [ZUSTAND.Modal2]: {
            showBtnClose: true,
            position: 'center',
            overClickClose: true,
            ...param,
            open: true,
          },
        })
      },
      closeModal: (isIconClose: boolean = false) => {
        set((state) => {
          if (!isIconClose) {
            if (state?.[ZUSTAND.Modal2]?.callBackAfter) {
              state?.[ZUSTAND.Modal2].callBackAfter()
            }
          }

          return {
            [ZUSTAND.Modal2]: {
              open: false,
            },
          }
        })
      },
    }),
    {
      name: 'modal2-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)
