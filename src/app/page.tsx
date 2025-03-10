import { HydrateClient } from "~/trpc/server";

import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/Hero";
import { Features } from "./_components/Features";
import { Contact } from "./_components/Contact";
import { FAQ } from "./_components/FAQ";
import { Footer } from "./_components/Footer";
import { Gallery } from "./_components/Gallery";
import { Pricing } from "./_components/Pricing";
import { Testimonials } from "./_components/Testimonials";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="flex flex-col items-center min-h-screen w-full">
        <Navbar />
        <Hero />
        <section id="features" className="bg-gray-100 py-16"><Features /></section>
        <section id="gallery" className="py-16"><Gallery /></section>
        <section id="testimonials" className="py-16"><Testimonials /></section>
        <section id="pricing" className="py-16"><Pricing /></section>
        <section id="faq" className="py-16"><FAQ /></section>
        <section id="contact" className="py-16"><Contact /></section>
        <Footer />
      </div>
    </HydrateClient>
  );
}
