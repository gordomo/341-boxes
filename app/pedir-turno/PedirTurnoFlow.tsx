"use client";

import { useState } from "react";
import { SITE, waLink, slotsParaDia, estaAbierto } from "@/lib/site-config";

// ============================================================
//  PEDIR TURNO — flujo de 4 pasos (cliente)
//  ------------------------------------------------------------
//  ⚠️ MAQUETA DE PRESENTACIÓN.
//  La reserva online real todavía NO existe (fase futura). El
//  calendario y los horarios son una VISTA PREVIA visual: el
//  turno se confirma por WhatsApp. Todo lo que se "elige" acá
//  sólo arma el mensaje de WhatsApp; no reserva nada.
// ============================================================

// ---------- Datos del flujo ----------

// Alineado con los 6 servicios reales de la landing + "Service
// completo" (especial) + "Otro". El id "service-completo" tiene una
// regla aparte (ver toggleServicio).
const SERVICIO_COMPLETO = "service-completo";

const SERVICIOS = [
  {
    id: SERVICIO_COMPLETO,
    icon: "build_circle",
    titulo: "Service completo",
    nota: "Incluye todo el mantenimiento",
  },
  { id: "inyeccion", icon: "local_gas_station", titulo: "Inyección" },
  { id: "lubricantes", icon: "oil_barrel", titulo: "Lubricantes (aceite)" },
  { id: "baterias", icon: "battery_charging_full", titulo: "Baterías" },
  { id: "frenos", icon: "album", titulo: "Frenos" },
  { id: "refrigeracion", icon: "thermostat", titulo: "Refrigeración" },
  { id: "tren-delantero", icon: "tire_repair", titulo: "Tren delantero" },
  { id: "otro", icon: "build", titulo: "Otro" },
] as const;

const PASOS = [
  { n: 1, label: "Servicio" },
  { n: 2, label: "Fecha y hora" },
  { n: 3, label: "Tu auto" },
  { n: 4, label: "Confirmar" },
] as const;

const DIAS_SEMANA = ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"];
const NOMBRE_MES = [
  "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
  "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE",
];
const DIAS_CORTO = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];

// ---------- Estilos compartidos (coherentes con el sistema) ----------

const inputClass =
  "w-full bg-transparent border-0 border-b-2 border-primary p-2 font-body-md text-primary placeholder:text-on-surface-variant/60 focus:outline-none focus:border-secondary transition-colors";
const labelClass = "font-label-caps text-label-caps text-primary block mb-2";

// ---------- Helpers de fecha ----------

/** Lunes = 0 ... Domingo = 6 (para una grilla que arranca en LUN). */
function offsetLunes(jsDay: number) {
  return (jsDay + 6) % 7;
}

