import { Meta, StoryObj } from '@storybook/react'
import { Header } from '.'
import { PlusIcon } from '@radix-ui/react-icons'

export default {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div className="h-[2000px]">
      <Header />
    </div>
  )
}

export const WithUser: StoryObj = {
  render: () => (
    <div className="h-[2000px]">
      <Header
        user={{
          photo:
            'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
          name: 'John Doe'
        }}
      />
    </div>
  )
}

export const WithUserAndWithoutPhoto: StoryObj = {
  render: () => (
    <div className="h-[2000px]">
      <Header
        user={{
          name: 'John Doe'
        }}
      />
    </div>
  )
}

export const WithUserAndMenu: StoryObj = {
  render: () => (
    <div className="h-[2000px]">
      <Header
        user={{
          name: 'John Doe',
          photo:
            'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
        }}
        menu={[
          {
            label: 'Item 1',
            href: '#',
            icon: <PlusIcon />
          },
          {
            label: 'Item 2',
            onClick: () => {},
            icon: <PlusIcon />
          },
          {
            label: 'Item 3',
            href: '#',
            icon: <PlusIcon />
          },
          {
            label: 'Item 4',
            onClick: () => {},
            icon: <PlusIcon />
          }
        ]}
      />
    </div>
  )
}
