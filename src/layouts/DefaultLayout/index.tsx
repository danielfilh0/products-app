import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

type ContainerProps = {
  children: React.ReactNode
}

export function DefaultLayout({ children }: ContainerProps) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex-1 h-full">{children}</main>
      <Footer />
    </div>
  )
}
