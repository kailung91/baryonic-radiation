"use client";

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const duration = 2000; // 2 seconds

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end]);

    return (
        <div ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-accent">
            {count.toLocaleString()}{suffix}
        </div>
    );
}

export function StatsSection() {
    const t = useTranslations('Stats');

    const stats = [
        { value: 25, suffix: "+", label: t('years') },
        { value: 15000, suffix: "+", label: t('schools') },
        { value: 5000000, suffix: "+", label: t('products') }
    ];

    return (
        <section className="py-20 border-y border-white/5 bg-white/[0.02]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                            <div className="text-sm uppercase tracking-wider text-muted-foreground mt-3">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
