// ============================================================
// 341 BOXES — Configuración central del sitio
// ------------------------------------------------------------
// ÚNICO lugar para editar los datos de contacto y marca.
// Cambiá un valor acá y se refleja en toda la web (nav, footer,
// páginas de contacto, etc.).
//
// ⚠️  Los campos marcados con "PLACEHOLDER" son provisorios:
//     reemplazar por los datos reales antes de publicar.
// ============================================================

import type { Metadata } from "next";

export const SITE = {
  /** Nombre de la marca (se muestra en mayúsculas en logo/footer). */
  NOMBRE: "341 BOXES",

  /** Frase oficial de marca. */
  FRASE_MARCA: "El trato que tu auto se merece",

  /** Bajada corta de marca para el footer. */
  TAGLINE: "Servicio mecánico en Rosario. El trato que tu auto se merece.",

  // ✅ CONFIRMADA — dirección real del taller.
  DIRECCION: "Av. Eva Perón 5525, Rosario",

  // ✅ CONFIRMADO — número de contacto en formato internacional, sin "+" ni espacios.
  // Mismo número para WhatsApp y para llamados.
  // Visible como "+54 9 3412 63-2104".
  WHATSAPP: "5493412632104",

  // ⚠️ PLACEHOLDER — usuario de Instagram (sin la @)
  INSTAGRAM: "341.boxes",

  // Email de contacto.
  EMAIL: "contacto@341boxes.ar",

  // Los horarios de atención viven en HORARIOS_SEMANA (abajo): única
  // fuente de la verdad para la tabla de contacto y la generación
  // automática de turnos en /pedir-turno.

  /** Año de copyright (editar según corresponda). */
  COPYRIGHT_YEAR: 2025,
} as const;

// ------------------------------------------------------------
// Helpers derivados (no editar a mano: se arman solos)
// ------------------------------------------------------------

/** URL del perfil de Instagram. */
export const INSTAGRAM_URL = `https://instagram.com/${SITE.INSTAGRAM}`;

/** URL de WhatsApp (chat directo, sin mensaje). */
export const WHATSAPP_URL = `https://wa.me/${SITE.WHATSAPP}`;

/** URL "tel:" para llamados (mismo número que WhatsApp). */
export const TEL_URL = `tel:+${SITE.WHATSAPP}`;

/**
 * Número de contacto formateado para mostrar en pantalla (WhatsApp y
 * llamados). Si se cambia SITE.WHATSAPP, actualizar también este display.
 */
export const WHATSAPP_DISPLAY = "+54 9 3412 63-2104";

/** Alias semántico: el mismo número se usa para llamados. */
export const TEL_DISPLAY = WHATSAPP_DISPLAY;

/**
 * Arma un link de WhatsApp con un mensaje pre-cargado.
 * Ej: waLink("Hola, quiero un turno") → wa.me/549...?text=Hola%2C...
 */
export const waLink = (mensaje: string): string =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(mensaje)}`;

/** Mensaje por defecto para el botón "Pedir turno". */
export const WHATSAPP_TURNO_URL = waLink(
  `Hola ${SITE.NOMBRE}, quiero pedir un turno para mi auto.`,
);

/** URL "mailto:" para el email. */
export const EMAIL_URL = `mailto:${SITE.EMAIL}`;

/** Link a Google Maps con la dirección. */
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.DIRECCION,
)}`;

// ------------------------------------------------------------
// HORARIOS DE ATENCIÓN
// ------------------------------------------------------------
// ✅ CONFIRMADA: horarios reales del taller.
// Fuente única de la verdad para: la tabla de horarios (sección
// Contacto) y la generación automática de turnos en /pedir-turno.

export type DiaHorario = {
  abierto: boolean;
  apertura: string | null; // "HH:MM" (24h) o null si está cerrado
  cierre: string | null; // "HH:MM" (24h) o null si está cerrado
};

