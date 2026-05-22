import type { Metadata } from "next";
import Link from "next/link";
import {
  SITE,
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_TURNO_URL,
  EMAIL_URL,
  MAPS_URL,
  INSTAGRAM_URL,
} from "@/lib/site-config";
import ContactoForm from "./ContactoForm";

export const metadata: Metadata = { title: "Contacto | 341 BOXES" };

// ============================================================
//  MAPA EMBEBIDO (Google Maps, sin API key)
//  ------------------------------------------------------------
//  Se arma desde SITE.DIRECCION. Como hoy la dirección es un
//  ⚠️ PLACEHOLDER, el mapa cae sobre la zona de Rosario.
//  🗺️ FUTURO: al confirmar la dirección/coordenadas reales, este
//  embed las tomará solo (deriva de SITE.DIRECCION). Si se quiere
//  un pin exacto, reemplazar por la URL "Insertar mapa" de Google.
// ============================================================
const MAPA_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  SITE.DIRECCION,
)}&output=embed`;

// ============================================================
//  BLOQUE DE DATOS DE CONTACTO (todo desde site-config.ts)
// ============================================================
const CONTACTOS = [
  {
    icon: "location_on",
    label: "Dirección",
    valor: SITE.DIRECCION,
    href: MAPS_URL,
    externo: true,
  },
  {
    icon: "chat",
    label: "WhatsApp",
    valor: WHATSAPP_DISPLAY,
    href: WHATSAPP_URL,
    externo: true,
  },
  {
    icon: "mail",
    label: "Email",
    valor: SITE.EMAIL,
    href: EMAIL_URL,
    externo: false,
  },
  {
    icon: "photo_camera",
    label: "Instagram",
    valor: `@${SITE.INSTAGRAM}`,
    href: INSTAGRAM_URL,
    externo: true,
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* ============================================================
          ENCABEZADO
          ============================================================ */}
      <header className="relative overflow-hidden bg-carbon text-on-primary px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="absolute inset-0 diagonal-bg -z-0 pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <span className="block font-label-caps text-label-caps text-secondary mb-4">
            Estamos cerca
          </span>
          <h1 className="font-display-hero text-headline-lg-mobile md:text-display-hero uppercase leading-none mb-6">
            Contacto
          </h1>
          <p className="font-body-lg text-body-lg text-plata max-w-2xl border-l-4 border-secondary pl-6">
            Escribinos, pedí tu turno o pasá por el taller. Te respondemos
            rápido.
          </p>
        </div>
      </header>

      {/* ============================================================
          BLOQUE DE DATOS + HORARIOS
          ============================================================ */}
      <section className="bg-surface px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Datos de contacto */}
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
                  <span className="material-symbols-outlined text-3xl text-secondary">
                    {c.icon}
                  </span>
                  <span className="material-symbols-outlined text-base opacity-40 group-hover:opacity-100 transition-opacity">
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

          {/* Horarios (estilo dashboard) */}
          <div className="lg:col-span-5 bg-carbon text-on-primary p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-3xl text-secondary">
                schedule
              </span>
              <h2 className="font-headline-md text-headline-md uppercase">
                Horarios
              </h2>
            </div>
            <dl className="space-y-4">
              {SITE.HORARIOS.map((h) => (
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
      </section>

      {/* ============================================================
          CTA WHATSAPP (destacado)
          ============================================================ */}
      <section className="bg-secondary text-white px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase leading-tight mb-4">
              ¿Lo resolvemos por WhatsApp?
            </h2>
            <p className="font-body-lg text-body-lg text-white/90">
              Contanos qué le pasa a tu auto y coordinamos un turno.
            </p>
          </div>
          <a
            href={WHATSAPP_TURNO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-secondary font-label-caps text-label-caps px-10 py-5 uppercase skew-button hover:bg-carbon hover:text-white transition-colors inline-flex items-center justify-center gap-4"
          >
            Escribinos por WhatsApp
            <span className="material-symbols-outlined">chat</span>
          </a>
        </div>
      </section>

      {/* ============================================================
          FORMULARIO (client component)
          ============================================================ */}
      <section className="bg-surface f1-grid px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="max-w-3xl mx-auto bg-white border border-primary p-margin-mobile md:p-16">
          <div className="mb-12">
            <span className="block font-label-caps text-label-caps text-secondary mb-4">
              Escribinos
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
              Dejanos tu consulta
            </h2>
          </div>
          <ContactoForm />
        </div>
      </section>

      {/* ============================================================
          MAPA EMBEBIDO
          ============================================================ */}
      <section className="bg-carbon">
        <div className="relative">
          <iframe
            title={`Ubicación de ${SITE.NOMBRE} en el mapa`}
            src={MAPA_EMBED}
            className="w-full h-[360px] md:h-[480px] grayscale border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          {/* Enlace directo a Google Maps por si el iframe no carga */}
          <Link
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-secondary text-white font-label-caps text-label-caps px-6 py-3 uppercase skew-button hover:bg-primary transition-colors inline-flex items-center gap-2"
          >
            Ver en Google Maps
            <span className="material-symbols-outlined text-base">map</span>
          </Link>
        </div>
      </section>
    </>
  );
}
