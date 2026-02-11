"use client"

import AnimatedSection from './AnimatedSection'
import { DollarSign, Eye, Home } from 'lucide-react'

const Mission = () => {
    return (
        <section className="section-padding bg-warm">
            <div className="container-wide">
                <AnimatedSection>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">Our Mission</p>
                        <h2 className="font-heading text-accent text-3xl md:text-4xl font-bold mb-6">
                            Transforming empty properties into inviting homes
                        </h2>
                        <p className="text-accent/90 text-lg leading-relaxed">
                            We stage homes so buyers can envision their future — turning properties into
                            irresistible spaces that command top-dollar offers.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Home, title: "Feel at Home", text: "Create emotional connections that turn viewers into buyers." },
                        { icon: Eye, title: "Highlight Features", text: "Draw attention to your home's best architectural and design elements." },
                        { icon: DollarSign, title: "Maximize Value", text: "Professionally staged homes consistently sell for 5-23% more." },
                    ].map((item, i) => (
                        <AnimatedSection key={i} delay={i * 0.15}>
                            <div className="bg-background p-8 rounded-lg card-hover text-center">
                                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="font-heading text-primary text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-accent/80 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Mission