"use client";

import { motion } from "framer-motion";
import { Handshake, Building2, Users } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function PartnersPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            <section className="relative py-20 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center mb-16"
                    >
                        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
                            Become a <span className="text-primary">Partner</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Join our network of educational institutions, government agencies, and technology providers.
                            Let&apos;s build the future of cartography together.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                        {/* Benefits */}
                        <div className="space-y-8">
                            <h2 className="font-heading text-2xl font-bold mb-6">Why Partner with IAT?</h2>

                            <div className="flex gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary h-fit">
                                    <Handshake className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg font-semibold mb-2">Strategic Collaboration</h3>
                                    <p className="text-muted-foreground">Access to exclusive datasets, early product releases, and joint R&D opportunities.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-3 rounded-lg bg-accent/10 text-accent h-fit">
                                    <Building2 className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg font-semibold mb-2">Enterprise Solutions</h3>
                                    <p className="text-muted-foreground">Customized mapping solutions tailored to your organization&apos;s specific needs.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 h-fit">
                                    <Users className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg font-semibold mb-2">Educational Network</h3>
                                    <p className="text-muted-foreground">Connect with over 1000 schools and universities across Ukraine.</p>
                                </div>
                            </div>
                        </div>

                        {/* Partner Form */}
                        <div className="bg-surface border border-border rounded-2xl p-8 shadow-lg">
                            <h3 className="font-heading text-xl font-semibold mb-6">Partnership Inquiry</h3>
                            <ContactForm type="partner" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
