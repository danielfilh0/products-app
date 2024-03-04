'use client'

import { TextInput } from '../TextInput'
import {
  FormSchemaData,
  useProductFormController
} from './useProductFormController'

export type ProductFormProps = {
  buttonLabel?: string
  titleValue?: string
  descriptionValue?: string
  priceValue?: number
  brandValue?: string
  categoryValue?: string
  onSubmit?: (data: FormSchemaData) => Promise<void>
  isSubmitting?: boolean
}

export function ProductForm({
  buttonLabel = 'Save',
  titleValue,
  descriptionValue,
  priceValue,
  brandValue,
  categoryValue,
  onSubmit,
  isSubmitting = false
}: ProductFormProps) {
  const { register, handleSubmit, errors } = useProductFormController({
    onSubmit,
    titleValue,
    descriptionValue,
    priceValue,
    brandValue,
    categoryValue
  })

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} role="form">
      <TextInput
        id="title"
        label="Title"
        error={errors.title?.message}
        {...register('title')}
      />
      <TextInput
        id="description"
        label="Description"
        error={errors.description?.message}
        {...register('description')}
      />
      <TextInput
        id="price"
        label="Price"
        error={errors.price?.message}
        {...register('price')}
      />
      <TextInput
        id="brand"
        label="Brand"
        error={errors.brand?.message}
        {...register('brand')}
      />
      <TextInput
        id="category"
        label="Category"
        error={errors.category?.message}
        {...register('category')}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-300 disabled:pointer-events-none"
      >
        {buttonLabel}
      </button>
    </form>
  )
}
