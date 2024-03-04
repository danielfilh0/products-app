import { Home } from '@/templates/Home'

import { productsService } from '@/services/products'
import { redirect } from 'next/navigation'

interface SearchProductsPageProps {
  searchParams: {
    q: string
  }
}

export default async function SearchProductsPage({
  searchParams
}: SearchProductsPageProps) {
  const { q: query } = searchParams

  if (!query) redirect('/')

  const response = await productsService.listWithSearch({ query })

  return <Home products={response} />
}
