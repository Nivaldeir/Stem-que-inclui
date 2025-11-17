"use client";

import { useCallback } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

const Hero = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-inclusive-stem.jpg"
          alt="Diverse people with disabilities working on STEM projects"
          fill
          priority
          className="object-cover scale-105 transition-transform duration-700 ease-out"
          sizes="100vw"
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-[5] overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white py-32">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <Image
            src="/logo.png"
            alt="STEM Que Inclui Logo"
            width={120}
            height={120}
            className="mx-auto w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium">Transformando vidas através da inclusão</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-8 animate-fade-in leading-tight" style={{ animationDelay: "0.2s" }}>
          <span className="block bg-gradient-to-r from-white via-accent-foreground to-white bg-clip-text text-transparent drop-shadow-2xl">
            STEM Que Inclui
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in text-white/95 drop-shadow-lg" style={{ animationDelay: "0.3s" }}>
          Combatendo estereótipos e quebrando barreiras para criar{" "}
          <span className="font-semibold text-accent">oportunidades acadêmicas inclusivas</span> na área de STEM
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            onClick={() => scrollToSection("sobre")}
            className="group text-lg px-8 py-6 h-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            aria-label="Ir para a seção sobre nossa missão"
          >
            Conheça Nossa Missão
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contato")}
            className="text-lg px-8 py-6 h-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            aria-label="Ir para a seção de contato"
          >
            Faça Parte
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer"
        onClick={() => scrollToSection("sobre")}
        aria-label="Rolar para baixo"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            scrollToSection("sobre");
          }
        }}
      >
        <div className="w-7 h-12 border-2 border-white/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/5 hover:border-white/90 transition-colors">
          <div className="w-1.5 h-4 bg-white/80 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
