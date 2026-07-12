"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

interface Hotspot {
  href: string;
  label: string;
  emoji: string;
  /* posición en % relativa a la escena (solo landscape) */
  left: number;
  top: number;
  width: number;
  height: number;
}

const HOTSPOTS: Hotspot[] = [
  { href: "https://viajes.gardariam.com", label: "Viajes", emoji: "🗺️", left: 10.5, top: 74.5, width: 28, height: 15 },
  { href: "https://cocina.gardariam.com", label: "Cocina", emoji: "🍳", left: 58, top: 74.5, width: 22, height: 15 },
];

export default function Home() {
  return (
    <main className="hub-main">
      {/* Relleno difuminado detrás (bordes sin barras negras) */}
      <div className="hub-bg" />
      <div className="hub-tint" />

      {/* Escena principal: vídeo en bucle a pantalla completa (cover) */}
      <div className="hub-scene">
        <video
          className="hub-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/hub-poster.jpg"
          preload="auto"
        >
          <source src="/hub-loop.mp4" type="video/mp4" />
        </video>

        {/* Zonas clicables sobre los carteles (solo escritorio/landscape) */}
        {HOTSPOTS.map((h) => (
          <motion.a
            key={h.label}
            href={h.href}
            aria-label={h.label}
            className="hub-hotspot"
            style={{
              left: `${h.left}%`,
              top: `${h.top}%`,
              width: `${h.width}%`,
              height: `${h.height}%`,
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 34px 6px rgba(240,197,66,0.55)",
              backgroundColor: "rgba(240,197,66,0.12)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: EASE }}
          />
        ))}
      </div>

      {/* Navegación móvil (solo en vertical): botones grandes */}
      <nav className="hub-mobile-nav">
        {HOTSPOTS.map((h) => (
          <a key={h.label} href={h.href} className="hub-mobile-btn">
            <span className="hub-mobile-emoji">{h.emoji}</span>
            <span className="hub-mobile-label">{h.label}</span>
          </a>
        ))}
      </nav>
    </main>
  );
}
