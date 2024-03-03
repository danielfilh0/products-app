import { render, screen, waitFor } from '@testing-library/react'

import { TextInput } from '.'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import userEvent from '@testing-library/user-event'

describe('<TextInput />', () => {
  it('should render with Label', () => {
    render(<TextInput label="Label" name="Label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('should render without Label', () => {
    render(<TextInput />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    render(<TextInput placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('should render with Icon', () => {
    render(<TextInput icon={<EnvelopeClosedIcon data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should change its value when typing', async () => {
    const onChange = jest.fn()
    render(<TextInput onChange={onChange} label="TextInput" name="TextInput" />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onChange).toHaveBeenCalledWith(text)
  })

  it('should not change its value when disabled', async () => {
    const onInput = jest.fn()
    render(
      <TextInput
        onInput={onInput}
        label="TextInput"
        name="TextInput"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })

  it('should render with error', () => {
    const { container } = render(
      <TextInput
        icon={<EnvelopeClosedIcon data-testid="icon" />}
        label="TextInput"
        name="TextInput"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be accessible by tab', async () => {
    render(<TextInput label="TextInput" name="TextInput" />)

    const input = screen.getByLabelText('TextInput')
    expect(document.body).toHaveFocus()

    await userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should not be accessible by tab when disabled', async () => {
    render(<TextInput label="TextInput" name="TextInput" disabled />)

    const input = screen.getByLabelText('TextInput')
    expect(document.body).toHaveFocus()

    await userEvent.tab()
    expect(input).not.toHaveFocus()
  })
})
