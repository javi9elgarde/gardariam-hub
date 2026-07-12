"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const VID_W = 1964;
const VID_H = 1080;

interface Hotspot {
  href: string;
  label: string;
  /* posición en % relativa a la escena */
  left: number;
  top: number;
  width: number;
  height: number;
}

const HOTSPOTS: Hotspot[] = [
  { href: "https://viajes.gardariam.com", label: "Viajes", left: 10.5, top: 74.5, width: 28, height: 15 },
  { href: "https://cocina.gardariam.com", label: "Cocina", left: 58, top: 74.5, width: 22, height: 15 },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-imperial-charcoal">
      {/* Fondo difuminado para rellenar los bordes sin barras negras */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/hub-poster.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(38px) brightness(0.5)",
          transform: "scale(1.15)",
        }}
      />
      <div className="absolute inset-0 bg-imperial-charcoal/35" />

      {/* Escena principal (vídeo en bucle), conserva su proporción y encaja en pantalla */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE }}
        className="relative z-10"
        style={{
          aspectRatio: `${VID_W} / ${VID_H}`,
          width: "min(100vw, calc(100vh * (1964 / 1080)))",
          height: "min(100vh, calc(100vw * (1080 / 1964)))",
          boxShadow: "0 0 120px 20px rgba(0,0,0,0.6)",
        }}
      >
        <video
          className="block h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/hub-poster.jpg"
          preload="auto"
        >
          <source src="/hub-loop.mp4" type="video/mp4" />
        </video>

        {/* Zonas clicables sobre los carteles */}
        {HOTSPOTS.map((h) => (
          <motion.a
            key={h.label}
            href={h.href}
            aria-label={h.label}
            className="absolute rounded-xl"
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
      </motion.div>
    </main>
  );
}
