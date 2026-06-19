import Link from "next/link";
import Image from "next/image";
import {
  SITE,
  INSTAGRAM_URL,
  WHATSAPP_URL,
  TEL_URL,
  TEL_DISPLAY,
  MAPS_URL,
  HORARIOS_LEGIBLE,
} from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="w-full bg-tertiary text-on-tertiary technical-border">
      <div className="px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col md:flex-row justify-between gap-16">
        {/* Marca */}
        <div className="flex flex-col gap-6 max-w-xs">
          {/* Logo sobre chip blanco (el logo es negro, no se vería en el
              fondo oscuro del footer). */}
          <div className="inline-flex bg-white px-4 py-3 w-fit">
            <Image
              src="/brand/logo.png"
              alt={SITE.NOMBRE}
              width={226}
              height={78}
              className="h-9 w-auto"
            />
          </div>
          <p className="font-technical-data text-technical-data text-plata uppercase">
            {SITE.TAGLINE}
          </p>
        </div>

        {/* Columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-32">
          {/* CONTACTO */}
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-secondary mb-2">
              Contacto
            </span>

            <Link
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-technical-data text-technical-data text-plata hover:text-white transition-colors"
            >
              {SITE.DIRECCION}
            </Link>

            <Link
              href={TEL_URL}
              className="font-technical-data text-technical-data text-plata hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <span
                className="material-symbols-outlined text-base text-secondary"
                aria-hidden="true"
              >
                call
              </span>
              {TEL_DISPLAY}
            </Link>

            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-technical-data text-technical-data text-plata hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <span
                className="material-symbols-outlined text-base text-secondary"
                aria-hidden="true"
              >
                photo_camera
              </span>
              Instagram
            </Link>

            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-technical-data text-technical-data text-plata hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <span
                className="material-symbols-outlined text-base text-secondary"
                aria-hidden="true"
              >
                chat
              </span>
              WhatsApp
            </Link>

            {/* Horarios (versión legible, derivada de HORARIOS_SEMANA). */}
            <p className="font-technical-data text-technical-data text-plata inline-flex items-start gap-2">
              <span
                className="material-symbols-outlined text-base text-secondary"
                aria-hidden="true"
              >
                schedule
              </span>
              {HORARIOS_LEGIBLE}
            </p>

            {/* Mapa estilizado (referencia visual home 2). Linkea a Google Maps. */}
            <Link
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver ubicación en Google Maps"
              className="relative h-40 w-full sm:w-56 mt-4 bg-primary f1-grid border border-outline overflow-hidden group"
            >
              <span
                className="material-symbols-outlined absolute inset-0 m-auto h-fit w-fit text-secondary text-4xl group-hover:scale-110 transition-transform"
                aria-hidden="true"
              >
                location_on
              </span>
              <span className="absolute bottom-0 inset-x-0 bg-tertiary/80 px-3 py-1 font-technical-data text-technical-data text-plata uppercase">
                Ubicación
              </span>
            </Link>
          </div>

          {/* LEGAL */}
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-secondary mb-2">
              Legal
            </span>
            <Link
              href="#"
              className="font-technical-data text-technical-data text-plata hover:text-white transition-colors"
            >
              Términos
            </Link>
            <Link
              href="#"
              className="font-technical-data text-technical-data text-plata hover:text-white transition-colors"
            >
              Privacidad
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-margin-mobile md:px-margin-desktop py-6 border-t border-outline/40">
        <p className="font-technical-data text-technical-data text-plata">
          © {SITE.COPYRIGHT_YEAR} {SITE.NOMBRE}
        </p>
      </div>
    </footer>
  );
}
