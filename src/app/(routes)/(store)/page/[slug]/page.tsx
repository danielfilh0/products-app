import { Home } from '@/templates/Home'

import { list } from '@/services/products/list'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function PaginatedHomePage({ params }: ProductPageProps) {
  const page = Number(params.slug) - 1
  const response = await list(12, page)

  return <Home products={response} />
}
