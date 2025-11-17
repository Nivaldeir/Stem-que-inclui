"use client";

import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Heart, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "stemqueinclui@outlook.com",
      link: "mailto:stemqueinclui@outlook.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(15) 99654-1043",
      link: "tel:+5515996541043",
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP - Brasil",
      link: "#",
    },
  ];

  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData);
      setLoading(true);

      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      formRef.current?.reset();
      toast.success("Mensagem enviada com sucesso!");

    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast.error("Erro ao enviar mensagem, tente novamente mais tarde");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Faça Parte da Mudança
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Junte-se a nós na missão de tornar a educação STEM verdadeiramente inclusiva
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className="bg-accent-gradient text-accent-foreground border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Como Apoiar</h3>
                </div>
                <p className="mb-6 opacity-95">
                  Existem várias formas de apoiar nossa causa: seja voluntário, faça uma doação, ou participe de nossos eventos.
                </p>
              </CardContent>
            </Card>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="space-y-6 animate-fade-in">
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Entre em Contato
                </h3>
                <p className="text-muted-foreground mb-6">
                  Envie sua mensagem, dúvida ou sugestão. Estamos aqui para ajudar!
                </p>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="Assunto da mensagem"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Sua mensagem aqui..."
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="default" 
                    size="lg" 
                    className="w-full group"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
