"use client"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, HousePlusIcon } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
    return (
        <footer className="bg-primary/20 text-primary-foreground">
            <AnimatedSection>
                <div className="container-wide section-padding !py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand */}
                        <div>
                            <Link href="/" className="flex items-center md:gap-2">
                                <HousePlusIcon color="#a97a57" size={40} />
                                <div className="flex flex-col">
                                    <span className="md:font-heading text-[12px] md:text-sm text-accent font-medium tracking-widest uppercase">
                                        Real Estate
                                    </span>
                                    <span className="text-[10px] md:text-[12px] text-accent font-medium tracking-widest uppercase">
                                        Staging <span className="text-primary">PRO</span>
                                    </span>
                                </div>
                            </Link>
                            <p className="text-accent text-sm leading-relaxed">
                                Transforming empty properties into inviting homes.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-heading text-accent text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-3">
                                {["Home", "Gallery", "Blog", "Contact"].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                            className="text-accent hover:text-secondary transition-colors text-sm"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-heading text-accent text-lg font-semibold mb-4">Contact</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-accent">
                                    <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                                    737-332-0662
                                </li>
                                <li className="flex items-center gap-3 text-sm text-accent">
                                    <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                                    realstatestagingpro@gmail.com
                                </li>
                                <li className="flex items-start gap-3 text-sm text-accent">
                                    <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                    Northern Virginia Area
                                </li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="font-heading text-accent text-lg font-semibold mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="w-10 h-10 rounded-full border border-accent flex items-center justify-center hover:bg-accent/70 hover:border-accent/80 transition-all duration-300"
                                        aria-label="Social link"
                                    >
                                        <Icon className="w-4 h-4" color="#55473a" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-accent">
                        © {new Date().getFullYear()} Showcase Home Staging. All rights reserved.
                    </div>
                </div>
            </AnimatedSection>
        </footer>
    );
};

export default Footer;