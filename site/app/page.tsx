"use client";

interface Portal {
  href: string;
  label: string;
  emoji: string;
}

const VIAJES: Portal = { href: "https://viajes.gardariam.com", label: "Viajes", emoji: "🗺️" };
const COCINA: Portal = { href: "https://cocina.gardariam.com", label: "Cocina", emoji: "🍳" };

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

        {/* Mitades clicables: al pasar por encima se ilumina ese lado */}
        <a href={VIAJES.href} aria-label={VIAJES.label} className="hub-side hub-side-left">
          <span className="hub-side-glow" />
        </a>
        <a href={COCINA.href} aria-label={COCINA.label} className="hub-side hub-side-right">
          <span className="hub-side-glow" />
        </a>
      </div>

      {/* Móvil (vertical): dos paneles apilados a pantalla completa */}
      <div className="hub-tiles">
        <a href={VIAJES.href} aria-label={VIAJES.label} className="hub-tile hub-tile-viajes">
          <video
            className="hub-tile-video"
            autoPlay
            loop
            muted
            playsInline
            poster="/hub-poster.jpg"
            preload="auto"
          >
            <source src="/hub-loop.mp4" type="video/mp4" />
          </video>
          <span className="hub-tile-glow" />
        </a>
        <a href={COCINA.href} aria-label={COCINA.label} className="hub-tile hub-tile-cocina">
          <video
            className="hub-tile-video"
            autoPlay
            loop
            muted
            playsInline
            poster="/hub-poster.jpg"
            preload="auto"
          >
            <source src="/hub-loop.mp4" type="video/mp4" />
          </video>
          <span className="hub-tile-glow" />
        </a>
      </div>
    </main>
  );
}
