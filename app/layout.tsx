import '@/styles/globals.scss'
import '@/styles/aos.css'
import '@/styles/overrides.scss'
import { Metadata, Viewport } from 'next'
import clsx from 'clsx'
import { GoogleAnalytics } from '@next/third-parties/google'

import { SITE_CONFIG } from '@/config/site'
import { robotoSlab } from '@/config/fonts'
import ClientRender from '@/components/ClientRender'
import ReactQueryProvider from '@/components/ReactQueryProvider'
import StyledComponentsRegistry from '@/components/StyledComponentsRegistry'
import { HeroUIProvider } from '@/components/HeroUIProvider'

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s - ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,

  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: SITE_CONFIG.images,
    siteName: SITE_CONFIG.title,
    url: SITE_CONFIG.url,
    phoneNumbers: ['+84344798392'],
    locale: 'vi',
    emails: 'hodiencong2000@gmail.com',
    countryName: 'Vietnamese',
  },
  bookmarks: SITE_CONFIG.url,
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  applicationName: SITE_CONFIG.title,
  icons: {
    icon: { url: SITE_CONFIG.icon },
    shortcut: { url: SITE_CONFIG.icon },
    apple: { url: SITE_CONFIG.icon },
  },
  manifest: '/manifest.json',
  twitter: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: SITE_CONFIG.images,
    site: SITE_CONFIG.url,
  },
  appleWebApp: {
    title: SITE_CONFIG.title,
    capable: true,
  },
  // <meta name="google-site-verification" content="-SD7kSWHZKEXxbtkWRvn1r5wtOy8o6Gv0wDuA_ituHk" />
  verification: {
    // google: 'YXX_WFs2UUKUX0hoW9cYgZsaKYARrlvneVgGWm7eGx8',
    google: process.env.MODE_DEPLOY ? '-SD7kSWHZKEXxbtkWRvn1r5wtOy8o6Gv0wDuA_ituHk' : '',
    // me:'YXX_WFs2UUKUX0hoW9cYgZsaKYARrlvneVgGWm7eGx8'
  },
}

export const viewport: Viewport = {
  themeColor: 'white',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head>
        {process.env.MODE_DEPLOY && (
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Education',
                name: SITE_CONFIG.title,
                url: SITE_CONFIG.url,
                logo: SITE_CONFIG.images,
                description: SITE_CONFIG.description,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Thành Phố Hà Tiên',
                  addressLocality: 'Kiên Giang',
                  addressCountry: 'Việt nam',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+84-344-798-392',
                  contactType: 'hodienhong8392@gmail.com',
                },
              }),
            }}
            type='application/ld+json'
          />
        )}
      </head>
      <body className={clsx(robotoSlab.variable)}>
        <ReactQueryProvider>
          <StyledComponentsRegistry>
            <HeroUIProvider themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
              <ClientRender>{children}</ClientRender>
            </HeroUIProvider>
          </StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
      {process.env.MODE_DEPLOY && (
        <>
          {/* <script async src='https://www.googletagmanager.com/gtag/js?id=G-6PQHPT7TWN' />
            <script
              dangerouslySetInnerHTML={{
                __html: `  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6PQHPT7TWN');`,
              }}
            /> */}
          <GoogleAnalytics gaId='G-6PQHPT7TWN' />
        </>
      )}
    </html>
  )
}
