"use client";

import { useTranslations } from 'next-intl';
import { HeroSection } from "@/components/layout/hero-section";
import { PartnersSection } from "@/components/home/partners-section";
import { FeatureGrid } from "@/components/home/feature-grid";
import { StatsSection } from "@/components/home/stats-section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

export default function Home() {
    const tCore = useTranslations('CoreDirections');
    const tCTA = useTranslations('CTA');

    return (
        <main>
            {/* Hero Section - Atmospheric, Tall, Enhanced CTAs */}
            <HeroSection />

            {/* Partners Section - Social Proof */}
            <PartnersSection />

            {/* Core Directions - Feature Grid */}
            <section className="py-24 relative z-10">
                <Container>
                    <h2 className="text-3xl font-heading font-bold mb-16 text-center text-foreground">
                        {tCore('title')}
                    </h2>
                    <FeatureGrid />
                </Container>
            </section>

            {/* Stats Section - Animated Counters */}
            <StatsSection />

            {/* CTA Section - Final call to action before footer */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
                <div className="absolute inset-0 bg-noise opacity-[0.015]" />

                <Container className="relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                            {tCTA('title')}
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            {tCTA('subtitle')}
                        </p>
                        <div className="pt-4">
                            <Button size="lg" variant="default" asChild>
                                <Link href="/contact">
                                    {tCTA('button')}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
