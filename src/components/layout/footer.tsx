import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-surface py-12 md:py-16">
            <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 bg-accent-primary rounded-sm" />
                        <span className="font-heading text-lg font-bold text-foreground">IAT</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Institute of Advanced Technologies.<br />
                        Cartography and Educational Technologies.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-sm font-semibold text-foreground">Products</h3>
                    <Link href="/products/maps" className="text-sm text-muted-foreground hover:text-foreground">Maps & Atlases</Link>
                    <Link href="/products/education" className="text-sm text-muted-foreground hover:text-foreground">Educational Tools</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-sm font-semibold text-foreground">Company</h3>
                    <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link>
                    <Link href="/innovations" className="text-sm text-muted-foreground hover:text-foreground">Innovations</Link>
                    <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link>
                    <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-sm font-semibold text-foreground">Legal</h3>
                    <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
                    <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
                </div>
            </div>
            <div className="container mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Institute of Advanced Technologies. All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground">
                    Kyiv, Ukraine
                </p>
            </div>
        </footer>
    );
}
