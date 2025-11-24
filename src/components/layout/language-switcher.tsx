"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { cn } from '@/lib/utils';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const onSelectChange = (newLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    return (
        <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full p-1">
            <button
                onClick={() => onSelectChange('uk')}
                disabled={isPending}
                className={cn(
                    "h-8 px-3 text-xs font-medium rounded-full transition-all duration-200",
                    locale === 'uk'
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:text-white"
                )}
            >
                UA
            </button>
            <button
                onClick={() => onSelectChange('en')}
                disabled={isPending}
                className={cn(
                    "h-8 px-3 text-xs font-medium rounded-full transition-all duration-200",
                    locale === 'en'
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:text-white"
                )}
            >
                EN
            </button>
        </div>
    );
}
