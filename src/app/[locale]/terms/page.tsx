import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | IAT",
    description: "Terms and Conditions for using IAT Digital Platform services.",
};

export default function TermsPage() {
    return (
        <div className="container py-24 max-w-4xl">
            <h1 className="font-heading text-4xl font-bold mb-8 text-gray-900 dark:text-foreground">Terms of Service</h1>
            <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-600 dark:text-muted-foreground mb-6">
                    Last updated: November 20, 2025
                </p>
                <p>
                    Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using
                    the IAT Digital Platform operated by the Institute of Advanced Technologies.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">1. Conditions of Use</h2>
                <p>
                    By accessing this website we assume you accept these terms and conditions.
                    Do not continue to use IAT Digital Platform if you do not agree to take all of the terms
                    and conditions stated on this page.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">2. License</h2>
                <p>
                    Unless otherwise stated, IAT and/or its licensors own the intellectual property rights
                    for all material on IAT Digital Platform. All intellectual property rights are reserved.
                </p>

                <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">3. Disclaimer</h2>
                <p>
                    The materials on IAT&apos;s website are provided on an &apos;as is&apos; basis. IAT makes no warranties,
                    expressed or implied, and hereby disclaims and negates all other warranties including,
                    without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose,
                    or non-infringement of intellectual property or other violation of rights.
                </p>
            </div>
        </div>
    );
}
