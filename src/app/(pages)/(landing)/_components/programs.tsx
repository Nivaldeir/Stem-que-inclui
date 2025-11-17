import { Code, Laptop, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
  
const Programs = () => {
  const programs = [
    {
      icon: Code,
      title: "Programação Inclusiva",
      description: "Cursos de programação adaptados com tecnologias assistivas e metodologias acessíveis para todos os níveis.",
    },
    {
      icon: Laptop,
      title: "Laboratórios Acessíveis",
      description: "Ambientes de aprendizado equipados com tecnologias adaptativas para experimentação em ciência e tecnologia.",
    },
    {
      icon: Rocket,
      title: "Mentoria e Networking",
      description: "Conexão com profissionais da área STEM e oportunidades de desenvolvimento de carreira em tecnologia.",
    },
  ];

  return (
    <section id="programas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nossos Programas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma variedade de programas projetados para empoderar pessoas com deficiência na área de STEM
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <img
              src={"/programs-education.jpg"}
              alt="Students with disabilities learning programming"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {program.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
