"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

interface PortalProps {
  emoji: string;
  title: string;
  href?: string;
  comingSoon?: boolean;
}

function Portal({ emoji, title, href, comingSoon }: PortalProps) {
  const disabled = comingSoon || !href;

  return (
    <div className="relative z-10 flex flex-col items-center">
      <motion.div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: "clamp(110px, 16vw, 150px)",
          height: "clamp(110px, 16vw, 150px)",
          background:
            "radial-gradient(circle at 35% 30%, rgba(200,144,40,0.16), rgba(7,11,23,0.95))",
          border: "2px solid rgba(200,144,40,0.45)",
        }}
        animate={
          disabled
            ? {}
            : {
                boxShadow: [
                  "0 0 0 5px rgba(7,11,23,0.9), 0 0 22px rgba(200,144,40,0.18), inset 0 0 24px rgba(0,0,0,0.6)",
                  "0 0 0 5px rgba(7,11,23,0.9), 0 0 38px rgba(200,144,40,0.4), inset 0 0 24px rgba(0,0,0,0.6)",
                  "0 0 0 5px rgba(7,11,23,0.9), 0 0 22px rgba(200,144,40,0.18), inset 0 0 24px rgba(0,0,0,0.6)",
                ],
              }
        }
        transition={
          disabled
            ? {}
            : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
        }
        whileHover={
          disabled
            ? {}
            : {
                scale: 1.12,
                y: -6,
                boxShadow:
                  "0 0 0 5px rgba(7,11,23,0.9), 0 0 55px rgba(240,197,66,0.65), inset 0 0 24px rgba(0,0,0,0.5)",
                borderColor: "rgba(240,197,66,0.9)",
              }
        }
        whileTap={disabled ? {} : { scale: 0.96 }}
      >
        <motion.span
          className="text-4xl sm:text-5xl"
          style={{ opacity: disabled ? 0.45 : 1 }}
          whileHover={disabled ? {} : { rotate: [0, -8, 8, -4, 0], scale: 1.15 }}
          transition={{ duration: 0.5 }}
        >
          {emoji}
        </motion.span>
        {href && !disabled && (
          <a href={href} className="absolute inset-0 rounded-full" aria-label={title} />
        )}
      </motion.div>
      <span className="font-display mt-4 text-xs font-bold uppercase tracking-[0.18em] text-imperial-gold-bright sm:text-sm">
        {title}
      </span>
      {comingSoon && (
        <span className="font-display mt-1.5 inline-block rounded-full border border-imperial-gold/25 px-2.5 py-0.5 text-[0.52rem] uppercase tracking-[0.14em] text-parchment-faint">
          Próximamente
        </span>
      )}
    </div>
  );
}

function Connector({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className="relative z-0 h-px flex-1"
      style={{
        minWidth: "clamp(24px, 6vw, 70px)",
        background:
          "linear-gradient(to right, rgba(200,144,40,0.05), rgba(200,144,40,0.55), rgba(200,144,40,0.05))",
        transformOrigin: "center",
      }}
    />
  );
}

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-1 flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(139,26,42,0.18) 0%, rgba(7,11,23,0) 60%), radial-gradient(ellipse 70% 50% at 50% 100%, rgba(200,144,40,0.1) 0%, rgba(7,11,23,0) 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ boxShadow: "inset 0 0 220px 60px rgba(7,11,23,0.95)" }}
      />

      <div className="relative z-10 flex w-full max-w-3xl items-center justify-center">
        <Portal emoji="🗺️" title="Viajes" href="https://viajes.gardariam.com" />
        <Connector delay={0.6} />

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
          className="relative z-10 flex-shrink-0"
          style={{
            width: "clamp(300px, 46vw, 600px)",
            filter: "drop-shadow(0 0 60px rgba(200,144,40,0.3))",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Gardariam"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </motion.div>

        <Connector delay={0.6} />
        <Portal emoji="🍳" title="Cocina" href="https://cocina.gardariam.com" />
      </div>
    </main>
  );
}
