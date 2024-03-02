import { RootLayout } from '@/layouts/RootLayout'
import { RenderResult, render } from '@testing-library/react'

export function renderWithTheme(children: React.ReactNode): RenderResult {
  return render(<RootLayout>{children}</RootLayout>)
}
