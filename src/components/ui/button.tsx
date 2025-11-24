import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                // Default: Ukrainian Blue (#0057B7) background, white text
                default: "bg-primary text-white hover:opacity-90",
                // Outline: Border primary, text primary
                outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/10",
                // Ghost: Transparent, hover with primary tint
                ghost: "bg-transparent text-foreground hover:bg-primary/10 hover:text-primary",
                // Glass: Backdrop blur with high contrast (Quiet Tech)
                glass: "glass border border-white/20 text-white hover:bg-white/10 hover:border-primary/40",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                sm: "h-9 px-3 text-sm rounded-md",
                md: "h-10 px-4 py-2 rounded-md",
                lg: "h-11 px-8 text-base rounded-md",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
