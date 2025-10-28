import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { trackCTAClick, trackCouponView } from "@/lib/analytics";

const benefits = [
  "Pedidos ilimitados",
  "Gestão completa de clientes",
  "Cardápio personalizado",
  "Notificações automáticas",
  "Painel Kanban intuitivo",
  "Suporte prioritário"
];

const Pricing = () => {
  useEffect(() => {
    trackCouponView();
  }, []);

  const scrollToForm = () => {
    trackCTAClick('pricing');
    const formSection = document.getElementById('cadastro');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <Badge className="mb-4 bg-accent text-accent-foreground text-sm font-semibold px-4 py-1.5">
              ⚡ Promoção por Tempo Limitado
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
              Oferta Exclusiva
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              Automatize seu restaurante com o melhor custo-benefício do mercado
            </p>
          </div>

          <Card className="border-2 border-primary shadow-glow animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                {/* Preço */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="text-2xl text-muted-foreground line-through">
                    R$ 120,00
                  </span>
                  <div>
                    <span className="text-5xl md:text-6xl font-bold text-primary">
                      R$ 49,99
                    </span>
                    <span className="text-xl text-muted-foreground">/mês</span>
                  </div>
                </div>

                {/* Cupom */}
                <div className="bg-accent/20 border-2 border-accent rounded-lg p-6 mb-8">
                  <p className="text-sm text-muted-foreground mb-2">
                    Use o cupom especial
                  </p>
                  <div className="bg-card border-2 border-dashed border-primary rounded-lg p-4 inline-block">
                    <code className="text-2xl md:text-3xl font-bold text-primary">
                      Massa03
                    </code>
                  </div>
                  <p className="text-lg font-semibold text-foreground mt-3">
                    e ganhe <span className="text-primary">3 MESES GRÁTIS</span>
                  </p>
                </div>

                {/* Benefícios */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button 
                  onClick={scrollToForm}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-4 px-8 rounded-lg shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Cadastrar e Ganhar Desconto
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