export const HORARIOS_SEMANA: Record<string, DiaHorario> = {
  lunes: { abierto: true, apertura: "08:00", cierre: "17:00" },
  martes: { abierto: true, apertura: "08:00", cierre: "17:00" },
  miercoles: { abierto: true, apertura: "08:00", cierre: "17:00" },
  jueves: { abierto: true, apertura: "08:00", cierre: "17:00" },
  viernes: { abierto: true, apertura: "08:00", cierre: "17:00" },
  sabado: { abierto: true, apertura: "08:00", cierre: "13:00" },
  domingo: { abierto: false, apertura: null, cierre: null },
};

/** Cada cuántos minutos se generan los slots de turno. */
export const SLOT_MINUTOS = 30;

// JS Date.getDay(): 0=Domingo .. 6=Sábado → clave en HORARIOS_SEMANA.
const CLAVES_POR_GETDAY = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
] as const;

// Orden visual de lunes a domingo, con etiquetas largas y cortas.
const SEMANA_ORDEN: { key: string; largo: string; corto: string }[] = [
  { key: "lunes", largo: "Lunes", corto: "Lun" },
  { key: "martes", largo: "Martes", corto: "Mar" },
  { key: "miercoles", largo: "Miércoles", corto: "Mié" },
  { key: "jueves", largo: "Jueves", corto: "Jue" },
  { key: "viernes", largo: "Viernes", corto: "Vie" },
  { key: "sabado", largo: "Sábado", corto: "Sáb" },
  { key: "domingo", largo: "Domingo", corto: "Dom" },
];

