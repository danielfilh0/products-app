import { render, screen } from '@testing-library/react'

import { RootLayout } from '.'
import React from 'react'

jest.mock('@/contexts/AuthContext', () => ({
  __esModule: true,
  AuthProvider: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock AuthProvider">{children}</div>
  }
}))

describe('<RootLayout />', () => {
  it('should render', () => {
    render(<RootLayout>Root Layout</RootLayout>)

    expect(screen.getByText('Root Layout')).toBeInTheDocument()
  })
})
