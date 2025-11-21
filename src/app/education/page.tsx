"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Laptop } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";

export default function EducationPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            <section className="relative py-20 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
                            Educational <span className="text-primary">Technologies</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Empowering the next generation of geographers with interactive digital tools,
                            atlases, and curriculum-aligned resources.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 bg-surface/50 border-y border-border">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={BookOpen}
                            iconColor="text-primary"
                            iconBgColor="bg-primary/10"
                            title="Digital Atlases"
                            description="Interactive maps for history and geography, fully aligned with the Ministry of Education curriculum."
                            linkHref="/products?category=atlas"
                            linkText="View Atlases"
                            linkColor="text-primary"
                        />
                        <FeatureCard
                            icon={GraduationCap}
                            iconColor="text-accent"
                            iconBgColor="bg-accent/10"
                            title="Teacher Resources"
                            description="Lesson plans, methodological guides, and presentation materials for educators."
                            linkHref="#"
                            linkText="Coming Soon"
                            linkColor="text-accent"
                        />
                        <FeatureCard
                            icon={Laptop}
                            iconColor="text-blue-500"
                            iconBgColor="bg-blue-500/10"
                            title="E-Learning Platform"
                            description="A comprehensive LMS for remote learning with progress tracking and interactive tests."
                            linkHref="#"
                            linkText="Coming Soon"
                            linkColor="text-blue-500"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
