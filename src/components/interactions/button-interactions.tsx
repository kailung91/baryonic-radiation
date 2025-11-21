"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
    disabled?: boolean;
    className?: string;
}

export const InteractiveButton = ({
    children,
    variant = "primary",
    onClick,
    disabled,
    className,
    ...props
}: InteractiveButtonProps) => {
    const shouldReduceMotion = useReducedMotion();

    // Variants for press feedback
    const buttonVariants = {
        default: { scale: 1, opacity: 1 },
        hover: shouldReduceMotion ? {} : { scale: 1.02 },
        tap: shouldReduceMotion ? {} : { scale: 0.95 }
    };

    // Ripple effect (optional, for premium feel)
    const rippleVariants = {
        initial: { scale: 0, opacity: 1 },
        animate: {
            scale: 4,
            opacity: 0,
            transition: { duration: 0.6 }
        }
    };

    const variantStyles = {
        primary: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-foreground hover:bg-gray-200 dark:hover:bg-white/10",
        ghost: "text-gray-900 dark:text-foreground hover:bg-gray-100 dark:hover:bg-white/5",
        outline: "border-2 border-gray-300 dark:border-white/10 text-gray-900 dark:text-foreground hover:border-primary dark:hover:border-primary"
    };

    return (
        <motion.button
            variants={buttonVariants}
            initial="default"
            whileHover="hover"
            whileTap="tap"
            transition={{
                scale: { duration: 0.2, type: "spring", stiffness: 400 },
                opacity: { duration: 0.2 }
            }}
            disabled={disabled}
            onClick={onClick}
            className={`
                relative px-5 py-2.5 rounded-lg
                font-medium text-sm
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
                dark:focus:ring-offset-neutral-950
                disabled:opacity-50 disabled:cursor-not-allowed
                ${variantStyles[variant]}
                ${className || ""}
            `}
            {...props}
        >
            {children}

            {/* Optional Ripple Effect (premium feel) */}
            {!shouldReduceMotion && (
                <motion.span
                    className="
                        absolute inset-0 rounded-lg
                        bg-white/20 pointer-events-none
                    "
                    initial="initial"
                    whileTap="animate"
                    variants={rippleVariants}
                />
            )}
        </motion.button>
    );
};

export default InteractiveButton;
