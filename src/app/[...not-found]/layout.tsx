import type { Metadata } from 'next'
import { RootLayout } from '@/layouts/RootLayout'

export const metadata: Metadata = {
  title: 'Página não encontrada - Products App',
  description: 'A página não foi encontrada e retorno status 404'
}

export default function DefaultLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <RootLayout>{children}</RootLayout>
}
