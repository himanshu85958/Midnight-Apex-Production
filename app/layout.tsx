import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700']
});
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Midnight Apex Accessories | Premium Car Mods',
  description: 'Push your ride to the edge with premium car mods and accessories. Interior upgrades, exterior mods, ambient lighting, and more.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
