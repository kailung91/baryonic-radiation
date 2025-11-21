import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema, demoFormSchema, partnerFormSchema } from "@/lib/validations/contact";
import { z } from "zod";

// Initialize Resend (mock if no key)
const resend = new Resend(process.env.RESEND_API_KEY || "re_123456789");

// Simple in-memory rate limiter (Map<IP, timestamp[]>)
const rateLimit = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const requests = rateLimit.get(ip) || [];

    // Filter out old requests
    const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW);

    if (recentRequests.length >= MAX_REQUESTS) {
        return false;
    }

    recentRequests.push(now);
    rateLimit.set(ip, recentRequests);
    return true;
}

export async function POST(req: Request) {
    try {
        // 1. Rate Limiting
        const ip = req.headers.get("x-forwarded-for") || "unknown";
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        const body = await req.json();
        const { type, data } = body;

        // 2. Validation & Anti-spam
        let validatedData;
        let emailSubject = "";
        let templateName = "";

        // Check honeypot
        if (data.honeypot) {
            // Silent success for bots
            return NextResponse.json({ success: true });
        }

        try {
            switch (type) {
                case "general":
                    validatedData = contactFormSchema.parse(data);
                    emailSubject = `New Contact: ${validatedData.subject}`;
                    templateName = "General Inquiry";
                    break;
                case "demo":
                    validatedData = demoFormSchema.parse(data);
                    emailSubject = `Demo Request: ${validatedData.product}`;
                    templateName = "Demo Request";
                    break;
                case "partner":
                    validatedData = partnerFormSchema.parse(data);
                    emailSubject = `Partner Inquiry: ${validatedData.company}`;
                    templateName = "Partner Inquiry";
                    break;
                default:
                    return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                return NextResponse.json({ error: "Validation failed", details: error.errors }, { status: 400 });
            }
            throw error;
        }

        // 3. Email Sending (Mock or Real)
        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
                from: "IAT Contact <onboarding@resend.dev>",
                to: "admin@iat.com.ua", // Replace with actual admin email
                subject: emailSubject,
                html: `
                    <h1>${templateName}</h1>
                    <p><strong>From:</strong> ${validatedData.name} (${validatedData.email})</p>
                    ${'company' in validatedData ? `<p><strong>Company:</strong> ${validatedData.company} (${validatedData.position})</p>` : ''}
                    ${'product' in validatedData ? `<p><strong>Product:</strong> ${validatedData.product}</p>` : ''}
                    ${'message' in validatedData ? `<p><strong>Message:</strong><br/>${validatedData.message}</p>` : ''}
                `
            });

            // Auto-reply
            await resend.emails.send({
                from: "IAT Team <onboarding@resend.dev>",
                to: validatedData.email,
                subject: "We received your message",
                html: `
                    <h1>Thank you for contacting IAT</h1>
                    <p>Hello ${validatedData.name},</p>
                    <p>We have received your ${templateName.toLowerCase()}. Our team will review it and get back to you shortly.</p>
                    <br/>
                    <p>Best regards,<br/>Institute of Advanced Technologies</p>
                `
            });
        } else {
            console.log("MOCK EMAIL SEND:", {
                to: "admin@iat.com.ua",
                subject: emailSubject,
                data: validatedData
            });
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
