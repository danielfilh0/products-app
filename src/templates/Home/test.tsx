import { render, screen } from '@testing-library/react'

import { Home } from '.'
import products from '@/components/ProductsListing/mock'

jest.mock('@/components/ProductsListing', () => ({
  __esModule: true,
  ProductsListing: function Mock() {
    return <div data-testid="Mock ProductsListing" />
  }
}))

jest.mock('@/components/Pagination', () => ({
  __esModule: true,
  Pagination: function Mock() {
    return <div data-testid="Mock Pagination" />
  }
}))

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useParams: () => ({ slug: '1' }),
  useRouter: () => jest.fn()
}))

describe('<Home />', () => {
  it('should render', () => {
    render(<Home products={products} />)

    expect(
      screen.getByPlaceholderText('Search for products')
    ).toBeInTheDocument()
    expect(screen.getByRole('form')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProductsListing')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Pagination')).toBeInTheDocument()
  })
})
