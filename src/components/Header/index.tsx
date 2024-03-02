import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'

import { Logo } from '../Logo'
import { Avatar } from '../Avatar'
import { Container } from '../Container'

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
      <Container>
        <nav className="flex items-center justify-between py-6">
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
      </Container>
    </header>
  )
}
