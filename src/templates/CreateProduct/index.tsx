'use client'

import { Container } from '@/components/Container'
import { ProductForm } from '@/components/ProductForm'
import { useCreateProductController } from './useCreateProductController'

export function CreateProduct() {
  const { handleCreateProduct, isLoading } = useCreateProductController()

  return (
    <Container>
      <section className="py-10 max-w-2xl">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-10">
          Create Product
        </h1>

        <ProductForm onSubmit={handleCreateProduct} isSubmitting={isLoading} />
      </section>
    </Container>
  )
}
