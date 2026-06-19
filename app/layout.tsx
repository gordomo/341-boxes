import type { Metadata } from "next";
import { Anton, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  SITE,
  SITE_URL,
  SITE_TITLE_DEFAULT,
  SITE_DESCRIPTION,
  OG_IMAGE_PATH,
} from "@/lib/site-config";

// Títulos / display
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

// Texto / body
const hankenGrotesk = Hanken_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

// Datos técnicos / labels
const jetBrainsMono = JetBrains_Mono({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE_DEFAULT,
    template: `%s | ${SITE.NOMBRE}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE.NOMBRE,
  keywords: [
    "taller mecánico",
    "mecánica integral",
    "Rosario",
    "341 Boxes",
    "service",
    "diagnóstico computarizado",
    "frenos",
    "neumáticos",
  ],
  openGraph: {
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE.NOMBRE,
    locale: "es_AR",
    type: "website",
    images: [
      { url: OG_IMAGE_PATH, width: 1200, height: 630, alt: SITE_TITLE_DEFAULT },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${hankenGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* Íconos Material Symbols usados en los mockups.
            Es una fuente de ÍCONOS (no de texto), por eso se carga por <link>
            y no con next/font. La regla no-page-custom-font apunta al modelo
            viejo de pages/_document y no aplica al App Router. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body-md overflow-x-hidden">
        <Navbar />
        {/* Compensa la altura de la navbar fija (logo + py-4 ≈ 72px) */}
        <main className="flex flex-col flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
