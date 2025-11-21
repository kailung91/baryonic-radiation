"use client";

import { motion } from "framer-motion";
import { Users, Award, History, Target } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
                            About <span className="text-primary">IAT</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            The Institute of Advanced Technologies is Ukraine's premier center for cartography,
                            geographic information systems, and educational innovation. Since 1999, we have been
                            mapping the future of our nation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-surface/50 border-y border-border">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
                            <p className="text-muted-foreground mb-6">
                                To provide precise, up-to-date, and accessible geographic information that empowers
                                education, government, and business. We believe that accurate maps are the foundation
                                of informed decision-making and national identity.
                            </p>
                            <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
                            <p className="text-muted-foreground">
                                A digitally literate society where every student, official, and citizen has access
                                to world-class cartographic and educational tools.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-video rounded-2xl overflow-hidden bg-muted"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-heading text-6xl font-bold text-foreground/10">IAT</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Values Grid */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
                        Our Core Values
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={History}
                            iconColor="text-primary"
                            iconBgColor="bg-primary/10"
                            title="Heritage"
                            description="Preserving and modernizing the rich tradition of Ukrainian cartography for future generations."
                            linkHref="#"
                            linkText=""
                            linkColor="text-primary"
                        />
                        <FeatureCard
                            icon={Target}
                            iconColor="text-accent"
                            iconBgColor="bg-accent/10"
                            title="Precision"
                            description="Uncompromising accuracy in every map, dataset, and educational resource we produce."
                            linkHref="#"
                            linkText=""
                            linkColor="text-accent"
                        />
                        <FeatureCard
                            icon={Award}
                            iconColor="text-blue-500"
                            iconBgColor="bg-blue-500/10"
                            title="Innovation"
                            description="Pioneering the use of digital technologies, AR/VR, and interactive platforms in education."
                            linkHref="#"
                            linkText=""
                            linkColor="text-blue-500"
                        />
                    </div>
                </div>
            </section>

            {/* Team Section (Placeholder) */}
            <section className="py-20 bg-surface/50 border-t border-border">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="font-heading text-3xl font-bold mb-8 text-foreground">Our Team</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We are a diverse team of cartographers, geographers, software engineers, and educators
                        united by a passion for maps and learning.
                    </p>
                </div>
            </section>
        </div>
    );
}
