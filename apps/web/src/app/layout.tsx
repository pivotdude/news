import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import Footer from '@/components/app/core/footer/Footer'
import NavBar from '@/components/app/core/NavBar'
import { Providers } from '@/components/app/core/providers'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          <main className="min-h-screen max-w-full">{children}</main>
          <footer className="bg-gray-50 px-32 mt-24">
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  )
}
