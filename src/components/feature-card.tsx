"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { useState } from "react";

interface FeatureCardProps {
    icon: LucideIcon;
    iconColor: string;
    iconBgColor: string;
    title: string;
    description: string;
    linkHref: string;
    linkText: string;
    linkColor: string;
}

export function FeatureCard({
    icon: Icon,
    iconColor,
    iconBgColor,
    title,
    description,
    linkHref,
    linkText,
    linkColor
}: FeatureCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    // Card hover animation
    const cardVariants = {
        default: {
            scale: 1,
            y: 0,
            boxShadow: '0 0 0 rgba(0, 0, 0, 0)'
        },
        hover: shouldReduceMotion
            ? { scale: 1, y: 0, boxShadow: '0 0 0 rgba(0, 0, 0, 0)' }
            : {
                scale: 1.02,
                y: -8,
                boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)'
            }
    };

    // Icon animation
    const iconVariants = {
        default: { rotate: 0, scale: 1 },
        hover: shouldReduceMotion
            ? { rotate: 0, scale: 1 }
            : { rotate: 5, scale: 1.1 }
    };

    // Description fade animation
    const descriptionVariants = {
        default: { opacity: 0.6 },
        hover: { opacity: 1 }
    };

    return (
        <motion.div
            className="
                rounded-2xl p-8
                bg-white dark:bg-surface
                border border-gray-200 dark:border-white/5
                hover:border-primary/30 dark:hover:border-primary/30
                transition-colors duration-300
                cursor-pointer
                focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2
            "
            variants={cardVariants}
            initial="default"
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            transition={{
                duration: shouldReduceMotion ? 0.1 : 0.3,
                ease: [0.25, 0.46, 0.45, 0.94] as const // ease-out-quad
            }}
            tabIndex={0}
        >
            {/* Icon Container */}
            <motion.div
                className={`
                    mb-6 h-12 w-12 rounded-lg
                    ${iconBgColor}
                    flex items-center justify-center
                `}
                variants={iconVariants}
                initial="default"
                animate={isHovered ? "hover" : "default"}
                transition={{
                    duration: shouldReduceMotion ? 0.1 : 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94] as const
                }}
            >
                <Icon className={`h-6 w-6 ${iconColor}`} />
            </motion.div>

            {/* Title */}
            <h3 className="
                font-heading text-xl font-bold mb-3
                text-gray-900 dark:text-foreground
            ">
                {title}
            </h3>

            {/* Description */}
            <motion.p
                className="
                    text-sm leading-relaxed mb-6
                    text-gray-600 dark:text-muted-foreground
                "
                variants={descriptionVariants}
                initial="default"
                animate={isHovered ? "hover" : "default"}
                transition={{
                    duration: shouldReduceMotion ? 0.1 : 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94] as const
                }}
            >
                {description}
            </motion.p>

            {/* CTA Link */}
            <Link
                href={linkHref}
                className={`
                    inline-flex items-center text-sm font-medium
                    ${linkColor}
                    transition-colors
                `}
            >
                <motion.span
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center"
                >
                    {linkText} <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
            </Link>
        </motion.div>
    );
}
