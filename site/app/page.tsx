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
  const circle = (
    <div
      className="relative flex items-center justify-center rounded-full"
      style={{
        width: "clamp(110px, 16vw, 150px)",
        height: "clamp(110px, 16vw, 150px)",
        background:
          "radial-gradient(circle at 35% 30%, rgba(200,144,40,0.16), rgba(7,11,23,0.95))",
        border: "2px solid rgba(200,144,40,0.45)",
        boxShadow:
          "0 0 0 5px rgba(7,11,23,0.9), 0 0 30px rgba(200,144,40,0.15), inset 0 0 24px rgba(0,0,0,0.6)",
      }}
    >
      <span className="text-4xl sm:text-5xl">{emoji}</span>
    </div>
  );

  return (
    <div className="relative z-10 flex flex-col items-center">
      {href && !comingSoon ? (
        <motion.a
          href={href}
          whileHover={{ scale: 1.06, y: -4 }}
          whileTap={{ scale: 0.97 }}
          className="cursor-pointer"
        >
          {circle}
        </motion.a>
      ) : (
        <div className="opacity-50">{circle}</div>
      )}
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

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: EASE }}
        className="font-display text-gold-glow relative z-10 text-2xl font-bold tracking-[0.3em] text-imperial-gold-bright uppercase sm:text-4xl"
      >
        Imperio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: EASE }}
        className="font-display relative z-10 mt-3 max-w-xl text-xs tracking-[0.08em] text-parchment-dim italic sm:text-base"
      >
        &ldquo;Nuestro fuego, nuestro amor&rdquo;
      </motion.p>

      <div className="relative z-10 mt-12 flex w-full max-w-3xl items-center justify-center sm:mt-16">
        <Portal emoji="🗺️" title="Viajes" href="https://viajes.gardariam.com" />
        <Connector delay={0.9} />

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: EASE }}
          className="relative z-10 flex flex-shrink-0 items-center justify-center rounded-full"
          style={{
            width: "clamp(160px, 24vw, 220px)",
            height: "clamp(160px, 24vw, 220px)",
            background: "radial-gradient(circle at 40% 30%, #131c34, #070b17)",
            border: "2px solid rgba(200,144,40,0.55)",
            boxShadow:
              "0 0 0 6px rgba(7,11,23,0.9), 0 0 50px rgba(200,144,40,0.22), inset 0 0 30px rgba(0,0,0,0.6)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Gardariam"
            style={{ width: "72%", height: "72%", objectFit: "contain", display: "block" }}
          />
        </motion.div>

        <Connector delay={0.9} />
        <Portal emoji="🍳" title="Cocina" comingSoon />
      </div>
    </main>
  );
}
