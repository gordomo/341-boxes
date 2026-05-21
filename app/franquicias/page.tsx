import type { Metadata } from "next";
import FranquiciaForm from "./FranquiciaForm";

export const metadata: Metadata = { title: "Franquicias | 341 BOXES" };

// ============================================================
//  CIFRAS DEL MODELO DE FRANQUICIA
//  ------------------------------------------------------------
//  ⚠️ DATO ESTIMADO - REEMPLAZAR
//  Todas estas cifras son ESTIMADAS para un MVP de presentación.
//  Confirmar con números reales antes de publicar.
// ============================================================
const SUPERFICIE_M2 = "150 m²"; // ⚠️ DATO ESTIMADO - REEMPLAZAR
const BOXES_MIN = 3; // ⚠️ DATO ESTIMADO - REEMPLAZAR
const INVERSION_DESDE = "$35.000.000 ARS"; // ⚠️ DATO ESTIMADO - REEMPLAZAR
const ROI = "18-24 meses"; // ⚠️ DATO ESTIMADO - REEMPLAZAR
const MARGEN_OPERATIVO = "22% - 30%"; // ⚠️ DATO ESTIMADO - REEMPLAZAR
const CRECIMIENTO_RED = "Proyectado"; // ⚠️ DATO ESTIMADO - REEMPLAZAR

// Imagen del hero (placeholder local en /public; reemplazable por la real).
const HERO_IMAGE = "/franquicia-hero.jpg";

// Pequeño chip "estimado" para marcar cifras del MVP.
function ChipEstimado() {
  return (
    <span className="inline-block font-technical-data text-[10px] uppercase tracking-widest text-secondary border border-secondary/50 px-2 py-0.5 ml-2 align-middle">
      estimado
    </span>
  );
}

const VENTAJAS = [
  {
    icon: "workspace_premium",
    titulo: "Marca con identidad",
    texto:
      "Una imagen profesional y reconocible que genera confianza desde el primer día.",
  },
  {
    icon: "support_agent",
    titulo: "Acompañamiento real",
    texto:
      "Te apoyamos desde la elección del local hasta la formación de tu equipo. No quedás solo.",
  },
  {
    icon: "settings_suggest",
    titulo: "Método probado",
    texto:
      "Procesos de trabajo y atención ya ordenados, para que el box funcione parejo y prolijo.",
  },
];

const PROYECCION = [
  { label: "Retorno de inversión", valor: ROI, ancho: "w-3/4" },
  { label: "Margen operativo", valor: MARGEN_OPERATIVO, ancho: "w-2/3" },
  { label: "Crecimiento de la red", valor: CRECIMIENTO_RED, ancho: "w-1/2" },
];

