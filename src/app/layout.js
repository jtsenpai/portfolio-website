import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JayTee',
  description: 'Welcome to my portfolio. Explore my projects in game development, web design, and creative coding.',
  keywords: ['JayTee', 'JT', 'Portfolio', 'Game Developer', 'Web Designer'],
  authors: [{ name: 'Jesutoni Odufeso' }],
  creator: 'JayTee',
  opengraph: {
    title: 'JayTee',
    description: 'Showcasing my best work in game and web development.',
    url: 'https://jtsenpai.vercel.app',
    siteName: 'JayTee',
    images: [
      {
        url: '/images/preview.png',
        width: 1200,
        height: 630,
        alt: 'JayTee Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JayTee',
    description: 'Showcasing my best work in game and web development.',
    images: ['/images/preview.png'],
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
