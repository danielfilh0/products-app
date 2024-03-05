import { User } from '@/types/User'
import { request } from '../http-client'

export type LoginParams = {
  username: string
  password: string
}

export async function login(data: LoginParams): Promise<User> {
  const response = await request('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  if (response.message === 'Invalid credentials') {
    throw new Error('Invalid credentials')
  }

  return response
}
