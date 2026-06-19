import { ImageResponse } from "next/og";

// ============================================================
//  FAVICON DE MARCA (generado por código)
//  Monograma "341" blanco sobre fondo rojo de marca.
//  Reemplaza al favicon por defecto de Next.
// ============================================================

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#bb0400",
          color: "#ffffff",
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: -1,
          fontFamily: "sans-serif",
        }}
      >
        341
      </div>
    ),
    { ...size },
  );
}
