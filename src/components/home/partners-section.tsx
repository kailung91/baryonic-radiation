"use client";

import { useTranslations } from 'next-intl';
import { GlassCard } from "@/components/ui/glass-card";
import { Building2, GraduationCap, Globe } from "lucide-react";

export function PartnersSection() {
    const t = useTranslations('TrustedBy');

    const partners = [
        { name: "Міністерство освіти", icon: Building2 },
        { name: "BookForum", icon: GraduationCap },
        { name: "OsvitaNet", icon: Globe }
    ];

    return (
        <section className="py-16 bg-white/[0.01]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-12">
                    {t('title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {partners.map((partner, index) => {
                        const Icon = partner.icon;
                        return (
                            <GlassCard
                                key={index}
                                className="p-8 flex flex-col items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
                            >
                                <Icon className="w-12 h-12 text-muted-foreground mb-4" />
                                <p className="text-sm font-medium text-foreground text-center">
                                    {partner.name}
                                </p>
                            </GlassCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