export default function FranquiciasPage() {
  return (
    <>
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative flex items-center overflow-hidden bg-carbon text-on-primary min-h-[calc(100vh-72px)]">
        <div className="absolute inset-0 z-0">
          <div
            className="h-full w-full bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          />
          <div className="absolute inset-0 bg-carbon/60" />
        </div>

        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop py-section-gap">
          <div className="max-w-4xl space-y-8">
            <div className="inline-block bg-secondary px-4 py-1">
              <span className="font-technical-data text-technical-data text-white uppercase tracking-widest">
                Oportunidad de inversión
              </span>
            </div>
            <h1 className="font-display-hero text-headline-lg-mobile md:text-display-hero uppercase leading-none">
              Sumá tu propio box
            </h1>
            <p className="font-body-lg text-body-lg text-plata max-w-2xl">
              Unite a una red de talleres con identidad propia, método de
              trabajo probado y acompañamiento real. Un modelo pensado para que
              invertir en mecánica sea un negocio ordenado y rentable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto-franquicia"
                className="bg-secondary text-white font-label-caps text-label-caps px-10 py-4 uppercase skew-button text-center hover:bg-white hover:text-carbon transition-colors"
              >
                Quiero más información
              </a>
              <a
                href="#modelo"
                className="border-2 border-white text-white font-label-caps text-label-caps px-10 py-4 uppercase text-center hover:bg-white hover:text-carbon transition-all"
              >
                Ver el modelo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          01 — EL MODELO
          ============================================================ */}
      <section
        id="modelo"
        className="scroll-mt-[72px] bg-surface f1-grid px-margin-mobile md:px-margin-desktop py-section-gap"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-7 space-y-8">
            <span className="block font-label-caps text-label-caps text-secondary">
              01 // El modelo
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase leading-tight">
              Mecánica seria,{" "}
              <span className="bg-primary text-on-primary px-2">
                negocio ordenado
              </span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              341 Boxes no es solo un taller: es un sistema de trabajo. Procesos
              claros, imagen de marca consistente y gestión simple, para que
              cada box funcione con el mismo estándar y la misma calidad de
              atención.
            </p>
          </div>

          <ul className="lg:col-span-5 space-y-4">
            {[
              { icon: "checklist", txt: "Atención y procesos estandarizados" },
              { icon: "verified", txt: "Imagen de marca lista para usar" },
              { icon: "handshake", txt: "Acompañamiento en la puesta en marcha" },
            ].map((item) => (
              <li
                key={item.txt}
                className="flex items-center gap-4 border border-primary bg-white p-4"
              >
                <span className="material-symbols-outlined text-secondary text-3xl">
                  {item.icon}
                </span>
                <span className="font-technical-data text-technical-data text-primary uppercase">
                  {item.txt}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================================
          02 — VENTAJAS
          ============================================================ */}
      <section className="bg-carbon text-on-primary px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="mb-16">
          <span className="block font-label-caps text-label-caps text-secondary mb-4">
            02 // Por qué 341
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase">
            Lo que te llevás
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {VENTAJAS.map((v) => (
            <div
              key={v.titulo}
              className="border-t-4 border-secondary bg-primary-container p-8 hover:bg-black transition-colors"
            >
              <span className="material-symbols-outlined text-4xl mb-6 text-secondary">
                {v.icon}
              </span>
              <h3 className="font-headline-md text-headline-md uppercase mb-4">
                {v.titulo}
              </h3>
              <p className="font-body-md text-body-md text-on-primary-container">
                {v.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          03 — REQUISITOS + PROYECCIÓN
          ============================================================ */}
      <section className="bg-surface px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="text-center mb-16">
          <span className="block font-label-caps text-label-caps text-secondary mb-4">
            03 // Requisitos
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Entrá en la grilla
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Lista de requisitos */}
          <div className="space-y-10">
            <div className="flex gap-6 pb-8 border-b border-plata">
              <div className="font-headline-md text-headline-md text-secondary opacity-30">
                01
              </div>
              <div>
                <h4 className="font-label-caps text-label-caps text-primary mb-2">
                  Infraestructura
                  <ChipEstimado />
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Local de aprox. {SUPERFICIE_M2} en zona de buen tránsito
                  vehicular, con espacio para al menos {BOXES_MIN} boxes de
                  trabajo.
                </p>
              </div>
            </div>

            <div className="flex gap-6 pb-8 border-b border-plata">
              <div className="font-headline-md text-headline-md text-secondary opacity-30">
                02
              </div>
              <div>
                <h4 className="font-label-caps text-label-caps text-primary mb-2">
                  Inversión estimada
                  <ChipEstimado />
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Desde {INVERSION_DESDE} para equipamiento, marca y puesta en
                  marcha inicial.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="font-headline-md text-headline-md text-secondary opacity-30">
                03
              </div>
              <div>
                <h4 className="font-label-caps text-label-caps text-primary mb-2">
                  Perfil
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Personas con ganas de gestionar un negocio en serio, foco en
                  el cliente y compromiso con la calidad.
                </p>
              </div>
            </div>
          </div>

          {/* Caja proyección estimada */}
          <div className="relative bg-carbon text-on-primary p-10 md:p-12">
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-secondary" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-secondary" />

            <h3 className="font-headline-md text-headline-md uppercase mb-8">
              Proyección estimada
            </h3>

            <div className="space-y-6">
              {PROYECCION.map((p) => (
                <div key={p.label}>
                  <div className="flex justify-between font-technical-data text-technical-data mb-2 uppercase">
                    <span className="text-plata">{p.label}</span>
                    <span className="text-secondary">{p.valor}</span>
                  </div>
                  <div className="h-2 w-full bg-asfalto">
                    <div className={`h-full bg-secondary ${p.ancho}`} />
                  </div>
                </div>
              ))}
            </div>

            <p className="font-technical-data text-[11px] text-plata/70 mt-8">
              * Cifras estimadas con fines ilustrativos. Sujetas a confirmación.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          FORMULARIO
          ============================================================ */}
      <section
        id="contacto-franquicia"
        className="scroll-mt-[72px] bg-primary text-on-primary px-margin-mobile md:px-margin-desktop py-section-gap"
      >
        <div className="max-w-4xl mx-auto bg-surface text-primary p-margin-mobile md:p-16">
          <div className="mb-12">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-4">
              Quiero mi propio box
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Dejanos tus datos y coordinamos una charla para contarte el modelo
              en detalle.
            </p>
          </div>
          <FranquiciaForm />
        </div>
      </section>
    </>
  );
}
