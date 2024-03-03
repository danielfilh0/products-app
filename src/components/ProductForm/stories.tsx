import { Meta, StoryObj } from '@storybook/react'
import { ProductForm, ProductFormProps } from '.'

export default {
  title: 'ProductForm',
  component: ProductForm,
  argTypes: {
    onSubmit: { action: 'form submitted' }
  }
} as Meta

export const Default: StoryObj<ProductFormProps> = {
  render: (args) => (
    <div className="max-w-[500px] mx-auto">
      <ProductForm {...args} />
    </div>
  )
}

export const WithValues: StoryObj<ProductFormProps> = {
  render: (args) => (
    <div className="max-w-[500px] mx-auto">
      <ProductForm {...args} />
    </div>
  )
}

WithValues.args = {
  titleValue: 'Samsung Galaxy Book',
  descriptionValue:
    'MacBook Pro 2021 with mini-LED display may launch between September, November',
  priceValue: 1499,
  categoryValue: 'laptops',
  brandValue: 'Samsung'
}
