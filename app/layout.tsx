import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import React from 'react'
import PageTransitionProvider from 'components/PageTransitionProvider'

export const metadata = {
  title: 'Kshitij Srivastava',
  description: 'Portfolio of Kshitij Srivastava',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
  other: {
    'msapplication-TileColor': '#da532c',
    'mask-icon': '/safari-pinned-tab.svg',
    color: '#5bbad5',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <link
          rel="preload"
          href="/fonts/Mona-Sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <PageTransitionProvider>{children}</PageTransitionProvider>
      </body>
    </html>
  )
}
