import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import MegaFooter from "@/components/layout/MegaFooter";
import FloatingCountdown
from "@/components/home/floating-countdown/FloatingCountdown";

export const metadata: Metadata = {
  title: "Global AI Expo",
  description:
    "Global AI Expo Ecosystem Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>

        {/* GLOBAL NAVBAR */}
        <Navbar />

        {/* PAGE */}
        {children}

        {/* GLOBAL FLOATING COUNTDOWN */}
        <FloatingCountdown />

        {/* GLOBAL FOOTER */}
        <MegaFooter />

      </body>

    </html>
  );
}