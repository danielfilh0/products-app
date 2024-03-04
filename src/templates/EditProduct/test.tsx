import { render, screen } from '@testing-library/react'

import { EditProduct } from '.'

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useParams: () => ({ slug: '1' }),
  useRouter: () => jest.fn()
}))

describe('<EditProduct />', () => {
  it('should render', () => {
    render(
      <EditProduct
        title="Galaxy S3"
        brand="Samsung"
        category="smartphone"
        price={1400}
        description="A smartphone"
      />
    )

    expect(
      screen.getByRole('heading', { name: /edit product/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument()
  })
})
