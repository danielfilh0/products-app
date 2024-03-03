import { Container } from '@/components/Container'
import { Pagination } from '@/components/Pagination'
import { ProductItemProps } from '@/components/ProductItem'
import { ProductsListing } from '@/components/ProductsListing'
import { TextInput } from '@/components/TextInput'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

type HomeProps = {
  products: ProductItemProps[]
}

export function Home({ products }: HomeProps) {
  return (
    <>
      <section className="pb-10">
        <form className="border-b border-gray-300 py-2" role="form">
          <Container className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-4">
              <TextInput
                name="title-search"
                icon={<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />}
                placeholder="Search for title..."
                className="max-w-lg"
              />
              <TextInput
                name="branch-search"
                icon={<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />}
                placeholder="Search for brand..."
                className="max-w-lg"
              />
            </div>
            <button type="submit" className="text-gray-500">
              Search
            </button>
          </Container>
        </form>

        <Container className="pt-10">
          <ProductsListing products={products} />

          <div className="mt-5 flex justify-center">
            <Pagination itemsPerPage={12} total={100} />
          </div>
        </Container>
      </section>
    </>
  )
}
