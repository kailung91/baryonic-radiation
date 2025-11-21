"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function CareersPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center max-w-2xl px-4"
            >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-8">
                    <Briefcase className="h-10 w-10" />
                </div>
                <h1 className="font-heading text-4xl font-bold mb-4">Join Our Team</h1>
                <p className="text-xl text-muted-foreground mb-8">
                    We are always looking for talented cartographers and developers.
                    Currently, there are no open positions, but feel free to send your CV to hr@iat.com.ua.
                </p>
            </motion.div>
        </div>
    );
}
