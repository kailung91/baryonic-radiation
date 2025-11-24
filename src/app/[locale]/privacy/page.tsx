import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | IAT",
    description: "Privacy Policy and Data Protection standards of the Institute of Advanced Technologies.",
};

export default function PrivacyPage() {
    return (
        <div className="container py-24 max-w-4xl">
            <h1 className="font-heading text-4xl font-bold mb-8 text-gray-900 dark:text-foreground">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-600 dark:text-muted-foreground mb-6">
                    Last updated: November 20, 2025
                </p>
                <p>
                    The Institute of Advanced Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
                    This Privacy Policy explains how your personal information is collected, used, and disclosed by IAT.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">1. Information We Collect</h2>
                <p>
                    We collect information you provide directly to us, such as when you create an account,
                    subscribe to our newsletter, request customer support, or otherwise communicate with us.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
                <p>
                    We use the information we collect to provide, maintain, and improve our services,
                    to process your transactions, and to send you related information, including confirmations and invoices.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">3. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at privacy@iat.org.ua.
                </p>
            </div>
        </div>
    );
}
