import { HousePlusIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Brand = () => {
    return (
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
    )
}

export default Brand