/** Formatea una fecha elegida como "VIE 22/05/2026". */
function formatFecha(d: Date) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${DIAS_CORTO[d.getDay()]} ${dd}/${mm}/${d.getFullYear()}`;
}

export default function PedirTurnoFlow() {
  const hoy = new Date();
  // Normalizamos "hoy" a medianoche para comparar días sin horas.
  const hoy0 = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());

  const [paso, setPaso] = useState(1);

  // Selecciones del flujo.
  const [servicios, setServicios] = useState<string[]>([]); // multi-select
  const [fecha, setFecha] = useState<Date | null>(null);
  const [hora, setHora] = useState<string | null>(null);

  // Mes visible del calendario (maqueta navegable).
  const [vista, setVista] = useState({ y: hoy.getFullYear(), m: hoy.getMonth() });

  // Datos del vehículo / contacto.
  const [form, setForm] = useState({
    nombre: "",
    whatsapp: "",
    vehiculo: "",
    comentario: "",
  });

  const updateForm =
    (campo: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [campo]: e.target.value }));

  // ---------- Selección de servicios (con regla "Service completo") ----------
  const serviceCompletoSel = servicios.includes(SERVICIO_COMPLETO);

  function toggleServicio(id: string) {
    if (id === SERVICIO_COMPLETO) {
      // Tildar "Service completo" deja solo eso; destildarlo limpia todo.
      setServicios((prev) => (prev.includes(SERVICIO_COMPLETO) ? [] : [SERVICIO_COMPLETO]));
      return;
    }
    // El resto sólo se puede tocar si "Service completo" NO está tildado
    // (sus tarjetas quedan deshabilitadas, pero reforzamos por las dudas).
    if (serviceCompletoSel) return;
    setServicios((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  // Títulos de lo elegido, en el orden canónico de SERVICIOS.
  const serviciosTitulos = SERVICIOS.filter((s) => servicios.includes(s.id)).map(
    (s) => s.titulo,
  );
  const serviciosTexto = serviciosTitulos.join(", ");

  // Slots de horario disponibles para el día elegido (auto desde site-config).
  const slots = fecha ? slotsParaDia(fecha) : [];

  // ---------- Validación mínima por paso ----------
  const puedeAvanzar =
    (paso === 1 && servicios.length >= 1) ||
    (paso === 2 && !!fecha && !!hora) ||
    (paso === 3 &&
      form.nombre.trim() !== "" &&
      form.whatsapp.trim() !== "" &&
      form.vehiculo.trim() !== "");

  function avanzar() {
    if (paso < 4 && puedeAvanzar) {
      setPaso((p) => p + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  function retroceder() {
    if (paso > 1) {
      setPaso((p) => p - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // ---------- Texto de día/hora tentativos para resumen y WhatsApp ----------
  const fechaHoraTexto =
    fecha && hora ? `${formatFecha(fecha)} a las ${hora} hs` : "A coordinar";

  // ---------- Mensaje de WhatsApp (arma TODO lo elegido) ----------
  const mensajeWhatsApp = [
    `Hola ${SITE.NOMBRE} 👋 Quiero pedir un turno.`,
    `Servicios: ${serviciosTexto || "-"}`,
    `Día/hora tentativos: ${fechaHoraTexto}`,
    `Auto: ${form.vehiculo || "-"}`,
    `Nombre: ${form.nombre || "-"}`,
    form.comentario.trim() ? `Comentario: ${form.comentario.trim()}` : null,
    `¿Me confirman disponibilidad?`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  // ---------- Construcción del mes visible ----------
  const primerDia = new Date(vista.y, vista.m, 1);
  const diasEnMes = new Date(vista.y, vista.m + 1, 0).getDate();
  const huecosInicio = offsetLunes(primerDia.getDay());

  function mesAnterior() {
    setVista((v) => (v.m === 0 ? { y: v.y - 1, m: 11 } : { ...v, m: v.m - 1 }));
  }
  function mesSiguiente() {
    setVista((v) => (v.m === 11 ? { y: v.y + 1, m: 0 } : { ...v, m: v.m + 1 }));
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* ============================================================
          STEPPER (estilo dashboard, paso activo en rojo)
          ============================================================ */}
      <ol className="grid grid-cols-4 gap-2 md:gap-4 mb-12">
        {PASOS.map(({ n, label }) => {
          const activo = n === paso;
          const completado = n < paso;
          return (
            <li key={n} className="flex flex-col gap-2">
              <div
                className={`h-1.5 w-full transition-colors ${
                  activo || completado ? "bg-secondary" : "bg-asfalto/30"
                }`}
              />
              <div className="flex items-center gap-2">
                <span
                  className={`font-technical-data text-[11px] md:text-technical-data ${
                    activo
                      ? "text-secondary"
                      : completado
                        ? "text-primary"
                        : "text-on-surface-variant/60"
                  }`}
                >
                  {completado ? "✓" : `0${n}`}
                </span>
                <span
                  className={`hidden sm:block font-technical-data text-[11px] md:text-technical-data uppercase truncate ${
                    activo ? "text-primary" : "text-on-surface-variant/60"
                  }`}
                >
                  {label}
                </span>
              </div>
            </li>
          );
        })}
      </ol>

      {/* ============================================================
          PASO 1 — SERVICIO (multi-select)
          ============================================================ */}
      {paso === 1 && (
        <section>
          <h2 className="font-headline-md text-headline-md text-primary uppercase border-l-4 border-secondary pl-4 mb-2">
            ¿Qué necesita tu auto?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 pl-5">
            Podés elegir varios servicios.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {SERVICIOS.map((s) => {
              const elegido = servicios.includes(s.id);
              const deshabilitado = serviceCompletoSel && s.id !== SERVICIO_COMPLETO;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => toggleServicio(s.id)}
                  disabled={deshabilitado}
                  aria-pressed={elegido}
                  className={`group text-left border-2 p-6 transition-all bg-white ${
                    elegido
                      ? "border-secondary"
                      : "border-primary hover:-translate-y-1"
                  } ${
                    deshabilitado
                      ? "opacity-40 cursor-not-allowed hover:translate-y-0"
                      : ""
                  }`}
                >
                  <div className="flex justify-between items-start mb-10">
                    <span
                      aria-hidden="true"
                      className={`material-symbols-outlined text-4xl ${
                        elegido ? "text-secondary" : "text-primary"
                      }`}
                    >
                      {s.icon}
                    </span>
                    {/* Indicador tipo checkbox */}
                    <span
                      aria-hidden="true"
                      className={`material-symbols-outlined text-2xl transition-opacity ${
                        elegido ? "text-secondary opacity-100" : "opacity-25"
                      }`}
                    >
                      {elegido ? "check_box" : "check_box_outline_blank"}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary uppercase leading-tight">
                    {s.titulo}
                  </h3>
                  {"nota" in s && s.nota && (
                    <p className="font-technical-data text-[11px] text-on-surface-variant uppercase tracking-widest mt-2">
                      {s.nota}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* ============================================================
          PASO 2 — FECHA Y HORA (VISTA PREVIA / MAQUETA)
          ============================================================ */}
      {paso === 2 && (
        <section>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 className="font-headline-md text-headline-md text-primary uppercase border-l-4 border-secondary pl-4">
              Elegí día y hora
            </h2>
            <span className="inline-flex items-center gap-2 font-technical-data text-[11px] uppercase tracking-widest text-secondary border border-secondary/50 px-3 py-1">
              <span className="material-symbols-outlined text-base" aria-hidden="true">visibility</span>
              Vista previa — coordinamos el horario final por WhatsApp
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Calendario */}
            <div className="lg:col-span-7 border-2 border-primary p-5 md:p-6 bg-white">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-label-caps text-label-caps text-primary">
                  {NOMBRE_MES[vista.m]} {vista.y}
                </h3>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={mesAnterior}
                    aria-label="Mes anterior"
                    className="material-symbols-outlined border border-primary p-1 hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    chevron_left
                  </button>
                  <button
                    type="button"
                    onClick={mesSiguiente}
                    aria-label="Mes siguiente"
                    className="material-symbols-outlined border border-primary p-1 hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    chevron_right
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 md:gap-2 text-center font-technical-data text-[10px] mb-2 text-on-surface-variant">
                {DIAS_SEMANA.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 md:gap-2 text-center font-technical-data">
                {/* Huecos antes del día 1 */}
                {Array.from({ length: huecosInicio }).map((_, i) => (
                  <span key={`hueco-${i}`} />
                ))}

                {/* Días del mes */}
                {Array.from({ length: diasEnMes }).map((_, i) => {
                  const dia = i + 1;
                  const fechaCelda = new Date(vista.y, vista.m, dia);
                  const pasado = fechaCelda < hoy0;
                  const cerrado = !estaAbierto(fechaCelda);
                  const deshabilitado = pasado || cerrado;
                  const seleccionado =
                    fecha &&
                    fecha.getFullYear() === vista.y &&
                    fecha.getMonth() === vista.m &&
                    fecha.getDate() === dia;

                  return (
                    <button
                      key={dia}
                      type="button"
                      disabled={deshabilitado}
                      title={
                        cerrado && !pasado ? "Cerrado" : undefined
                      }
                      onClick={() => {
                        setFecha(fechaCelda);
                        setHora(null); // los slots dependen del día elegido
                      }}
                      className={`aspect-square flex items-center justify-center border transition-colors ${
                        seleccionado
                          ? "bg-secondary text-white border-secondary"
                          : deshabilitado
                            ? "border-surface-container text-on-surface-variant/30 cursor-not-allowed line-through decoration-1"
                            : "border-primary text-primary hover:bg-primary hover:text-on-primary"
                      }`}
                    >
                      {dia}
                    </button>
                  );
                })}
              </div>

              <p className="font-technical-data text-[11px] text-on-surface-variant mt-4">
                Los días cerrados aparecen tachados y no se pueden elegir.
              </p>
            </div>

            {/* Horarios (slots generados automáticamente desde site-config) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-carbon text-white p-6 flex-1">
                <p className="font-technical-data text-technical-data text-plata mb-4 uppercase">
                  {fecha ? `Horarios — ${formatFecha(fecha)}` : "Horarios"}
                </p>

                {!fecha ? (
                  <p className="font-technical-data text-technical-data text-plata/70">
                    Elegí un día para ver los horarios disponibles.
                  </p>
                ) : slots.length === 0 ? (
                  <p className="font-technical-data text-technical-data text-plata/70">
                    Ese día no hay horarios disponibles.
                  </p>
                ) : (
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-2">
                    {slots.map((h) => {
                      const elegido = hora === h;
                      return (
                        <button
                          key={h}
                          type="button"
                          onClick={() => setHora(h)}
                          className={`py-2.5 font-technical-data text-technical-data border transition-colors ${
                            elegido
                              ? "bg-secondary border-secondary text-white"
                              : "border-asfalto text-white hover:border-secondary"
                          }`}
                        >
                          {h}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <p className="font-technical-data text-[11px] text-on-surface-variant">
                * Día y hora son tentativos. El turno se confirma por WhatsApp.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PASO 3 — DATOS DEL VEHÍCULO
          ============================================================ */}
      {paso === 3 && (
        <section className="max-w-2xl mx-auto">
          <h2 className="font-headline-md text-headline-md text-primary uppercase border-l-4 border-secondary pl-4 mb-8">
            Datos del vehículo
          </h2>
          {/* No es un form que reserva: sólo junta datos para el mensaje. */}
          <div className="space-y-8">
            <div>
              <label htmlFor="nombre" className={labelClass}>
                Nombre *
              </label>
              <input
                id="nombre"
                type="text"
                value={form.nombre}
                onChange={updateForm("nombre")}
                placeholder="Ej. Juan Pérez"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className={labelClass}>
                WhatsApp *
              </label>
              <input
                id="whatsapp"
                type="tel"
                value={form.whatsapp}
                onChange={updateForm("whatsapp")}
                placeholder="+54 9 341 ..."
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="vehiculo" className={labelClass}>
                Vehículo (marca / modelo / año) *
              </label>
              <input
                id="vehiculo"
                type="text"
                value={form.vehiculo}
                onChange={updateForm("vehiculo")}
                placeholder="Ej. VW Golf 2018"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="comentario" className={labelClass}>
                Comentario (opcional)
              </label>
              <textarea
                id="comentario"
                value={form.comentario}
                onChange={updateForm("comentario")}
                placeholder="Contanos brevemente qué le pasa al auto..."
                className={`${inputClass} h-28 resize-none`}
              />
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PASO 4 — CONFIRMACIÓN (ficha de boxes + WhatsApp)
          ============================================================ */}
      {paso === 4 && (
        <section className="max-w-2xl mx-auto">
          <h2 className="font-headline-md text-headline-md text-primary uppercase border-l-4 border-secondary pl-4 mb-8">
            Revisá tu turno
          </h2>

          {/* Ficha tipo "box" */}
          <div className="border-2 border-primary technical-border bg-white p-8 mb-8">
            <div className="flex justify-between items-center mb-8">
              <span className="font-headline-md text-headline-md text-primary uppercase">
                Ficha de turno
              </span>
              <span className="font-technical-data text-technical-data text-on-surface-variant uppercase bg-plata/20 px-2 py-1">
                Tentativo
              </span>
            </div>

            <dl className="space-y-6">
              {/* Servicios: lista si hay varios, texto si es uno */}
              <div className="flex flex-col gap-1 border-b border-plata/40 pb-4">
                <dt className="font-technical-data text-[10px] text-on-surface-variant uppercase tracking-widest">
                  {serviciosTitulos.length > 1 ? "Servicios" : "Servicio"}
                </dt>
                <dd className="font-body-lg font-bold text-primary">
                  {serviciosTitulos.length > 1 ? (
                    <ul className="list-disc list-inside space-y-0.5">
                      {serviciosTitulos.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  ) : (
                    serviciosTitulos[0] ?? "-"
                  )}
                </dd>
              </div>

              {[
                { label: "Día / hora tentativos", valor: fechaHoraTexto },
                { label: "Auto", valor: form.vehiculo || "-" },
                { label: "Nombre", valor: form.nombre || "-" },
                { label: "WhatsApp", valor: form.whatsapp || "-" },
                ...(form.comentario.trim()
                  ? [{ label: "Comentario", valor: form.comentario.trim() }]
                  : []),
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 border-b border-plata/40 pb-4 last:border-0 last:pb-0"
                >
                  <dt className="font-technical-data text-[10px] text-on-surface-variant uppercase tracking-widest">
                    {item.label}
                  </dt>
                  <dd className="font-body-lg font-bold text-primary">
                    {item.valor}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <a
            href={waLink(mensajeWhatsApp)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-secondary text-white font-label-caps text-label-caps py-6 uppercase skew-button hover:bg-primary transition-colors flex justify-center items-center gap-4"
          >
            Confirmar por WhatsApp
            <span className="material-symbols-outlined" aria-hidden="true">chat</span>
          </a>
          <p className="font-technical-data text-technical-data text-on-surface-variant mt-4 text-center">
            Te vamos a confirmar el turno por WhatsApp.
          </p>
        </section>
      )}

      {/* ============================================================
          NAVEGACIÓN ATRÁS / SIGUIENTE (pasos 1–3)
          ============================================================ */}
      {paso < 4 && (
        <div className="flex items-center justify-between gap-4 mt-12 pt-8 border-t border-plata/40">
          <button
            type="button"
            onClick={retroceder}
            disabled={paso === 1}
            className="font-label-caps text-label-caps uppercase px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-primary"
          >
            Atrás
          </button>
          <button
            type="button"
            onClick={avanzar}
            disabled={!puedeAvanzar}
            className="font-label-caps text-label-caps uppercase px-10 py-3 bg-primary text-on-primary skew-button hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-primary"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}
