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
  metadataBase: new URL("https://gardariam.com"),
  title: "Gardariam — Nuestro Imperio",
  description: "El punto de partida de todo lo que construimos juntos, Javi y Mariam.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gardariam.com",
    siteName: "Gardariam",
    title: "Gardariam — Nuestro Imperio",
    description: "El punto de partida de todo lo que construimos juntos, Javi y Mariam.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Gardariam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gardariam — Nuestro Imperio",
    description: "El punto de partida de todo lo que construimos juntos, Javi y Mariam.",
    images: ["/og.jpg"],
  },
};

export const viewport = {
  themeColor: "#4e3315",
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
