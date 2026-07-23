import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Focus Labs | Optometry Ecosystem & Learning Platform",
  description: "Focus Labs builds the ecosystem where optometry thrives. From FocusLinks — our community platform — to Focus Meet, OptoLib, and more. Self-funded, community-driven, free where it matters.",
  keywords: ["Focus Labs", "FocusLinks", "optometry tools", "optometry community", "optometry students", "Focus CaseX", "OptoLib", "Focus Meet"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
