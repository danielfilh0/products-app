import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const formSchema = z.object({
  title: z
    .string()
    .min(3, 'Title is required and must be more than 3 characters'),
  description: z.string().min(1, 'Description is required'),
  price: z.coerce.number().min(1, 'Price is required'),
  brand: z.string().min(1, 'Brand is required'),
  category: z.string().min(1, 'Category is required')
})

export type FormSchemaData = z.infer<typeof formSchema>

type UseProductFormControllerProps = {
  onSubmit?: (data: FormSchemaData) => Promise<void>
  titleValue?: string
  descriptionValue?: string
  priceValue?: number
  brandValue?: string
  categoryValue?: string
}

export function useProductFormController({
  onSubmit,
  titleValue,
  descriptionValue,
  priceValue,
  brandValue,
  categoryValue
}: UseProductFormControllerProps) {
  const {
    control,
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    reset
  } = useForm<FormSchemaData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: titleValue,
      description: descriptionValue,
      price: priceValue,
      brand: brandValue,
      category: categoryValue
    }
  })

  const handleSubmit = hookFormSubmit(async (data) => {
    !!onSubmit && (await onSubmit(data))
    reset()
  })

  return {
    control,
    register,
    errors,
    handleSubmit
  }
}
