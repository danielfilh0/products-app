import { Meta, StoryObj } from '@storybook/react'
import { Pagination } from '.'

export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    total: 100,
    itemsPerPage: 10
  }
} as Meta

export const Default: StoryObj = {}
