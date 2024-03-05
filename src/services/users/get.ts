import { User } from '@/types/User'
import { request } from '../http-client'

export async function get(token: string): Promise<User> {
  const response = await request('/auth/me', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` }
  })

  return response
}
