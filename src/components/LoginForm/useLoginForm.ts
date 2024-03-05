import { useAuth } from '@/hooks/useAuth'
import { usersService } from '@/services/users'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { z } from 'zod'

export const formSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required')
})

export type FormSchemaData = z.infer<typeof formSchema>

export function useLoginForm() {
  const { signin } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    control,
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    reset
  } = useForm<FormSchemaData>({
    resolver: zodResolver(formSchema)
  })

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      setIsSubmitting(true)
      const user = await usersService.login(data)

      signin(user.token as string)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.message)
    } finally {
      setIsSubmitting(false)
      reset()
    }
  })

  return {
    control,
    register,
    errors,
    handleSubmit,
    isSubmitting
  }
}
