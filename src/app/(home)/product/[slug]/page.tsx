import { Product } from '@/templates/Product'

import { request } from '@/services/http-client'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const response = await request(`/products/${params.slug}`)

  return <Product {...response} />
}
