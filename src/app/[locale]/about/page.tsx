"use client";

import { useTranslations } from 'next-intl';
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { Target, History } from "lucide-react";

export default function AboutPage() {
    const t = useTranslations('AboutPage');

    return (
        <main className="flex min-h-screen flex-col py-24">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                        {t('hero_title')}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('hero_subtitle')}
                    </p>
                </div>

                {/* Content Cards */}
                <div className="max-w-5xl mx-auto space-y-8">
                    {/* Mission Card */}
                    <GlassCard className="p-10">
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                                    {t('mission_title')}
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {t('mission_desc')}
                                </p>
                            </div>
                        </div>
                    </GlassCard>

                    {/* History Card */}
                    <GlassCard className="p-10">
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                                <History className="w-8 h-8 text-accent" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                                    {t('history_title')}
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {t('history_desc')}
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </Container>
        </main>
    );
}
