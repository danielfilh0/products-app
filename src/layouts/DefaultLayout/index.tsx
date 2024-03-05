'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useAuth } from '@/hooks/useAuth'
import { ExitIcon, PlusIcon } from '@radix-ui/react-icons'

type ContainerProps = {
  children: React.ReactNode
}

export function DefaultLayout({ children }: ContainerProps) {
  const { user: authUser, signout } = useAuth()

  const user = {
    photo: authUser?.image,
    name: authUser?.firstName + ' ' + authUser?.lastName
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header
        user={user}
        menu={[
          {
            icon: <PlusIcon />,
            label: 'Add products',
            href: '/product/create'
          },
          {
            icon: <ExitIcon />,
            label: 'Logout',
            onClick: signout
          }
        ]}
      />
      <main className="flex-1 h-full">{children}</main>
      <Footer />
    </div>
  )
}
