"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { products, getAllCategories, getCategoryName } from "@/data/products";
import type { Product } from "@/types/product";

export default function ProductsPage() {
    const t = useTranslations('ProductsPage');
    const locale = useLocale() as 'uk' | 'en';
    const categories = getAllCategories();

    return (
        <main className="flex min-h-screen flex-col py-24">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Products grouped by Category */}
                <div className="space-y-20">
                    {categories.map((category) => {
                        const categoryProducts = products.filter(p => p.category === category);

                        if (categoryProducts.length === 0) return null;

                        return (
                            <section key={category}>
                                {/* Category Header */}
                                <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                                    {getCategoryName(category, locale)}
                                </h2>

                                {/* Products Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categoryProducts.map((product: Product) => (
                                        <GlassCard
                                            key={product.id}
                                            hoverEffect
                                            className="p-6 flex flex-col"
                                        >
                                            {/* Product Title */}
                                            <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                                                {product.title[locale]}
                                            </h3>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {product.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Spacer */}
                                            <div className="flex-1" />

                                            {/* Actions */}
                                            <div className="space-y-2 mt-4">
                                                {/* Primary Button */}
                                                <Button
                                                    variant="default"
                                                    size="sm"
                                                    className="w-full"
                                                    asChild
                                                >
                                                    <a
                                                        href={product.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center justify-center gap-2"
                                                    >
                                                        {product.category === 'digital'
                                                            ? (locale === 'uk' ? 'Відвідати' : 'Visit')
                                                            : (locale === 'uk' ? 'Купити' : 'Buy')
                                                        }
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                </Button>

                                                {/* Secondary Button (for Digital products) */}
                                                {product.secondaryLink && (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="w-full"
                                                        asChild
                                                    >
                                                        <a
                                                            href={product.secondaryLink.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center justify-center gap-2"
                                                        >
                                                            {product.secondaryLink.label[locale]}
                                                            <ExternalLink className="w-4 h-4" />
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </GlassCard>
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>

                {/* Footer CTA */}
                <div className="mt-20 text-center">
                    <div className="max-w-2xl mx-auto space-y-4">
                        <h2 className="text-2xl font-heading font-bold text-foreground">
                            {locale === 'uk' ? 'Не знайшли потрібний товар?' : 'Can\'t find what you need?'}
                        </h2>
                        <p className="text-muted-foreground">
                            {locale === 'uk'
                                ? 'Відвідайте наш повний каталог на ukrmaps.com'
                                : 'Visit our full catalog at ukrmaps.com'
                            }
                        </p>
                        <Button
                            size="lg"
                            variant="default"
                            asChild
                        >
                            <a
                                href="https://ukrmaps.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2"
                            >
                                {t('cta_buy')}
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </Container>
        </main>
    );
}
