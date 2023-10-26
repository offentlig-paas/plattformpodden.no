import { type Metadata } from 'next'
import getConfig from 'next/config'

import '@/styles/tailwind.css'

const { publicRuntimeConfig: c } = getConfig()

export const metadata: Metadata = {
  title: {
    template: `%s - ${c.title}`,
    default: `${c.title} - ${c.tagline}`,
  },
  description: c.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-white antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
        />
      </head>
      <body className="flex min-h-full">
        <div className="w-full">{children}</div>
      </body>
    </html>
  )
}
