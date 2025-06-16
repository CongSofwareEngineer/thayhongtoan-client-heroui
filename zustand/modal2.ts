import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { ZUSTAND } from '@/constants/zustand'

type Modal2 = {
  open?: boolean
  content?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  classNameRoot?: string
  styleRoot?: React.CSSProperties
  afterClose?: (param?: any) => any
  onClose?: (param?: any) => any
  title?: React.ReactNode
  showBtnClose?: boolean
  maskClose?: boolean
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
        set((state) => ({
          [ZUSTAND.Modal2]: {
            showBtnClose: true,
            maskClose: true,
            position: 'center',
            ...state,
            ...param,
            open: true,
          },
        }))
      },
      closeModal: (isIconClose: boolean = false) => {
        set((state) => {
          if (!isIconClose) {
            if (state?.[ZUSTAND.Modal2]?.afterClose) {
              state?.[ZUSTAND.Modal2].afterClose()
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
