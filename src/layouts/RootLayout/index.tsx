'use client'

import React from 'react'
import { Toaster } from 'react-hot-toast'

import '@/styles/global.css'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  )
}
