"use client";

import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Header() {
    const t = useTranslations('Navigation');

    const navItems = [
        { label: t('products'), href: '/products' },
        { label: t('education'), href: '/education' },
        { label: t('about'), href: '/about' },
        { label: t('contact'), href: '/contact' }
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/40">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    {/* Logo - Left */}
                    <Link
                        href="/"
                        className="font-heading font-bold text-xl tracking-tight text-foreground hover:text-primary transition-colors"
                    >
                        IAT
                    </Link>

                    {/* Center Navigation - Hidden on mobile */}
                    <nav className="hidden md:flex gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions - Language Switcher + Theme Toggle + Contact Button */}
                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                        <ThemeToggle />
                        <Button
                            size="sm"
                            variant="default"
                            asChild
                            className="hidden sm:inline-flex"
                        >
                            <Link href="/contact">
                                {t('cta_contact')}
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}
