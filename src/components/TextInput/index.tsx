'use client'

import { cn } from '@/utils/cn'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { InputHTMLAttributes, forwardRef } from 'react'

export type TextInputProps = {
  id: string
  name?: string
  label?: string
  icon?: React.ReactNode
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ icon, label, disabled = false, error, className, id, ...props }, ref) => {
    return (
      <div>
        {!!label && (
          <label
            htmlFor={id}
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
            id={id}
            ref={ref}
            type="text"
            data-icon={!!icon}
            className={cn(
              'block w-full rounded-md border-0 pl-4 py-1.5 data-[icon=true]:pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-1 disabled:bg-gray-100 disabled:cursor-not-allowed',
              error &&
                'outline-none text-red-400 ring-red-400 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-500 pl-4',
              className
            )}
            disabled={disabled}
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
)

TextInput.displayName = 'TextInput'
