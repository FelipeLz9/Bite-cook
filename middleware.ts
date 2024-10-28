import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const locales = ['en', 'es'];

const middleware = createMiddleware({
  locales,
  defaultLocale: 'es'
});

export default function (req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  
  if (pathname === '/') {
    return middleware(req);
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = req.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'en';
    return Response.redirect(new URL(`/${locale}${pathname}`, req.url));
  }

  return middleware(req);
}

export const config = {
  matcher: ["/", "/:locale/"],
};