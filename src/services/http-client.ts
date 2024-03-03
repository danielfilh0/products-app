import { RequestInit } from 'next/dist/server/web/spec-extension/request'

export async function request(path: string, init?: RequestInit) {
  const baseUrl = 'https://dummyjson.com'

  const response = await fetch(baseUrl + path, init)

  return response.json()
}
