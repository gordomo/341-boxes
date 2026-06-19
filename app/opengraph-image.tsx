import { ImageResponse } from "next/og";

// ============================================================
//  IMAGEN OPEN GRAPH (generada por código)
//  ------------------------------------------------------------
//  Tarjeta que se ve al compartir el link por WhatsApp/redes.
//  Marca sobre fondo oscuro con acento rojo. 1200x630 (estándar).
//  Aplica a todo el sitio (archivo en la raíz de /app).
// ============================================================

export const alt =
  "341 BOXES — Taller de mecánica integral en Rosario";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "sans-serif",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Barra de acento roja */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 16,
            background: "#bb0400",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 8,
            color: "#bb0400",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Taller mecánico · Rosario
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 140,
            fontWeight: 900,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          341 BOXES
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#c8c8cc",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          Mecánica integral. Trabajo claro, autos confiables.
        </div>
      </div>
    ),
    { ...size },
  );
}
