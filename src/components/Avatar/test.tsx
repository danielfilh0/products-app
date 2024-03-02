import { renderWithTheme as render } from '@/utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import { Avatar } from '.'
import { screen, waitFor } from '@testing-library/react'

describe('<Avatar />', () => {
  it('should render Avatar only', () => {
    render(
      <Avatar
        image="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        username="John Doe"
      />
    )

    expect(
      screen.getByRole('img', { name: 'Photo of John Doe' })
    ).toBeInTheDocument()
  })

  it('should render Avatar without image', () => {
    render(<Avatar username="John Doe" />)

    expect(screen.getByText(/jo/i)).toBeInTheDocument()
  })

  it('should render Avatar with menu', () => {
    render(
      <Avatar
        image="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        username="John Doe"
        menu={[
          {
            label: 'Item 1',
            onClick: () => {}
          },
          {
            href: '#',
            label: 'Item 2'
          }
        ]}
      />
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should render Avatar with menu and click on menu item', async () => {
    const onClick = jest.fn()

    render(
      <Avatar
        image="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        username="John Doe"
        menu={[
          {
            label: 'Item 1',
            onClick
          }
        ]}
      />
    )

    userEvent.click(screen.getByRole('button'))

    await waitFor(() => {
      const menuItemButton = screen.getByText('Item 1')
        .parentElement as HTMLElement
      userEvent.click(menuItemButton)
    })

    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })
})
