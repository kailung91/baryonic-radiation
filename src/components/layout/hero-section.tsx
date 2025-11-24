"use client";

import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Link } from "@/navigation";

export function HeroSection() {
    const t = useTranslations('Hero');

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Adaptive gradient background - Light/Dark */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-black" />

            {/* Animated breathing glow - only visible in dark mode */}
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-0 dark:opacity-30 animate-pulse"
                style={{ animationDuration: '4s' }}
            />

            {/* Noise overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.02]" />

            {/* Content - Vertically Centered */}
            <Container className="relative z-10">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    {/* Large Heading - Adaptive text color */}
                    <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight whitespace-pre-line">
                        {t('title')}
                    </h1>

                    {/* Subtitle - Muted foreground */}
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed">
                        {t('subtitle')}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Button size="lg" variant="default" asChild>
                            <Link href="/products">
                                {t('cta_primary')}
                            </Link>
                        </Button>

                        <Button size="lg" variant="ghost" asChild>
                            <Link href="/about">
                                {t('cta_secondary')}
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}
