// app/[locale]/layout.tsx
import '../globals.css'

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}