import Link from 'next/link'
import { Container } from '../Container'
import { Logo } from '../Logo'

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 py-4">
      <Container className="flex flex-col items-center">
        <Logo />
        <p className="mt-5 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Products App. All rights reserved.
        </p>
        <p className="mt-2 text-center text-xs leading-5 text-gray-500">
          made by{' '}
          <Link
            href="https://www.linkedin.com/in/danielfilh0/"
            className="underline decoration-wavy"
            target="_blank"
          >
            Daniel Filho
          </Link>
        </p>
      </Container>
    </footer>
  )
}
