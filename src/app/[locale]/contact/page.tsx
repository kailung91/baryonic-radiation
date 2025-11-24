"use client";

import { useTranslations } from 'next-intl';
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    const t = useTranslations('ContactPage');

    return (
        <main className="flex min-h-screen flex-col py-24">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left Column - Contact Info */}
                    <div>
                        <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                            {t('info.address_label')}
                        </h2>

                        <div className="space-y-6">
                            {/* Address */}
                            <GlassCard className="p-6 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-foreground mb-1">
                                        {t('info.address_label')}
                                    </h3>
                                    <p className="text-gray-300">
                                        {t('info.address_value')}
                                    </p>
                                </div>
                            </GlassCard>

                            {/* Email */}
                            <GlassCard className="p-6 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-foreground mb-1">
                                        {t('info.email_label')}
                                    </h3>
                                    <a
                                        href={`mailto:${t('info.email_value')}`}
                                        className="text-gray-300 hover:text-primary transition-colors"
                                    >
                                        {t('info.email_value')}
                                    </a>
                                </div>
                            </GlassCard>

                            {/* Hours */}
                            <GlassCard className="p-6 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-blue-400/10 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-foreground mb-1">
                                        {t('info.hours_label')}
                                    </h3>
                                    <p className="text-gray-300">
                                        {t('info.hours_value')}
                                    </p>
                                </div>
                            </GlassCard>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div>
                        <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                            {t('form.submit')}
                        </h2>

                        <GlassCard className="p-8">
                            <form className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        {t('form.name')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder={t('form.name')}
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        {t('form.email')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder={t('form.email')}
                                    />
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        {t('form.message')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                        placeholder={t('form.message')}
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    variant="default"
                                    size="lg"
                                    className="w-full"
                                >
                                    {t('form.submit')}
                                </Button>
                            </form>
                        </GlassCard>
                    </div>
                </div>
            </Container>
        </main>
    );
}
