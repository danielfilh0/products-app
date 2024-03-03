import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from '.'
import { EnvelopeClosedIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'

export default {
  title: 'TextInput',
  component: TextInput
} as Meta

export const Default: StoryObj<TextInputProps> = {}

Default.args = {
  name: 'search',
  icon: <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />,
  label: 'Search',
  placeholder: 'Search for products...'
}

export const WithError: StoryObj<TextInputProps> = {}

WithError.args = {
  name: 'email',
  icon: <EnvelopeClosedIcon className="h-5 w-5 text-gray-400" />,
  label: 'Email',
  error: 'Invalid email'
}

export const Disabled: StoryObj<TextInputProps> = {}

Disabled.args = {
  name: 'email',
  icon: <EnvelopeClosedIcon className="h-5 w-5 text-gray-400" />,
  label: 'Email',
  disabled: true
}
