import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return
  }

  const hostname = req.headers.get('host')
  const locale = req.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'nl'

  if (!pathname.startsWith(`/${locale}`)) {
    req.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(req.nextUrl)
  }

  return NextResponse.next()
}