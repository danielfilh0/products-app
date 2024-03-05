import { Metadata } from 'next'

import { Product } from '@/templates/Product'
import { request } from '@/services/http-client'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params
}: ProductPageProps): Promise<Metadata> {
  const response = await request(`/products/${params.slug}`)

  return {
    title: response.title,
    description: response.description
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const response = await request(`/products/${params.slug}`)

  return <Product {...response} />
}
