import { render, screen } from '@testing-library/react'

import { Footer } from '.'

jest.mock('../Logo', () => ({
  __esModule: true,
  Logo: function Mock() {
    return <div data-testid="Mock Logo" />
  }
}))

describe('<Footer />', () => {
  it('should render', () => {
    render(<Footer />)

    expect(
      screen.getByRole('link', { name: /Daniel Filho/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument()
  })
})
