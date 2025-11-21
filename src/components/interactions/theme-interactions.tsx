"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const AnimatedModeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const shouldReduceMotion = useReducedMotion();
    const isDark = theme === "dark";

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Icon rotation animation
    const iconVariants = {
        initial: { rotate: 0, opacity: 1, scale: 1 },
        animate: shouldReduceMotion
            ? { rotate: 0, opacity: 1, scale: 1 }
            : { rotate: 180, opacity: 0, scale: 0.8 },
        exit: shouldReduceMotion
            ? { rotate: 0, opacity: 1, scale: 1 }
            : { rotate: -180, opacity: 0, scale: 0.8 }
    };

    // Background color transition
    const bgVariants = {
        light: { backgroundColor: "rgb(243, 244, 246)" }, // gray-100
        dark: { backgroundColor: "rgb(31, 41, 55)" } // gray-800
    };

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800" />
        );
    }

    return (
        <motion.button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="
                relative w-10 h-10 rounded-lg
                flex items-center justify-center
                hover:bg-gray-200 dark:hover:bg-white/10
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
                dark:focus:ring-offset-neutral-950
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            {/* Background animation */}
            <motion.div
                className="absolute inset-0 rounded-lg -z-10 opacity-0"
                variants={bgVariants}
                initial={isDark ? "dark" : "light"}
                animate={isDark ? "dark" : "light"}
                transition={{ duration: 0.3 }}
            />

            {/* Icon animation with cross-fade */}
            <AnimatePresence mode="wait">
                {isDark ? (
                    <motion.div
                        key="moon"
                        variants={iconVariants}
                        initial="initial"
                        animate="initial"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                    >
                        <Moon className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        variants={iconVariants}
                        initial="initial"
                        animate="initial"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                    >
                        <Sun className="w-5 h-5 text-yellow-500" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
};

export default AnimatedModeToggle;
