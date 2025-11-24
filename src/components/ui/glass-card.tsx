import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    as?: React.ElementType;
}

const GlassCard = React.forwardRef<HTMLElement, GlassCardProps>(
    ({ children, className, hoverEffect = false, as: Component = "div", ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn(
                    // Base glass styling - Adaptive Light/Dark
                    "glass rounded-lg",
                    // Text color
                    "text-gray-900 dark:text-gray-100",
                    // Interactive surface effect if enabled
                    hoverEffect && "transition-all duration-300 hover:scale-[1.02] hover:shadow-md dark:hover:bg-white/10",
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
