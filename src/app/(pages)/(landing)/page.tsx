"use client";
import { useRef, useState } from "react";
import { toast } from "sonner";
import About from "./_components/about";
import Hero from "./_components/hero";
import Programs from "./_components/programs";
import Impact from "./_components/impact";
import Volunteers from "./_components/volunteers";
import Contact from "./_components/contact";
import Navigation from "./_components/navigation";
import Footer from "./_components/footer";



export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Volunteers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
