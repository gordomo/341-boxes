import Link from "next/link";
import { WHATSAPP_TURNO_URL } from "@/lib/site-config";

// ============================================================
//  IMAGEN DEL HERO
//  ------------------------------------------------------------
//  Placeholder local en /public. Para usar la foto real:
//  reemplazá el archivo "public/hero-taller.jpg" por la tuya
//  (misma ruta y nombre) o cambiá esta constante por otra ruta.
//  Recomendado: foto oscura y de alto contraste (taller / box).
// ============================================================
const HERO_IMAGE = "/hero-taller.jpg";

// Pilares de la sección "Por qué elegirnos"
const PILARES = [
  {
    icon: "speed",
    titulo: "Diagnóstico honesto",
    texto:
      "Te explicamos qué tiene tu auto, por qué, y qué conviene hacer primero. Sin vueltas ni trabajos que no necesitás.",
  },
  {
    icon: "request_quote",
    titulo: "Presupuesto antes de tocar nada",
    texto:
      "Sabés cuánto vas a pagar antes de que empecemos. Sin sorpresas al final.",
  },
  {
    icon: "build",
    titulo: "Tu auto, cuidado como propio",
    texto:
      "Cada vehículo se trata con método y respeto. Te lo devolvemos andando como tiene que andar.",
  },
];

// Tarjetas destacadas de "Lo que hacemos"
const SERVICIOS = [
  { icon: "oil_barrel", titulo: "Aceite y filtros" },
  { icon: "album", titulo: "Frenos" },
  { icon: "speed", titulo: "Diagnóstico" },
  { icon: "tire_repair", titulo: "Neumáticos y alineación" },
];

// Frase de la franja animada (marquee). Se repite sola.
const MARQUEE =
  "341 BOXES · MECÁNICA INTEGRAL · ROSARIO · TRABAJO CLARO · AUTO CONFIABLE · ";

export default function Home() {
  return (
    <>
      {/* ============================================================
          1) HERO
          ============================================================ */}
      <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden bg-primary">
        {/* Foto de fondo + overlay oscuro */}
        <div className="absolute inset-0 z-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>

        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop py-section-gap">
          <div className="max-w-4xl space-y-6">
            <p className="font-technical-data text-technical-data text-secondary uppercase tracking-[0.3em]">
              Precisión que se siente
            </p>
            <h1 className="font-display-hero text-headline-lg-mobile md:text-display-hero text-on-primary leading-tight">
              341 BOXES — MECÁNICA DE PODIO
            </h1>
            <p className="font-body-lg text-body-lg text-plata max-w-2xl">
              Llevamos el orden y la precisión del automovilismo a la mecánica
              de todos los días. Trabajo claro, autos confiables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={WHATSAPP_TURNO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white font-label-caps text-label-caps px-10 py-5 skew-button text-center hover:bg-white hover:text-primary transition-all duration-300"
              >
                Pedir Turno
              </a>
              <Link
                href="/servicios"
                className="border-2 border-white text-white font-label-caps text-label-caps px-10 py-5 text-center hover:bg-white hover:text-primary transition-all duration-300"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2) POR QUÉ ELEGIRNOS
          ============================================================ */}
      <section className="bg-surface px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Por qué elegirnos
          </h2>
          <div className="h-1 w-24 bg-secondary mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {PILARES.map((p) => (
            <div
              key={p.titulo}
              className="service-card border border-primary bg-white p-8 flex flex-col h-full"
            >
              <span className="material-symbols-outlined text-secondary text-5xl mb-6">
                {p.icon}
              </span>
              <h3 className="font-headline-md text-headline-md text-primary uppercase">
                {p.titulo}
              </h3>
              <p className="font-body-md text-body-md text-asfalto mt-4">
                {p.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          3) LO QUE HACEMOS
          ============================================================ */}
      <section className="bg-surface f1-grid px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
              Lo que hacemos
            </h2>
            <div className="h-1 w-24 bg-secondary mt-4" />
          </div>
          <p className="font-body-md text-body-md text-asfalto max-w-md">
            Mantenimiento y reparación de mecánica básica e intermedia, con la
            prolijidad de un equipo profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {SERVICIOS.map((s) => (
            <div
              key={s.titulo}
              className="group service-card border border-primary bg-white p-unit hover:bg-primary transition-colors duration-300"
            >
              <div className="border border-plata group-hover:border-secondary p-8 flex flex-col h-full transition-colors duration-300">
                <span className="material-symbols-outlined text-secondary text-5xl mb-6">
                  {s.icon}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary group-hover:text-white uppercase transition-colors duration-300">
                  {s.titulo}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary uppercase border-b-2 border-secondary pb-1 hover:gap-3 transition-all"
          >
            Ver todos los servicios
            <span className="material-symbols-outlined text-xl">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* ============================================================
          4) TEASER FRANQUICIAS
          ============================================================ */}
      <section className="relative overflow-hidden bg-primary text-white py-section-gap">
        {/* Acento diagonal rojo de fondo */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="h-full w-full diagonal-divider bg-secondary -rotate-12 translate-x-1/2 scale-150" />
        </div>

        <div className="relative z-10 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl space-y-8">
            <p className="font-technical-data text-technical-data text-secondary uppercase tracking-[0.3em]">
              Oportunidad de inversión
            </p>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase leading-none">
              Sumá tu propio box
            </h2>
            <p className="font-body-lg text-body-lg text-plata">
              341 Boxes es un modelo de taller pensado para crecer. Si querés
              invertir en un negocio probado, con marca, método y
              acompañamiento, hablemos.
            </p>

            <div className="grid grid-cols-2 gap-8 max-w-md py-2">
              <div>
                <p className="font-headline-md text-headline-md text-secondary uppercase">
                  Modelo probado
                </p>
                <div className="h-0.5 w-12 bg-secondary mt-3" />
              </div>
              <div>
                <p className="font-headline-md text-headline-md text-secondary uppercase">
                  Acompañamiento real
                </p>
                <div className="h-0.5 w-12 bg-secondary mt-3" />
              </div>
            </div>

            <Link
              href="/franquicias"
              className="inline-block bg-white text-primary font-label-caps text-label-caps px-12 py-5 skew-button hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Conocer el modelo
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          5) FRANJA ANIMADA (marquee)
          ============================================================ */}
      <div className="bg-tertiary py-6 border-y-2 border-secondary overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {/* Dos copias para que el loop sea continuo (translateX -50%) */}
          <span className="font-label-caps text-label-caps text-white px-4">
            {MARQUEE.repeat(4)}
          </span>
          <span
            className="font-label-caps text-label-caps text-white px-4"
            aria-hidden="true"
          >
            {MARQUEE.repeat(4)}
          </span>
        </div>
      </div>

      {/* ============================================================
          6) CIERRE / CTA FINAL
          ============================================================ */}
      <section className="bg-primary text-white px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase">
            ¿Listo para traer tu auto?
          </h2>
          <p className="font-body-lg text-body-lg text-plata">
            Pedí tu turno y dejá tu vehículo en manos de un equipo que trabaja
            en serio.
          </p>
          <div className="pt-2">
            <a
              href={WHATSAPP_TURNO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-white font-label-caps text-label-caps px-12 py-5 skew-button hover:bg-white hover:text-primary transition-all duration-300"
            >
              <span className="material-symbols-outlined text-xl">chat</span>
              Pedir turno por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
