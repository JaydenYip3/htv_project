"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/map', label: 'Map' },
        { href: '/api', label: 'API' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md px-8 py-4 border-b border-border shadow-sm animate-slide-down">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors">
                    <span className="text-2xl">📍</span>
                    <span>City Watch</span>
                </Link>

                <div className="flex items-center md:gap-2 sm:gap-1">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <div
                                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                    pathname === item.href
                                        ? 'text-primary'
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                {item.label}
                                {pathname === item.href && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                                )}
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/submit-report">
                        <div className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-md">
                            Report
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}