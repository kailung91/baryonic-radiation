"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

interface SheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    side?: "left" | "right" | "bottom";
    title?: string;
    className?: string;
}

export function Sheet({ isOpen, onClose, children, side = "right", title, className }: SheetProps) {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent scrolling when open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted) return null;

    const content = (
        <div className={cn("fixed inset-0 z-50", !isOpen && "pointer-events-none")}>
            {/* Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
                    isOpen ? "opacity-100" : "opacity-0"
                )}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Panel */}
            <div
                className={cn(
                    "fixed bg-surface border-white/10 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col",
                    side === "right" && "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm border-l",
                    side === "left" && "inset-y-0 left-0 h-full w-3/4 sm:max-w-sm border-r",
                    side === "bottom" && "inset-x-0 bottom-0 h-auto max-h-[85vh] border-t rounded-t-xl",
                    isOpen
                        ? "translate-x-0 translate-y-0"
                        : side === "bottom" ? "translate-y-full" : side === "left" ? "-translate-x-full" : "translate-x-full",
                    className
                )}
                role="dialog"
                aria-modal="true"
            >
                <div className="flex items-center justify-between p-4 border-b border-white/5">
                    {title && <h2 className="font-heading text-lg font-semibold">{title}</h2>}
                    <button
                        onClick={onClose}
                        className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ml-auto"
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                    {children}
                </div>
            </div>
        </div>
    );

    return createPortal(content, document.body);
}
