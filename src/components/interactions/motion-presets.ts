/**
 * Motion Presets Library
 * 
 * Reusable animation configurations for consistent motion language across the app.
 * All presets include reduced-motion variants for accessibility.
 */

import { Variants } from "framer-motion";

// Spring configurations for different interaction types
export const springs = {
    // Snappy - for quick feedback (buttons, toggles)
    snappy: {
        type: "spring" as const,
        stiffness: 400,
        damping: 30
    },
    // Bouncy - for playful interactions (modals, tooltips)
    bouncy: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20
    },
    // Smooth - for page transitions
    smooth: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
    }
};

// Easing curves
export const easings = {
    easeOutQuad: [0.25, 0.46, 0.45, 0.94] as const,
    easeOutCubic: [0.33, 1, 0.68, 1] as const,
    easeInOutQuart: [0.76, 0, 0.24, 1] as const
};

// Common animation durations
export const durations = {
    instant: 0.1,
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    slower: 0.8
};

// Preset: Button Press
export const buttonPress: Variants = {
    default: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.95 }
};

// Preset: Card Hover
export const cardHover: Variants = {
    default: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -8 }
};

// Preset: Fade In/Out
export const fade: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

// Preset: Slide Up
export const slideUp: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

// Preset: Slide Down
export const slideDown: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

// Preset: Scale In
export const scaleIn: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
};

// Preset: Stagger Children
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2
        }
    }
};

// Preset: Focus Ring
export const focusRing: Variants = {
    default: { scale: 0.95, opacity: 0 },
    focused: { scale: 1.05, opacity: 1 }
};

// Preset: Shake (for errors)
export const shake = {
    x: [-5, 5, -5, 0],
    transition: { duration: 0.4 }
};

// Preset: Icon Rotation (theme toggle)
export const iconRotate: Variants = {
    initial: { rotate: 0, opacity: 1, scale: 1 },
    animate: { rotate: 180, opacity: 0, scale: 0.8 },
    exit: { rotate: -180, opacity: 0, scale: 0.8 }
};

// Helper: Create reduced-motion variant
export const withReducedMotion = (variants: Variants, shouldReduce: boolean): Variants => {
    if (!shouldReduce) return variants;

    const reducedVariants: Variants = {};
    Object.keys(variants).forEach(key => {
        const variant = variants[key];
        if (typeof variant === 'object' && 'scale' in variant) {
            reducedVariants[key] = { scale: 1, opacity: variant.opacity || 1 };
        } else {
            reducedVariants[key] = variant;
        }
    });
    return reducedVariants;
};
