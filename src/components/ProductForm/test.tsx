import { render, screen, waitFor } from '@testing-library/react'

import userEvent from '@testing-library/user-event'

import { ProductForm } from '.'

describe('<ProductForm />', () => {
  it('should render', () => {
    render(<ProductForm />)

    expect(screen.getByRole('form')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
  })

  it('should submit the form', async () => {
    const onSubmit = jest.fn()

    render(
      <ProductForm
        titleValue="Samsung Galaxy Book"
        descriptionValue="MacBook Pro 2021 with mini-LED display may launch between September, November"
        priceValue={1499}
        categoryValue="laptops"
        brandValue="Samsung"
        onSubmit={onSubmit}
      />
    )

    userEvent.click(screen.getByRole('button'))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
    })
  })
})
