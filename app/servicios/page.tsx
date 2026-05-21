import type { Metadata } from "next";
import { SITE, waLink } from "@/lib/site-config";

export const metadata: Metadata = { title: "Servicios | 341 BOXES" };

// ============================================================
//  AÑOS DE EXPERIENCIA (barra técnica)
//  ⚠️ PLACEHOLDER — reemplazar por el número real.
// ============================================================
const EXPERIENCIA = "+XX años";

// ============================================================
//  CATÁLOGO DE SERVICIOS
//  ------------------------------------------------------------
//  Estructura central y editable. Para sumar/sacar un servicio,
//  agregá o quitá un objeto de este array.
//  - `slug`  → reservado para una futura subpágina /servicios/[slug]
//              (todavía NO existe; está acá para el día que se cree).
//  - `precio`→ "Consultar" por defecto; cargá el valor cuando se
//              definan precios y se podrá mostrar en la tarjeta.
//  - `dato`  → dato destacado que se muestra hoy en la tarjeta.
// ============================================================
type Servicio = {
  id: string; // número de box: "01", "02"... (etiqueta BOX_0X)
  slug: string; // para futura subpágina propia
  icon: string; // Material Symbol
  titulo: string;
  descripcion: string;
  dato: { label: string; valor: string };
  precio: string;
};

const SERVICIOS: Servicio[] = [
  {
    id: "01",
    slug: "aceite-y-filtros",
    icon: "oil_barrel",
    titulo: "Cambio de aceite y filtros",
    descripcion:
      "Cambio de aceite y filtros con productos de calidad, según lo que pide tu vehículo. Revisamos niveles y fluidos para que el motor trabaje tranquilo.",
    dato: { label: "Tiempo estimado", valor: "~30 min" },
    precio: "Consultar",
  },
  {
    id: "02",
    slug: "diagnostico-computarizado",
    icon: "speed",
    titulo: "Diagnóstico computarizado (scanner)",
    descripcion:
      "Conectamos el scanner para leer las fallas reales del auto. Te entregamos un diagnóstico claro de qué pasa y qué conviene resolver.",
    dato: { label: "Presupuesto", valor: "Consultar" },
    precio: "Consultar",
  },
  {
    id: "03",
    slug: "frenos",
    icon: "album",
    titulo: "Frenos",
    descripcion:
      "Revisión y cambio de pastillas, discos y líquido de freno. Tu auto frena como debe, con seguridad.",
    dato: { label: "Tiempo estimado", valor: "~45 min" },
    precio: "Consultar",
  },
  {
    id: "04",
    slug: "bateria-y-sistema-electrico",
    icon: "battery_charging_full",
    titulo: "Batería y sistema eléctrico",
    descripcion:
      "Chequeo de batería, alternador y carga. Detectamos fallas eléctricas y reemplazamos lo que haga falta.",
    dato: { label: "Chequeo", valor: "Sin cargo" },
    precio: "Consultar",
  },
  {
    id: "05",
    slug: "refrigeracion",
    icon: "thermostat",
    titulo: "Refrigeración",
    descripcion:
      "Control del sistema de refrigeración: radiador, bomba de agua y líquido. Evitamos que el motor se recaliente.",
    dato: { label: "Alcance", valor: "Revisión completa" },
    precio: "Consultar",
  },
  {
    id: "06",
    slug: "neumaticos-y-alineacion",
    icon: "tire_repair",
    titulo: "Neumáticos y alineación",
    descripcion:
      "Alineación y balanceo para que el auto vaya derecho y las cubiertas duren más. Mejor agarre y manejo más seguro.",
    dato: { label: "Incluye", valor: "Alineación + balanceo" },
    precio: "Consultar",
  },
];

// Items de la barra técnica (debajo del encabezado).
const BARRA: { label: string; valor: string; dot?: boolean }[] = [
  { label: "Estado", valor: "Turnos abiertos", dot: true },
  { label: "Experiencia", valor: EXPERIENCIA },
  { label: "Presupuesto", valor: "Sin cargo" },
  { label: "Garantía", valor: "Trabajo escrito" },
];

// Franja inferior (coherente con la home).
const MARQUEE =
  "341 BOXES · MECÁNICA INTEGRAL · ROSARIO · TRABAJO CLARO · AUTO CONFIABLE · ";

export default function ServiciosPage() {
  return (
    <>
      {/* ============================================================
          ENCABEZADO
          ============================================================ */}
      <header className="relative overflow-hidden px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="absolute inset-0 diagonal-bg -z-10" />
        <div className="max-w-4xl">
          <span className="block font-technical-data text-technical-data text-secondary uppercase tracking-[0.3em] mb-4">
            Mecánica integral
          </span>
          <h1 className="font-display-hero text-[64px] md:text-display-hero text-primary uppercase leading-none mb-6">
            Nuestros <span className="text-secondary">Boxes</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-4 border-primary pl-6">
            Mantenimiento preventivo y reparación de mecánica básica e
            intermedia. Trabajo prolijo, tiempos claros y repuestos de calidad.
          </p>
        </div>
      </header>

      {/* ============================================================
          BARRA TÉCNICA
          ============================================================ */}
      <div className="bg-carbon text-white px-margin-mobile md:px-margin-desktop py-4 flex flex-wrap items-center gap-x-8 gap-y-3">
        {BARRA.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="font-technical-data text-technical-data text-plata uppercase">
              {item.label}:
            </span>
            <span
              className={`font-technical-data text-technical-data uppercase flex items-center gap-2 ${
                item.dot ? "text-verde-bandera" : "text-white"
              }`}
            >
              {item.dot && (
                <span className="w-2 h-2 rounded-full bg-verde-bandera animate-pulse" />
              )}
              {item.valor}
            </span>
          </div>
        ))}
      </div>

      {/* ============================================================
          GRID DE SERVICIOS
          ============================================================ */}
      <section className="bg-surface px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {SERVICIOS.map((s) => (
          <article
            key={s.id}
            className="service-card bg-white border border-primary technical-border p-8 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined text-4xl text-secondary">
                {s.icon}
              </span>
              <span className="font-technical-data text-technical-data text-on-surface-variant bg-plata/20 px-2 py-1">
                BOX_{s.id}
              </span>
            </div>

            <h2 className="font-headline-md text-headline-md text-primary uppercase mb-4">
              {s.titulo}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
              {s.descripcion}
            </p>

            <div className="pt-6 border-t border-plata/40 flex justify-between items-end gap-4">
              <div className="flex flex-col">
                <span className="font-technical-data text-[10px] text-on-surface-variant uppercase tracking-widest">
                  {s.dato.label}
                </span>
                <span className="font-technical-data text-technical-data font-bold text-primary uppercase">
                  {s.dato.valor}
                </span>
              </div>
              <a
                href={waLink(
                  `Hola ${SITE.NOMBRE}, quiero consultar por el servicio: ${s.titulo}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-primary text-on-primary px-5 py-2 uppercase font-label-caps text-xs skew-button hover:bg-secondary transition-colors"
              >
                Consultar
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* ============================================================
          FRANJA ANIMADA (coherente con la home)
          ============================================================ */}
      <div className="bg-tertiary py-6 border-y-2 border-secondary overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
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
    </>
  );
}
