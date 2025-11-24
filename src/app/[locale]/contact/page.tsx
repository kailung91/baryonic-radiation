"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Clock, CheckCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
    const t = useTranslations('ContactPage');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult(null);

        const formData = new FormData(e.currentTarget);
        // IMPORTANT: Replace this with your actual Web3Forms Access Key
        // Get your key at https://web3forms.com/
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Success");
            } else {
                setResult("Error");
                console.error("Web3Forms Error:", data);
            }
        } catch (error) {
            setResult("Error");
            console.error("Submission Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

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
                                    <p className="text-muted-foreground">
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
                                        className="text-muted-foreground hover:text-primary transition-colors"
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
                                    <p className="text-muted-foreground">
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

                        <GlassCard className="p-8 min-h-[400px] flex flex-col justify-center">
                            {result === "Success" ? (
                                <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-foreground">
                                        Дякуємо!
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Ваше повідомлення успішно надіслано. Ми зв&apos;яжемося з вами найближчим часом.
                                    </p>
                                    <Button
                                        variant="outline"
                                        onClick={() => setResult(null)}
                                        className="mt-4"
                                    >
                                        Надіслати ще одне
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Hidden Web3Forms Settings */}
                                    <input type="hidden" name="subject" value="New Submission from IAT Website" />
                                    <input type="hidden" name="from_name" value="IAT Website" />

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
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-background/50 border border-black/10 dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-background/50 border border-black/10 dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg bg-background/50 border border-black/10 dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                            placeholder={t('form.message')}
                                        />
                                    </div>

                                    {/* Error Message */}
                                    {result === "Error" && (
                                        <div className="text-red-500 text-sm text-center bg-red-500/10 p-3 rounded-lg">
                                            Виникла помилка. Будь ласка, спробуйте пізніше.
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        variant="default"
                                        size="lg"
                                        className="w-full"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            t('form.submit')
                                        )}
                                    </Button>
                                </form>
                            )}
                        </GlassCard>
                    </div>
                </div>
            </Container>
        </main>
    );
}
