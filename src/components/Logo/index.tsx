import Image from 'next/image'

import { cn } from '@/utils/cn'

type LogoProps = {
  className?: string
  color?: string
}

export function Logo({ className, color = 'indigo' }: LogoProps) {
  return (
    <Image
      width={47}
      height={40}
      className={cn('w-auto h-8', className)}
      src={`https://tailwindui.com/img/logos/mark.svg?color=${color}&shade=600`}
      alt="Products App Logo"
    />
  )
}
