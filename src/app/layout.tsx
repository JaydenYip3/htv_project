import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CITYWATCH",
  description: "Your community reporting platform",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#EBEDE8] p-0` }
      >
        <Navbar/>
        {children}
        <footer className="border-t border-border py-8 mt-12">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-muted-foreground text-sm text-center">© 2025 City Watch. All rights reserved.</p>
        </div>
        </footer>
      </body>
    </html>
  );
}
