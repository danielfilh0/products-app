import { request } from '../http-client'

export type EditParams = {
  title: string
  description: string
  price: number
  brand: string
  category: string
}

export async function edit(id: string, data: EditParams): Promise<EditParams> {
  const response = await request(`/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  return response
}
