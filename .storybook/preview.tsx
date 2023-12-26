import React from 'react'
import { RootLayout } from '../src/layouts/RootLayout'

export const decorators = [
  (Story) => (
    <RootLayout>
      <Story />
    </RootLayout>
  )
]
