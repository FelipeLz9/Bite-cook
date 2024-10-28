import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const locales = ['en', 'es'];

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'es'
});

export default function (req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname === '/') {
    return intlMiddleware(req);
  }

  const hasLocaleInPathname = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (hasLocaleInPathname) {
    return intlMiddleware(req);
  }

  const detectedLocale = req.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'es';
  return Response.redirect(new URL(`/${detectedLocale}${pathname}`, req.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};
