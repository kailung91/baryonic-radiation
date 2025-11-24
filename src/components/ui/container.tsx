import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    // Standard container with max-width and responsive padding
                    "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Container.displayName = "Container";

export { Container };
