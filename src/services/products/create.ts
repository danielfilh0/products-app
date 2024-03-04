import { request } from '../http-client'

export type CreateParams = {
  title: string
  description: string
  price: number
  brand: string
  category: string
}

export async function create(data: CreateParams): Promise<CreateParams> {
  const response = await request('/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  return response
}
