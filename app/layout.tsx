// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vladimir Grinfelds-Ventura",
  description: "Vladimir's portfolio web app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Header />
        <main>{children}</main> {/* This renders the current route's content */}
      </body>
    </html>
  );
}
