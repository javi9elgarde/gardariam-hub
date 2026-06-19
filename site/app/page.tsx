"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

interface CardProps {
  emoji: string;
  title: string;
  description: string;
  href?: string;
  comingSoon?: boolean;
}

function HubCard({ emoji, title, description, href, comingSoon }: CardProps) {
  const content = (
    <>
      <span className="text-4xl">{emoji}</span>
      <h2 className="font-display mt-4 text-lg font-bold uppercase tracking-[0.14em] text-imperial-gold-bright">
        {title}
      </h2>
      <p className="mt-2 text-sm text-parchment-dim">{description}</p>
      {comingSoon && (
        <span className="font-display mt-4 inline-block rounded-full border border-imperial-gold/30 px-3 py-1 text-[0.6rem] uppercase tracking-[0.16em] text-parchment-faint">
          Próximamente
        </span>
      )}
    </>
  );

  const className =
    "glass-panel flex w-64 flex-col items-center rounded-2xl px-8 py-10 text-center transition-all";

  if (comingSoon || !href) {
    return <div className={`${className} opacity-60`}>{content}</div>;
  }

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`${className} cursor-pointer hover:border-imperial-gold/50 hover:shadow-[0_0_40px_rgba(200,144,40,0.18)]`}
    >
      {content}
    </motion.a>
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
        className="font-display text-gold-glow relative z-10 text-3xl font-bold tracking-[0.3em] text-imperial-gold-bright uppercase sm:text-5xl"
      >
        Imperio
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.6, ease: EASE }}
        className="relative z-10 mt-2"
        style={{
          width: "clamp(260px, 36vw, 440px)",
          filter: "drop-shadow(0 0 50px rgba(200,144,40,0.25))",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Gardariam"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: EASE }}
        className="font-display relative z-10 mt-6 max-w-xl text-sm tracking-[0.08em] text-parchment-dim italic sm:text-lg"
      >
        &ldquo;Nuestro fuego, nuestro amor&rdquo;
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="imperial-divider relative z-10 mt-8 w-40 sm:w-56"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: EASE }}
        className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-6"
      >
        <HubCard
          emoji="🗺️"
          title="Viajes"
          description="El mapa de cada país que hemos conquistado juntos."
          href="https://viajes.gardariam.com"
        />
        <HubCard
          emoji="🍳"
          title="Cocina"
          description="El recetario de nuestras creaciones en la cocina."
          comingSoon
        />
      </motion.div>
    </main>
  );
}
