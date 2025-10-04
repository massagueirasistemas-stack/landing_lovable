import { MessageCircle, Link, Sparkles, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Cliente chama no WhatsApp",
    description: "Seu cliente entra em contato pelo WhatsApp do restaurante"
  },
  {
    number: "2",
    icon: Link,
    title: "Recebe um link com os produtos",
    description: "Enviamos automaticamente um link personalizado com seu cardápio"
  },
  {
    number: "3",
    icon: Sparkles,
    title: "IA identifica nome e telefone",
    description: "Nossa inteligência artificial reconhece os dados do cliente automaticamente"
  },
  {
    number: "4",
    icon: ShoppingCart,
    title: "Finaliza o pedido facilmente",
    description: "Cliente escolhe itens e finaliza com poucos cliques"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simples, rápido e automatizado. Veja como é fácil receber pedidos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="relative border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-medium animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 pb-6">
                  {/* Número do passo */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-medium">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Ícone */}
                  <div className="mb-4 mt-4">
                    <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
