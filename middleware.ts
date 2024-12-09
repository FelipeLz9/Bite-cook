import { NextResponse } from 'next/server';

const locales = ['en', 'es'];
const defaultLocale = 'es';

export default function middleware(req: { nextUrl: { pathname: any; }; headers: { get: (arg0: string) => string; }; url: string | URL | undefined; }) {
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
    return NextResponse.next();
  }

  const acceptLanguage = req.headers.get('accept-language') || '';
  const detectedLocale =
    locales.find((locale) => acceptLanguage.includes(locale)) || defaultLocale;

  return NextResponse.redirect(
    new URL(`/${detectedLocale}${pathname}`, req.url)
  );
}

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};
