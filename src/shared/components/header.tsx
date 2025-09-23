"use client";
import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header 
      className={`w-full py-2 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 relative flex items-center gap-4">
            <Image src="/logo.png" alt="Stem que inclui" fill className="object-contain" />
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground font-medium hover:text-primary transition-colors duration-200"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("oportunities")}
              className="text-foreground font-medium hover:text-primary transition-colors duration-200"
            >
              Oportunidades
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground font-medium hover:text-primary transition-colors duration-200"
            >
              Contato
            </button>
          </div>
        </div>
        <div>
          <Button variant="outline">Login</Button>
        </div>
      </div>
    </header>
  )
};