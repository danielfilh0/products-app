import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import ReactPaginate from 'react-paginate'

type SelectedItem = {
  selected: number
}

type PaginationProps = {
  total: number
  itemsPerPage: number
  onPageChange?: (currentPage: number) => void
}

export function Pagination({
  total,
  itemsPerPage,
  onPageChange
}: PaginationProps) {
  const pageCount = Math.ceil(total / itemsPerPage)

  function handlePageChange({ selected }: SelectedItem) {
    !!onPageChange && onPageChange(selected)
  }

  if (!pageCount) return null

  return (
    <ReactPaginate
      className="flex bg-white px-4 py-3 sm:px-6"
      pageLinkClassName="hidden sm:block relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 cursor-pointer"
      activeLinkClassName="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      previousLinkClassName="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      nextLinkClassName="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      breakLinkClassName="hidden sm:inline-flex relative items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
      disabledLinkClassName="cursor-default"
      breakLabel="..."
      previousLabel={<ChevronLeftIcon width={20} height={20} />}
      nextLabel={<ChevronRightIcon width={20} height={20} />}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      onPageChange={handlePageChange}
    />
  )
}
