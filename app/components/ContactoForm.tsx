"use client";

import { useState } from "react";
import { SITE, waLink } from "@/lib/site-config";

// ============================================================
//  FORMULARIO DE CONTACTO (cliente)
//  ------------------------------------------------------------
//  v1: al enviar arma un mensaje de WhatsApp con los datos y lo
//  abre en una pestaña nueva. No hay backend todavía.
//
//  🔌 FUTURO: este handler está preparado para conectarse a un
//  backend real. El día que exista, reemplazar el bloque de
//  `window.open(...)` por un `fetch("/api/contacto", { ... })`
//  (email transaccional) o por la futura reserva online, y
//  mostrar un estado de éxito/error en pantalla.
// ============================================================

const inputClass =
  "w-full bg-transparent border-0 border-b-2 border-primary p-2 font-body-md text-primary placeholder:text-on-surface-variant/60 focus:outline-none focus:border-secondary transition-colors";
const labelClass = "font-label-caps text-label-caps text-primary block mb-2";

export default function ContactoForm() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    vehiculo: "",
    consulta: "",
  });

  const update =
    (campo: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [campo]: e.target.value }));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Validación básica de requeridos (refuerza el `required` del navegador).
    if (
      !form.nombre.trim() ||
      !form.telefono.trim() ||
      !form.vehiculo.trim() ||
      !form.consulta.trim()
    ) {
      return;
    }

    const mensaje = [
      `Hola ${SITE.NOMBRE} 👋 Tengo una consulta.`,
      `Nombre: ${form.nombre}`,
      `Teléfono: ${form.telefono}`,
      `Vehículo: ${form.vehiculo}`,
      `Consulta: ${form.consulta}`,
    ].join("\n");

    // 🔌 FUTURO: sustituir por fetch al backend de email / reserva online.
    window.open(waLink(mensaje), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre *
          </label>
          <input
            id="nombre"
            type="text"
            required
            value={form.nombre}
            onChange={update("nombre")}
            placeholder="Ej. Juan Pérez"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="telefono" className={labelClass}>
            Teléfono *
          </label>
          <input
            id="telefono"
            type="tel"
            required
            value={form.telefono}
            onChange={update("telefono")}
            placeholder="+54 9 341 ..."
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="vehiculo" className={labelClass}>
          Vehículo (marca / modelo) *
        </label>
        <input
          id="vehiculo"
          type="text"
          required
          value={form.vehiculo}
          onChange={update("vehiculo")}
          placeholder="Ej. VW Golf 2018"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="consulta" className={labelClass}>
          Consulta *
        </label>
        <textarea
          id="consulta"
          required
          value={form.consulta}
          onChange={update("consulta")}
          placeholder="Contanos qué le pasa a tu auto..."
          className={`${inputClass} h-32 resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-secondary text-white font-label-caps text-label-caps py-6 uppercase skew-button hover:bg-primary transition-colors flex justify-center items-center gap-4"
      >
        Enviar
        <span className="material-symbols-outlined" aria-hidden="true">send</span>
      </button>

      <p className="font-technical-data text-technical-data text-on-surface-variant">
        Al enviar se abre WhatsApp con tus datos cargados para iniciar la
        conversación.
      </p>
    </form>
  );
}
