"use client"

import './globals.css'
/////import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { UserContextProvider } from '@/context/UserContext'


const inter = Inter({ subsets: ['latin'] })

///export const metadata: Metadata = {
  ///title: 'Create Next App',
  ///description: 'Generated by create next app',
///}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()
  return (
    <html lang="en">
      <body className={inter.className}> <QueryClientProvider client={queryClient}> <UserContextProvider>{children} </UserContextProvider>  </QueryClientProvider> </body>
    </html>
  )
}
