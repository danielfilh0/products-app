import { render, screen } from '@testing-library/react'

import { DefaultLayout } from '.'

jest.mock('@/components/Header', () => ({
  __esModule: true,
  Header: function Mock() {
    return <div data-testid="Mock Header" />
  }
}))

jest.mock('@/components/Footer', () => ({
  __esModule: true,
  Footer: function Mock() {
    return <div data-testid="Mock Footer" />
  }
}))

describe('<DefaultLayout />', () => {
  it('should render with Header and Footer', () => {
    render(<DefaultLayout>Hello world</DefaultLayout>)

    expect(screen.getByTestId('Mock Header')).toBeInTheDocument()
    expect(screen.getByText('Hello world')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })
})
