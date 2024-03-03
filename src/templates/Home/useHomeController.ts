'use client'

import { useState } from 'react'

import { list } from '@/services/products/list'
import { HomeProps } from '.'

export function useHomeController({ products }: HomeProps) {
  const [productsState, setProductsState] = useState(products)
  const [isLoading, setIsLoading] = useState(false)
  const itemsPerPage = 12

  async function handlePaginate(page: number) {
    try {
      setIsLoading(true)
      const response = await list(itemsPerPage, page)
      setProductsState(response)
    } catch {
      console.log('erro')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    productsState,
    handlePaginate,
    itemsPerPage
  }
}
