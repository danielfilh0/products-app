'use client'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

import { Container } from '@/components/Container'
import { Pagination } from '@/components/Pagination'
import { ProductsListing } from '@/components/ProductsListing'
import { TextInput } from '@/components/TextInput'
import { useHomeController } from './useHomeController'
import { TCardProduct } from '@/types/Product'

export type HomeProps = {
  products: {
    products: TCardProduct[]
    total: number
    limit: number
    skip: number
  }
}

export function Home({ products }: HomeProps) {
  const { itemsPerPage, handlePaginate, handleSearch } = useHomeController()

  return (
    <>
      <section className="pb-10">
        <form
          className="border-b border-gray-300 py-2"
          role="form"
          onSubmit={handleSearch}
        >
          <Container className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-4">
              <TextInput
                id="search"
                name="q"
                icon={<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />}
                placeholder="Search for products"
                className="max-w-lg"
              />
            </div>
            <button type="submit" className="text-gray-500">
              Search
            </button>
          </Container>
        </form>

        <Container className="pt-10">
          <ProductsListing products={products.products} />

          <div className="mt-5 flex justify-center">
            <Pagination
              itemsPerPage={itemsPerPage}
              total={products.total}
              onPageChange={handlePaginate}
              page={Math.floor(products.skip / itemsPerPage)}
            />
          </div>
        </Container>
      </section>
    </>
  )
}
