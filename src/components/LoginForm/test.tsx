import { render, screen } from '@testing-library/react'

import { LoginForm } from '.'

describe('<LoginForm />', () => {
  it('should render', () => {
    render(<LoginForm />)

    expect(screen.getByRole('form')).toBeInTheDocument()
  })
})
