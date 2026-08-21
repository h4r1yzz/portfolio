import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import UmamiScript from "@/components/umami-script";
import "@/bones/registry";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Harry Chandra",
  description: "Software engineer building AI, data, and developer products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <UmamiScript />
      </body>
    </html>
  );
}
