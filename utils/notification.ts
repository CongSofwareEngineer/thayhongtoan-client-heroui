import { toast, ToastOptions } from 'react-toastify'

import { language } from '@/zustand/language'

export const copyToClipboard = (text: any) => {
  const tmp = document.createElement('input')

  tmp.value = text
  document.body.appendChild(tmp)
  tmp.select()
  document.execCommand('copy')
  tmp.remove()
  showNotificationSuccess(language.getState().language.messages.textPopular.copied, {
    autoClose: 2000,
    style: {
      width: 'auto',
    },
    className: 'toast-copy',
  })
}

export const showNotificationError = (errorMessage = '', options?: ToastOptions<unknown> | undefined) => {
  toast.error(errorMessage, {
    position: 'top-right',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    ...options,
    autoClose: typeof options?.autoClose === 'undefined' ? 5000 : options?.autoClose,
  })
}

export const showNotificationSuccess = (message = '', options?: ToastOptions<unknown> | undefined) => {
  toast.success(message, {
    position: 'top-right',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    ...options,
    autoClose: typeof options?.autoClose === 'undefined' ? 5000 : options?.autoClose,
  })
}
