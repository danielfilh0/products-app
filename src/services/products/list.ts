import { TCardProduct } from '@/types/Product'
import { request } from '../http-client'

export type ListResponse = {
  products: TCardProduct[]
  total: number
  limit: number
  skip: number
}

export type ListWithSearchParams = {
  limit?: number
  page?: number
  query: string
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

export async function listWithSearch({
  limit = 12,
  page = 0,
  query
}: ListWithSearchParams): Promise<ListResponse> {
  const response = await request(
    `/products/search?q=${query}&limit=${limit}&skip=${page * limit}`
  )

  return response
}
