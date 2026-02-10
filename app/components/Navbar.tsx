"use client"

import { useState } from "react";
import { Menu, X, Phone, HomeIcon, HousePlusIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
    { label: "Home", path: "/" },
    { label: "Staging Services", path: "/staging-services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-secondary/30 backdrop-blur-md">
            <div className="container-wide">
                <div className="flex items-center justify-center h-12">
                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`nav-link text-sm font-medium tracking-wide uppercase ${isActive(item.path) ? "text-foreground after:scale-x-100" : ""
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-lg font-medium tracking-wide ${isActive(item.path) ? "text-accent" : "text-foreground/70"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <a
                                href="tel:7036558712"
                                className="inline-flex items-center gap-2 btn-accent text-xs mt-4"
                            >
                                <Phone className="w-3.5 h-3.5" />
                                (703) 655-8712
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;