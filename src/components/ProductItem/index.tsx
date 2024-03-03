import { TCardProduct } from '@/types/Product'
import { formatCurrency } from '@/utils/formatCurrency'
import Image from 'next/image'
import Link from 'next/link'

export function ProductItem({
  id,
  thumbnail,
  title,
  description,
  price,
  discountPercentage,
  category
}: TCardProduct) {
  const calculatedPrice = discountPercentage
    ? price - price * (discountPercentage / 100)
    : price

  return (
    <li className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
        <Image
          src={thumbnail}
          alt={`Image of ${title} product`}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
          width={500}
          height={264}
        />
      </div>

      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <Link href={`/product/${id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">{category}</p>
          <div className="flex gap-x-2">
            <span className="text-base font-medium text-gray-900">
              {formatCurrency(calculatedPrice)}
            </span>
            {!!discountPercentage && (
              <span className="text-base font-medium text-gray-900 line-through">
                {formatCurrency(price)}
              </span>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}
