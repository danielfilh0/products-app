import { LoginForm } from '@/components/LoginForm'
import { Logo } from '@/components/Logo'

export function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Logo />
      <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mt-4 mb-10">
        Login to your account
      </h1>
      <LoginForm />
    </div>
  )
}
