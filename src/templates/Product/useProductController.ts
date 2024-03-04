'use client'

import { useMemo } from 'react'
import { productsService } from '@/services/products'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

type UseProductControllerProps = {
  price: number
  discountPercentage: number
}

export function useProductController({
  price,
  discountPercentage
}: UseProductControllerProps) {
  const router = useRouter()
  const calculatedPrice = useMemo(
    () =>
      discountPercentage ? price - price * (discountPercentage / 100) : price,
    [price, discountPercentage]
  )

  async function handleRemoveProduct(id: string | number) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this product?'
    )

    if (!confirmDelete) return

    try {
      const response = await toast.promise(productsService.remove(id), {
        loading: 'Removing...',
        success: 'Product was removed!',
        error: 'Error on remotion =('
      })

      if (!response.isDeleted) throw new Error()

      router.push('/')
    } catch {}
  }

  return {
    calculatedPrice,
    handleRemoveProduct
  }
}
