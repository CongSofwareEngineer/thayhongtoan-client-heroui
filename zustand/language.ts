import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import MessageEN from '@/public/assets/language/en.json'
import MessageJA from '@/public/assets/language/ja.json'
import MessageCN from '@/public/assets/language/cn.json'

export enum LANGUAGE_SUPPORT {
  EN = 'en',
  CN = 'cn',
  JP = 'jp',
}

export type TYPE_LANGUAGE = typeof MessageEN
export type PATH_LANGUAGE<T, Prefix extends string = ''> = T extends object
  ? {
      [K in keyof T]: PATH_LANGUAGE<T[K], `${Prefix}${Prefix extends '' ? '' : '.'}${K & string}`>
    }[keyof T]
  : Prefix

type Language = {
  locale: LANGUAGE_SUPPORT
  messages: any
}
type LanguageState = {
  language: Language
  setLanguage: (locale: LANGUAGE_SUPPORT) => void
}

const getLanguage = (language: LANGUAGE_SUPPORT): Language => {
  switch (language) {
    case LANGUAGE_SUPPORT.CN:
      return {
        locale: LANGUAGE_SUPPORT.CN,
        messages: MessageCN,
      }

    case LANGUAGE_SUPPORT.JP:
      return {
        locale: LANGUAGE_SUPPORT.JP,
        messages: MessageJA,
      }

    default:
      return {
        locale: LANGUAGE_SUPPORT.EN,
        messages: MessageEN,
      }
  }
}

export const language = create<LanguageState>()(
  devtools(
    persist(
      (set) => ({
        language: {
          locale: LANGUAGE_SUPPORT.EN,
          messages: MessageEN,
        },

        setLanguage: (locale: LANGUAGE_SUPPORT) => {
          const language = getLanguage(locale)

          set({ language })
          localStorage.setItem('language', locale)
        },
      }),
      {
        onRehydrateStorage: () => (state) => {
          if (state) {
            const locale = localStorage.getItem('language') as LANGUAGE_SUPPORT
            const language = getLanguage(locale)

            state.language = language
          }
        },
        name: 'language-zustand',
      }
    ),
    {
      name: 'language-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)
