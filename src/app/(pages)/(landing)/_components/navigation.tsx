"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Ir para o topo"
          >
            <Image
              src="/logo.png"
              alt="STEM Que Inclui Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
              priority
            />
            <span className="text-xl md:text-2xl font-bold text-primary hidden sm:block">
              STEM Que Inclui
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("programas")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Programas
            </button>
            <button
              onClick={() => scrollToSection("impacto")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Impacto
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
            <Button variant="default" onClick={() => scrollToSection("contato")}>
              Apoie Nossa Causa
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("programas")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Programas
              </button>
              <button
                onClick={() => scrollToSection("impacto")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Impacto
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button variant="default" onClick={() => scrollToSection("contato")} className="w-full">
                Apoie Nossa Causa
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
