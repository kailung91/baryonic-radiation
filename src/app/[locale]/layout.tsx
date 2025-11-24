import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const unbounded = Unbounded({ subsets: ["latin", "cyrillic"], variable: "--font-unbounded" });

export const metadata: Metadata = {
    title: {
        template: '%s | IAT',
        default: 'Institute of Advanced Technologies'
    },
    description: 'High-precision cartography, educational atlases, and digital learning platforms. Leading cartographic publisher in Ukraine.',
    keywords: [
        'Cartography',
        'Ukraine',
        'Education',
        'Atlases',
        'Maps',
        'OsvitaNet',
        'IAT',
        'Institute of Advanced Technologies',
        'НУШ',
        'Глобуси',
        'Контурні карти'
    ],
    authors: [
        { name: 'Institute of Advanced Technologies', url: 'https://iat.kyiv.ua' }
    ],
    openGraph: {
        type: 'website',
        locale: 'uk_UA',
        alternateLocale: 'en_US',
        title: 'Institute of Advanced Technologies',
        description: 'High-precision cartography, educational atlases, and digital learning platforms.',
        siteName: 'IAT Digital Platform'
    }
};

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased flex flex-col",
                    inter.variable,
                    unbounded.variable
                )}
            >
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div className="bg-noise" />
                        <Header />
                        <main className="flex-1">
                            {children}
                        </main>
                        <Footer />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
