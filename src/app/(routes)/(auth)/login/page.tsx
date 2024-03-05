import { Login } from '@/templates/Login'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description:
    'Make your login and discover endless possibilities with Products App - your ultimate destination for quality goods.Explore a curated collection of products tailored to your needs, from electronics to fashion and beyond. Shop smart, shop with ease, only at Products App.'
}

export default function LoginPage() {
  return <Login />
}
