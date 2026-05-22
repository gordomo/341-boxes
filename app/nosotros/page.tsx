import type { Metadata } from "next";
import { SITE, WHATSAPP_TURNO_URL } from "@/lib/site-config";

export const metadata: Metadata = { title: "Nosotros | 341 BOXES" };

// ============================================================
//  AÑOS DE EXPERIENCIA
//  ⚠️ PLACEHOLDER — reemplazar por el número real.
//  Se usa en el texto principal y en la franja de datos.
// ============================================================
const ANOS_EXPERIENCIA = "XX"; // ⚠️ PLACEHOLDER

// ============================================================
//  CÓMO TRABAJAMOS — valores del taller
// ============================================================
const VALORES = [
  {
    icon: "visibility",
    titulo: "Transparencia",
    texto:
      "Te explicamos todo en palabras simples. Sabés qué se hace, por qué y cuánto cuesta.",
  },
  {
    icon: "checklist",
    titulo: "Método",
    texto:
      "Cada trabajo sigue un proceso ordenado, de principio a fin. Nada queda librado al azar.",
  },
  {
    icon: "handshake",
    titulo: "Cercanía",
    texto:
      "Te tratamos como vecino, no como número. Tu tranquilidad es parte del servicio.",
  },
  {
    icon: "verified",
    titulo: "Calidad",
    texto:
      "Repuestos confiables y trabajo con garantía. Tu auto vuelve a la calle como corresponde.",
  },
];

// ============================================================
//  FRANJA DE DATOS (estilo dashboard)
//  ⚠️ TODOS ESTIMADOS / PLACEHOLDER — reemplazar por cifras reales.
// ============================================================
const DATOS = [
  { valor: `+${ANOS_EXPERIENCIA}`, label: "Años en Rosario" }, // ⚠️ ESTIMADO
  { valor: "XXXX", label: "Autos atendidos" }, // ⚠️ ESTIMADO
  { valor: "X", label: "Boxes de trabajo" }, // ⚠️ ESTIMADO
  { valor: "100%", label: "Trabajo garantizado" }, // ⚠️ ESTIMADO
];

export default function NosotrosPage() {
  return (
    <>
      {/* ============================================================
          ENCABEZADO (fondo oscuro + acento diagonal rojo)
          ============================================================ */}
      <header className="relative overflow-hidden bg-carbon text-on-primary px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="absolute inset-0 diagonal-bg -z-0 pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <span className="block font-label-caps text-label-caps text-secondary mb-4">
            El taller
          </span>
          <h1 className="font-display-hero text-headline-lg-mobile md:text-display-hero uppercase leading-none mb-6">
            Cuidar tu auto es nuestra misión
          </h1>
          <p className="font-body-lg text-body-lg text-plata max-w-2xl border-l-4 border-secondary pl-6">
            Somos un taller de mecánica integral que trabaja con el orden y la
            precisión del automovilismo profesional, pero hablando claro y cerca
            del cliente.
          </p>
        </div>
      </header>

      {/* ============================================================
          TEXTO PRINCIPAL (fondo claro)
          ============================================================ */}
      <section className="bg-surface px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            En {SITE.NOMBRE} creemos que llevar el auto al taller no tiene por
            qué ser un dolor de cabeza. Por eso trabajamos distinto: cada
            vehículo se diagnostica con método, se presupuesta antes de empezar y
            se repara con repuestos de calidad.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {/* ⚠️ PLACEHOLDER — confirmar años de experiencia (constante ANOS_EXPERIENCIA). */}
            Somos un taller familiar con {ANOS_EXPERIENCIA} años de experiencia
            en Rosario. Atendemos autos fuera de garantía que siguen mereciendo
            un estándar de servicio oficial: trabajo documentado, tiempos claros
            y respeto por vos y por tu auto.
          </p>

          {/* Frase destacada */}
          <blockquote className="border-l-4 border-secondary pl-6 py-2">
            <p className="font-headline-md text-headline-md md:text-headline-lg text-primary uppercase leading-tight">
              No prometemos de más.{" "}
              <span className="text-secondary">
                Prometemos hacer las cosas bien.
              </span>
            </p>
          </blockquote>
        </div>
      </section>

      {/* ============================================================
          CÓMO TRABAJAMOS (4 valores)
          ============================================================ */}
      <section className="bg-surface f1-grid px-margin-mobile md:px-margin-desktop pb-section-gap">
        <div className="mb-12">
          <span className="block font-label-caps text-label-caps text-secondary mb-4">
            Cómo trabajamos
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Nuestra forma de trabajar
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {VALORES.map((v) => (
            <article
              key={v.titulo}
              className="bg-white border border-primary technical-border p-8 flex flex-col h-full"
            >
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">
                {v.icon}
              </span>
              <h3 className="font-headline-md text-headline-md text-primary uppercase mb-4">
                {v.titulo}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {v.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ============================================================
          FRANJA DE DATOS (fondo carbon, estilo dashboard)
          ============================================================ */}
      <section className="bg-carbon text-on-primary px-margin-mobile md:px-margin-desktop py-16 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {DATOS.map((d) => (
            <div key={d.label} className="flex flex-col gap-2">
              <span className="font-display-hero text-headline-lg-mobile md:text-headline-lg text-secondary leading-none">
                {d.valor}
              </span>
              <span className="font-technical-data text-technical-data text-plata uppercase tracking-widest">
                {d.label}
              </span>
            </div>
          ))}
        </div>
        <p className="font-technical-data text-[11px] text-plata/60 mt-10">
          * Cifras estimadas con fines ilustrativos. Sujetas a confirmación.
        </p>
      </section>

      {/* ============================================================
          CTA FINAL → WhatsApp
          ============================================================ */}
      <section className="bg-secondary text-white px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase leading-tight">
            ¿Listo para cuidar tu auto?
          </h2>
          <a
            href={WHATSAPP_TURNO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-secondary font-label-caps text-label-caps px-12 py-5 uppercase skew-button hover:bg-carbon hover:text-white transition-colors inline-flex items-center gap-4"
          >
            Pedir turno
            <span className="material-symbols-outlined">chat</span>
          </a>
        </div>
      </section>
    </>
  );
}