/** "08:30" → minutos desde medianoche (510). */
function aMinutos(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

/** Minutos desde medianoche → "HH:MM" (con cero a la izquierda). */
function aHHMM(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

/** Quita el cero inicial de la hora para mostrar ("08:30" → "8:30"). */
function horaLinda(hhmm: string): string {
  return hhmm.replace(/^0/, "");
}

/** ¿El taller abre ese día? (recibe un Date). */
export function estaAbierto(d: Date): boolean {
  return HORARIOS_SEMANA[CLAVES_POR_GETDAY[d.getDay()]]?.abierto ?? false;
}

/**
 * Slots de horario para un día concreto, generados desde la apertura hasta
 * el cierre cada SLOT_MINUTOS (sin incluir la hora de cierre).
 * Ej. lunes 08:30–18:00, paso 30 → ["08:30","09:00", … ,"17:30"].
 */
export function slotsParaDia(d: Date): string[] {
  const cfg = HORARIOS_SEMANA[CLAVES_POR_GETDAY[d.getDay()]];
  if (!cfg || !cfg.abierto || !cfg.apertura || !cfg.cierre) return [];
  const ini = aMinutos(cfg.apertura);
  const fin = aMinutos(cfg.cierre);
  const out: string[] = [];
  for (let m = ini; m < fin; m += SLOT_MINUTOS) out.push(aHHMM(m));
  return out;
}

// Agrupa días consecutivos con el mismo horario (para mostrarlos lindo).
function agruparHorarios(): { dias: { largo: string; corto: string }[]; cfg: DiaHorario }[] {
  const grupos: { dias: { largo: string; corto: string }[]; cfg: DiaHorario }[] = [];
  for (const dia of SEMANA_ORDEN) {
    const cfg = HORARIOS_SEMANA[dia.key];
    const ult = grupos[grupos.length - 1];
    const mismo =
      ult &&
      ult.cfg.abierto === cfg.abierto &&
      ult.cfg.apertura === cfg.apertura &&
      ult.cfg.cierre === cfg.cierre;
    if (mismo) ult.dias.push({ largo: dia.largo, corto: dia.corto });
    else grupos.push({ dias: [{ largo: dia.largo, corto: dia.corto }], cfg });
  }
  return grupos;
}

/**
 * Filas de horarios para tablas (sección Contacto). Reemplaza al viejo
 * SITE.HORARIOS. Ej. [{ dias:"Lunes a viernes", horas:"8:30 a 18:00" }, …].
 */
export const HORARIOS_ROWS: { dias: string; horas: string }[] = agruparHorarios().map(
  (g) => {
    const dias =
      g.dias.length === 1
        ? g.dias[0].largo.endsWith("s")
          ? g.dias[0].largo
          : `${g.dias[0].largo}s`
        : `${g.dias[0].largo} a ${g.dias[g.dias.length - 1].largo.toLowerCase()}`;
    const horas =
      g.cfg.abierto && g.cfg.apertura && g.cfg.cierre
        ? `${horaLinda(g.cfg.apertura)} a ${horaLinda(g.cfg.cierre)}`
        : "Cerrado";
    return { dias, horas };
  },
);

/**
 * Versión legible en una línea para footer/contacto.
 * Ej. "Lun a Vie 8:30 a 18:00 · Sáb 9:00 a 13:00 · Dom cerrado".
 */
export const HORARIOS_LEGIBLE: string = agruparHorarios()
  .map((g) => {
    const dias =
      g.dias.length === 1
        ? g.dias[0].corto
        : `${g.dias[0].corto} a ${g.dias[g.dias.length - 1].corto}`;
    const horas =
      g.cfg.abierto && g.cfg.apertura && g.cfg.cierre
        ? `${horaLinda(g.cfg.apertura)} a ${horaLinda(g.cfg.cierre)}`
        : "cerrado";
    return `${dias} ${horas}`;
  })
  .join(" · ");

// ------------------------------------------------------------
// Navegación principal (orden = orden en el menú)
// ------------------------------------------------------------

export type NavItem = { label: string; href: string };

// Sitio de una sola landing: los items son anclas a secciones de "/".
// Se usa el prefijo "/" para que también funcionen desde /pedir-turno
// (Next navega a la home y salta a la sección).
export const NAV_ITEMS: NavItem[] = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

/** Ruta del botón principal de conversión. */
export const TURNO_HREF = "/pedir-turno";

// ------------------------------------------------------------
// SEO / METADATA
// ------------------------------------------------------------

// URL pública del sitio (dominio final). Se usa como metadataBase para
// resolver canónicas y la imagen Open Graph.
export const SITE_URL = "https://341boxes.ar";

/** Descripción por defecto del sitio (home y fallback de SEO). */
export const SITE_DESCRIPTION =
  "Taller de mecánica integral en Rosario. Diagnóstico honesto, presupuesto antes de empezar y trabajo garantizado. Pedí tu turno en 341 Boxes.";

/** Título por defecto del sitio (home y fallback). */
export const SITE_TITLE_DEFAULT = `${SITE.NOMBRE} — Taller mecánico en Rosario`;

/**
 * Ruta de la imagen Open Graph. La genera app/opengraph-image.tsx; este
 * route handler responde en /opengraph-image (la query con hash es opcional).
 */
export const OG_IMAGE_PATH = "/opengraph-image";

/**
 * Arma el objeto Metadata de una página con SEO + Open Graph completos.
 * - `title`: se templa como "<title> | 341 BOXES" (salvo `absoluteTitle`).
 * - La imagen OG la inyecta el archivo app/opengraph-image.tsx (sitewide).
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path?: string;
  absoluteTitle?: boolean;
}): Metadata {
  const { title, description, path = "/", absoluteTitle = false } = opts;
  const ogTitle = absoluteTitle ? title : `${title} | ${SITE.NOMBRE}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName: SITE.NOMBRE,
      locale: "es_AR",
      type: "website",
      // Imagen OG explícita: al definir openGraph por página, Next no
      // hereda la imagen del archivo app/opengraph-image.tsx, así que la
      // referenciamos por su ruta (el route handler la sirve igual).
      images: [{ url: OG_IMAGE_PATH, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}
