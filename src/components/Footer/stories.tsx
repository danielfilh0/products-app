import { Meta, StoryObj } from '@storybook/react'
import { Footer } from '.'

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div className="pt-10">
      <Footer />
    </div>
  )
}
