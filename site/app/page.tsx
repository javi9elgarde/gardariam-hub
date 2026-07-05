"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function OrnamentLine({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-px flex-1"
        style={{
          background: "linear-gradient(to right, transparent, rgba(200,144,40,0.45))",
          maxWidth: "clamp(40px, 8vw, 100px)",
        }}
      />
      <span className="font-display text-[0.58rem] uppercase tracking-[0.28em] text-imperial-gold/65 sm:text-[0.62rem]">
        {text}
      </span>
      <div
        className="h-px flex-1"
        style={{
          background: "linear-gradient(to left, transparent, rgba(200,144,40,0.45))",
          maxWidth: "clamp(40px, 8vw, 100px)",
        }}
      />
    </div>
  );
}

function DiamondDivider() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-px w-8 bg-imperial-gold/25" />
      <span className="text-[0.55rem] text-imperial-gold/45">◆</span>
      <div className="h-px w-8 bg-imperial-gold/25" />
    </div>
  );
}

interface PortalProps {
  emoji: string;
  title: string;
  href?: string;
  comingSoon?: boolean;
  description: string;
  portalBg: string;
  delay?: number;
}

function Portal({ emoji, title, href, comingSoon, description, portalBg, delay = 0.4 }: PortalProps) {
  const disabled = comingSoon || !href;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: EASE }}
      className="relative z-10 flex flex-col items-center"
      style={{ gap: "clamp(8px, 1.2vw, 14px)" }}
    >
      <motion.div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: "clamp(130px, 17vw, 195px)",
          height: "clamp(130px, 17vw, 195px)",
          background: portalBg,
          border: "2px solid rgba(200,144,40,0.48)",
        }}
        animate={
          disabled
            ? {}
            : {
                boxShadow: [
                  "0 0 0 5px rgba(7,11,23,0.88), 0 0 25px rgba(200,144,40,0.2), inset 0 0 30px rgba(0,0,0,0.55)",
                  "0 0 0 5px rgba(7,11,23,0.88), 0 0 50px rgba(200,144,40,0.48), inset 0 0 30px rgba(0,0,0,0.55)",
                  "0 0 0 5px rgba(7,11,23,0.88), 0 0 25px rgba(200,144,40,0.2), inset 0 0 30px rgba(0,0,0,0.55)",
                ],
              }
        }
        transition={disabled ? {} : { duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={
          disabled
            ? {}
            : {
                scale: 1.1,
                y: -8,
                boxShadow:
                  "0 0 0 5px rgba(7,11,23,0.88), 0 0 65px rgba(240,197,66,0.62), inset 0 0 30px rgba(0,0,0,0.4)",
                borderColor: "rgba(240,197,66,0.9)",
              }
        }
        whileTap={disabled ? {} : { scale: 0.97 }}
      >
        <motion.span
          className="text-5xl sm:text-6xl"
          style={{
            opacity: disabled ? 0.45 : 1,
            filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.9))",
          }}
          whileHover={disabled ? {} : { rotate: [0, -9, 9, -4, 0], scale: 1.18 }}
          transition={{ duration: 0.5 }}
        >
          {emoji}
        </motion.span>
        {href && !disabled && (
          <a href={href} className="absolute inset-0 rounded-full" aria-label={title} />
        )}
      </motion.div>

      <span
        className="font-display text-xs font-bold uppercase tracking-[0.24em] text-imperial-gold-bright sm:text-sm"
        style={{ textShadow: "0 0 22px rgba(200,144,40,0.45)" }}
      >
        {title}
      </span>

      <DiamondDivider />

      <p
        className="text-center leading-relaxed text-parchment-faint"
        style={{
          fontSize: "clamp(0.62rem, 1vw, 0.72rem)",
          maxWidth: "clamp(140px, 18vw, 185px)",
        }}
      >
        {description}
      </p>

      {comingSoon && (
        <span className="font-display rounded-full border border-imperial-gold/25 px-2.5 py-0.5 text-[0.52rem] uppercase tracking-[0.14em] text-parchment-faint">
          Próximamente
        </span>
      )}
    </motion.div>
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
        minWidth: "clamp(14px, 4vw, 52px)",
        background:
          "linear-gradient(to right, rgba(200,144,40,0.04), rgba(200,144,40,0.42), rgba(200,144,40,0.04))",
        transformOrigin: "center",
      }}
    />
  );
}

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-1 flex-col items-center justify-between overflow-hidden px-6 pb-0 pt-0 text-center">
      {/* Two-tone atmospheric background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 65% 90% at -8% 52%, rgba(10, 20, 55, 0.75) 0%, transparent 68%),
            radial-gradient(ellipse 65% 90% at 108% 52%, rgba(55, 22, 5, 0.70) 0%, transparent 68%),
            radial-gradient(ellipse 80% 55% at 50% 22%, rgba(100, 18, 32, 0.17) 0%, transparent 58%),
            radial-gradient(ellipse 55% 38% at 50% 108%, rgba(200,144,40,0.08) 0%, transparent 68%)
          `,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ boxShadow: "inset 0 0 240px 75px rgba(7,11,23,0.97)" }}
      />

      {/* Main content */}
      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center gap-10 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: EASE }}
          className="flex flex-col items-center gap-2.5"
        >
          <OrnamentLine text="Bienvenidos a" />
          <h1
            className="font-display font-bold uppercase text-imperial-gold-bright"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              letterSpacing: "0.18em",
              textShadow: "0 0 45px rgba(200,144,40,0.55), 0 4px 28px rgba(0,0,0,0.85)",
            }}
          >
            Gardariam
          </h1>
          <OrnamentLine text="Nuestro Hub de Boda" />
        </motion.div>

        {/* Portal row */}
        <div className="flex w-full max-w-6xl items-center justify-center px-2">
          <Portal
            emoji="🗺️"
            title="Viajes"
            href="https://viajes.gardariam.com"
            description="Nuestras aventuras y expediciones por el mundo"
            portalBg="radial-gradient(circle at 35% 30%, rgba(18, 38, 95, 0.9), rgba(7,11,23,0.98))"
            delay={0.35}
          />

          <Connector delay={0.6} />

          {/* Center logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.25, ease: EASE }}
            className="relative z-10 flex-shrink-0"
            style={{
              width: "clamp(220px, 34vw, 520px)",
              filter:
                "drop-shadow(0 0 60px rgba(200,144,40,0.35)) drop-shadow(0 10px 40px rgba(0,0,0,0.8))",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/LOGOWEB.png"
              alt="Gardariam"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </motion.div>

          <Connector delay={0.6} />

          <Portal
            emoji="🍳"
            title="Cocina"
            href="https://cocina.gardariam.com"
            description="Descubre las recetas y delicias de nuestra cocina"
            portalBg="radial-gradient(circle at 35% 30%, rgba(50, 16, 80, 0.9), rgba(7,11,23,0.98))"
            delay={0.35}
          />
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9, ease: EASE }}
          className="font-display uppercase tracking-[0.38em] text-parchment-faint"
          style={{ fontSize: "clamp(0.6rem, 1.1vw, 0.74rem)" }}
        >
          Explora. Descubre. Disfruta.
        </motion.p>
      </div>

      {/* Footer bar */}
      <motion.footer
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1, ease: EASE }}
        className="relative z-10 w-full"
        style={{
          background: "rgba(7,11,23,0.88)",
          borderTop: "1px solid rgba(200,144,40,0.14)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-8 py-4 sm:px-12">
          {[
            { icon: "📅", main: "29 Agosto 2026" },
            { icon: "📍", main: "Boda Gardariam", sub: "Una aventura inolvidable" },
            { icon: "♡", main: "Gracias por ser parte", sub: "de nuestra historia" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="text-sm opacity-55">{item.icon}</span>
              <div className="text-left">
                <p className="font-display text-[0.6rem] uppercase tracking-[0.15em] text-parchment-dim sm:text-[0.64rem]">
                  {item.main}
                </p>
                {item.sub && (
                  <p className="text-[0.56rem] text-parchment-faint">{item.sub}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.footer>
    </main>
  );
}
