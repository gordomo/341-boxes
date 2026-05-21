import type { Metadata } from "next";
import { Anton, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  title: "341 Boxes",
  description: "Taller mecánico 341 Boxes — Rosario, Argentina",
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
        {/* Íconos Material Symbols usados en los mockups */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body-md">
        <Navbar />
        {/* Compensa la altura de la navbar fija (logo + py-4 ≈ 72px) */}
        <main className="flex flex-col flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
