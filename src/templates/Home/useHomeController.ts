'use client'

import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export function useHomeController() {
  const router = useRouter()
  const itemsPerPage = 12

  async function handlePaginate(page: number) {
    page = page + 1
    router.push(`/page/${page}`)
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
    handlePaginate,
    itemsPerPage,
    handleSearch
  }
}
