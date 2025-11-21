import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const unbounded = Unbounded({ subsets: ["latin", "cyrillic"], variable: "--font-unbounded" });

export const metadata: Metadata = {
    title: "Institute of Advanced Technologies",
    description: "Cartography and Educational Technologies",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased flex flex-col",
                    inter.variable,
                    unbounded.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="bg-noise" />
                    <Header />
                    <main className="flex-1 pt-16">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
