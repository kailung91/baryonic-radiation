import * as z from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    honeypot: z.string().optional(), // Anti-spam field (should be empty)
});

export const demoFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    product: z.string().min(1, "Please select a product"),
    message: z.string().optional(),
    honeypot: z.string().optional(),
});

export const partnerFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    company: z.string().min(2, "Company name is required"),
    position: z.string().min(2, "Position is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type DemoFormData = z.infer<typeof demoFormSchema>;
export type PartnerFormData = z.infer<typeof partnerFormSchema>;
