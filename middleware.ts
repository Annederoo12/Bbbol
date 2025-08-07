import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const locales = ['nl', 'de']
const defaultLocale = 'nl'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files or if already prefixed
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    locales.some((loc) => pathname.startsWith(`/${loc}`))
  ) {
    return
  }

  // Detect browser language
  const acceptLang = request.headers.get('accept-language') || ''
  const preferred = acceptLang.startsWith('de') ? 'de' : 'nl'

  // Redirect to correct locale
  const url = request.nextUrl.clone()
  url.pathname = `/${preferred}${pathname}`
  return NextResponse.redirect(url)
}