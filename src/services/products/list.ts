import { TCardProduct } from '@/types/Product'
import { request } from '../http-client'

export type ListResponse = {
  products: TCardProduct[]
  total: number
  limit: number
  skip: number
}

export async function list(
  limit: number = 12,
  page: number = 0
): Promise<ListResponse> {
  const response = await request(
    `/products?limit=${limit}&skip=${page * limit}`
  )

  return response
}
