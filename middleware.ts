import { NextResponse } from 'next/server';
import { setRequestLocale } from 'next-intl/server';

const locales = ['en', 'es'];
const defaultLocale = 'es';

import { NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next/static') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (hasLocale) {
    const locale = pathname.split('/')[1];
    setRequestLocale(locale); 
    return NextResponse.next();
  }

  const detectedLocale =
    req.headers.get('accept-language')?.split(',')[0]?.split('-')[0] || defaultLocale;

  setRequestLocale(detectedLocale); 
  return NextResponse.redirect(new URL(`/${detectedLocale}${pathname}`, req.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};
