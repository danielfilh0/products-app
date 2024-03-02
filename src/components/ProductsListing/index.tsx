import { ProductItem, ProductItemProps } from '../ProductItem'

export type ProductsListingProps = {
  products?: ProductItemProps[]
}

export function ProductsListing({ products }: ProductsListingProps) {
  if (!products)
    return (
      <div>
        <h3 className="mt-2 text-sm font-semibold text-gray-900 text-center">
          Não existem produtos
        </h3>
        <p className="mt-1 text-sm text-gray-500 text-center">
          Tente recarregar a página ou alterar os filtros de pesquisa.
        </p>
      </div>
    )

  return (
    <ul className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
      {products?.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          thumbnail={product.thumbnail}
          category={product.category}
          discountPercentage={product.discountPercentage}
          price={product.price}
        />
      ))}
    </ul>
  )
}
