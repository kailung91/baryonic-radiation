"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Link } from "@/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function DesignSystemPage() {
    return (
        <div className="py-12">
            <Container>
                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
                        Design System Verification
                    </h1>
                    <p className="text-muted-foreground">
                        &quot;Quiet Tech&quot; UI primitives showcase and testing environment.
                    </p>
                </div>

                {/* Typography Section */}
                <section className="my-12">
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-6 border-b border-white/10 pb-2">
                        Typography
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <h1 className="font-heading text-5xl font-bold text-foreground">
                                Heading 1 - Kyiv Type Sans
                            </h1>
                            <p className="text-sm text-muted-foreground mt-1">font-heading, text-5xl</p>
                        </div>
                        <div>
                            <h2 className="font-heading text-3xl font-bold text-foreground">
                                Heading 2 - Visual Hierarchy
                            </h2>
                            <p className="text-sm text-muted-foreground mt-1">font-heading, text-3xl</p>
                        </div>
                        <div>
                            <h3 className="font-heading text-xl font-bold text-foreground">
                                Heading 3 - Section Title
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">font-heading, text-xl</p>
                        </div>
                        <div>
                            <p className="font-sans text-base text-foreground leading-relaxed">
                                Body text using Inter font. This demonstrates readability and contrast in the &quot;Quiet Tech&quot; design system.
                                The Ukrainian Blue (#0057B7) and Kinetic Gold (#FFD700) accents complement the deep neutral background.
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">font-sans, text-base</p>
                        </div>
                    </div>
                </section>

                {/* Buttons Section */}
                <section className="my-12">
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-6 border-b border-white/10 pb-2">
                        Buttons
                    </h2>

                    {/* Default Variant */}
                    <div className="mb-8">
                        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Default (Primary)</h3>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="default" size="sm">Small</Button>
                            <Button variant="default" size="md">Medium</Button>
                            <Button variant="default" size="lg">Large</Button>
                            <Button variant="default" size="md" disabled>Disabled</Button>
                        </div>
                    </div>

                    {/* Outline Variant */}
                    <div className="mb-8">
                        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Outline</h3>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="outline" size="sm">Small</Button>
                            <Button variant="outline" size="md">Medium</Button>
                            <Button variant="outline" size="lg">Large</Button>
                            <Button variant="outline" size="md" disabled>Disabled</Button>
                        </div>
                    </div>

                    {/* Ghost Variant */}
                    <div className="mb-8">
                        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Ghost</h3>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="ghost" size="sm">Small</Button>
                            <Button variant="ghost" size="md">Medium</Button>
                            <Button variant="ghost" size="lg">Large</Button>
                            <Button variant="ghost" size="md" disabled>Disabled</Button>
                        </div>
                    </div>

                    {/* Glass Variant */}
                    <div className="mb-8">
                        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Glass (Quiet Tech)</h3>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="glass" size="sm">Small</Button>
                            <Button variant="glass" size="md">Medium</Button>
                            <Button variant="glass" size="lg">Large</Button>
                            <Button variant="glass" size="md" disabled>Disabled</Button>
                        </div>
                    </div>
                </section>

                {/* Glass Cards Section */}
                <section className="my-12">
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-6 border-b border-white/10 pb-2">
                        Glass Cards
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1: Simple Content */}
                        <GlassCard className="p-6">
                            <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                                Simple Card
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Basic glass card with backdrop blur and subtle border.
                                No hover interaction.
                            </p>
                        </GlassCard>

                        {/* Card 2: Hover Effect */}
                        <GlassCard hoverEffect className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Sparkles className="w-5 h-5 text-primary" />
                                <h3 className="font-heading text-lg font-bold text-foreground">
                                    Interactive Card
                                </h3>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                Hover to see scale-105 animation and glow effect.
                                Border changes to primary color.
                            </p>
                        </GlassCard>

                        {/* Card 3: Nested Button */}
                        <GlassCard className="p-6">
                            <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                                Nested Interaction
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Glass card containing an interactive button.
                                Tests nested component behavior.
                            </p>
                            <Button variant="outline" size="sm" className="w-full">
                                Action Button
                            </Button>
                        </GlassCard>
                    </div>
                </section>

                {/* Color Palette Section */}
                <section className="my-12">
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-6 border-b border-white/10 pb-2">
                        Color Palette
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <div className="h-24 rounded-lg bg-primary mb-2"></div>
                            <p className="text-sm font-medium text-foreground">Primary</p>
                            <p className="text-xs text-muted-foreground">#0057B7 (Ukrainian Blue)</p>
                        </div>
                        <div>
                            <div className="h-24 rounded-lg bg-accent mb-2"></div>
                            <p className="text-sm font-medium text-foreground">Accent</p>
                            <p className="text-xs text-muted-foreground">#FFD700 (Kinetic Gold)</p>
                        </div>
                        <div>
                            <div className="h-24 rounded-lg bg-background border border-white/10 mb-2"></div>
                            <p className="text-sm font-medium text-foreground">Background</p>
                            <p className="text-xs text-muted-foreground">#0A0A0A (Neutral-950)</p>
                        </div>
                        <div>
                            <div className="h-24 rounded-lg bg-foreground mb-2"></div>
                            <p className="text-sm font-medium text-foreground">Foreground</p>
                            <p className="text-xs text-muted-foreground">#EDEDED (Light gray)</p>
                        </div>
                    </div>
                </section>

                {/* Glassmorphism Utilities */}
                <section className="my-12">
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-6 border-b border-white/10 pb-2">
                        Glassmorphism Utilities
                    </h2>
                    <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                        <div className="absolute inset-0 flex items-center justify-center gap-4">
                            <div className="glass p-6 rounded-lg">
                                <p className="text-white font-medium">.glass utility</p>
                                <p className="text-white/70 text-sm">backdrop-blur-xl</p>
                            </div>
                            <div className="glass-panel p-6 rounded-lg">
                                <p className="text-foreground font-medium">.glass-panel</p>
                                <p className="text-muted-foreground text-sm">Light/Dark adaptive</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
}
