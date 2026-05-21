// PÁGINA TEMPORAL DE VERIFICACIÓN DEL SISTEMA DE DISEÑO
// Mostrar paleta, tipografías y utilidades custom. Borrar después.

type Swatch = { name: string; varClass: string; hex: string; dark?: boolean };

const colorGroups: { title: string; colors: Swatch[] }[] = [
  {
    title: "PRIMARY",
    colors: [
      { name: "primary", varClass: "bg-primary", hex: "#000000", dark: true },
      { name: "on-primary", varClass: "bg-on-primary", hex: "#ffffff" },
      { name: "primary-container", varClass: "bg-primary-container", hex: "#1c1b1b", dark: true },
      { name: "on-primary-container", varClass: "bg-on-primary-container", hex: "#858383" },
    ],
  },
  {
    title: "SECONDARY (ROJO)",
    colors: [
      { name: "secondary", varClass: "bg-secondary", hex: "#bb0400", dark: true },
      { name: "on-secondary", varClass: "bg-on-secondary", hex: "#ffffff" },
      { name: "secondary-container", varClass: "bg-secondary-container", hex: "#e81105", dark: true },
      { name: "secondary-fixed", varClass: "bg-secondary-fixed", hex: "#ffdad4" },
      { name: "secondary-fixed-dim", varClass: "bg-secondary-fixed-dim", hex: "#ffb4a8" },
    ],
  },
  {
    title: "TERTIARY",
    colors: [
      { name: "tertiary", varClass: "bg-tertiary", hex: "#000000", dark: true },
      { name: "on-tertiary", varClass: "bg-on-tertiary", hex: "#ffffff" },
      { name: "tertiary-container", varClass: "bg-tertiary-container", hex: "#1b1c1c", dark: true },
      { name: "tertiary-fixed", varClass: "bg-tertiary-fixed", hex: "#e4e2e2" },
    ],
  },
  {
    title: "ACENTOS DE MARCA (F1 / PIT-LANE)",
    colors: [
      { name: "carbon", varClass: "bg-carbon", hex: "#1C1C1E", dark: true },
      { name: "asfalto", varClass: "bg-asfalto", hex: "#4A4A4A", dark: true },
      { name: "plata", varClass: "bg-plata", hex: "#C8C8CC" },
      { name: "verde-bandera", varClass: "bg-verde-bandera", hex: "#00A352", dark: true },
      { name: "naranja-pitlane", varClass: "bg-naranja-pitlane", hex: "#FF6B00", dark: true },
    ],
  },
  {
    title: "SURFACE",
    colors: [
      { name: "surface", varClass: "bg-surface", hex: "#f9f9f9" },
      { name: "surface-bright", varClass: "bg-surface-bright", hex: "#f9f9f9" },
      { name: "surface-dim", varClass: "bg-surface-dim", hex: "#dadada" },
      { name: "surface-variant", varClass: "bg-surface-variant", hex: "#e2e2e2" },
      { name: "surface-container-lowest", varClass: "bg-surface-container-lowest", hex: "#ffffff" },
      { name: "surface-container-low", varClass: "bg-surface-container-low", hex: "#f3f3f4" },
      { name: "surface-container", varClass: "bg-surface-container", hex: "#eeeeee" },
      { name: "surface-container-high", varClass: "bg-surface-container-high", hex: "#e8e8e8" },
      { name: "surface-container-highest", varClass: "bg-surface-container-highest", hex: "#e2e2e2" },
      { name: "inverse-surface", varClass: "bg-inverse-surface", hex: "#2f3131", dark: true },
      { name: "inverse-on-surface", varClass: "bg-inverse-on-surface", hex: "#f0f1f1" },
    ],
  },
  {
    title: "ON-SURFACE / OUTLINE",
    colors: [
      { name: "on-surface", varClass: "bg-on-surface", hex: "#1a1c1c", dark: true },
      { name: "on-surface-variant", varClass: "bg-on-surface-variant", hex: "#444748", dark: true },
      { name: "on-background", varClass: "bg-on-background", hex: "#1a1c1c", dark: true },
      { name: "background", varClass: "bg-background", hex: "#f9f9f9" },
      { name: "outline", varClass: "bg-outline", hex: "#747878", dark: true },
      { name: "outline-variant", varClass: "bg-outline-variant", hex: "#c4c7c7" },
    ],
  },
  {
    title: "ERROR",
    colors: [
      { name: "error", varClass: "bg-error", hex: "#ba1a1a", dark: true },
      { name: "on-error", varClass: "bg-on-error", hex: "#ffffff" },
      { name: "error-container", varClass: "bg-error-container", hex: "#ffdad6" },
      { name: "on-error-container", varClass: "bg-on-error-container", hex: "#93000a", dark: true },
    ],
  },
];

function ColorSwatch({ s }: { s: Swatch }) {
  return (
    <div className="flex flex-col border border-outline-variant">
      <div className={`${s.varClass} h-20 w-full border-b border-outline-variant`} />
      <div className="bg-surface-container-lowest p-3">
        <p className="font-technical-data text-technical-data text-primary">{s.name}</p>
        <p className="font-technical-data text-technical-data text-on-surface-variant uppercase">
          {s.hex}
        </p>
      </div>
    </div>
  );
}

