"use client";

import { useEffect, useRef, useState } from "react";

interface HubVideoProps {
  className: string;
  src: string;
  poster: string;
}

/**
 * Vídeo de fondo del Hub.
 *
 * En iOS (Modo de Bajo Consumo, o "Reproducción automática de vídeos" desactivada)
 * el autoplay se bloquea y Safari dibuja su propio botón ▶️. Como encima del vídeo
 * hay zonas clicables, ese botón no se puede pulsar y el toque acaba navegando.
 * Solución: intentar reproducir por código y, si el navegador lo rechaza,
 * ocultar el <video> y dejar el póster de fondo (escena fija, sin botón roto).
 */
export default function HubVideo({ className, src, poster }: HubVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // Safari mira el atributo, no solo la propiedad
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");

    let cancelled = false;

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.then(() => {
          if (!cancelled) setBlocked(false);
        }).catch(() => {
          if (!cancelled) setBlocked(true);
        });
      }
    };

    tryPlay();

    // Reintento silencioso tras la primera interacción (no roba el toque)
    const retry = () => tryPlay();
    document.addEventListener("touchstart", retry, { passive: true, once: true });
    document.addEventListener("click", retry, { passive: true, once: true });
    document.addEventListener("visibilitychange", retry);

    return () => {
      cancelled = true;
      document.removeEventListener("touchstart", retry);
      document.removeEventListener("click", retry);
      document.removeEventListener("visibilitychange", retry);
    };
  }, []);

  return (
    <>
      <video
        ref={ref}
        className={className}
        autoPlay
        loop
        muted
        playsInline
        // iOS antiguo
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...({ "webkit-playsinline": "true", "x5-playsinline": "true" } as any)}
        poster={poster}
        preload="auto"
        style={blocked ? { visibility: "hidden" } : undefined}
        aria-hidden
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Si el navegador bloquea el autoplay, escena fija (sin botón ▶️ roto) */}
      {blocked && (
        <div
          className={className}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${poster})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
      )}
    </>
  );
}
