import Image from "next/image";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Users } from "lucide-react";

interface Volunteer {
  name: string;
  photo: string;
  team: string;
  city: string;
  state: string;
}

const Volunteers = () => {
  // Dados de exemplo - você pode substituir por dados reais ou buscar de uma API
  const volunteers: Volunteer[] = [
    {
      name: "Nivaldeir Silva",
      photo: "/nivaldeir.png",
      team: "Tecnologia",
      city: "São Paulo",
      state: "SP",
    },
    {
      name: "Jhoyce Helen",
      photo: "/jhoyce.jpg",
      team: "Tecnologia / Educação",
      city: "São Paulo",
      state: "SP",
    },
    {
      name: "Pedro Costa",
      photo: "/volunteer-placeholder.jpg",
      team: "Comunicação",
      city: "Belo Horizonte",
      state: "MG",
    },
    {
      name: "Ana Oliveira",
      photo: "/volunteer-placeholder.jpg",
      team: "Tecnologia",
      city: "Curitiba",
      state: "PR",
    },
    {
      name: "Carlos Souza",
      photo: "/volunteer-placeholder.jpg",
      team: "Educação",
      city: "Porto Alegre",
      state: "RS",
    },
    {
      name: "Juliana Lima",
      photo: "/volunteer-placeholder.jpg",
      team: "Comunicação",
      city: "Brasília",
      state: "DF",
    },
  ];

  return (
    <section id="voluntarios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nossos Voluntários
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça a equipe dedicada que torna possível o nosso trabalho em todo o Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteers.map((volunteer, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors bg-primary/10 flex items-center justify-center">
                  {volunteer.photo && volunteer.photo !== "/volunteer-placeholder.jpg" ? (
                    <Image
                      src={volunteer.photo}
                      alt={volunteer.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 128px, 128px"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-primary">
                      {volunteer.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {volunteer.name}
                </h3>
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-medium text-primary">
                    {volunteer.team}
                  </p>
                  <p className="text-sm">
                    {volunteer.city}, {volunteer.state}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteers;

