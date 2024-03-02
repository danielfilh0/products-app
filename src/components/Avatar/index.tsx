import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import Image from 'next/image'

export type AvatarProps = {
  image?: string
  username: string
  menu?: {
    href?: string
    onClick?: () => void
    label: string
    icon?: React.ReactNode
  }[]
}

export function Avatar({ image, username, menu }: AvatarProps) {
  const AvatarWithFallback = () =>
    image ? (
      <Image
        className="inline-block h-8 w-8 rounded-full object-cover"
        width={56}
        height={56}
        src={image}
        alt={`Photo of ${username}`}
      />
    ) : (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
        <span className="text-sm font-medium leading-none text-white uppercase">
          {username.charAt(0) + username.charAt(1)}
        </span>
      </span>
    )

  if (!menu) return <AvatarWithFallback />

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none">
        <AvatarWithFallback />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-20"
          sideOffset={5}
        >
          {menu.map((item) => (
            <DropdownMenu.Item
              key={item.label}
              className="text-gray-700 hover:text-indigo-600 hover:bg-gray-100 group flex gap-x-3 rounded-md p-2 pl-3 text-sm outline-1 outline-gray-200 leading-6 cursor-pointer"
            >
              {!!item?.href && (
                <Link href={item.href} className="flex items-center gap-2">
                  {item?.icon}
                  <span>{item.label}</span>
                </Link>
              )}
              {!!item?.onClick && (
                <button
                  type="button"
                  onClick={item.onClick}
                  className="flex items-center gap-2"
                >
                  {item?.icon}
                  <span>{item.label}</span>
                </button>
              )}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
