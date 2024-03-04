import { render, screen } from '@testing-library/react'

import { CreateProduct } from '.'

describe('<AddProduct />', () => {
  it('should render the heading', () => {
    render(<CreateProduct />)

    expect(
      screen.getByRole('heading', { name: /create product/i })
    ).toBeInTheDocument()
  })
})
