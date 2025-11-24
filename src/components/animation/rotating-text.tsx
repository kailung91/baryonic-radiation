"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export function RotatingText() {
    const t = useTranslations('Hero');
    // Get the array of targets from translations
    // Note: next-intl returns arrays as objects with numeric keys if not handled carefully,
    // but useTranslations().raw('key') can return the raw array.
    // However, standard useTranslations usage for arrays usually involves iterating keys.
    // Let's assume standard array access works if configured, or we map keys.
    // Safer approach with next-intl for arrays:
    const keys = ['0', '1', '2'] as const;
    const words = keys.map(key => t(`animated_targets.${key}`));

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <span className="inline-grid grid-cols-1 grid-rows-1 text-left align-top">
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="col-start-1 row-start-1 text-primary dark:text-accent"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
            {/* Invisible placeholder to maintain width/height if needed, 
          but for this design we want the container to adapt or be fixed. 
          The user requested "inline-block overflow-hidden h-[1.2em]" in the parent.
      */}
        </span>
    );
}
