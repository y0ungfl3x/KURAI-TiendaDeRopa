import type React from "react";
import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from "@/contexts/cart-context";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "KURAI",
  description:
    "Descubre la mejor colección de ropa para hombre. Franelas, jeans, shorts deportivos, oversize, box fit y más. Estilo masculino redefinido.",
  generator: "v0.app",
  icons: {
    icon: "/ISOTIPO.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geist.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Toaster />
        <CartProvider>{children}</CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
