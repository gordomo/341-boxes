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

export const SITE = {
  /** Nombre de la marca (se muestra en mayúsculas en logo/footer). */
  NOMBRE: "341 BOXES",

  /** Bajada corta de marca para el footer. */
  TAGLINE: "Estándares de competición para el conductor consciente.",

  // ⚠️ PLACEHOLDER — confirmar dirección real
  DIRECCION: "Av. Eva Perón 5500, Rosario",

  // ⚠️ PLACEHOLDER — número de WhatsApp en formato internacional, sin "+" ni espacios
  // (se usa para armar el link wa.me y para mostrarlo formateado)
  WHATSAPP: "5493410000000",

  // ⚠️ PLACEHOLDER — usuario de Instagram (sin la @)
  INSTAGRAM: "341boxes",

  // ⚠️ PLACEHOLDER — email de contacto
  EMAIL: "contacto@341boxes.com",

  // ⚠️ PLACEHOLDER — horarios reales de atención del taller.
  // Cada item es una fila ("días" → "horario"). Editar/agregar libremente.
  HORARIOS: [
    { dias: "Lunes a viernes", horas: "8:30 a 18:00" },
    { dias: "Sábados", horas: "9:00 a 13:00" },
    { dias: "Domingos", horas: "Cerrado" },
  ],

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

/**
 * Número de WhatsApp formateado para mostrar en pantalla.
 * Se arma desde SITE.WHATSAPP (formato AR: 549 + área + número).
 * Ej: "5493410000000" → "+54 9 341 000 0000".
 */
export const WHATSAPP_DISPLAY = ((n: string) =>
  n.startsWith("549") && n.length === 13
    ? `+54 9 ${n.slice(3, 6)} ${n.slice(6, 9)} ${n.slice(9)}`
    : `+${n}`)(SITE.WHATSAPP);

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
// Navegación principal (orden = orden en el menú)
// ------------------------------------------------------------

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Franquicias", href: "/franquicias" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

/** Ruta del botón principal de conversión. */
export const TURNO_HREF = "/pedir-turno";
