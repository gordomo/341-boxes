import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ============================================================
  //  REDIRECCIONES 301 (permanentes)
  //  ------------------------------------------------------------
  //  El sitio pasó de 6 páginas a 1 landing única. Las rutas
  //  viejas ahora apuntan a su sección (ancla) dentro de "/".
  //  Esto mantiene vivos los links externos / indexados.
  //  /pedir-turno NO se redirige: sigue siendo página aparte.
  // ============================================================
  async redirects() {
    return [
      { source: "/servicios", destination: "/#servicios", permanent: true },
      { source: "/nosotros", destination: "/#nosotros", permanent: true },
      { source: "/contacto", destination: "/#contacto", permanent: true },
    ];
  },
};

export default nextConfig;
