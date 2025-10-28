import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { trackCTAClick } from "@/lib/analytics";

const Hero = () => {
  const scrollToForm = () => {
    trackCTAClick('hero');
    const formSection = document.getElementById('cadastro');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Conteúdo */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Massagueira Food
              <span className="block mt-2">Seu Restaurante Automatizado</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
              Receba pedidos pelo WhatsApp e Instagram de forma rápida, sem precisar de aplicativo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300 text-lg font-semibold group"
              >
                Quero Testar Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="Sistema Massagueira Food em ação - gestão de pedidos em smartphone e laptop"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decoração */}
            <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-accent/30 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-4 -left-4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
