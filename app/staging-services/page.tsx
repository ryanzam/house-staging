"use client"

import AnimatedSection from '../components/AnimatedSection'
import { ArrowRight, Camera, PaintBucket, Sofa } from 'lucide-react';
import bathRoom from "../../public/bathroom.jpg";
import kitchen from "../../public/kitchen.jpg";
import galleryLiving from "../../public/gallery-living.jpg";
import Image from 'next/image';
import Link from 'next/link';

const services = [
    {
        icon: Sofa,
        title: "Vacant Home Staging",
        description: "Transform empty spaces into warm, inviting homes with our curated furniture and décor packages.",
        image: galleryLiving,
    },
    {
        icon: PaintBucket,
        title: "Occupied Home Staging",
        description: "Work with your existing furniture and décor to create a polished, buyer-ready presentation.",
        image: kitchen,
    },
    {
        icon: Camera,
        title: "Photo-Ready Staging",
        description: "Optimize every room for stunning listing photos that stop buyers mid-scroll.",
        image: bathRoom,
    },
];

const page = () => {
    return (
        <section className="section-padding">
            <div className="container-wide">
                <AnimatedSection>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">Our Services</p>
                        <h2 className="font-heading text-accent text-3xl md:text-4xl font-bold mb-6">
                            Tailored Staging Solutions
                        </h2>
                    </div>
                </AnimatedSection>

                <div className="space-y-20">
                    {services.map((service, i) => (
                        <AnimatedSection key={i}>
                            <div className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}>
                                <div className="lg:w-1/2">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                                        <service.icon className="w-5 h-5 text-accent" />
                                    </div>
                                    <h3 className="font-heading text-accent text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-accent/80 leading-relaxed mb-6">{service.description}</p>
                                    <Link href="/contact" className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default page