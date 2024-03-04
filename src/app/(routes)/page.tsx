import { Home } from '@/templates/Home'

import { list } from '@/services/products/list'

export default async function HomePage() {
  const response = await list()

  return <Home products={response} />
}
