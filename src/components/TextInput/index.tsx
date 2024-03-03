'use client'

import { cn } from '@/utils/cn'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { InputHTMLAttributes, useState } from 'react'

export type TextInputProps = {
  onChange?: (value: string) => void
  name?: string
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export function TextInput({
  name,
  icon,
  label,
  initialValue = '',
  disabled = false,
  onChange,
  error,
  className,
  ...props
}: TextInputProps) {
  const [value, setValue] = useState(initialValue)

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onChange && onChange(newValue)
  }

  return (
    <div>
      {!!label && (
        <label
          htmlFor={name}
          className={cn(
            'block text-sm font-medium leading-6 text-gray-900 mb-2',
            error && 'text-red-600'
          )}
        >
          {label}
        </label>
      )}
      <div className="relative rounded-md shadow-sm h-full">
        {!!icon && !error && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
          </div>
        )}
        <input
          type="text"
          name={name}
          value={value}
          className={cn(
            'block w-full rounded-md border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-1 disabled:bg-gray-100 disabled:cursor-not-allowed',
            error &&
              'outline-none text-red-400 ring-red-400 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-500 pl-4',
            className
          )}
          disabled={disabled}
          onChange={handleOnChange}
          {...(label ? { id: name } : {})}
          {...(error
            ? { 'aria-invalid': 'true', 'aria-describedby': 'email-error' }
            : {})}
          {...props}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationTriangleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {!!error && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error}
        </p>
      )}
    </div>
  )
}
