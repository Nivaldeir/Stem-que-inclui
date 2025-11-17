import Image from "next/image";
import { Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="STEM Que Inclui Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-2xl font-bold">STEM Que Inclui</h3>
            </div>
            <p className="opacity-90">
              Quebrando barreiras e criando oportunidades inclusivas na educação STEM.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="#sobre" className="hover:underline">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#programas" className="hover:underline">
                  Programas
                </a>
              </li>
              <li>
                <a href="#impacto" className="hover:underline">
                  Impacto
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:underline">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 opacity-90">
              <li>
                <a 
                  href="mailto:stemqueinclui@outlook.com" 
                  className="flex items-center gap-2 hover:underline transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  stemqueinclui@outlook.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5515996541043" 
                  className="flex items-center gap-2 hover:underline transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (15) 99654-1043
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="opacity-90 flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 fill-current" /> para um futuro mais inclusivo
          </p>
          <p className="mt-2 text-sm opacity-75">
            © 2024 STEM Que Inclui. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
