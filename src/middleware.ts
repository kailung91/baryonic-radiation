import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'uk'],

    // Used when no locale matches
    defaultLocale: 'uk'
});

export const config = {
    // Match all pathnames except for:
    // - /api, /_next, /_vercel (internal)
    // - static files (images, fonts, favicon, etc.)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
