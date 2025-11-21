import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, ExternalLink, Share2 } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

interface ProductPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Breadcrumb / Back */}
            <div className="container mx-auto max-w-7xl px-4 md:px-8 mb-8">
                <Link href="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Catalog
                </Link>
            </div>

            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column: Visuals */}
                    <div className="space-y-6">
                        <div className="aspect-square w-full rounded-3xl bg-surface border border-white/5 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-primary/10" />

                            {/* Mock Image */}
                            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                                <span className="font-heading text-8xl font-bold text-white/5 group-hover:text-primary/10 transition-colors duration-700">
                                    IAT
                                </span>
                            </div>

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="glass p-4 rounded-xl backdrop-blur-xl border border-white/10">
                                    <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Preview</p>
                                    <p className="text-sm text-white font-medium">Interactive visualization mode available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                {product.category}
                            </span>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                                {product.title}
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        <div className="space-y-6 mb-10">
                            <h3 className="text-lg font-bold text-foreground">Key Features</h3>
                            <ul className="space-y-3">
                                {product.features?.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                                        <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Check className="h-3 w-3 text-primary" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-6 pt-8 border-t border-white/5">
                            {product.link ? (
                                <Link href={product.link} target="_blank" className="w-full">
                                    <Button size="lg" className="w-full h-14 text-lg bg-primary hover:bg-secondary text-white shadow-[0_0_30px_-10px_rgba(0,87,183,0.5)]">
                                        Visit Store <ExternalLink className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                            ) : (
                                <div className="bg-surface border border-border rounded-xl p-6">
                                    <h3 className="font-heading text-lg font-semibold mb-4">Request a Demo</h3>
                                    <ContactForm type="demo" defaultProduct={product.title} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
