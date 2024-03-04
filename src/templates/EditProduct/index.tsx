'use client'

import { useParams, useRouter } from 'next/navigation'
import { ChevronLeftIcon } from '@radix-ui/react-icons'

import { Container } from '@/components/Container'
import { ProductForm } from '@/components/ProductForm'
import { useEditProductController } from './useEditProductController'

type EditProductParams = {
  slug: string
}

export type EditProductProps = {
  title: string
  description: string
  price: number
  brand: string
  category: string
}

export function EditProduct({
  title,
  description,
  price,
  brand,
  category
}: EditProductProps) {
  const router = useRouter()
  const params = useParams<EditProductParams>()
  const { handleCreateProduct, isLoading } = useEditProductController({
    slug: params.slug
  })

  return (
    <Container>
      <section className="py-10 max-w-2xl">
        <button
          onClick={router.back}
          tabIndex={0}
          className="text-sm mb-2 flex gap-1 items-center"
        >
          <ChevronLeftIcon />
          Back
        </button>

        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-10">
          Edit Product
        </h1>

        <ProductForm
          titleValue={title}
          descriptionValue={description}
          priceValue={price}
          brandValue={brand}
          categoryValue={category}
          buttonLabel="Edit"
          isSubmitting={isLoading}
          onSubmit={handleCreateProduct}
        />
      </section>
    </Container>
  )
}
