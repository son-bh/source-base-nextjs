import { NextResponse } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { StorageKeys } from './constants/storage-keys';
import { i18n } from './i18n-config';

const rootPath = '/';

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|images|assets|favicon.ico|sw.js).*)'],
};

const unauthenticatedPaths = ['/login', '/register', '/forgot', '/reset-password', '/forgot-password', '/oauth/facebook', '/oauth/google'];
const clearSessionPaths = ['/reset-password', '/oauth/facebook', '/oauth/google'];
const publicPaths = [];

function getLocale(request) {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  // if (
  //   [
  //     '/manifest.json',
  //     '/favicon.ico',
  //     // Your other files in `public`
  //   ].includes(pathname)
  // )
  //   return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url));
  }

  // const response = NextResponse.next();
  // // const isRootPath = rootPath === req.nextUrl.pathname;
  // const isUnauthenticatedPath = unauthenticatedPaths.find(path => new RegExp(`${path}$`).test(req.nextUrl.pathname));
  // const isPublic = publicPaths.find(path => new RegExp(`${path}$`).test(req.nextUrl.pathname));
  // // Redirect to /login if unauthenticated
  // if (!isPublic && !req.cookies.has(StorageKeys.AccessToken) && !isUnauthenticatedPath) {
  //   const responseRedirect = NextResponse.redirect(new URL('/login', req.url));
  //   return responseRedirect;
  // }
  // // Redirect to / if already authenticated
  // if (!isPublic && req.cookies.has(StorageKeys.AccessToken) && (isUnauthenticatedPath)) {
  //   if (!!clearSessionPaths.find(path => new RegExp(path).test(req.nextUrl.pathname))) {
  //     response.cookies.delete(StorageKeys.AccessToken);
  //     response.cookies.delete(StorageKeys.UserInfo);
  //     return response;
  //   }
  //   return NextResponse.redirect(new URL(rootPath, req.url));
  // }
  // return response;
}
