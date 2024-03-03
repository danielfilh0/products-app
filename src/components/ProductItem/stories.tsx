import { Meta, StoryObj } from '@storybook/react'
import { ProductItem } from '.'

import mock from './mock'
import { TCardProduct } from '@/types/Product'

export default {
  title: 'ProductItem',
  component: ProductItem,
  args: mock
} as Meta

export const Default: StoryObj<TCardProduct> = {
  render: (args) => (
    <div style={{ maxWidth: 382 }}>
      <ProductItem {...args} />
    </div>
  )
}