function SectionTitle({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <span className="font-label-caps text-label-caps text-secondary mb-2 block">{index}</span>
      <h2 className="font-headline-lg text-headline-lg uppercase text-primary">{children}</h2>
      <div className="mt-4 h-1 w-24 bg-secondary" />
    </div>
  );
}

export default function PruebaEstilos() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* Header */}
      <header className="bg-carbon text-on-primary px-margin-mobile md:px-margin-desktop py-16">
        <span className="font-technical-data text-technical-data text-secondary uppercase tracking-widest">
          DESIGN SYSTEM // VERIFICACIÓN
        </span>
        <h1 className="font-display-hero text-headline-lg-mobile md:text-display-hero uppercase leading-none mt-4">
          341 BOXES <span className="text-secondary">STYLE</span> CHECK
        </h1>
        <p className="font-body-lg text-body-lg text-plata max-w-2xl mt-6">
          Página temporal para verificar la traducción del sistema de diseño a Tailwind v4
          (colores, tipografías, espaciados y utilidades custom). Se elimina después.
        </p>
      </header>

      {/* 01 — COLORES */}
      <section className="px-margin-mobile md:px-margin-desktop py-20">
        <SectionTitle index="01 // COLORES">Paleta completa</SectionTitle>
        <div className="space-y-12">
          {colorGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-label-caps text-label-caps text-asfalto mb-4">{group.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-gutter">
                {group.colors.map((s) => (
                  <ColorSwatch key={s.name} s={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 02 — TIPOGRAFÍAS */}
      <section className="bg-surface-container-lowest px-margin-mobile md:px-margin-desktop py-20 border-t border-outline-variant">
        <SectionTitle index="02 // TIPOGRAFÍAS">Escala tipográfica</SectionTitle>
        <div className="space-y-10">
          <div className="border-b border-outline-variant pb-8">
            <p className="font-technical-data text-technical-data text-secondary mb-3">
              font-display-hero · Anton · 96/90 · -0.04em
            </p>
            <p className="font-display-hero text-display-hero uppercase leading-none">PIT STOP</p>
          </div>
          <div className="border-b border-outline-variant pb-8">
            <p className="font-technical-data text-technical-data text-secondary mb-3">
              font-headline-lg · Anton · 48/52
            </p>
            <p className="font-headline-lg text-headline-lg uppercase">Mecánica de precisión</p>
          </div>
          <div className="border-b border-outline-variant pb-8">
            <p className="font-technical-data text-technical-data text-secondary mb-3">
              font-headline-md · Anton · 32/36
            </p>
            <p className="font-headline-md text-headline-md uppercase">Boxes de servicio</p>
          </div>
          <div className="border-b border-outline-variant pb-8">
            <p className="font-technical-data text-technical-data text-secondary mb-3">
              font-headline-lg-mobile · Anton · 36/40
            </p>
            <p className="font-headline-lg-mobile text-headline-lg-mobile uppercase">
              Título mobile
            </p>
          </div>
          <div className="border-b border-outline-variant pb-8">
            <p className="font-technical-data text-technical-data text-secondary mb-3">
              font-body-lg · Hanken Grotesk · 18/28
            </p>
            <p className="font-body-lg text-body-lg max-w-2xl">
              Llevamos el estándar de la alta competición a tu mantenimiento diario. Precisión
              técnica para tu vehículo cotidiano.
            </p>
          </div>
          <div className="border-b border-outline-variant pb-8">
            <p className="font-technical-data text-technical-data text-secondary mb-3">
              font-body-md · Hanken Grotesk · 16/24
            </p>
            <p className="font-body-md text-body-md max-w-2xl">
              Diagnóstico computarizado y ejecución técnica bajo protocolos de escudería
              internacional. Velocidad de ejecución sin comprometer la precisión.
            </p>
          </div>
          <div className="border-b border-outline-variant pb-8">
            <p className="font-technical-data text-technical-data text-secondary mb-3">
              font-label-caps · JetBrains Mono · 14/20 · 0.2em · 700
            </p>
            <p className="font-label-caps text-label-caps uppercase">Request Appointment</p>
          </div>
          <div>
            <p className="font-technical-data text-technical-data text-secondary mb-3">
              font-technical-data · JetBrains Mono · 13/18 · 500
            </p>
            <p className="font-technical-data text-technical-data">
              // SYSTEM_STATUS: OPTIMAL · LATENCY: 0.002MS · LOCATION: PIT_LANE_01
            </p>
          </div>
        </div>
      </section>

      {/* 03 — ESPACIADOS */}
      <section className="px-margin-mobile md:px-margin-desktop py-20 border-t border-outline-variant">
        <SectionTitle index="03 // ESPACIADOS">Tokens de espacio</SectionTitle>
        <div className="space-y-4">
          {[
            { name: "unit", w: "w-unit", px: "8px" },
            { name: "margin-mobile", w: "w-margin-mobile", px: "16px" },
            { name: "gutter", w: "w-gutter", px: "24px" },
            { name: "margin-desktop", w: "w-margin-desktop", px: "80px" },
            { name: "section-gap", w: "w-section-gap", px: "120px" },
          ].map((sp) => (
            <div key={sp.name} className="flex items-center gap-4">
              <div className={`${sp.w} h-8 bg-secondary`} />
              <span className="font-technical-data text-technical-data">
                {sp.name} · {sp.px}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — UTILIDADES CUSTOM */}
      <section className="bg-carbon text-on-primary px-margin-mobile md:px-margin-desktop py-20">
        <div className="mb-10">
          <span className="font-label-caps text-label-caps text-secondary mb-2 block">
            04 // UTILIDADES
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase">Componentes custom</h2>
          <div className="mt-4 h-1 w-24 bg-secondary" />
        </div>

        {/* Botones */}
        <h3 className="font-label-caps text-label-caps text-plata mb-6">BOTONES (.skew-button)</h3>
        <div className="flex flex-wrap gap-4 mb-16">
          <button className="bg-secondary text-on-primary font-label-caps text-label-caps px-10 py-4 uppercase skew-button hover:bg-red-700 transition-colors">
            Quiero mi Box
          </button>
          <button className="bg-on-primary text-primary font-label-caps text-label-caps px-10 py-4 uppercase skew-button hover:bg-plata transition-colors">
            Ver Servicios
          </button>
          <button className="border-2 border-on-primary text-on-primary font-label-caps text-label-caps px-10 py-4 uppercase hover:bg-on-primary hover:text-carbon transition-all">
            Sin skew (borde)
          </button>
          <button className="bg-primary text-on-primary font-label-caps text-label-caps px-10 py-4 uppercase skew-btn-right hover:bg-secondary transition-colors">
            .skew-btn-right
          </button>
        </div>

        {/* Cards */}
        <h3 className="font-label-caps text-label-caps text-plata mb-6">
          CARDS (.technical-border · .skew-card · .service-card)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-16">
          <div className="service-card bg-surface text-on-surface technical-border p-8">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6">
              oil_barrel
            </span>
            <h4 className="font-headline-md text-headline-md uppercase mb-2">technical-border</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Borde superior rojo de 4px + hover lift (service-card).
            </p>
            <p className="font-technical-data text-technical-data text-secondary mt-6">
              ID: SRV_LUB_01
            </p>
          </div>
          <div className="bg-secondary text-on-primary skew-card p-8">
            <span className="material-symbols-outlined text-4xl mb-6">speed</span>
            <h4 className="font-headline-md text-headline-md uppercase mb-2">skew-card</h4>
            <p className="font-body-md text-body-md">
              Corte diagonal inferior-derecho con clip-path.
            </p>
          </div>
          <div className="bg-primary-container border-t-4 border-secondary p-8">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6">
              monitoring
            </span>
            <h4 className="font-headline-md text-headline-md uppercase mb-2">border-t-4</h4>
            <p className="font-body-md text-body-md text-on-primary-container">
              Card estándar del bento grid (borde rojo + fondo carbón).
            </p>
          </div>
        </div>

        {/* f1-grid */}
        <h3 className="font-label-caps text-label-caps text-plata mb-6">FONDO (.f1-grid)</h3>
        <div className="f1-grid bg-surface h-40 mb-16 border border-outline-variant" />

        {/* diagonal-divider */}
        <h3 className="font-label-caps text-label-caps text-plata mb-6">
          (.diagonal-divider)
        </h3>
        <div className="diagonal-divider bg-secondary h-40 mb-16 flex items-center justify-center">
          <span className="font-headline-md text-headline-md text-on-primary uppercase">
            Sección diagonal
          </span>
        </div>
      </section>

      {/* 05 — MARQUEE */}
      <div className="bg-tertiary py-6 border-t-2 border-b-2 border-secondary overflow-hidden whitespace-nowrap">
        <div className="animate-marquee gap-16 font-technical-data text-technical-data text-on-primary">
          {[
            "// OIL_PRESSURE: 4.5 BAR",
            "// TYRE_TEMP_FL: 92°C",
            "// FUEL_MIX: OPTIMIZED",
            "// BRAKE_WEAR: 15%",
            "// ENGINE_RPM_IDLE: 850",
            "// GEARBOX_SYNC: ACTIVE",
            "// OIL_PRESSURE: 4.5 BAR",
            "// TYRE_TEMP_FL: 92°C",
            "// FUEL_MIX: OPTIMIZED",
            "// BRAKE_WEAR: 15%",
          ].map((t, i) => (
            <span key={i} className="px-8">
              {t}
            </span>
          ))}
        </div>
      </div>

      <footer className="bg-primary text-on-primary px-margin-mobile md:px-margin-desktop py-12">
        <p className="font-technical-data text-technical-data text-plata uppercase">
          // FIN DE LA PÁGINA DE PRUEBA — BORRAR ANTES DE PRODUCCIÓN
        </p>
      </footer>
    </div>
  );
}
