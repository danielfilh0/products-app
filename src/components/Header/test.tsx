import { render, screen } from '@testing-library/react'
import { Header } from '.'

jest.mock('../Logo', () => ({
  __esModule: true,
  Logo: function Mock() {
    return <div data-testid="Mock Logo" />
  }
}))

jest.mock('../Avatar', () => ({
  __esModule: true,
  Avatar: function Mock() {
    return <div data-testid="Mock Avatar" />
  }
}))

describe('<Header />', () => {
  it('should render with link for login', () => {
    render(<Header />)

    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Log in' })).toBeInTheDocument()
    expect(screen.queryByTestId('Mock Avatar')).not.toBeInTheDocument()
  })
})

describe('<Header />', () => {
  it('should render with logged user', () => {
    render(<Header user={{ name: 'John Doe' }} />)

    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Avatar')).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: 'Log in' })
    ).not.toBeInTheDocument()
  })
})
