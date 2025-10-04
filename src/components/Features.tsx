import { Users, Package, KanbanSquare, Palette, Printer, Clock, TrendingUp, Wallet, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Users,
    title: "Gestão de Clientes",
    description: "Cadastro automático via IA com múltiplos endereços salvos",
    available: true
  },
  {
    icon: Package,
    title: "Gestão de Produtos",
    description: "Cadastro com foto/descrição, extras opcionais/obrigatórios e categorias personalizadas",
    available: true
  },
  {
    icon: KanbanSquare,
    title: "Gestão de Pedidos",
    description: "Tela Kanban intuitiva com notificações automáticas ao cliente",
    available: true
  },
  {
    icon: Palette,
    title: "Personalização",
    description: "Customize as cores da sua loja e crie sua identidade visual única",
    available: true
  },
  {
    icon: Printer,
    title: "Impressão de Cupom",
    description: "Imprima comprovantes profissionais de forma rápida",
    available: true
  },
  {
    icon: Clock,
    title: "Horários de Atendimento",
    description: "Configure quando sua loja está aberta para receber pedidos",
    available: true
  },
  {
    icon: TrendingUp,
    title: "Relatórios Avançados",
    description: "Acompanhe o desempenho do seu negócio com análises detalhadas",
    available: false
  },
  {
    icon: Wallet,
    title: "Fluxo de Caixa",
    description: "Controle financeiro completo do seu estabelecimento",
    available: false
  },
  {
    icon: Bell,
    title: "Falar com Atendente",
    description: "Permita que clientes solicitem atendimento humano quando necessário",
    available: false
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Funcionalidades para o seu Estabelecimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para gerenciar seu restaurante em um só lugar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className={`group hover:shadow-medium transition-all duration-300 ${
                  !feature.available ? 'opacity-75' : ''
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    {!feature.available && (
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        Em breve
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
