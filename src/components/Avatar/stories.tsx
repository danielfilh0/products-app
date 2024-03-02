import { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '.'
import { PlusIcon } from '@radix-ui/react-icons'

export default {
  title: 'Avatar',
  component: Avatar
} as Meta

export const Default: StoryObj = {}

Default.args = {
  image:
    'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
  username: 'John Doe'
}

export const WithoutImage: StoryObj = {}

WithoutImage.args = {
  username: 'John Doe'
}

export const WithMenu: StoryObj = {}

WithMenu.args = {
  image:
    'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
  username: 'John Doe',
  menu: [
    {
      href: '#',
      label: 'Item 1',
      icon: <PlusIcon />
    },
    {
      onClick: () => {},
      icon: <PlusIcon />,
      label: 'Item 2'
    },
    {
      href: '#',
      label: 'Item 3',
      icon: <PlusIcon />
    },
    {
      onClick: () => {},
      label: 'Item 4',
      icon: <PlusIcon />
    }
  ]
}
