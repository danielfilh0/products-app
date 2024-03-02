import { Meta, StoryObj } from '@storybook/react'
import { ProductItem, ProductItemProps } from '.'

import mock from './mock'

export default {
  title: 'ProductItem',
  component: ProductItem,
  args: mock
} as Meta

export const Default: StoryObj<ProductItemProps> = {
  render: (args) => (
    <div style={{ maxWidth: 382 }}>
      <ProductItem {...args} />
    </div>
  )
}
