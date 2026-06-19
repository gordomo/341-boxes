# 341 BOXES — Instrucciones para el programador

## Stack
- Next.js 16.2 (App Router) + TypeScript
- Tailwind CSS v4 (config en app/globals.css con @theme)
- Fuentes Google vía next/font
- Sin backend ni base de datos: los formularios abren WhatsApp (wa.me)

## Requisitos
- Node.js 18.18+ (recomendado 20+)
- npm (o pnpm/yarn)
- IMPORTANTE: no trabajar dentro de carpetas sincronizadas con OneDrive/Dropbox (interfieren con la cache .next)

## Cómo levantarlo
1. Descomprimir el zip en una carpeta local.
2. Abrir terminal en esa carpeta.
3. npm install   ← instala dependencias (5-10 min la primera vez)
4. npm run dev   ← levanta el dev server en http://localhost:3000

## Comandos
- npm run dev    desarrollo local
- npm run build  build de producción
- npm run start  servir el build localmente
- npm run lint   linter

## Estructura
- app/page.tsx                landing única (Hero + Por qué + Servicios + Nosotros + Contacto)
- app/pedir-turno/            página de reserva (flujo de 4 pasos, abre WhatsApp al confirmar)
- app/components/             Navbar y Footer (aplicados en app/layout.tsx)
- app/globals.css             sistema de diseño (colores, tipografías, utilidades custom)
- lib/site-config.ts          ⭐ ARCHIVO CENTRAL: datos de contacto, horarios, items del menú
- public/brand/               logos e imágenes
- next.config.ts              config + redirects 308 de rutas viejas

## Datos editables (todo en lib/site-config.ts)
- NOMBRE, TAGLINE, DIRECCION, WHATSAPP, INSTAGRAM, EMAIL, SITE_URL
- HORARIOS_SEMANA (objeto por día, alimenta el calendario de turnos)
- SLOT_MINUTOS (cada cuántos minutos generar slots)
- NAV_ITEMS (menú)

Cualquier cambio se hace SOLO acá y se refleja en todo el sitio.

## Placeholders pendientes a confirmar/reemplazar
- WHATSAPP, INSTAGRAM, EMAIL, SITE_URL en site-config.ts
- public/brand/hero-portada.png → imagen del hero (usada en app/page.tsx), reemplazar por foto real del taller

## Notas
- /pedir-turno es maqueta funcional: el flujo es real pero "confirmar" abre WhatsApp con el resumen. No hay reserva online real ni backend. Está rotulado como "Reserva online — próximamente".
- Los formularios de contacto y turno abren WhatsApp. Si más adelante se quiere envío por email, hay que sumar un servicio (Resend, SendGrid, Formspree). Los puntos de conexión están comentados en el código.
- Las rutas viejas (/servicios, /nosotros, /contacto) redirigen 308 a las anclas correspondientes en /.
- SITE_URL en site-config.ts debe actualizarse con el dominio final antes de publicar (afecta canónicas y Open Graph).

## Deploy recomendado
- Vercel (deploy con un click desde GitHub, SSL gratis, CDN global).
- Alternativas: Netlify, Cloudflare Pages, cualquier hosting Node.js que soporte Next.js 16.
