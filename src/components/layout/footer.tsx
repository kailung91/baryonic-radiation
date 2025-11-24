"use client";

import { useTranslations } from 'next-intl';
import { Link } from "@/navigation";
import { Container } from "@/components/ui/container";

export function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="border-t border-black/5 dark:border-white/10 bg-slate-50/50 dark:bg-black/20 backdrop-blur-sm">
            <Container>
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Left: Logo + Address */}
                        <div>
                            <h3 className="font-heading font-bold text-lg mb-3 text-foreground">
                                IAT
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {t('address')}
                            </p>
                        </div>

                        {/* Right: Legal Links */}
                        <div className="md:text-right">
                            <h3 className="font-heading font-bold text-sm mb-4 text-foreground">
                                {t('legal_title')}
                            </h3>
                            <div className="flex flex-col md:items-end gap-2">
                                <Link
                                    href="/privacy"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {t('privacy')}
                                </Link>
                                <Link
                                    href="/terms"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {t('terms')}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Copyright - Bottom */}
                    <div className="pt-8 border-t border-white/5">
                        <p className="text-xs text-muted-foreground text-center">
                            {t('rights')}
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
