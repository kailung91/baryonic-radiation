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
        template: '%s | Інститут передових технологій',
        default: 'Інститут передових технологій'
    },
    description: 'Офіційна цифрова платформа Інституту передових технологій. Провідне видавництво України, що спеціалізується на високоточній картографії, навчальних атласах та сучасних цифрових освітніх рішеннях.',
    keywords: [
        'Інститут передових технологій',
        'Institute of Advanced Technologies',
        'IAT',
        'Картографія',
        'Cartography',
        'Атласи',
        'Atlases',
        'НУШ',
        'Освіта',
        'Education',
        'Ukraine',
        'Україна',
        'Maps',
        'OsvitaNet',
        'Глобуси',
        'Контурні карти'
    ],
    authors: [
        { name: 'Інститут передових технологій', url: 'https://iat.kyiv.ua' }
    ],
    openGraph: {
        type: 'website',
        locale: 'uk_UA',
        alternateLocale: 'en_US',
        title: 'Інститут передових технологій',
        description: 'Офіційна цифрова платформа Інституту передових технологій. Провідне видавництво України, що спеціалізується на високоточній картографії, навчальних атласах та сучасних цифрових освітніх рішеннях.',
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
                        <div className="absolute inset-0 z-0 bg-premium-depth" />
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
