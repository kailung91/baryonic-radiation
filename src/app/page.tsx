"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Layers, BookOpen, Users } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { FeatureCard } from "@/components/feature-card";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection />

            {/* Features Grid */}
            <section className="container py-24 border-t border-gray-200 dark:border-white/5">
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={Globe}
                        iconColor="text-primary"
                        iconBgColor="bg-primary/10 dark:bg-primary/20"
                        title="Cartography"
                        description="High-precision physical, political, and thematic maps. Trusted by government agencies and educational institutions."
                        linkHref="/products?category=cartography"
                        linkText="View Maps"
                        linkColor="text-primary hover:text-secondary"
                    />
                    <FeatureCard
                        icon={Users}
                        iconColor="text-accent"
                        iconBgColor="bg-accent/10 dark:bg-accent/20"
                        title="About Us"
                        description="Learn about our history, mission, and the team behind Ukraine's leading cartography institute."
                        linkHref="/about"
                        linkText="Read Our Story"
                        linkColor="text-accent hover:text-accent/80"
                    />
                    <FeatureCard
                        icon={BookOpen}
                        iconColor="text-blue-500"
                        iconBgColor="bg-blue-500/10 dark:bg-blue-500/20"
                        title="Education"
                        description="Interactive atlases, digital learning materials, and curriculum support for modern geography."
                        linkHref="/products?category=education"
                        linkText="Educational Resources"
                        linkColor="text-blue-500 hover:text-blue-400"
                    />
                </div>
            </section>

            {/* Stats / Trust Section */}
            <section className="border-y border-white/5 bg-surface/50">
                <div className="container py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-heading font-bold text-foreground mb-2">25+</div>
                            <div className="text-sm text-muted-foreground">Years of Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl font-heading font-bold text-foreground mb-2">10k+</div>
                            <div className="text-sm text-muted-foreground">Maps Published</div>
                        </div>
                        <div>
                            <div className="text-4xl font-heading font-bold text-foreground mb-2">500+</div>
                            <div className="text-sm text-muted-foreground">Enterprise Clients</div>
                        </div>
                        <div>
                            <div className="text-4xl font-heading font-bold text-foreground mb-2">100%</div>
                            <div className="text-sm text-muted-foreground">Ukrainian Made</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
