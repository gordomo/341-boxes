"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_ITEMS, SITE, TURNO_HREF } from "@/lib/site-config";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white border-b-2 border-primary">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4">
        {/* Logo (imagen oficial de marca) */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label={`${SITE.NOMBRE} — Inicio`}
          className="flex items-center shrink-0"
        >
          <Image
            src="/brand/logo.png"
            alt={SITE.NOMBRE}
            width={226}
            height={78}
            priority
            className="h-8 md:h-9 w-auto"
          />
        </Link>

        {/* Menú desktop (anclas a secciones de la landing) */}
        <div className="hidden md:flex gap-gutter items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-label-caps text-label-caps uppercase pb-1 border-b-2 text-on-surface border-transparent hover:text-secondary hover:border-secondary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA + hamburguesa */}
        <div className="flex items-center gap-4">
          <Link
            href={TURNO_HREF}
            className="bg-primary text-on-primary font-label-caps text-technical-data uppercase px-4 md:px-6 py-2.5 md:py-3 skew-button transition-all active:scale-95 hover:bg-secondary whitespace-nowrap"
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
            <span className="material-symbols-outlined text-3xl" aria-hidden="true">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Menú mobile desplegable */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-outline-variant bg-white transition-[max-height] duration-300 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-margin-mobile py-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-label-caps text-label-caps uppercase py-3 border-l-4 pl-4 text-on-surface border-transparent hover:text-secondary hover:border-secondary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
