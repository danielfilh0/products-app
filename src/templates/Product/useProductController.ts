'use client'

import { useMemo } from 'react'

type UseProductControllerProps = {
  price: number
  discountPercentage: number
}

export function useProductController({
  price,
  discountPercentage
}: UseProductControllerProps) {
  const calculatedPrice = useMemo(
    () =>
      discountPercentage ? price - price * (discountPercentage / 100) : price,
    [price, discountPercentage]
  )

  return {
    calculatedPrice
  }
}
