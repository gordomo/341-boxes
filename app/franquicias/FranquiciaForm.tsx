"use client";

import { useState } from "react";
import { SITE, waLink } from "@/lib/site-config";

// Estilo compartido de los inputs (línea inferior, foco rojo).
const inputClass =
  "w-full bg-transparent border-0 border-b-2 border-primary p-2 font-body-md text-primary placeholder:text-on-surface-variant/60 focus:outline-none focus:border-secondary transition-colors";

const labelClass = "font-label-caps text-label-caps text-primary block mb-2";

export default function FranquiciaForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    mensaje: "",
  });

  const update =
    (campo: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [campo]: e.target.value }));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Validación básica: el navegador ya exige los campos `required`,
    // pero reforzamos por si acaso.
    if (!form.nombre || !form.email || !form.telefono || !form.ciudad) return;

    const mensaje = [
      `Hola ${SITE.NOMBRE}, me interesa la franquicia (sumar mi propio box).`,
      "",
      `Nombre: ${form.nombre}`,
      `Email: ${form.email}`,
      `Tel/WhatsApp: ${form.telefono}`,
      `Ciudad de interés: ${form.ciudad}`,
      form.mensaje ? `Mensaje: ${form.mensaje}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.open(waLink(mensaje), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre completo *
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
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="juan@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div>
          <label htmlFor="telefono" className={labelClass}>
            Teléfono / WhatsApp *
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
        <div>
          <label htmlFor="ciudad" className={labelClass}>
            Ciudad de interés *
          </label>
          <input
            id="ciudad"
            type="text"
            required
            value={form.ciudad}
            onChange={update("ciudad")}
            placeholder="Ciudad, provincia"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className={labelClass}>
          Mensaje
        </label>
        <textarea
          id="mensaje"
          value={form.mensaje}
          onChange={update("mensaje")}
          placeholder="Contanos brevemente tu interés..."
          className={`${inputClass} h-32 resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-secondary text-white font-label-caps text-label-caps py-6 uppercase skew-button hover:bg-primary transition-colors flex justify-center items-center gap-4"
      >
        Enviar consulta
        <span className="material-symbols-outlined">send</span>
      </button>

      <p className="font-technical-data text-technical-data text-on-surface-variant">
        Al enviar se abre WhatsApp con tus datos cargados para iniciar la
        conversación.
      </p>
    </form>
  );
}
