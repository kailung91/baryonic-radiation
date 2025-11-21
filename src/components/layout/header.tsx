"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedModeToggle } from "@/components/interactions/theme-interactions";
import { InteractiveButton } from "@/components/interactions/button-interactions";
import { Sheet } from "@/components/ui/sheet";
import { Menu, Map, Globe, BookOpen } from "lucide-react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/products", label: "Products", icon: Globe },
        { href: "/about", label: "About Us", icon: BookOpen },
        { href: "/education", label: "Education", icon: BookOpen },
    ];

    return (
        <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-primary rounded-sm" />
                    <span className="font-heading text-lg font-bold tracking-tight text-foreground">
                        IAT
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-foreground transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-4">
                        <AnimatedModeToggle />
                        <Link href="/contact">
                            <InteractiveButton variant="primary" className="h-9 px-4 text-sm">
                                Contact Us
                            </InteractiveButton>
                        </Link>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation Sheet */}
            <Sheet
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                side="right"
                title="Navigation"
            >
                <div className="flex flex-col gap-6 mt-4">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center gap-3 text-lg font-medium text-foreground p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Icon className="h-5 w-5 text-muted-foreground" />
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="h-px bg-white/10" />

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Theme</span>
                            <AnimatedModeToggle />
                        </div>
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <InteractiveButton variant="primary" className="w-full">
                                Contact Us
                            </InteractiveButton>
                        </Link>
                    </div>
                </div>
            </Sheet>
        </header >
    );
}
