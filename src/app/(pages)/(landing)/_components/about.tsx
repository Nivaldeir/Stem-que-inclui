import { Heart, Users, Target, Lightbulb, Eye } from "lucide-react";
import { Card, CardContent } from "@/shared/components/ui/card";

const About = () => {
  const mission = {
    icon: Target,
    title: "Missão",
    description: "Democratizar os campos de STEM (Ciência, Tecnologia, Engenharia e Matemática) para pessoas com deficiência, oferecendo suporte desde a inscrição em oportunidades acadêmicas até a ocupação de posições de liderança dentro da organização.",
  };

  const vision = {
    icon: Eye,
    title: "Visão",
    description: "Garantir que novas gerações de estudantes do ensino médio e superior que desejam seguir carreiras em STEM não sintam medo de participar de programas acadêmicos por causa de suas deficiências.",
  };

  const values = [
    {
      icon: Heart,
      title: "Inclusão",
      description: "Acreditamos que a curiosidade intelectual deve ser cultivada independentemente das barreiras que a deficiência possa trazer. Por meio da inclusão, buscamos combater essas adversidades.",
    },
    {
      icon: Users,
      title: "Diversidade",
      description: "Através da diversidade, garantimos que todos tenham a oportunidade de explorar, aprender e inovar em STEM.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Trabalhamos para criar mudanças reais e duradouras nas vidas de pessoas com deficiência através da educação STEM.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        {/* História */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Nossa História
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              O STEM Que Inclui teve sua primeira atividade em setembro de 2024, após um estudante do ensino médio criar fortes relações interpessoais com estudantes e pessoas com deficiência — incluindo surdos e cadeirantes.
            </p>
            <p className="text-lg">
              Em meio a muitas conversas, o tema oportunidades acadêmicas surgiu diversas vezes. O estudante sempre compartilhava o quanto olimpíadas e outras atividades extracurriculares em STEM haviam sido uma de suas maiores paixões, por oferecerem oportunidades de conhecer mentes brilhantes e alimentar sua curiosidade intelectual ao longo do ensino médio.
            </p>
            <p className="text-lg">
              No entanto, esses colegas com deficiência revelaram que nunca haviam sentido o mesmo, pois raramente as olimpíadas nacionais apresentavam algum tipo de acessibilidade. Contaram que, muitas vezes, nem tentavam se inscrever, com medo de se decepcionar ao ler editais inteiros sem encontrar nada que atendesse às suas necessidades. Além disso, mencionaram sentir-se fora de contexto, já que muitas pessoas ainda possuem uma imagem limitada de como um estudante de ciência, tecnologia, engenharia e matemática deveria ser — o famoso &quot;nerd&quot; tradicional.
            </p>
            <p className="text-lg">
              Motivado por essas conversas, o estudante começou a ler editais e enviar e-mails para organizadores de olimpíadas nacionais, questionando sobre medidas de acessibilidade.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Desse movimento nasceu o STEM Que Inclui — uma organização sem fins lucrativos que busca fornecer informações acessíveis e democratizar o acesso de pessoas com deficiência às oportunidades em STEM, reunindo e engajando voluntários de todo o Brasil e de outros dois países para lutar pelo mesmo objetivo.
            </p>
            <p className="text-lg">
              Hoje, promovemos oportunidades acadêmicas — como pesquisas, olimpíadas e projetos científicos — com informações claras sobre as acessibilidades disponíveis. Ao mesmo tempo, auxiliamos olimpíadas pequenas e de médio porte a implementar recursos acessíveis em seus processos, promovendo um diálogo que busca o melhor para todos.
            </p>
          </div>
        </div>

        {/* Missão e Visão */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <Card className="border-2 border-primary hover:shadow-lg transition-all duration-300 animate-fade-in">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {mission.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {mission.description}
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {vision.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {vision.description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Valores */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground animate-fade-in">
            Nossos Valores
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Acreditamos que a curiosidade intelectual deve ser cultivada independentemente das barreiras que a deficiência possa trazer. Por meio da inclusão e da diversidade, buscamos combater essas adversidades e garantir que todos tenham a oportunidade de explorar, aprender e inovar em STEM.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
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

export default About;

