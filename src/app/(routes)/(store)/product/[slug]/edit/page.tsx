import { Metadata } from 'next'

import { request } from '@/services/http-client'
import { EditProduct } from '@/templates/EditProduct'

type EditProductPageProps = {
  params: {
    slug: string
  }
}

export const metadata: Metadata = {
  title: 'Edit Product'
}

export default async function EditProductPage({
  params
}: EditProductPageProps) {
  const response = await request(`/products/${params.slug}`)

  return <EditProduct {...response} />
}
