"use client";

import { motion, useReducedMotion } from "framer-motion";
import { forwardRef, useState, useId } from "react";

interface AnimatedInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    label?: string;
    error?: string;
    success?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AnimatedInput = forwardRef<HTMLInputElement, AnimatedInputProps>(
    ({ label, placeholder, error, success, type = "text", value, onChange, className, ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false);
        const shouldReduceMotion = useReducedMotion();
        const id = useId();

        // Focus ring animation
        const focusRingVariants = {
            default: shouldReduceMotion
                ? { scale: 1, opacity: 0 }
                : { scale: 0.95, opacity: 0 },
            focused: shouldReduceMotion
                ? { scale: 1, opacity: 0.3 }
                : { scale: 1.05, opacity: 1 }
        };

        // Label float animation
        const labelVariants = {
            default: { y: 0, scale: 1, opacity: 1 },
            focused: {
                y: -24,
                scale: 0.85,
                opacity: 0.8
            }
        };

        // Error shake animation
        const errorVariants = {
            default: { x: 0 },
            shake: shouldReduceMotion
                ? { x: 0 }
                : {
                    x: [-5, 5, -5, 0],
                    transition: { duration: 0.4 }
                }
        };

        // Success checkmark animation
        const checkmarkVariants = {
            initial: { scale: 0, opacity: 0 },
            animate: {
                scale: 1,
                opacity: 1,
                transition: { duration: 0.4, type: "spring" }
            }
        };

        return (
            <motion.div
                className="relative mb-4"
                variants={errorVariants}
                animate={error ? "shake" : "default"}
            >
                {/* Label */}
                {label && (
                    <motion.label
                        htmlFor={id}
                        className="
                            absolute left-4 top-3.5
                            text-sm font-medium
                            text-gray-600 dark:text-muted-foreground
                            pointer-events-none
                            origin-top-left
                            z-10
                        "
                        variants={labelVariants}
                        initial="default"
                        animate={isFocused || value ? "focused" : "default"}
                        transition={{ duration: 0.2 }}
                    >
                        {label}
                    </motion.label>
                )}

                {/* Focus Ring */}
                <motion.div
                    className="
                        absolute inset-0 rounded-lg
                        border-2 border-primary
                        pointer-events-none
                    "
                    variants={focusRingVariants}
                    initial="default"
                    animate={isFocused ? "focused" : "default"}
                    transition={{ duration: 0.2 }}
                />

                {/* Input */}
                <input
                    ref={ref}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`
                        w-full h-12 px-4 rounded-lg
                        bg-gray-100 dark:bg-surface
                        border-2 transition-colors duration-200
                        ${error
                            ? "border-red-500 focus:border-red-600"
                            : success
                                ? "border-green-500 focus:border-green-600"
                                : "border-gray-300 dark:border-white/10 focus:border-primary"
                        }
                        text-gray-900 dark:text-foreground
                        placeholder:text-gray-500 dark:placeholder:text-muted-foreground
                        focus:outline-none
                        ${className || ""}
                    `}
                    {...props}
                />

                {/* Success Checkmark */}
                {success && !error && (
                    <motion.div
                        className="
                            absolute right-4 top-1/2 -translate-y-1/2
                            text-green-500 text-xl
                        "
                        variants={checkmarkVariants}
                        initial="initial"
                        animate="animate"
                    >
                        ✓
                    </motion.div>
                )}

                {/* Error Message */}
                {error && (
                    <motion.p
                        className="
                            mt-2 text-sm font-medium
                            text-red-600 dark:text-red-400
                        "
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {error}
                    </motion.p>
                )}
            </motion.div>
        );
    }
);

AnimatedInput.displayName = "AnimatedInput";

export default AnimatedInput;
