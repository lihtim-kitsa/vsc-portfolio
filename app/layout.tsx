import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mithil Astik | Developer Portfolio",
  description: "Mithil Astik is a developer and product designer exploring software engineering, physics, and quantum computing.",
  openGraph: {
    title: "Mithil Astik | Developer Portfolio",
    description: "Developer and product designer exploring software engineering, physics, and quantum computing.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={GeistMono.variable}><head><link rel="preconnect" href="https://api.fontshare.com" /><link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" /><link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap" /></head><body>{children}</body></html>;
}
