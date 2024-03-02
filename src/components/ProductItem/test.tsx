import { render, screen } from '@testing-library/react'

import { ProductItem } from '.'

import mock from './mock'

describe('<ProductItem />', () => {
  it('should render', () => {
    const { container } = render(<ProductItem {...mock} />)

    expect(
      screen.getByRole('heading', { name: mock.title })
    ).toBeInTheDocument()
    expect(screen.getByText(mock.description)).toBeInTheDocument()
    expect(screen.getByText(mock.category)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: `Image of ${mock.title} product` })
    ).toBeInTheDocument()
    expect(container.getElementsByClassName('line-through').length).toBe(1)
  })

  it('should render an unique price if discount not exists', () => {
    const { container } = render(
      <ProductItem {...mock} discountPercentage={0} />
    )

    expect(container.getElementsByClassName('line-through')).not.toBe(1)
  })
})
