"use client"

import { useState } from "react";
import { Phone, HousePlusIcon, Send } from "lucide-react";
import Link from "next/link";

const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="top-0 left-0 right-0 z-50 bg-background/95">
            <div className="container mx-auto">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <HousePlusIcon color="#a97a57" />
                        <span className="font-heading text-sm text-accent font-medium tracking-widest uppercase">
                            RealState <span className="text-primary">PRO</span>
                        </span>
                    </Link>

                    <div className="flex gap-3">
                        <a
                            href="tel:7036558712"
                            className="flex items-center gap-2 btn-primary text-xs"
                        >
                            <Phone className="w-3.5 h-3.5" />
                            Call Us
                        </a>
                        <a
                            href="tel:7036558712"
                            className="flex items-center gap-2 btn-outline text-xs"
                        >
                            <Send className="w-3.5 h-3.5" />
                            Email Us
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;