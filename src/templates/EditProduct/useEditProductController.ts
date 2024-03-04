'use client'

import { productsService } from '@/services/products'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

export type UseEditProductControllerProps = {
  slug: string
}

export type EditParams = {
  title: string
  description: string
  price: number
  brand: string
  category: string
}

export function useEditProductController({
  slug
}: UseEditProductControllerProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function handleCreateProduct(data: EditParams) {
    try {
      setIsLoading(true)

      await toast.promise(productsService.edit(slug, data), {
        loading: 'Editing...',
        success: 'Product updated!',
        error: 'Error on updating =('
      })

      router.push('/')
    } catch {
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    handleCreateProduct
  }
}
