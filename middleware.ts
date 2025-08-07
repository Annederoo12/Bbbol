import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const locales = ['nl', 'de']
const defaultLocale = 'nl'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Als het pad al begint met een locale, doe niks
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    locales.some((loc) => pathname.startsWith(`/${loc}`))
  ) {
    return NextResponse.next()
  }

  // Detecteer browsertaal
  const acceptLang = request.headers.get('accept-language') || ''
  const preferred = acceptLang.startsWith('de') ? 'de' : 'nl'

  // Redirect alleen als niet al in een taalmap
  const url = request.nextUrl.clone()
  url.pathname = `/${preferred}${pathname}`
  return NextResponse.redirect(url)
}