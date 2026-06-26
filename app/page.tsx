import Link from "next/link";
import Image from "next/image";
import {
  SITE,
  waLink,
  WHATSAPP_TURNO_URL,
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  TEL_URL,
  TEL_DISPLAY,
  EMAIL_URL,
  MAPS_URL,
  INSTAGRAM_URL,
  HORARIOS_ROWS,
  SITE_TITLE_DEFAULT,
  SITE_DESCRIPTION,
  pageMetadata,
} from "@/lib/site-config";
import ContactoForm from "./components/ContactoForm";

export const metadata = pageMetadata({
  title: SITE_TITLE_DEFAULT,
  description: SITE_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

// ============================================================
//  IMÁGENES DEL HERO
//  ------------------------------------------------------------
//  - Logo oficial con fondo transparente (elemento gráfico).
//  - Imagen de portada: ilustración tipo "corte transversal" de un
//    sedán mostrando su mecánica interna, sobre fondo blanco con
//    cinta a cuadros (provista por la marca).
// ============================================================
const LOGO_TRANSPARENTE = "/brand/logo-transparente.png";
const HERO_PORTADA = "/brand/hero-portada.png";

// 2) POR QUÉ ELEGIRNOS — 4 valores de marca
const VALORES = [
  {
    icon: "precision_manufacturing",
    titulo: "Precisión",
    texto:
      "Cada trabajo, hecho con método. Diagnosticamos antes de tocar y trabajamos con la prolijidad que tu auto necesita.",
  },
  {
    icon: "balance",
    titulo: "Criterio",
    texto:
      "Te decimos qué conviene hacer y qué puede esperar. No vendemos trabajos que no necesitás.",
  },
  {
    icon: "visibility",
    titulo: "Transparencia",
    texto:
      "Te mostramos. Te cotizamos. Vos decidís. Sin sorpresas al final.",
  },
  {
    icon: "verified",
    titulo: "Garantía",
    texto: "Trabajo escrito. Si algo no quedó bien, lo resolvemos.",
  },
];

// 3) SERVICIOS — los 6 reales
type Servicio = {
  id: string;
  icon: string;
  titulo: string;
  descripcion: string;
  dato: { label: string; valor: string };
};

const SERVICIOS: Servicio[] = [
  {
    id: "01",
    icon: "local_gas_station",
    titulo: "Inyección",
    descripcion:
      "Limpieza y diagnóstico del sistema de inyección. Mejor rendimiento y menos consumo.",
    dato: { label: "Resultado", valor: "Menos consumo" },
  },
  {
    id: "02",
    icon: "oil_barrel",
    titulo: "Lubricantes",
    descripcion:
      "Cambio de aceite y filtros con productos de calidad, según lo que pide tu vehículo.",
    dato: { label: "Tiempo estimado", valor: "~30 min" },
  },
  {
    id: "03",
    icon: "battery_charging_full",
    titulo: "Baterías",
    descripcion:
      "Chequeo de batería, alternador y carga. Reemplazo si hace falta.",
    dato: { label: "Chequeo", valor: "Sin cargo" },
  },
  {
    id: "04",
    icon: "album",
    titulo: "Frenos",
    descripcion:
      "Pastillas, discos y líquido de freno. Tu auto frena como debe.",
    dato: { label: "Tiempo estimado", valor: "~45 min" },
  },
  {
    id: "05",
    icon: "thermostat",
    titulo: "Refrigeración",
    descripcion:
      "Radiador, bomba de agua, líquidos. Evitamos que el motor recaliente.",
    dato: { label: "Alcance", valor: "Revisión completa" },
  },
  {
    id: "06",
    icon: "tire_repair",
    titulo: "Tren delantero",
    descripcion:
      "Alineación, balanceo y suspensión. Manejo seguro y cubiertas que duran.",
    dato: { label: "Incluye", valor: "Alineación + balanceo" },
  },
];

// 6) CONTACTO — bloque de datos
const MAPA_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  SITE.DIRECCION,
)}&output=embed`;

const CONTACTOS = [
  { icon: "location_on", label: "Dirección", valor: SITE.DIRECCION, href: MAPS_URL, externo: true },
  { icon: "call", label: "Teléfono", valor: TEL_DISPLAY, href: TEL_URL, externo: false },
  { icon: "chat", label: "WhatsApp", valor: WHATSAPP_DISPLAY, href: WHATSAPP_URL, externo: true },
  { icon: "mail", label: "Email", valor: SITE.EMAIL, href: EMAIL_URL, externo: false },
  { icon: "photo_camera", label: "Instagram", valor: `@${SITE.INSTAGRAM}`, href: INSTAGRAM_URL, externo: true },
];

// ============================================================
//  Cinta a cuadros (línea de meta) — divisor de marca.
// ============================================================
function CintaCuadros() {
  return <div aria-hidden className="checkered h-4 w-full" />;
}

export default function Home() {
  return (
    <>
      {/* ============================================================
          1) HERO — fondo blanco. Logo transparente + texto a la
             izquierda; foto de trabajo del taller a la derecha.
          ============================================================ */}
      <section className="relative overflow-hidden bg-white">
        {/* Acento diagonal rojo sutil (la raya entre 341 y BOXES) */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 right-1/2 h-[140%] w-3 bg-secondary/70 rotate-[18deg] hidden lg:block"
        />
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Texto + logo */}
            <div className="space-y-6">
              <Image
                src={LOGO_TRANSPARENTE}
                alt={SITE.NOMBRE}
                width={273}
                height={66}
                priority
                className="w-60 md:w-80 h-auto"
              />
              <p className="font-technical-data text-technical-data text-secondary uppercase tracking-[0.3em]">
                Servicio mecánico
              </p>
              <h1 className="font-display-hero text-[2.5rem] leading-[1.02] md:text-[3.5rem] lg:text-[4rem] text-primary uppercase">
                El trato que tu <span className="text-secondary">auto</span> se
                merece
              </h1>
              <p className="font-body-lg text-body-lg text-asfalto max-w-xl">
                Mecánica integral en Rosario. Inyección, frenos, baterías,
                refrigeración, lubricantes y tren delantero, hechos con criterio
                y transparencia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="/pedir-turno"
                  className="bg-secondary text-white font-label-caps text-label-caps px-8 py-5 skew-button text-center hover:bg-primary transition-colors duration-300 inline-flex items-center justify-center gap-3"
                >
                  <span className="material-symbols-outlined text-xl" aria-hidden="true">event_available</span>
                  Pedir turno online
                </a>
                <a
                  href={WHATSAPP_TURNO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary text-primary font-label-caps text-label-caps px-8 py-5 text-center hover:bg-primary hover:text-white transition-colors duration-300 inline-flex items-center justify-center gap-3"
                >
                  <span className="material-symbols-outlined text-xl" aria-hidden="true">chat</span>
                  Pedir turno por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className="border-2 border-primary text-primary font-label-caps text-label-caps px-8 py-5 text-center hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  Ver servicios
                </a>
              </div>
            </div>

            {/* Foto de trabajo del taller */}
            <div className="relative">
              {/* Marco con esquinas rojas (detalle técnico) */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-secondary z-10" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-secondary z-10" />
              <div className="relative aspect-[40/21] w-full border-2 border-primary overflow-hidden bg-white">
                <Image
                  src={HERO_PORTADA}
                  alt="Corte transversal de un sedán mostrando su mecánica interna"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CintaCuadros />

      {/* ============================================================
          2) POR QUÉ ELEGIRNOS — 4 valores (fondo blanco)
          ============================================================ */}
      <section className="bg-white px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="mb-16">
          <span className="block font-label-caps text-label-caps text-secondary mb-4">
            Por qué elegirnos
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Cuatro razones, sin vueltas
          </h2>
          <div className="h-1 w-24 bg-secondary mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {VALORES.map((v) => (
            <article
              key={v.titulo}
              className="service-card bg-white border border-primary technical-border p-8 flex flex-col h-full"
            >
              <span className="material-symbols-outlined text-secondary text-5xl mb-6" aria-hidden="true">
                {v.icon}
              </span>
              <h3 className="font-headline-md text-headline-md text-primary uppercase mb-4">
                {v.titulo}
              </h3>
              <p className="font-body-md text-body-md text-asfalto">{v.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ============================================================
          3) SERVICIOS (#servicios) — los 6 reales (fondo blanco)
          ============================================================ */}
      <section
        id="servicios"
        className="bg-white f1-grid px-margin-mobile md:px-margin-desktop py-section-gap"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span className="block font-label-caps text-label-caps text-secondary mb-4">
              Mecánica integral
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
              Nuestros boxes
            </h2>
            <div className="h-1 w-24 bg-secondary mt-4" />
          </div>
          <p className="font-body-md text-body-md text-asfalto max-w-md">
            Mantenimiento y reparación con la prolijidad de un equipo
            profesional. Tiempos claros y repuestos de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {SERVICIOS.map((s) => (
            <article
              key={s.id}
              className="service-card bg-white border border-primary technical-border p-8 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-4xl text-secondary" aria-hidden="true">
                  {s.icon}
                </span>
                <span className="font-technical-data text-technical-data text-on-surface-variant bg-plata/20 px-2 py-1">
                  BOX_{s.id}
                </span>
              </div>

              <h3 className="font-headline-md text-headline-md text-primary uppercase mb-4">
                {s.titulo}
              </h3>
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
        </div>
      </section>

      <CintaCuadros />

      {/* ============================================================
          4) NOSOTROS (#nosotros) — fondo blanco
          ============================================================ */}
      <section
        id="nosotros"
        className="bg-white px-margin-mobile md:px-margin-desktop py-section-gap"
      >
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <span className="block font-label-caps text-label-caps text-secondary mb-4">
              El taller
            </span>
            <h2 className="font-display-hero text-headline-lg-mobile md:text-headline-lg text-primary uppercase leading-none">
              Cuidar tu auto es nuestra misión
            </h2>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant">
            En {SITE.NOMBRE} creemos que llevar el auto al taller no tiene por
            qué ser un dolor de cabeza. Por eso trabajamos distinto: cada
            vehículo se diagnostica con método, se presupuesta antes de empezar
            y se repara con repuestos de calidad.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Somos un taller familiar de Rosario. Atendemos autos fuera de
            garantía que siguen mereciendo un estándar de servicio oficial:
            trabajo documentado, tiempos claros y respeto por vos y por tu auto.
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

      <CintaCuadros />

      {/* ============================================================
          5) CONTACTO (#contacto) — fondo blanco
          ============================================================ */}
      <section
        id="contacto"
        className="bg-white px-margin-mobile md:px-margin-desktop py-section-gap"
      >
        <div className="mb-16">
          <span className="block font-label-caps text-label-caps text-secondary mb-4">
            Estamos cerca
          </span>
          <h2 className="font-display-hero text-headline-lg-mobile md:text-display-hero text-primary uppercase leading-none">
            Contacto
          </h2>
          <p className="font-body-lg text-body-lg text-asfalto max-w-2xl border-l-4 border-secondary pl-6 mt-6">
            Escribinos, pedí tu turno o pasá por el taller. Te respondemos
            rápido.
          </p>
        </div>

        {/* Datos + horarios */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-section-gap">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            {CONTACTOS.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                target={c.externo ? "_blank" : undefined}
                rel={c.externo ? "noopener noreferrer" : undefined}
                className="group bg-white border border-primary technical-border p-6 flex flex-col gap-4 hover:bg-primary hover:text-on-primary transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-3xl text-secondary" aria-hidden="true">
                    {c.icon}
                  </span>
                  <span
                    className="material-symbols-outlined text-base opacity-40 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  >
                    arrow_outward
                  </span>
                </div>
                <div>
                  <span className="block font-technical-data text-[10px] uppercase tracking-widest text-on-surface-variant group-hover:text-plata">
                    {c.label}
                  </span>
                  <span className="font-body-lg font-bold break-words">
                    {c.valor}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Horarios (panel oscuro contenido, para contraste) */}
          <div className="lg:col-span-5 bg-carbon text-on-primary p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-3xl text-secondary" aria-hidden="true">
                schedule
              </span>
              <h3 className="font-headline-md text-headline-md uppercase">
                Horarios
              </h3>
            </div>
            <dl className="space-y-4">
              {HORARIOS_ROWS.map((h) => (
                <div
                  key={h.dias}
                  className="flex justify-between items-baseline gap-4 border-b border-outline/40 pb-4 last:border-0 last:pb-0"
                >
                  <dt className="font-technical-data text-technical-data text-plata uppercase">
                    {h.dias}
                  </dt>
                  <dd className="font-technical-data text-technical-data text-white uppercase text-right">
                    {h.horas}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* CTA WhatsApp — fondo blanco, botón rojo grande + detalle de cuadros */}
        <div className="relative border-2 border-primary overflow-hidden mb-section-gap">
          <div className="checkered h-3 w-full" aria-hidden />
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 p-8 md:p-12">
            <div className="max-w-xl">
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase leading-tight mb-4">
                ¿Lo resolvemos por WhatsApp?
              </h3>
              <p className="font-body-lg text-body-lg text-asfalto">
                Contanos qué le pasa a tu auto y coordinamos un turno.
              </p>
            </div>
            <a
              href={WHATSAPP_TURNO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-secondary text-white font-label-caps text-label-caps px-10 py-5 uppercase skew-button hover:bg-primary transition-colors inline-flex items-center justify-center gap-4"
            >
              Escribinos por WhatsApp
              <span className="material-symbols-outlined" aria-hidden="true">chat</span>
            </a>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="max-w-3xl mx-auto border-2 border-primary p-margin-mobile md:p-16 mb-section-gap">
          <div className="mb-12">
            <span className="block font-label-caps text-label-caps text-secondary mb-4">
              Escribinos
            </span>
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
              Dejanos tu consulta
            </h3>
          </div>
          <ContactoForm />
        </div>

        {/* Mapa */}
        <div className="relative border-2 border-primary">
          <iframe
            title={`Ubicación de ${SITE.NOMBRE} en el mapa`}
            src={MAPA_EMBED}
            className="w-full h-[360px] md:h-[480px] grayscale border-0 block"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <Link
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-secondary text-white font-label-caps text-label-caps px-6 py-3 uppercase skew-button hover:bg-primary transition-colors inline-flex items-center gap-2"
          >
            Ver en Google Maps
            <span className="material-symbols-outlined text-base" aria-hidden="true">map</span>
          </Link>
        </div>
      </section>

      <CintaCuadros />

      {/* ============================================================
          6) CTA FINAL — fondo blanco, botón rojo
          ============================================================ */}
      <section className="bg-white px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            ¿Listo para traer tu auto?
          </h2>
          <p className="font-body-lg text-body-lg text-asfalto">
            Pedí tu turno y dejá tu vehículo en manos de un equipo que trabaja
            en serio.
          </p>
          <div className="pt-2">
            <a
              href={WHATSAPP_TURNO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-white font-label-caps text-label-caps px-12 py-5 skew-button hover:bg-primary transition-colors duration-300"
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">chat</span>
              Pedir turno por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
