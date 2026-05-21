import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contacto | 341 BOXES" };

export default function ContactoPage() {
  return (
    <section className="flex flex-1 flex-col justify-center px-margin-mobile md:px-margin-desktop py-section-gap">
      <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
        Contacto
      </h1>
      <div className="h-1 w-24 bg-secondary mt-4" />
    </section>
  );
}
