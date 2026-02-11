"use client"

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false);

    const onSubmit = async (data: any) => {
        // Simulate API call
        await new Promise((r) => setTimeout(r, 1000));
        console.log("Form submitted:", data);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    if (submitted) {
        return (
            <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-semibold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input required
                        className="w-full px-4 py-3 bg-background border border-accent rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                        placeholder="Your full name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input required
                        type="tel"
                        className="w-full px-4 py-3 bg-background border border-accent rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                        placeholder="(555) 123-4567"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input required
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-accent rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="your@email.com"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-accent rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                    placeholder="Tell us about your staging needs..."
                />
            </div>
            <button
                type="submit"
                className="btn-accent flex items-center gap-2 disabled:opacity-50"
            >
                <Send className="w-4 h-4" />
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;