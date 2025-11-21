"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
    id: string;
    slug: string;
    title: string;
    description: string;
    price: string;
    category: string;
    isNew?: boolean;
    demoUrl?: string;
}

export function ProductCard({
    id,
    slug,
    title,
    description,
    price,
    category,
    isNew,
    demoUrl
}: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    // Card hover animation
    const cardVariants = {
        default: {
            scale: 1,
            y: 0
        },
        hover: shouldReduceMotion
            ? { scale: 1, y: 0 }
            : {
                scale: 1.02,
                y: -4
            }
    };

    // Image overlay darkening on hover
    const overlayVariants = {
        default: { opacity: 0.6 },
        hover: { opacity: 0.8 }
    };

    // Badge animation
    const badgeVariants = {
        default: { scale: 1, rotate: 0 },
        hover: shouldReduceMotion
            ? { scale: 1, rotate: 0 }
            : { scale: 1.05, rotate: 2 }
    };

    return (
        <motion.div
            className="
                group relative flex flex-col rounded-2xl overflow-hidden
                bg-white dark:bg-surface
                border border-gray-200 dark:border-white/5
                hover:border-primary/30
                focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2
           "
            variants={cardVariants}
            initial="default"
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{
                duration: shouldReduceMotion ? 0.1 : 0.3,
                ease: [0.25, 0.46, 0.45, 0.94] as const
            }}
        >
            {/* Image Placeholder */}
            <div
                className="aspect-[4/3] w-full bg-gray-200 dark:bg-surface-highlight relative overflow-hidden"
                role="img"
                aria-label={`Product image for ${title}`}
            >
                {/* Gradient Overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/60 dark:from-black/80 via-gray-900/10 dark:via-black/20 to-transparent z-10"
                    variants={overlayVariants}
                    initial="default"
                    animate={isHovered ? "hover" : "default"}
                    transition={{ duration: 0.3 }}
                />

                {/* Mock Image Content (IAT watermark) */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-neutral-900">
                    <span className="font-heading text-6xl font-bold text-gray-400/30 dark:text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                        IAT
                    </span>
                </div>

                {/* NEW Badge */}
                {isNew && (
                    <motion.div
                        className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold shadow-lg border border-primary/20"
                        variants={badgeVariants}
                        initial="default"
                        animate={isHovered ? "hover" : "default"}
                        transition={{ duration: 0.3 }}
                    >
                        NEW
                    </motion.div>
                )}

                {/* Category Label */}
                <div className="absolute bottom-4 left-4 z-20">
                    <span className="inline-block px-2 py-1 rounded bg-gray-900/70 dark:bg-black/50 backdrop-blur-md border border-gray-700/50 dark:border-white/10 text-[10px] font-medium text-white uppercase tracking-wider mb-2">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-foreground leading-tight group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                </div>

                <p className="text-sm text-gray-600 dark:text-muted-foreground line-clamp-2 mb-6 flex-1">
                    {description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-white/5">
                    <span className="text-sm font-medium text-gray-900 dark:text-foreground">
                        {price}
                    </span>

                    <div className="flex gap-2">
                        {demoUrl && (
                            <Link href={demoUrl}>
                                <Button size="sm" variant="ghost" className="h-8 text-xs">
                                    Demo
                                </Button>
                            </Link>
                        )}
                        <Link href={`/products/${slug}`}>
                            <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.95 }}>
                                <Button size="sm" className="h-8 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-primary hover:text-white border border-gray-300 dark:border-white/10 transition-all">
                                    Details <ArrowRight className="ml-1.5 h-3 w-3" />
                                </Button>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
