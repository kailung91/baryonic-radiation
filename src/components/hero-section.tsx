"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
    const ref = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax effect for background glow
    const glowY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 0]);

    // Text headline as words for stagger animation
    const headline = "Mapping the Future of Ukraine";
    const words = headline.split(" ");

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.08,
                delayChildren: 0.2
            }
        }
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 20,
            filter: shouldReduceMotion ? "blur(0px)" : "blur(10px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: shouldReduceMotion ? 0.3 : 0.6,
                ease: [0.25, 0.1, 0.25, 1] as const
            }
        }
    };

    const badgeVariants = {
        hidden: {
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 0.8,
            y: shouldReduceMotion ? 0 : -10
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const
            }
        }
    };

    const subtitleVariants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: shouldReduceMotion ? 0 : 0.5,
                ease: "easeOut" as const
            }
        }
    };

    const ctaVariants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 30,
            scale: shouldReduceMotion ? 1 : 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: shouldReduceMotion ? 0 : 0.8,
                ease: [0.25, 0.1, 0.25, 1] as const
            }
        }
    };

    return (
        <section
            ref={ref}
            className="relative flex flex-col items-center justify-center min-h-[85vh] overflow-hidden"
        >
            {/* Background Effects - Atmospheric Glow with Parallax */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none"
                style={{
                    y: shouldReduceMotion ? 0 : glowY,
                    opacity: shouldReduceMotion ? 0.2 : glowOpacity
                }}
            />
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    className="relative z-10 max-w-5xl mx-auto space-y-8 flex flex-col items-center text-center"
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge */}
                    <motion.div
                        variants={badgeVariants}
                        className="glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-accent transition-all hover:bg-white/10 cursor-default"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        New: 2025 Educational Atlas of Ukraine Available
                    </motion.div>

                    {/* Animated Headline */}
                    <motion.h1
                        className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-foreground leading-[1.1]"
                        variants={containerVariants}
                    >
                        {words.map((word, wordIndex) => (
                            <motion.span
                                key={wordIndex}
                                variants={wordVariants}
                                className="inline-block mr-3"
                            >
                                {word === "Future" ? (
                                    <span className="text-primary relative inline-block">
                                        {word}
                                        <div className="absolute -bottom-2 left-0 w-full h-8 bg-primary/20 blur-xl -z-10" />
                                    </span>
                                ) : word === "Ukraine" ? (
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 dark:from-white via-gray-700 dark:via-white/90 to-gray-500 dark:to-white/50">
                                        {word}
                                    </span>
                                ) : (
                                    word
                                )}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={subtitleVariants}
                        className="text-xl text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans"
                    >
                        Institute of Advanced Technologies.
                        Precision cartography and educational technologies for a changing world.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={ctaVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
                    >
                        <Link href="/products">
                            <Button
                                size="lg"
                                className="h-14 px-8 text-lg bg-primary hover:bg-secondary text-white shadow-[0_0_30px_-10px_rgba(0,87,183,0.6)] transition-all hover:scale-105 border-none"
                            >
                                Explore Products
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button
                                size="lg"
                                variant="outline"
                                className="glass h-14 px-8 text-lg bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 transition-all hover:scale-105 border-gray-300 dark:border-white/5"
                            >
                                About Us
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Reduced Motion CSS Fallback */}
            <style jsx>{`
                @media (prefers-reduced-motion: reduce) {
                    * {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>
        </section>
    );
}
