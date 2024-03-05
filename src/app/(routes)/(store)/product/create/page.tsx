import { Metadata } from 'next'

import { CreateProduct } from '@/templates/CreateProduct'

export const metadata: Metadata = {
  title: 'Create Product'
}

export default function CreateProductPage() {
  return <CreateProduct />
}
