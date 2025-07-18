'use client'

import type { ThemeProviderProps } from 'next-themes'

import * as React from 'react'
import { HeroUIProvider as Provider } from '@heroui/system'
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>
  }
}

export function HeroUIProvider({ children, themeProps }: ProvidersProps) {
  const router = useRouter()

  return (
    <>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>

      <Provider navigate={router.push}>
        <></>
      </Provider>
    </>
  )
}
