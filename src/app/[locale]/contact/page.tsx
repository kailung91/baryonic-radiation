"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedInput } from "@/components/interactions/input-interactions";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            <section className="relative py-20">
                <div className="container px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center mb-16"
                    >
                        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
                            Contact <span className="text-primary">Us</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Have questions about our products or services? We're here to help.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg font-semibold mb-1">Visit Us</h3>
                                    <p className="text-muted-foreground">
                                        Institute of Advanced Technologies<br />
                                        Kyiv, Ukraine
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg font-semibold mb-1">Email Us</h3>
                                    <p className="text-muted-foreground">info@iat.com.ua</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg font-semibold mb-1">Call Us</h3>
                                    <p className="text-muted-foreground">+380 (44) 123-45-67</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-surface border border-border rounded-2xl p-8 shadow-lg">
                            <ContactForm type="general" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
