'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import { list } from '@/services/products/list'
import { HomeProps } from '.'

export function useHomeController({ products }: HomeProps) {
  const router = useRouter()
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

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    if (!data.q) return

    router.push(`/products/search?q=${data.q}`)
    router.refresh()
  }

  return {
    isLoading,
    productsState,
    handlePaginate,
    itemsPerPage,
    handleSearch
  }
}
