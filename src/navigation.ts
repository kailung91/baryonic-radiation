import { createNavigation } from 'next-intl/navigation';

export const locales = ['uk', 'en'] as const;

export const { Link, redirect, usePathname, useRouter } = createNavigation({
    locales
});
