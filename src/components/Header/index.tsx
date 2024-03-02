import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'

import { Logo } from '../Logo'
import { Avatar } from '../Avatar'

export type Header = {
  user?: {
    photo?: string
    name: string
  }
  menu?: {
    href?: string
    onClick?: () => void
    label: string
    icon?: React.ReactNode
  }[]
}

export function Header({ user, menu }: Header) {
  return (
    <header className="w-full shadow fixed z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link href="/">
          <Logo />
        </Link>

        {user ? (
          <Avatar image={user.photo} username={user.name} menu={menu} />
        ) : (
          <Link href="/login" className="flex items-center gap-2">
            Log in
            <ArrowRightIcon />
          </Link>
        )}
      </nav>
    </header>
  )
}
