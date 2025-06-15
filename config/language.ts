import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type LanguageState = {
  language: string
  setLanguage: (language: string) => void
}
export const language = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (language: string) => set({ language }),
    }),
    {
      onRehydrateStorage: () => (state) => {
        state?.language
      },
      name: 'language',
    }
  )
)
