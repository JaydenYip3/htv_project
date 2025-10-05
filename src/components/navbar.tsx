"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/map', label: 'Map' },
        { href: '/api', label: 'API' },
    ];

    return (
        <motion.nav
            className="sticky top-0 z-50 bg-card/80 backdrop-blur-md px-8 py-4 border-b border-border shadow-sm"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground group">
                    <motion.div
                        className="text-2xl"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        📍
                    </motion.div>
                    <span className="group-hover:text-primary transition-colors">City Watch</span>
                </Link>

                <div className="flex items-center md:gap-2 sm:gap-1">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <motion.div
                                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                    pathname === item.href
                                        ? 'text-primary'
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.label}
                                {pathname === item.href && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                        layoutId="navbar-indicator"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/submit-report">
                        <motion.div
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-md"
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 72, 56, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Report
                        </motion.div>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}