import type { Metadata } from "next";
import { Cinzel, Outfit } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Gardariam — Nuestro Imperio",
  description: "El punto de partida de todo lo que construimos juntos, Javi y Mariam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cinzel.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-imperial-charcoal text-parchment">
        {children}
      </body>
    </html>
  );
}
