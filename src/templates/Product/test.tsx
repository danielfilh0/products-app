import { render, screen } from '@testing-library/react'

import { Product } from '.'

import product from './mock'

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => jest.fn()
}))

describe('<Product />', () => {
  it('should render', () => {
    const { container } = render(<Product {...product} />)

    expect(
      screen.getAllByRole('heading', { name: product.title })[0]
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /brand/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /category/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /stock/i })).toBeInTheDocument()
    expect(screen.getByText(product.description)).toBeInTheDocument()
    expect(screen.getByText(product.brand)).toBeInTheDocument()
    expect(screen.getByText(product.category)).toBeInTheDocument()
    expect(screen.getByText(product.stock)).toBeInTheDocument()
    expect(
      screen.getAllByRole('img', { name: `Image of ${product.title}` })
    ).toHaveLength(product.images.length + 1)

    expect(container.getElementsByClassName('line-through').length).toBe(1)
  })

  it('should render an unique price if discount not exists', () => {
    const { container } = render(
      <Product {...product} discountPercentage={0} />
    )

    expect(container.getElementsByClassName('line-through')).not.toBe(1)
  })
})
