import { Meta, StoryObj } from '@storybook/react'
import { ProductsListing, ProductsListingProps } from '.'
import mock from './mock'

export default {
  title: 'ProductsListing',
  component: ProductsListing
} as Meta

export const Default: StoryObj<ProductsListingProps> = {
  render: () => <ProductsListing {...mock} />
}

export const WithoutProducts: StoryObj<ProductsListingProps> = {
  render: () => <ProductsListing />
}
