// Google Analytics 4 - Funções de rastreamento de eventos

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

/**
 * Função genérica para disparar eventos personalizados no GA4
 */
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

/**
 * Rastreia cliques em CTAs (Call to Action)
 * @param location - Localização do CTA (hero, pricing, etc)
 */
export const trackCTAClick = (location: string) => {
  trackEvent('cta_click', {
    location,
  });
};

/**
 * Rastreia quando o usuário inicia o preenchimento do formulário
 * @param formName - Nome do formulário
 */
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_start', {
    form_name: formName,
  });
};

/**
 * Rastreia quando o formulário é enviado com sucesso
 * @param formName - Nome do formulário
 */
export const trackFormSuccess = (formName: string) => {
  // Evento padrão do GA4 para geração de leads
  trackEvent('generate_lead', {
    form_name: formName,
    currency: 'BRL',
    value: 49.99, // Valor do plano mensal
  });
};

/**
 * Rastreia cliques em links de redes sociais
 * @param platform - Plataforma social (whatsapp, instagram, etc)
 */
export const trackSocialClick = (platform: string) => {
  trackEvent('social_click', {
    platform,
  });
};

/**
 * Rastreia visualização do cupom de desconto
 */
export const trackCouponView = () => {
  trackEvent('coupon_view', {
    coupon_code: 'Massa03',
    discount_type: '3_meses_gratis',
  });
};
