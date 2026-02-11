"use client"
import { ArrowRight, Star } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";

const testimonials = [
    {
        quote: "Showcase transformed our vacant property into a stunning home that sold in just 5 days — $30,000 over asking!",
        author: "Jennifer & Mark T.",
        role: "Home Sellers, Arlington VA",
    },
    {
        quote: "The attention to detail was extraordinary. Every room told a story that buyers couldn't resist.",
        author: "David Chen",
        role: "Real Estate Agent",
    },
    {
        quote: "We were skeptical about staging costs, but the ROI was incredible. Best investment we made in selling our home.",
        author: "Patricia Williams",
        role: "Home Seller, Fairfax VA",
    },
];

const page = () => {
    return (
        <section className="section-padding text-accent">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection>
                        <div>
                            <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4">Testimonies of our Clients</p>
                            <Link href="/contact" className="btn-accent inline-flex items-center gap-2 mt-8">
                                Schedule a Consultation <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="space-y-6">
                            {testimonials.map((t, i) => (
                                <div key={i} className="bg-accent/20 border border-primary-foreground/10 rounded-lg p-6">
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                                        ))}
                                    </div>
                                    <p className="text-primary text-sm italic mb-4">"{t.quote}"</p>
                                    <div>
                                        <p className="font-semibold text-sm">{t.author}</p>
                                        <p className="text-secondary text-xs">{t.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}

export default page