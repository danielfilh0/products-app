import { DefaultLayout } from '@/layouts/DefaultLayout'

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <DefaultLayout>{children}</DefaultLayout>
}
