import { Card, CardContent } from "@/shared/components/ui/card";

const Impact = () => {
  const stats = [
    { number: "500+", label: "Estudantes Impactados" },
    { number: "50+", label: "Workshops Realizados" },
    { number: "20+", label: "Parcerias Ativas" },
    { number: "95%", label: "Taxa de Satisfação" },
  ];

  return (
    <section id="impacto" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nosso Impacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformando vidas através da educação inclusiva em STEM
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center border-2 hover:border-secondary transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-l-4 border-l-accent animate-fade-in">
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-muted-foreground">
                  &quot;O STEM Que Inclui mudou minha vida. Pela primeira vez, senti que pertencia ao mundo da tecnologia e que minhas capacidades eram mais importantes que minhas limitações.&quot;
                </blockquote>
                <p className="mt-4 font-semibold text-foreground">— Maria Silva, Estudante</p>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 lg:order-2 animate-slide-in-left">
            <img
              src={"/impact-diversity.jpg"}
              alt="Students with disabilities working on science projects"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
