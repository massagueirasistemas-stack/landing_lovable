import { MessageCircle, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Logo e descrição */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-3">
              Massagueira Food
            </h3>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Automatize seu restaurante e receba pedidos pelo WhatsApp e Instagram de forma simples e rápida.
            </p>
          </div>

          {/* Contatos */}
          <div className="text-center md:text-right space-y-4">
            <h4 className="text-lg font-semibold text-secondary-foreground mb-4">
              Entre em Contato
            </h4>
            
            <a 
              href="https://wa.me/5511998454270" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-end gap-3 text-secondary-foreground/90 hover:text-primary transition-colors group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">+55 11 99845-4270</span>
            </a>

            <a 
              href="https://instagram.com/massagueirasistemas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-end gap-3 text-secondary-foreground/90 hover:text-primary transition-colors group"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">@massagueirasistemas</span>
            </a>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/70 text-sm">
            © {new Date().getFullYear()} Massagueira Food. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
