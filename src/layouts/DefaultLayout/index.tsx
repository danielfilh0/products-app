import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

type ContainerProps = {
  children: React.ReactNode
}

export function DefaultLayout({ children }: ContainerProps) {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <main className="flex-1 h-full pt-10">{children}</main>
      <Footer />
    </div>
  )
}
