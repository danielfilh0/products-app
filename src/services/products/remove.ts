import { TProduct } from '@/types/Product'
import { request } from '../http-client'

export type RemoveResponse = TProduct & {
  isDeleted: boolean
  deletedOn: string
}

export async function remove(id: string | number): Promise<RemoveResponse> {
  const response = await request(`/products/${id}`, {
    method: 'DELETE'
  })

  return response
}
