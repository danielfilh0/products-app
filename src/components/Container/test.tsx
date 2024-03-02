import { render, screen } from '@testing-library/react'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    render(<Container>Hello World</Container>)

    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
