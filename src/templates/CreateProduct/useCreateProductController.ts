import { productsService } from '@/services/products'
import { useState } from 'react'
import toast from 'react-hot-toast'

export type CreateParams = {
  title: string
  description: string
  price: number
  brand: string
  category: string
}

export function useCreateProductController() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleCreateProduct(data: CreateParams) {
    try {
      setIsLoading(true)

      await toast.promise(productsService.create(data), {
        loading: 'Adding...',
        success: 'Product created!',
        error: 'Error on creating =('
      })
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
