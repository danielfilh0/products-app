import { render, screen } from '@testing-library/react'

import { ProductsListing } from '.'
import mock from './mock'

describe('<ProductsListing />', () => {
  it('should render the listing', () => {
    render(<ProductsListing {...mock} />)

    expect(screen.getAllByRole('listitem')).toHaveLength(mock.products.length)
  })

  it('should not render the listing without products', () => {
    render(<ProductsListing />)

    expect(
      screen.getByRole('heading', { name: /não existem produtos/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /tente recarregar a página ou alterar os filtros de pesquisa./i
      )
    ).toBeInTheDocument()
  })

  it('should not render the listing if is loading', () => {
    render(<ProductsListing isLoading={true} />)

    expect(screen.getByText('Carregando produtos...')).toBeInTheDocument()
  })
})
