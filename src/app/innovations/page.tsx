"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function InnovationsPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center max-w-2xl px-4"
            >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-8">
                    <Lightbulb className="h-10 w-10" />
                </div>
                <h1 className="font-heading text-4xl font-bold mb-4">Innovations</h1>
                <p className="text-xl text-muted-foreground mb-8">
                    We are currently working on showcasing our latest R&D projects.
                    Check back soon for updates on our AR/VR mapping technologies.
                </p>
            </motion.div>
        </div>
    );
}
