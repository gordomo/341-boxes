"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS, SITE, TURNO_HREF } from "@/lib/site-config";

/** ¿La ruta actual corresponde a este item del menú? */
function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  // Marca activo también en sub-rutas (ej. /servicios/frenos)
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-surface border-b-2 border-primary">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-headline-md text-headline-md text-primary uppercase italic leading-none"
        >
          {SITE.NOMBRE}
        </Link>

        {/* Menú desktop */}
        <div className="hidden md:flex gap-gutter items-center">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`font-label-caps text-label-caps uppercase pb-1 border-b-2 transition-colors duration-200 ${
                  active
                    ? "text-secondary border-secondary"
                    : "text-on-surface border-transparent hover:text-secondary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA + hamburguesa */}
        <div className="flex items-center gap-4">
          <Link
            href={TURNO_HREF}
            className="bg-primary text-on-primary font-label-caps text-technical-data uppercase px-6 py-3 skew-button transition-all active:scale-95 hover:bg-secondary"
          >
            Pedir Turno
          </Link>

          {/* Botón hamburguesa (solo mobile) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden text-primary"
          >
            <span className="material-symbols-outlined text-3xl">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Menú mobile desplegable */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-outline-variant bg-surface transition-[max-height] duration-300 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-margin-mobile py-2">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`font-label-caps text-label-caps uppercase py-3 border-l-4 pl-4 transition-colors ${
                  active
                    ? "text-secondary border-secondary"
                    : "text-on-surface border-transparent hover:text-secondary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
