import Link from "next/link";
import {
  SITE,
  INSTAGRAM_URL,
  WHATSAPP_URL,
  MAPS_URL,
} from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="w-full bg-tertiary text-on-tertiary technical-border">
      <div className="px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col md:flex-row justify-between gap-16">
        {/* Marca */}
        <div className="flex flex-col gap-6 max-w-xs">
          <div className="font-headline-lg text-headline-lg text-on-tertiary uppercase italic leading-none">
            {SITE.NOMBRE}
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
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-technical-data text-technical-data text-plata hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base text-secondary">
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
              <span className="material-symbols-outlined text-base text-secondary">
                chat
              </span>
              WhatsApp
            </Link>

            {/* Mapa estilizado (referencia visual home 2). Linkea a Google Maps. */}
            <Link
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver ubicación en Google Maps"
              className="relative h-40 w-full sm:w-56 mt-4 bg-primary f1-grid border border-outline overflow-hidden group"
            >
              <span className="material-symbols-outlined absolute inset-0 m-auto h-fit w-fit text-secondary text-4xl group-hover:scale-110 transition-transform">
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
