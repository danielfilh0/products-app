'use client'

import React from 'react'
import { Toaster } from 'react-hot-toast'

import '@/styles/global.css'
import { AuthProvider } from '@/contexts/AuthContext'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Toaster />
      {children}
    </AuthProvider>
  )
}
