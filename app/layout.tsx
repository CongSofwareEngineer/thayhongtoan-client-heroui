import '@/styles/globals.css'
import '@/styles/aos.css'
import { Metadata, Viewport } from 'next'
import clsx from 'clsx'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/config/fonts'
import ClientRender from '@/components/ClientRender'
import ReactQueryProvider from '@/components/ReactQueryProvider'
import StyledComponentsRegistry from '@/components/StyledComponentsRegistry'
import { HeroUIProvider } from '@/components/HeroUIProvider'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head />
      <body className={clsx(fontSans.variable)}>
        <ReactQueryProvider>
          <StyledComponentsRegistry>
            <ClientRender>
              <HeroUIProvider themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>{children}</HeroUIProvider>
            </ClientRender>
          </StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
