import { render, screen } from '@testing-library/react'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render', () => {
    const { container } = render(<Logo />)

    expect(
      screen.getByRole('img', { name: 'Products App Logo' })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render by passing classes names', () => {
    const { container } = render(<Logo className="h-10" />)

    expect(container.getElementsByClassName('h-10').length).toBe(1)
  })
})
