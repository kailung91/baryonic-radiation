"use client";

import { useTranslations } from 'next-intl';
import { GlassCard } from "@/components/ui/glass-card";
import { Map, BookOpen, Cpu } from "lucide-react";

export function FeatureGrid() {
    const t = useTranslations('CoreDirections');

    const features = [
        {
            icon: Map,
            titleKey: 'cartography_title',
            descKey: 'cartography_desc',
            iconColor: "text-blue-500",
            iconBg: "bg-blue-500/10"
        },
        {
            icon: BookOpen,
            titleKey: 'education_title',
            descKey: 'education_desc',
            iconColor: "text-accent",
            iconBg: "bg-accent/10"
        },
        {
            icon: Cpu,
            titleKey: 'digital_title',
            descKey: 'digital_desc',
            iconColor: "text-blue-400",
            iconBg: "bg-blue-400/10"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <GlassCard
                        key={index}
                        hoverEffect
                        className="p-10 group transition-all duration-300"
                    >
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                            {t(feature.titleKey)}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                            {t(feature.descKey)}
                        </p>
                    </GlassCard>
                );
            })}
        </div>
    );
}
