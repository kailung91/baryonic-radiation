"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedInput } from "@/components/interactions/input-interactions";
import {
    contactFormSchema,
    demoFormSchema,
    partnerFormSchema,
    ContactFormData,
    DemoFormData,
    PartnerFormData
} from "@/lib/validations/contact";

type FormType = "general" | "demo" | "partner";

interface ContactFormProps {
    type?: FormType;
    defaultProduct?: string;
    className?: string;
}

export function ContactForm({ type = "general", defaultProduct, className }: ContactFormProps) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const schema = type === "general" ? contactFormSchema
        : type === "demo" ? demoFormSchema
            : partnerFormSchema;

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            product: defaultProduct || "",
        }
    });

    const onSubmit = async (data: any) => {
        setStatus("submitting");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ type, data }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Something went wrong");
            }

            setStatus("success");
            reset();
        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message);
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-surface border border-border rounded-2xl p-8 text-center"
            >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-4">
                    <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We&apos;ll get back to you shortly.
                </p>
                <Button onClick={() => setStatus("idle")} variant="outline">
                    Send Another Message
                </Button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
            {/* Honeypot Field (Hidden) */}
            <input type="text" {...register("honeypot")} className="hidden" aria-hidden="true" />

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <div className="relative">
                        <input
                            id="name"
                            {...register("name")}
                            className={`w-full h-12 px-4 rounded-xl bg-background border ${errors.name ? 'border-red-500' : 'border-input'} focus:ring-2 focus:ring-primary/50 transition-all`}
                            placeholder="John Doe"
                            aria-invalid={!!errors.name}
                        />
                        {errors.name && (
                            <span className="text-xs text-red-500 absolute -bottom-5 left-0">
                                {errors.name.message as string}
                            </span>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <div className="relative">
                        <input
                            id="email"
                            type="email"
                            {...register("email")}
                            className={`w-full h-12 px-4 rounded-xl bg-background border ${errors.email ? 'border-red-500' : 'border-input'} focus:ring-2 focus:ring-primary/50 transition-all`}
                            placeholder="john@example.com"
                            aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                            <span className="text-xs text-red-500 absolute -bottom-5 left-0">
                                {errors.email.message as string}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {type === "partner" && (
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">Company</label>
                        <input
                            id="company"
                            {...register("company")}
                            className={`w-full h-12 px-4 rounded-xl bg-background border ${(errors as any).company ? 'border-red-500' : 'border-input'} focus:ring-2 focus:ring-primary/50 transition-all`}
                            placeholder="Company Ltd."
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="position" className="text-sm font-medium">Position</label>
                        <input
                            id="position"
                            {...register("position")}
                            className={`w-full h-12 px-4 rounded-xl bg-background border ${(errors as any).position ? 'border-red-500' : 'border-input'} focus:ring-2 focus:ring-primary/50 transition-all`}
                            placeholder="CEO"
                        />
                    </div>
                </div>
            )}

            {type === "demo" && (
                <div className="space-y-2">
                    <label htmlFor="product" className="text-sm font-medium">Product</label>
                    <select
                        id="product"
                        {...register("product")}
                        className="w-full h-12 px-4 rounded-xl bg-background border border-input focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                        <option value="">Select a product...</option>
                        <option value="Interactive Atlas">Interactive Atlas of Ukraine</option>
                        <option value="Kyiv Urban Layer">Kyiv Urban Planning Layer</option>
                        <option value="IAT Mobile">IAT Map Viewer Mobile</option>
                    </select>
                    {(errors as any).product && (
                        <span className="text-xs text-red-500">{(errors as any).product.message as string}</span>
                    )}
                </div>
            )}

            {type === "general" && (
                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <input
                        id="subject"
                        {...register("subject")}
                        className={`w-full h-12 px-4 rounded-xl bg-background border ${(errors as any).subject ? 'border-red-500' : 'border-input'} focus:ring-2 focus:ring-primary/50 transition-all`}
                        placeholder="How can we help?"
                    />
                    {(errors as any).subject && (
                        <span className="text-xs text-red-500">{(errors as any).subject.message as string}</span>
                    )}
                </div>
            )}

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                    id="message"
                    {...register("message")}
                    className={`w-full min-h-[120px] px-4 py-3 rounded-xl bg-background border ${errors.message ? 'border-red-500' : 'border-input'} focus:ring-2 focus:ring-primary/50 transition-all resize-none`}
                    placeholder={type === "demo" ? "Tell us about your use case..." : "Your message..."}
                />
                {errors.message && (
                    <span className="text-xs text-red-500">{errors.message.message as string}</span>
                )}
            </div>

            {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <span className="text-sm">{errorMessage}</span>
                </div>
            )}

            <Button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white h-12 text-lg"
                disabled={status === "submitting"}
            >
                {status === "submitting" ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    "Send Message"
                )}
            </Button>
        </form>
    );
}
