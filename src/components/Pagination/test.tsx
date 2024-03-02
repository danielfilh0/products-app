import { render, screen, waitFor } from '@testing-library/react'

import { Pagination } from '.'
import userEvent from '@testing-library/user-event'

describe('<Pagination />', () => {
  it('should render', () => {
    render(<Pagination total={100} itemsPerPage={10} />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should not render if total is zero', () => {
    render(<Pagination total={0} itemsPerPage={10} />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })

  it('should call function when page is changed', async () => {
    const onPageChange = jest.fn()

    render(
      <Pagination total={100} itemsPerPage={10} onPageChange={onPageChange} />
    )

    userEvent.click(screen.getAllByRole('button')[2])

    await waitFor(() => {
      expect(onPageChange).toHaveBeenCalledTimes(1)
      expect(onPageChange).toHaveBeenCalledWith(1)
    })

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
