import { Home } from '@/templates/Home'
import products from '@/components/ProductsListing/mock'

export default function HomePage() {
  return <Home products={products.products} />
}
