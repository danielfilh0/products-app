import { createContext, useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { localStorageKeys } from '@/config/localStorageKeys'
import { usersService } from '@/services/users'
import { User } from '@/types/User'

type AuthContextValue = {
  signedIn: boolean
  user: User | undefined
  signin(acessToken: string): void
  signout(): void
  isLoading: boolean
}

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue
)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)

  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken =
      typeof window !== 'undefined'
        ? localStorage.getItem(localStorageKeys.ACCESS_TOKEN)
        : false

    return !!storedAccessToken
  })

  const signin = useCallback((acessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, acessToken)

    setSignedIn(true)
  }, [])

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN)

    setSignedIn(false)
  }, [])

  const getUser = useCallback(async () => {
    if (!signedIn) {
      setUser(undefined)
      return
    }

    try {
      const user = await usersService.get(
        localStorage.getItem(localStorageKeys.ACCESS_TOKEN) as string
      )
      setUser(user)
    } catch {
      signout()
      toast.error('Sua sessão expirou!')
    } finally {
      setIsLoading(false)
    }
  }, [signedIn, signout])

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <AuthContext.Provider
      value={{
        signedIn,
        user,
        signin,
        signout,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
