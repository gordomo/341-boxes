import PedirTurnoFlow from "./PedirTurnoFlow";
import { pageMetadata } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Pedir Turno",
  description:
    "Pedí tu turno en 341 Boxes: elegí el servicio, contanos de tu auto y coordinamos por WhatsApp. Taller de mecánica integral en Rosario.",
  path: "/pedir-turno",
});

export default function PedirTurnoPage() {
  return (
    <>
      {/* ============================================================
          ENCABEZADO
          ============================================================ */}
      <header className="relative overflow-hidden bg-tertiary text-on-tertiary px-margin-mobile md:px-margin-desktop py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Aviso: la reserva online es una fase futura (esto es una maqueta) */}
          <span className="inline-flex items-center gap-2 font-technical-data text-[11px] uppercase tracking-widest text-white border border-white/30 px-3 py-1 mb-6">
            <span className="w-2 h-2 rounded-full bg-naranja-pitlane animate-pulse" />
            Reserva online — próximamente
          </span>

          <h1 className="font-display-hero text-headline-lg-mobile md:text-display-hero uppercase leading-none mb-6">
            Pedir <span className="text-secondary">Turno</span>
          </h1>
          <p className="font-body-lg text-body-lg text-plata max-w-2xl border-l-4 border-secondary pl-6">
            Elegí el servicio, contanos de tu auto y coordinamos. Reserva online
            próximamente; por ahora confirmamos tu turno por WhatsApp.
          </p>
        </div>
      </header>

      {/* ============================================================
          FLUJO DE 4 PASOS (cliente)
          ============================================================ */}
      <section className="bg-surface f1-grid px-margin-mobile md:px-margin-desktop py-16 md:py-section-gap">
        <PedirTurnoFlow />
      </section>
    </>
  );
}
