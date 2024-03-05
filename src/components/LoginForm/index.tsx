'use client'

import { TextInput } from '../TextInput'
import { useLoginForm } from './useLoginForm'

export function LoginForm() {
  const { register, handleSubmit, errors, isSubmitting } = useLoginForm()

  return (
    <div className="bg-white px-6 py-12 shadow-md sm:rounded-lg sm:px-12 sm:w-full sm:max-w-[480px]">
      <form className="space-y-6" role="form" onSubmit={handleSubmit}>
        <TextInput
          id="username"
          label="Username"
          error={errors.username?.message}
          {...register('username')}
        />
        <TextInput
          id="password"
          label="Password"
          type="password"
          error={errors.password?.message}
          {...register('password')}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:pointer-events-none"
        >
          Login
        </button>
      </form>
    </div>
  )
}
