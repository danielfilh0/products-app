'use client'

import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'
import { StarFilledIcon, Pencil2Icon, TrashIcon } from '@radix-ui/react-icons'
import { formatCurrency } from '@/utils/formatCurrency'
import { cn } from '@/utils/cn'
import { useProductController } from './useProductController'
import { TProduct } from '@/types/Product'

export function Product({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images
}: TProduct) {
  const { calculatedPrice } = useProductController({
    price,
    discountPercentage
  })

  return (
    <div className="bg-white">
      <Container>
        <div className="pb-16 pt-6 sm:pb-24">
          <nav className="flex justify-between items-center">
            <ul
              role="list"
              className="flex items-center space-x-4"
              aria-label="Breadcrumbs"
            >
              <li>
                <Link
                  href="/"
                  className="mr-4 text-sm font-medium text-gray-900"
                >
                  Products
                </Link>
                <span className="h-5 w-auto text-gray-300">/</span>
              </li>
              <li>
                <Link
                  href={`/product/${id}`}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600 pointer-events-none text-sm"
                >
                  {title}
                </Link>
              </li>
            </ul>

            <ul className="flex gap-2">
              <li>
                <Link
                  href={`/product/${id}/edit`}
                  title={`Edit ${title} product`}
                >
                  <Pencil2Icon className="text-gray-600 w-5 h-5" />
                </Link>
              </li>
              <li>
                <button title={`Delete ${title} product`}>
                  <TrashIcon className="text-red-600 w-5 h-5" />
                </button>
              </li>
            </ul>
          </nav>

          <section className="mx-auto mt-10 sm:mt-20">
            <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-5 lg:col-start-8">
                <div className="flex justify-between">
                  <h1 className="text-xl font-medium text-gray-900">{title}</h1>
                  <div className="flex gap-4 items-center">
                    <span className="text-xl font-medium text-gray-900">
                      {formatCurrency(calculatedPrice)}
                    </span>
                    {!!discountPercentage && (
                      <span className="text-xl font-medium text-gray-900 line-through">
                        {formatCurrency(price)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 mt-2">
                  <p className="text-sm text-gray-700">
                    {rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <StarFilledIcon
                        key={i}
                        className={cn(
                          Math.round(rating) > i
                            ? 'text-yellow-400'
                            : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                <h2 className="sr-only">Images</h2>
                <Image
                  src={thumbnail}
                  className="w-full h-[250px] md:h-[500px] object-contain"
                  width={1024}
                  height={1024}
                  alt={`Image of ${title}`}
                />
                {images?.length && (
                  <div className="flex gap-4 flex-wrap">
                    {images.map((image) => (
                      <Image
                        key={image}
                        src={image}
                        className="w-full md:w-[250px] h-[250px] object-contain md:object-cover"
                        width={250}
                        height={250}
                        alt={`Image of ${title}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4 lg:col-span-5">
                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">
                    Description
                  </h2>

                  <p className="mt-4 text-gray-500">{description}</p>
                </div>

                <div className="mt-5 border-t border-gray-200 pt-5">
                  <h2 className="text-sm font-medium text-gray-900">Brand</h2>
                  <p className="prose prose-sm mt-4 text-gray-500">{brand}</p>
                </div>

                <div className="mt-5 border-t border-gray-200 pt-5">
                  <h2 className="text-sm font-medium text-gray-900">
                    Category
                  </h2>
                  <p className="prose prose-sm mt-4 text-gray-500">
                    {category}
                  </p>
                </div>

                <div className="mt-5 border-t border-gray-200 pt-5">
                  <h2 className="text-sm font-medium text-gray-900">Stock</h2>
                  <p className="prose prose-sm mt-4 text-gray-500">{stock}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  )
}
