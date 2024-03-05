import { RootLayout } from '@/layouts/RootLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Products App',
    default: 'Products App'
  },
  description:
    'Discover endless possibilities with Products App - your ultimate destination for quality goods.Explore a curated collection of products tailored to your needs, from electronics to fashion and beyond. Shop smart, shop with ease, only at Products App.'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full bg-gray-50">
      <body className="h-full">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
